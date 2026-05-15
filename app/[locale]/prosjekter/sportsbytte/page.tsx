import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import ProjectPageTemplate from '@/components/ProjectPageTemplate'
import { getProject } from '@/lib/data'
import { buildAlternates, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  const canonical = isEn
    ? 'https://www.frameflow.no/en/projects/sportsbytte'
    : 'https://www.frameflow.no/prosjekter/sportsbytte'
  const title = isEn
    ? 'Sportsbytte – Web design and branding for Norwegian sports marketplace | Frameflow'
    : 'Sportsbytte – Webdesign og branding for norsk bytteplatform | Frameflow'
  const description = isEn
    ? 'Frameflow created a new website and visual identity for Sportsbytte, Norway\'s platform for buying, selling and trading used sports equipment.'
    : 'Frameflow skapte ny nettside og visuell identitet for Sportsbytte, Norges plattform for kjøp, salg og bytte av brukt sportsutstyr.'
  return {
    title,
    description,
    keywords: isEn
      ? ['Sportsbytte', 'sports marketplace Norway', 'web design Norway', 'Frameflow']
      : ['Sportsbytte', 'sportsutstyr plattform', 'webdesign Norge', 'Frameflow'],
    alternates: buildAlternates('/prosjekter/sportsbytte', '/projects/sportsbytte', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title,
      description,
      url: canonical,
      images: [{ url: 'https://www.frameflow.no/og?title=Sportsbytte+%E2%80%93+Webdesign+og+branding&label=Web+design', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Sportsbytte – Webdesign og branding for norsk bytteplatform',
  description: 'Ny nettside og visuell identitet for Sportsbytte – plattformen for kjøp, salg og bytte av brukt sportsutstyr i Norge.',
  url: 'https://www.frameflow.no/prosjekter/sportsbytte',
  creator: { '@id': 'https://www.frameflow.no/#organization' },
  dateCreated: '2025',
  keywords: 'Web design, Branding, SEO, sportsbytte, brukt sportsutstyr, Norge',
  locationCreated: { '@type': 'Place', name: 'Bergen, Norge' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Prosjekter', item: 'https://www.frameflow.no/prosjekter' },
    { '@type': 'ListItem', position: 3, name: 'Sportsbytte', item: 'https://www.frameflow.no/prosjekter/sportsbytte' },
  ],
}

export default async function SportsbyttePage({ params }: Props) {
  await params
  const project = getProject('sportsbytte')!
  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectPageTemplate project={project} />
    </>
  )
}
