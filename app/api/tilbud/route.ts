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
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #2172b5; margin-bottom: 24px;">Ny tilbudsforespørsel</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #818181; width: 140px;">Navn</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #171717;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #818181;">E-post</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">
              <a href="mailto:${safeEmail}" style="color: #2172b5;">${safeEmail}</a>
            </td>
          </tr>
          ${safeBedrift ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #818181;">Bedrift</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #171717;">${safeBedrift}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #818181;">Tjenester</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #171717;">${servicesText}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #818181;">Budsjett</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #171717;">${budgetText}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #818181;">Tidsplan</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #171717;">${timelineText}</td>
          </tr>
          ${safeDescription ? `
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #818181; vertical-align: top;">Beskrivelse</td>
            <td style="padding: 10px 0; color: #171717; line-height: 1.6;">${safeDescription}</td>
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
