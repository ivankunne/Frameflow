import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import ProjectPageTemplate from '@/components/ProjectPageTemplate'
import { getProject } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Bergen Bakeri – Nettside og sosiale medier i Bergen',
  description: 'Frameflow lagde ny nettside og Instagram-strategi for Bergen Bakeri. Antall henvendelser doblet seg på 30 dager.',
  alternates: { canonical: 'https://www.frameflow.no/prosjekter/bergen-bakeri' },
  openGraph: {
    title: 'Bergen Bakeri – Nettside og sosiale medier i Bergen',
    description: 'Frameflow lagde ny nettside og Instagram-strategi for Bergen Bakeri. Antall henvendelser doblet seg på 30 dager.',
    url: 'https://www.frameflow.no/prosjekter/bergen-bakeri',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bergen Bakeri – Nettside og sosiale medier i Bergen',
    description: 'Frameflow lagde ny nettside og Instagram-strategi for Bergen Bakeri. Antall henvendelser doblet seg på 30 dager.',
  },
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Bergen Bakeri – Nettside og sosiale medier i Bergen',
  description: 'Ny nettside og Instagram-strategi for Bergen Bakeri. Antall henvendelser doblet seg på 30 dager.',
  url: 'https://www.frameflow.no/prosjekter/bergen-bakeri',
  creator: { '@id': 'https://www.frameflow.no/#organization' },
  dateCreated: '2025',
  keywords: 'Web design, sosiale medier, bakeri Bergen, Instagram markedsføring',
  locationCreated: { '@type': 'Place', name: 'Bergen, Norge' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Prosjekter', item: 'https://www.frameflow.no/prosjekter' },
    { '@type': 'ListItem', position: 3, name: 'Bergen Bakeri', item: 'https://www.frameflow.no/prosjekter/bergen-bakeri' },
  ],
}

export default function BergenBakeriPage() {
  const project = getProject('bergen-bakeri')!
  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectPageTemplate project={project} />
    </>
  )
}
