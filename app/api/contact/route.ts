import { NextResponse } from 'next/server'

// ── Input constraints ──────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_NAME    = 120
const MAX_EMAIL   = 254  // RFC 5321 limit
const MAX_MESSAGE = 4000

// ── HTML entity escaping — prevents injection in email HTML body ───────────────
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// ── Simple in-memory rate limiter (5 submissions per IP per hour) ─────────────
// Note: resets on cold-starts (serverless). Sufficient for a low-traffic contact form.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT   = 5
const WINDOW_MS    = 60 * 60 * 1000 // 1 hour

function isRateLimited(ip: string): boolean {
  const now  = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

// ── Route handler ──────────────────────────────────────────────────────────────
export async function POST(request: Request) {
  // Rate limiting by IP
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'For mange forespørsler. Prøv igjen om en time.' },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    const { navn, epost, melding } = body

    // ── Validate types ────────────────────────────────────────────────────────
    if (typeof navn !== 'string' || typeof epost !== 'string') {
      return NextResponse.json({ error: 'Ugyldig skjemadata' }, { status: 400 })
    }

    // ── Validate values ───────────────────────────────────────────────────────
    const navnClean = navn.trim()
    const epostClean = epost.trim()
    const meldingClean = typeof melding === 'string' ? melding.trim() : ''

    if (!navnClean || navnClean.length > MAX_NAME) {
      return NextResponse.json({ error: 'Ugyldig navn' }, { status: 400 })
    }
    if (!EMAIL_RE.test(epostClean) || epostClean.length > MAX_EMAIL) {
      return NextResponse.json({ error: 'Ugyldig e-postadresse' }, { status: 400 })
    }
    if (meldingClean.length > MAX_MESSAGE) {
      return NextResponse.json({ error: 'Meldingen er for lang' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'E-postkonfigurasjon mangler' }, { status: 500 })
    }

    // ── Build safe HTML (all user values escaped) ─────────────────────────────
    const safeName    = esc(navnClean)
    const safeEmail   = esc(epostClean)
    const safeMessage = meldingClean
      ? esc(meldingClean).replace(/\n/g, '<br>')
      : ''

    const emailHtml = `
<!DOCTYPE html>
<html lang="no">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0d1f3c;border-radius:12px 12px 0 0;padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <img src="https://www.frameflow.no/Wordmark-white.png" alt="Frameflow" height="24" style="display:block;">
                </td>
                <td align="right">
                  <span style="display:inline-block;background:rgba(33,114,181,0.25);border:1px solid rgba(33,114,181,0.4);color:#7eb8e8;font-size:11px;font-weight:600;padding:4px 12px;border-radius:20px;letter-spacing:0.5px;">NY HENVENDELSE</span>
                </td>
              </tr>
            </table>
            <p style="margin:24px 0 0;color:rgba(255,255,255,0.55);font-size:13px;">Fra kontaktskjema på frameflow.no</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:40px;">

            <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#0d1f3c;">Ny henvendelse</h1>
            <p style="margin:0 0 32px;font-size:14px;color:#6b7280;">${safeName} tok kontakt via nettsiden.</p>

            <!-- Info rows -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              <tr>
                <td style="padding:14px 20px;background:#f9fafb;border-bottom:1px solid #e5e7eb;width:110px;">
                  <span style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.6px;">Navn</span>
                </td>
                <td style="padding:14px 20px;background:#ffffff;border-bottom:1px solid #e5e7eb;">
                  <span style="font-size:14px;font-weight:600;color:#0d1f3c;">${safeName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;background:#f9fafb;${safeMessage ? 'border-bottom:1px solid #e5e7eb;' : ''}">
                  <span style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.6px;">E-post</span>
                </td>
                <td style="padding:14px 20px;background:#ffffff;${safeMessage ? 'border-bottom:1px solid #e5e7eb;' : ''}">
                  <a href="mailto:${safeEmail}" style="font-size:14px;font-weight:600;color:#2172b5;text-decoration:none;">${safeEmail}</a>
                </td>
              </tr>
              ${safeMessage ? `
              <tr>
                <td style="padding:14px 20px;background:#f9fafb;vertical-align:top;">
                  <span style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.6px;">Melding</span>
                </td>
                <td style="padding:14px 20px;background:#ffffff;">
                  <span style="font-size:14px;color:#374151;line-height:1.7;">${safeMessage}</span>
                </td>
              </tr>` : ''}
            </table>

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0" style="margin-top:28px;">
              <tr>
                <td style="background:#2172b5;border-radius:8px;">
                  <a href="mailto:${safeEmail}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">Svar ${safeName} →</a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:24px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-size:12px;color:#9ca3af;">Frameflow · Damsgårdsveien 83a, 5058 Bergen</p>
                  <p style="margin:4px 0 0;font-size:12px;color:#9ca3af;">Org.nr: 934 205 156 · <a href="https://www.frameflow.no" style="color:#2172b5;text-decoration:none;">frameflow.no</a></p>
                </td>
                <td align="right">
                  <p style="margin:0;font-size:11px;color:#d1d5db;">Sendt via kontaktskjema</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Frameflow <noreply@frameflow.no>',
        to: 'ivan@frameflow.no',
        reply_to: epostClean,
        subject: `Ny henvendelse fra ${navnClean}`,
        html: emailHtml,
      }),
    })

    if (!res.ok) {
      console.error('Resend error:', res.status)
      return NextResponse.json({ error: 'Sending feilet' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err instanceof Error ? err.message : 'unknown')
    return NextResponse.json({ error: 'Intern feil' }, { status: 500 })
  }
}
