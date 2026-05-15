import type { Metadata } from 'next'
import { JsonLd, organizationSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Blogg om webdesign, SEO og markedsføring – Frameflow Bergen',
  description:
    'Tips og guider om webdesign, SEO, sosiale medier og digital markedsføring for bedrifter i Bergen. Oppdateres jevnlig av Frameflow.',
  alternates: { canonical: 'https://www.frameflow.no/blogg' },
  openGraph: {
    title: 'Blogg om webdesign, SEO og markedsføring – Frameflow Bergen',
    description:
      'Tips og guider om webdesign, SEO, sosiale medier og digital markedsføring for bedrifter i Bergen. Oppdateres jevnlig av Frameflow.',
    url: 'https://www.frameflow.no/blogg',
    images: [{ url: 'https://www.frameflow.no/og?title=Blogg+om+webdesign+og+markedsf%C3%B8ring&label=Markedsf%C3%B8ring', width: 1200, height: 630, alt: 'Blogg om webdesign og markedsføring – Frameflow Bergen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogg om webdesign, SEO og markedsføring – Frameflow Bergen',
    description:
      'Tips og guider om webdesign, SEO, sosiale medier og digital markedsføring for bedrifter i Bergen.',
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
