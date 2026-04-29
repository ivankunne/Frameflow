import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import ProjectPageTemplate from '@/components/ProjectPageTemplate'
import { getProject } from '@/lib/data'

export const metadata: Metadata = {
  title: 'GV Rentals – Webdesign og sosiale medier',
  description: 'Frameflow leverte nettside og løpende sosiale medier innhold for GV Rentals i Marbella. Økt engasjement og booking-rate.',
  alternates: { canonical: 'https://www.frameflow.no/prosjekter/gv-rentals' },
  openGraph: {
    title: 'GV Rentals – Webdesign og sosiale medier',
    description: 'Frameflow leverte nettside og løpende sosiale medier innhold for GV Rentals i Marbella. Økt engasjement og booking-rate.',
    url: 'https://www.frameflow.no/prosjekter/gv-rentals',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GV Rentals – Webdesign og sosiale medier',
    description: 'Frameflow leverte nettside og sosiale medier for GV Rentals i Marbella. Økt engasjement og booking-rate.',
  },
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

export default function GVRentalsPage() {
  const project = getProject('gv-rentals')!
  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectPageTemplate project={project} />
    </>
  )
}
