import type { Metadata } from 'next'
import { JsonLd, organizationSchema } from '@/components/JsonLd'
import KontaktClient from '@/components/KontaktClient'

export const metadata: Metadata = {
  title: 'Kontakt Frameflow – Markedsføringsbyrå i Bergen',
  description:
    'Ta kontakt med Frameflow markedsføringsbyrå i Bergen. Ring +47 99 85 37 81 eller send oss en melding. Gratis konsultasjon.',
  alternates: { canonical: 'https://www.frameflow.no/kontakt' },
  openGraph: {
    title: 'Kontakt Frameflow – Markedsføringsbyrå i Bergen',
    description: 'Ta kontakt med Frameflow i Bergen. Ring +47 99 85 37 81 eller send oss en melding. Gratis konsultasjon, svar innen 24 timer.',
    url: 'https://www.frameflow.no/kontakt',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt Frameflow – Markedsføringsbyrå i Bergen',
    description: 'Ta kontakt med Frameflow i Bergen. Ring +47 99 85 37 81 eller send oss en melding. Gratis konsultasjon, svar innen 24 timer.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://www.frameflow.no/kontakt' },
  ],
}

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <KontaktClient />
    </>
  )
}
