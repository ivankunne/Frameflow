import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import ProsjekterClient from './ProsjekterClient'

export const metadata: Metadata = {
  title: 'Prosjekter | Frameflow – Web, Apps, Branding case studies',
  description: 'Se hvordan vi har hjulpet 20+ bedrifter i Bergen og internasjonalt med webdesign, app utvikling og branding. Se resultatene våre.',
  alternates: { canonical: 'https://www.frameflow.no/prosjekter' },
  openGraph: {
    title: 'Prosjekter | Frameflow – Bergen byrå',
    description: 'Se hvordan vi har hjulpet bedrifter i Bergen og internasjonalt med digitale løsninger som leverer resultater.',
    url: 'https://www.frameflow.no/prosjekter',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prosjekter | Frameflow – Bergen byrå',
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

export default function ProsjekterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ProsjekterClient />
    </>
  )
}
