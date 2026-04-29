import type { Metadata } from 'next'
import { JsonLd, organizationSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Om oss – Ivan Kunne & Frameflow Bergen',
  description:
    'Møt Ivan Kunne, grunnlegger av Frameflow i Bergen. Webdesign, foto og video, sosiale medier og branding – alt levert av én person.',
  alternates: { canonical: 'https://www.frameflow.no/om-oss' },
  openGraph: {
    title: 'Om oss – Frameflow markedsføringsbyrå i Bergen',
    description:
      'Møt Ivan Kunne og Frameflow. Én person, hele byrået – webdesign, foto, sosiale medier og branding for Bergen-bedrifter.',
    url: 'https://www.frameflow.no/om-oss',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om oss – Frameflow markedsføringsbyrå i Bergen',
    description: 'Møt Ivan Kunne og Frameflow. Én person, hele byrået – webdesign, foto, sosiale medier og branding for Bergen-bedrifter.',
  },
}

export default function OmOssLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={organizationSchema} />
      {children}
    </>
  )
}
