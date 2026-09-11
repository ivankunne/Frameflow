import { blogPosts, projects } from '@/lib/data'
import { webdesign, webflow, seo, appUtvikling, fotoOgVideografi, sosialeMedier, branding, markedsforing, aiAutomasjon } from '@/lib/serviceContent'
import { aiSeo } from '@/lib/aiSeoContent'
import { industryList, industries } from '@/lib/industryContent'

export const dynamic = 'force-static'

const BASE = 'https://www.frameflow.no'

// See app/llms.txt/route.ts for why this is generated rather than a static
// file — same data sources, more detail per entry (pricing, FAQs answered,
// project results).
const SERVICES = [
  { slug: 'webdesign', content: webdesign },
  { slug: 'webflow', content: webflow },
  { slug: 'app-utvikling', content: appUtvikling },
  { slug: 'sosiale-medier', content: sosialeMedier },
  { slug: 'branding', content: branding },
  { slug: 'foto-og-videografi', content: fotoOgVideografi },
  { slug: 'markedsforing', content: markedsforing },
  { slug: 'seo', content: seo },
  { slug: 'ai-automasjon', content: aiAutomasjon },
  { slug: 'ai-seo', content: aiSeo },
] as const

function build(): string {
  const lines: string[] = []
  lines.push('# Frameflow – Markedsføringsbyrå i Bergen')
  lines.push('')
  lines.push('> Frameflow er et markedsføringsbyrå i Bergen, Norge, grunnlagt av Ivan Kunne. Vi hjelper lokale bedrifter å vokse med webdesign, app utvikling, foto & video, sosiale medier og branding – alt fra én leverandør. Ingen oppstartsgebyr, svar innen 24 timer, personlig oppfølging.')
  lines.push('')

  lines.push('## Om Frameflow')
  lines.push('')
  lines.push('Frameflow er et lite, dedikert byrå lokalisert på Damsgårdsveien 83a, 5058 Bergen. Vi betjener bedrifter i Bergen og Vestland. Org.nr: 936 600 018.')
  lines.push('')
  lines.push('Grunnlegger og daglig leder: Ivan Kunne')
  lines.push('Telefon: +47 99 85 37 81')
  lines.push('E-post: ivan@frameflow.no')
  lines.push('Instagram: https://www.instagram.com/frameflow_no/')
  lines.push('LinkedIn: https://www.linkedin.com/in/frameflow-ivan-kunne-612106398/')
  lines.push('')

  lines.push('## Tjenester')
  lines.push('')
  for (const s of SERVICES) {
    const c = s.content.no
    lines.push(`### ${c.title}`)
    lines.push(`URL: ${BASE}/tjenester/${s.slug}`)
    lines.push(`Pris: ${c.pricingFrom}`)
    lines.push(c.longDescription)
    if (c.faqs.length > 0) {
      lines.push(`Spørsmål vi svarer på: ${c.faqs.map((f) => f.q).join(' ')}`)
    }
    lines.push('')
  }

  lines.push('## Bransjer vi jobber med')
  lines.push('')
  lines.push(`URL: ${BASE}/bransjer`)
  lines.push('Nettsider og digital markedsføring skreddersydd for følgende bransjer i Bergen:')
  lines.push('')
  for (const i of industryList) {
    const c = industries[i.slug].no
    lines.push(`### ${c.title}`)
    lines.push(`URL: ${BASE}${i.href}`)
    lines.push(c.description)
    lines.push('')
  }

  lines.push('## Prosjekter')
  lines.push('')
  lines.push(`URL: ${BASE}/prosjekter`)
  lines.push('')
  for (const p of projects) {
    lines.push(`### ${p.title}`)
    lines.push(`URL: ${BASE}/prosjekter/${p.slug}`)
    lines.push(`Klient: ${p.client}`)
    lines.push(`Sted: ${p.location}`)
    lines.push(`Tjenester: ${p.tags.join(', ')}`)
    lines.push(p.fullDescription)
    if (p.results && p.results.length > 0) {
      lines.push(`Resultater: ${p.results.join('; ')}`)
    }
    lines.push('')
  }

  lines.push('## Blogg – Artikler om digital markedsføring i Bergen')
  lines.push('')
  lines.push(`URL: ${BASE}/blogg`)
  lines.push('Forfatter: Ivan Kunne, Frameflow')
  lines.push('')
  for (const post of blogPosts) {
    lines.push(`- ${post.metaTitle ?? post.title}: ${BASE}/blogg/${post.slug}`)
  }
  lines.push('')

  lines.push('## Kontakt og tilbud')
  lines.push('')
  lines.push(`- Kontaktside: ${BASE}/kontakt`)
  lines.push(`- Be om tilbud: ${BASE}/tilbud`)
  lines.push(`- Om oss: ${BASE}/om-oss`)

  return lines.join('\n') + '\n'
}

export async function GET() {
  return new Response(build(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
