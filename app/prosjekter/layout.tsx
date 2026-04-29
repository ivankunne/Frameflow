import type { Metadata } from 'next'
import { JsonLd, organizationSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Prosjekter – Se arbeidet vi har gjort for Bergen-bedrifter',
  description:
    'Se utvalgte prosjekter fra Frameflow i Bergen. Webdesign, branding og sosiale medier som har gitt kunder målbare resultater – fra tannleger til bakerier.',
  alternates: { canonical: 'https://www.frameflow.no/prosjekter' },
  openGraph: {
    title: 'Prosjekter – Frameflow Bergen',
    description: 'Utvalgte prosjekter fra Frameflow: webdesign, branding og sosiale medier for Bergen-bedrifter.',
    url: 'https://www.frameflow.no/prosjekter',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prosjekter – Frameflow Bergen',
    description: 'Utvalgte prosjekter fra Frameflow: webdesign, branding og sosiale medier for Bergen-bedrifter.',
  },
}

export default function ProsjekterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={organizationSchema} />
      {children}
    </>
  )
}
