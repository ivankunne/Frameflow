import type { Metadata } from 'next'
import { JsonLd, organizationSchema } from '@/components/JsonLd'
import KontaktClient from '@/components/KontaktClient'

export const metadata: Metadata = {
  title: 'Book gratis samtale – Markedsføringsbyrå i Bergen',
  description:
    'Frameflow hjelper Bergen-bedrifter med webdesign, SEO og markedsføring. Book en gratis og uforpliktende samtale om ditt neste prosjekt – vi svarer innen 24 timer.',
  alternates: { canonical: 'https://www.frameflow.no/kontakt' },
  openGraph: {
    title: 'Book gratis samtale – Markedsføringsbyrå i Bergen',
    description: 'Frameflow hjelper Bergen-bedrifter med webdesign, SEO og markedsføring. Book en gratis og uforpliktende samtale om ditt neste prosjekt – vi svarer innen 24 timer.',
    url: 'https://www.frameflow.no/kontakt',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book gratis samtale – Markedsføringsbyrå i Bergen',
    description: 'Frameflow hjelper Bergen-bedrifter med webdesign, SEO og markedsføring. Book en gratis og uforpliktende samtale – vi svarer innen 24 timer.',
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
