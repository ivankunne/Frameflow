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
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #2172b5; margin-bottom: 24px;">Ny henvendelse via kontaktskjema</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #818181; width: 120px;">Navn</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #171717;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #818181;">E-post</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">
              <a href="mailto:${safeEmail}" style="color: #2172b5;">${safeEmail}</a>
            </td>
          </tr>
          ${safeMessage ? `
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #818181; vertical-align: top;">Melding</td>
            <td style="padding: 10px 0; color: #171717; line-height: 1.6;">${safeMessage}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top: 32px; padding: 16px; background: #e8f0f9; border-radius: 8px; font-size: 13px; color: #2172b5;">
          Svar direkte på denne e-posten for å nå ${safeName}.
        </div>
      </div>
    `

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
