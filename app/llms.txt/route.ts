import { blogPosts, projects } from '@/lib/data'
import { webdesign, webflow, seo, appUtvikling, fotoOgVideografi, sosialeMedier, branding, markedsforing, aiAutomasjon } from '@/lib/serviceContent'
import { aiSeo } from '@/lib/aiSeoContent'
import { industryList, industries } from '@/lib/industryContent'

export const dynamic = 'force-static'

const BASE = 'https://www.frameflow.no'

// Generated from the same lib/data.ts, lib/serviceContent.ts and
// lib/industryContent.ts that drive the sitemap and every service/project
// page's metadata — this is why the previous hand-written llms.txt/
// llms-full.txt went stale (still listing a removed project, missing
// newer service and blog pages) and had to be deleted: a static file
// requires someone to remember to update it every time content changes.
// A route handler can't go stale the same way.
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
  lines.push('# Frameflow')
  lines.push('')
  lines.push('> Frameflow er et markedsføringsbyrå i Bergen, Norge. Vi hjelper lokale bedrifter å vokse med webdesign, app utvikling, foto & video, sosiale medier og branding – alt under ett tak. Ingen oppstartsgebyr, svar innen 24 timer.')
  lines.push('')

  lines.push('## Tjenester')
  lines.push('')
  for (const s of SERVICES) {
    const c = s.content.no
    lines.push(`- [${c.title}](${BASE}/tjenester/${s.slug}): ${c.description} Pris: ${c.pricingFrom}.`)
  }
  lines.push('')

  lines.push('## Bransjer vi jobber med')
  lines.push('')
  lines.push(`- [Bransjer](${BASE}/bransjer): Nettsider og markedsføring tilpasset spesifikke bransjer i Bergen.`)
  for (const i of industryList) {
    const c = industries[i.slug].no
    lines.push(`- [${c.title}](${BASE}${i.href}): ${c.description}`)
  }
  lines.push('')

  lines.push('## Om oss')
  lines.push('')
  lines.push(`- [Om Frameflow](${BASE}/om-oss): Frameflow ble grunnlagt av Ivan Kunne i Bergen. Vi er et lite, dedikert byrå med fokus på målbare resultater for lokale bedrifter i Bergen og Vestland.`)
  lines.push('')

  lines.push('## Prosjekter')
  lines.push('')
  const projectNames = projects.map((p) => p.title).join(', ')
  lines.push(`- [Prosjekter](${BASE}/prosjekter): Utvalgte prosjekter vi har levert, inkludert ${projectNames}.`)
  for (const p of projects) {
    lines.push(`  - [${p.title}](${BASE}/prosjekter/${p.slug}): ${p.description}`)
  }
  lines.push('')

  lines.push('## Kontakt og tilbud')
  lines.push('')
  lines.push(`- [Kontakt](${BASE}/kontakt): Ta kontakt for en gratis konsultasjon. Telefon: +47 99 85 37 81. E-post: ivan@frameflow.no. Adresse: Damsgårdsveien 83a, 5058 Bergen.`)
  lines.push(`- [Be om tilbud](${BASE}/tilbud): Konfigurer og be om tilbud på din neste webdesign-, app- eller markedsføringspakke.`)
  lines.push('')

  lines.push('## Blogg')
  lines.push('')
  lines.push(`- [Blogg](${BASE}/blogg): Artikler om webdesign, SEO, sosiale medier, branding og digital markedsføring for Bergen-bedrifter.`)
  for (const post of blogPosts) {
    lines.push(`- [${post.metaTitle ?? post.title}](${BASE}/blogg/${post.slug})`)
  }

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
