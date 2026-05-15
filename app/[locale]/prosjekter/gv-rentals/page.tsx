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
    ? 'https://www.frameflow.no/en/projects/gv-rentals'
    : 'https://www.frameflow.no/prosjekter/gv-rentals'
  const title = isEn
    ? 'GV Rentals – Web design and social media in Marbella | Frameflow'
    : 'GV Rentals – Webdesign og sosiale medier | Frameflow'
  const description = isEn
    ? 'Frameflow delivered a website and ongoing social media content for GV Rentals in Marbella. Increased engagement and booking rate.'
    : 'Frameflow leverte nettside og løpende sosiale medier innhold for GV Rentals i Marbella. Økt engasjement og booking-rate.'
  return {
    title,
    description,
    keywords: isEn
      ? ['GV Rentals', 'vacation rental website Marbella', 'social media management Marbella', 'Frameflow']
      : ['GV Rentals', 'ferieutleie nettside Marbella', 'sosiale medier Marbella', 'Frameflow'],
    alternates: buildAlternates('/prosjekter/gv-rentals', '/projects/gv-rentals', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title,
      description,
      url: canonical,
      images: [{ url: 'https://www.frameflow.no/og?title=GV+Rentals+%E2%80%93+Webdesign+og+sosiale+medier&label=Sosiale+medier', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'GV Rentals – Webdesign og sosiale medier i Marbella',
  description: 'Nettside og løpende sosiale medier-innhold for GV Rentals i Marbella. Økt engasjement og booking-rate.',
  url: 'https://www.frameflow.no/prosjekter/gv-rentals',
  creator: { '@id': 'https://www.frameflow.no/#organization' },
  dateCreated: '2025',
  keywords: 'Web design, sosiale medier, utleie Marbella, webdesign Bergen',
  locationCreated: { '@type': 'Place', name: 'Marbella, Spania' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Prosjekter', item: 'https://www.frameflow.no/prosjekter' },
    { '@type': 'ListItem', position: 3, name: 'GV Rentals', item: 'https://www.frameflow.no/prosjekter/gv-rentals' },
  ],
}

export default async function GVRentalsPage({ params }: Props) {
  await params
  const project = getProject('gv-rentals')!
  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectPageTemplate project={project} />
    </>
  )
}
