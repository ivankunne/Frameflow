import { NextResponse } from 'next/server'

// ── Input constraints ──────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_NAME        = 120
const MAX_EMAIL       = 254
const MAX_COMPANY     = 200
const MAX_DESCRIPTION = 4000

// ── Allowed enum values ───────────────────────────────────────────────────────
const VALID_SERVICES: readonly string[]  = ['webdesign', 'foto-video', 'sosiale-medier', 'branding']
const VALID_BUDGETS:  readonly string[]  = ['under-10k', '10-25k', '25-50k', 'over-50k']
const VALID_TIMELINES: readonly string[] = ['asap', '1-2mnd', '3-6mnd', 'fleksibel']

// ── HTML entity escaping ───────────────────────────────────────────────────────
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
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT   = 5
const WINDOW_MS    = 60 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now   = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

// ── Human-readable labels (safe, hardcoded — never user-controlled) ───────────
const SERVICE_LABELS: Record<string, string> = {
  webdesign:       'Web design',
  'foto-video':    'Foto og video',
  'sosiale-medier':'Sosiale medier',
  branding:        'Branding',
}
const BUDGET_LABELS: Record<string, string> = {
  'under-10k': 'Under 10 000 kr',
  '10-25k':    '10 000 – 25 000 kr',
  '25-50k':    '25 000 – 50 000 kr',
  'over-50k':  'Over 50 000 kr',
}
const TIMELINE_LABELS: Record<string, string> = {
  asap:       'Så raskt som mulig',
  '1-2mnd':   '1–2 måneder',
  '3-6mnd':   '3–6 måneder',
  fleksibel:  'Fleksibel',
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
    const { navn, epost, bedrift, beskrivelse, services, budget, timeline } = body

    // ── Validate types ────────────────────────────────────────────────────────
    if (
      typeof navn !== 'string' ||
      typeof epost !== 'string' ||
      !Array.isArray(services) ||
      typeof budget !== 'string' ||
      typeof timeline !== 'string'
    ) {
      return NextResponse.json({ error: 'Ugyldig skjemadata' }, { status: 400 })
    }

    // ── Sanitise strings ──────────────────────────────────────────────────────
    const navnClean        = navn.trim()
    const epostClean       = epost.trim()
    const bedriftClean     = typeof bedrift === 'string' ? bedrift.trim() : ''
    const beskrivelseClean = typeof beskrivelse === 'string' ? beskrivelse.trim() : ''

    // ── Validate lengths ──────────────────────────────────────────────────────
    if (!navnClean || navnClean.length > MAX_NAME) {
      return NextResponse.json({ error: 'Ugyldig navn' }, { status: 400 })
    }
    if (!EMAIL_RE.test(epostClean) || epostClean.length > MAX_EMAIL) {
      return NextResponse.json({ error: 'Ugyldig e-postadresse' }, { status: 400 })
    }
    if (bedriftClean.length > MAX_COMPANY) {
      return NextResponse.json({ error: 'Bedriftsnavn er for langt' }, { status: 400 })
    }
    if (beskrivelseClean.length > MAX_DESCRIPTION) {
      return NextResponse.json({ error: 'Beskrivelsen er for lang' }, { status: 400 })
    }

    // ── Validate enums (whitelist only) ───────────────────────────────────────
    const servicesClean = (services as unknown[]).filter(
      (s): s is string => typeof s === 'string' && VALID_SERVICES.includes(s)
    )
    if (servicesClean.length === 0) {
      return NextResponse.json({ error: 'Velg minst én tjeneste' }, { status: 400 })
    }
    if (!VALID_BUDGETS.includes(budget)) {
      return NextResponse.json({ error: 'Ugyldig budsjett' }, { status: 400 })
    }
    if (!VALID_TIMELINES.includes(timeline)) {
      return NextResponse.json({ error: 'Ugyldig tidsplan' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'E-postkonfigurasjon mangler' }, { status: 500 })
    }

    // ── Build safe HTML (all user values escaped, enum values from whitelist) ─
    const safeName        = esc(navnClean)
    const safeEmail       = esc(epostClean)
    const safeBedrift     = esc(bedriftClean)
    const safeDescription = beskrivelseClean
      ? esc(beskrivelseClean).replace(/\n/g, '<br>')
      : ''

    // Labels are from our hardcoded map — safe to use directly
    const servicesText  = servicesClean.map((s) => SERVICE_LABELS[s]).join(', ')
    const budgetText    = BUDGET_LABELS[budget]
    const timelineText  = TIMELINE_LABELS[timeline]

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
                  <span style="display:inline-block;background:rgba(33,114,181,0.25);border:1px solid rgba(33,114,181,0.4);color:#7eb8e8;font-size:11px;font-weight:600;padding:4px 12px;border-radius:20px;letter-spacing:0.5px;">NY TILBUDSFORESPØRSEL</span>
                </td>
              </tr>
            </table>
            <p style="margin:24px 0 0;color:rgba(255,255,255,0.55);font-size:13px;">Fra tilbudsskjema på frameflow.no</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:40px;">

            <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#0d1f3c;">Ny tilbudsforespørsel</h1>
            <p style="margin:0 0 32px;font-size:14px;color:#6b7280;">${safeName} ønsker et tilbud fra Frameflow.</p>

            <!-- Info rows -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              <tr>
                <td style="padding:14px 20px;background:#f9fafb;border-bottom:1px solid #e5e7eb;width:120px;">
                  <span style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.6px;">Navn</span>
                </td>
                <td style="padding:14px 20px;background:#ffffff;border-bottom:1px solid #e5e7eb;">
                  <span style="font-size:14px;font-weight:600;color:#0d1f3c;">${safeName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;background:#f9fafb;border-bottom:1px solid #e5e7eb;">
                  <span style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.6px;">E-post</span>
                </td>
                <td style="padding:14px 20px;background:#ffffff;border-bottom:1px solid #e5e7eb;">
                  <a href="mailto:${safeEmail}" style="font-size:14px;font-weight:600;color:#2172b5;text-decoration:none;">${safeEmail}</a>
                </td>
              </tr>
              ${safeBedrift ? `
              <tr>
                <td style="padding:14px 20px;background:#f9fafb;border-bottom:1px solid #e5e7eb;">
                  <span style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.6px;">Bedrift</span>
                </td>
                <td style="padding:14px 20px;background:#ffffff;border-bottom:1px solid #e5e7eb;">
                  <span style="font-size:14px;font-weight:600;color:#0d1f3c;">${safeBedrift}</span>
                </td>
              </tr>` : ''}
              <tr>
                <td style="padding:14px 20px;background:#f9fafb;border-bottom:1px solid #e5e7eb;">
                  <span style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.6px;">Tjenester</span>
                </td>
                <td style="padding:14px 20px;background:#ffffff;border-bottom:1px solid #e5e7eb;">
                  <span style="font-size:14px;color:#0d1f3c;">${servicesText}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;background:#f9fafb;border-bottom:1px solid #e5e7eb;">
                  <span style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.6px;">Budsjett</span>
                </td>
                <td style="padding:14px 20px;background:#ffffff;border-bottom:1px solid #e5e7eb;">
                  <span style="display:inline-block;background:#e8f0f9;color:#2172b5;font-size:13px;font-weight:600;padding:3px 10px;border-radius:20px;">${budgetText}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;background:#f9fafb;${safeDescription ? 'border-bottom:1px solid #e5e7eb;' : ''}">
                  <span style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.6px;">Tidsplan</span>
                </td>
                <td style="padding:14px 20px;background:#ffffff;${safeDescription ? 'border-bottom:1px solid #e5e7eb;' : ''}">
                  <span style="display:inline-block;background:#f0fdf4;color:#16a34a;font-size:13px;font-weight:600;padding:3px 10px;border-radius:20px;">${timelineText}</span>
                </td>
              </tr>
              ${safeDescription ? `
              <tr>
                <td style="padding:14px 20px;background:#f9fafb;vertical-align:top;">
                  <span style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.6px;">Beskrivelse</span>
                </td>
                <td style="padding:14px 20px;background:#ffffff;">
                  <span style="font-size:14px;color:#374151;line-height:1.7;">${safeDescription}</span>
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
                  <p style="margin:0;font-size:11px;color:#d1d5db;">Sendt via tilbudsskjema</p>
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
        subject: `Ny tilbudsforespørsel fra ${navnClean}${bedriftClean ? ` (${bedriftClean})` : ''}`,
        html: emailHtml,
      }),
    })

    if (!res.ok) {
      console.error('Resend error:', res.status)
      return NextResponse.json({ error: 'Sending feilet' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Tilbud API error:', err instanceof Error ? err.message : 'unknown')
    return NextResponse.json({ error: 'Intern feil' }, { status: 500 })
  }
}
