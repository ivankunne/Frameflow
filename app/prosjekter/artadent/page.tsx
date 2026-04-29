import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import ProjectPageTemplate from '@/components/ProjectPageTemplate'
import { getProject } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Artadent – Webdesign for tannlege i Bergen',
  description: 'Frameflow lagde ny nettside og SEO-strategi for Artadent, tannlege i Bergen. Resulterte i topp 10-rangering på Google.',
  alternates: { canonical: 'https://www.frameflow.no/prosjekter/artadent' },
  openGraph: {
    title: 'Artadent – Webdesign for tannlege i Bergen',
    description: 'Frameflow lagde ny nettside og SEO-strategi for Artadent, tannlege i Bergen. Resulterte i topp 10-rangering på Google.',
    url: 'https://www.frameflow.no/prosjekter/artadent',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artadent – Webdesign for tannlege i Bergen',
    description: 'Frameflow lagde ny nettside og SEO-strategi for Artadent. Resulterte i topp 10-rangering på Google.',
  },
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Artadent – Webdesign og SEO for tannlege i Bergen',
  description: 'Ny nettside og SEO-strategi for Artadent tannlegepraksis i Bergen. Resulterte i topp 10-rangering på Google for «tannlege Bergen».',
  url: 'https://www.frameflow.no/prosjekter/artadent',
  creator: { '@id': 'https://www.frameflow.no/#organization' },
  dateCreated: '2025',
  keywords: 'Web design, SEO, tannlege Bergen, webdesign Bergen',
  locationCreated: { '@type': 'Place', name: 'Bergen, Norge' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Prosjekter', item: 'https://www.frameflow.no/prosjekter' },
    { '@type': 'ListItem', position: 3, name: 'Artadent', item: 'https://www.frameflow.no/prosjekter/artadent' },
  ],
}

export default function ArtadentPage() {
  const project = getProject('artadent')!
  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectPageTemplate project={project} />
    </>
  )
}
