import type { Metadata } from 'next'
import { JsonLd, organizationSchema, personSchema } from '@/components/JsonLd'
import OmOssClient from '@/components/OmOssClient'

export const metadata: Metadata = {
  title: 'Om oss – Markedsføringsbyrå og webbyrå i Bergen | Frameflow',
  description:
    'Møt Ivan Kunne og teamet bak Frameflow. Bergen-byrå med ekspertise innen webdesign, sosiale medier, foto og video og branding. Vi er et lite byrå med én kontaktperson og full ansvarlighet.',
  alternates: { canonical: 'https://www.frameflow.no/om-oss' },
  openGraph: {
    title: 'Om oss – Markedsføringsbyrå og webbyrå i Bergen | Frameflow',
    description: 'Møt Ivan Kunne og teamet bak Frameflow. Bergen-byrå for webdesign, sosiale medier, foto og branding. Én kontaktperson, full ansvarlighet.',
    url: 'https://www.frameflow.no/om-oss',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om oss – Markedsføringsbyrå og webbyrå i Bergen | Frameflow',
    description: 'Møt Ivan Kunne og teamet bak Frameflow. Bergen-byrå for webdesign, sosiale medier, foto og branding. Én kontaktperson, full ansvarlighet.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Om oss', item: 'https://www.frameflow.no/om-oss' },
  ],
}

export default function OmOssPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={personSchema} />
      <OmOssClient />
    </>
  )
}
