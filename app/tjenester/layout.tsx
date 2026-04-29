import type { Metadata } from 'next'
import { JsonLd, organizationSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Tjenester – Webdesign, Foto, Sosiale medier & Branding',
  description:
    'Frameflow leverer webdesign, foto og video, sosiale medier og branding for bedrifter i Bergen og Vestland. Skreddersydde løsninger som gir målbare resultater.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester' },
  openGraph: {
    title: 'Tjenester – Frameflow Bergen',
    description:
      'Webdesign, foto og video, sosiale medier og branding som gir Bergen-bedrifter en digital tilstedeværelse som konverterer.',
    url: 'https://www.frameflow.no/tjenester',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tjenester – Frameflow Bergen',
    description: 'Webdesign, foto og video, sosiale medier og branding som gir Bergen-bedrifter en digital tilstedeværelse som konverterer.',
  },
}

export default function TjenesterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={organizationSchema} />
      {children}
    </>
  )
}
