import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import TjenesterClient from './TjenesterClient'

export const metadata: Metadata = {
  title: 'Tjenester | Frameflow – Web, Apps, Foto, Branding i Bergen',
  description: 'Webdesign, app utvikling, foto og videografi, sosiale medier, og branding for bedrifter i Bergen. Fem tjenester som gir målbare resultater.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester' },
  openGraph: {
    title: 'Tjenester | Frameflow – Bergen byrå',
    description: 'Webdesign, app utvikling, foto og videografi, sosiale medier, og branding for bedrifter i Bergen.',
    url: 'https://www.frameflow.no/tjenester',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tjenester | Frameflow – Bergen byrå',
    description: 'Webdesign, app utvikling, foto og videografi, sosiale medier, og branding for bedrifter i Bergen.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Tjenester', item: 'https://www.frameflow.no/tjenester' },
  ],
}

export default function TjenesterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <TjenesterClient />
    </>
  )
}
