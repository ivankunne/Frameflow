import type { Metadata } from 'next'
import { JsonLd, organizationSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Blogg – Markedsføringstips for Bergen-bedrifter',
  description:
    'Artikler og guider om SEO, webdesign, sosiale medier og branding fra Frameflow i Bergen. Praktiske tips som gir resultater for lokale bedrifter.',
  alternates: { canonical: 'https://www.frameflow.no/blogg' },
  openGraph: {
    title: 'Blogg – Frameflow Bergen',
    description:
      'Artikler og guider om SEO, webdesign, sosiale medier og branding fra Frameflow i Bergen.',
    url: 'https://www.frameflow.no/blogg',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogg – Frameflow Bergen',
    description: 'Artikler og guider om SEO, webdesign, sosiale medier og branding fra Frameflow i Bergen.',
  },
}

export default function BloggLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={organizationSchema} />
      {children}
    </>
  )
}
