import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { projects } from '@/lib/data'
import ProsjekterClient from './ProsjekterClient'

export const metadata: Metadata = {
  title: 'Prosjekter i Bergen | Webdesign, app og branding – Frameflow',
  description: 'Se hvordan vi har hjulpet 20+ bedrifter i Bergen og internasjonalt med webdesign, app utvikling og branding. Se resultatene våre.',
  alternates: { canonical: 'https://www.frameflow.no/prosjekter' },
  openGraph: {
    title: 'Prosjekter i Bergen | Webdesign og branding – Frameflow',
    description: 'Se hvordan vi har hjulpet bedrifter i Bergen og internasjonalt med digitale løsninger som leverer resultater.',
    url: 'https://www.frameflow.no/prosjekter',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prosjekter i Bergen | Webdesign og branding – Frameflow',
    description: 'Se resultater fra 20+ prosjekter innen webdesign, app utvikling og branding.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Prosjekter', item: 'https://www.frameflow.no/prosjekter' },
  ],
}

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Prosjekter – Frameflow Bergen',
  description: 'Utvalgte prosjekter innen webdesign, app utvikling og branding levert av Frameflow for bedrifter i Bergen og internasjonalt.',
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      url: `https://www.frameflow.no/prosjekter/${project.slug}`,
      creator: { '@id': 'https://www.frameflow.no/#organization' },
      dateCreated: project.year,
      locationCreated: { '@type': 'Place', name: project.location },
      keywords: project.tags.join(', '),
    },
  })),
}

export default function ProsjekterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={portfolioSchema} />
      <ProsjekterClient />
    </>
  )
}
