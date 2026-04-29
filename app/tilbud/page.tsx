import type { Metadata } from 'next'
import { JsonLd, organizationSchema } from '@/components/JsonLd'
import TilbudClient from '@/components/TilbudClient'

export const metadata: Metadata = {
  title: 'Få gratis tilbud – Frameflow markedsføringsbyrå Bergen',
  description:
    'Få et skreddersydd tilbud fra Frameflow markedsføringsbyrå i Bergen. Webdesign, foto og video, sosiale medier og branding. Svar innen 24 timer.',
  alternates: { canonical: 'https://www.frameflow.no/tilbud' },
  openGraph: {
    title: 'Be om tilbud – Frameflow Bergen',
    description: 'Få et skreddersydd tilbud fra Frameflow. Webdesign, foto og video, sosiale medier og branding. Svar innen 24 timer.',
    url: 'https://www.frameflow.no/tilbud',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Be om tilbud – Frameflow Bergen',
    description: 'Få et skreddersydd tilbud fra Frameflow. Webdesign, foto og video, sosiale medier og branding. Svar innen 24 timer.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Be om tilbud', item: 'https://www.frameflow.no/tilbud' },
  ],
}

export default function TilbudPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <TilbudClient />
    </>
  )
}
