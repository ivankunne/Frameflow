import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import ProjectPageTemplate from '@/components/ProjectPageTemplate'
import { getProject } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Nordic Fit – Komplett branding og nettside på 2 uker',
  description: 'Frameflow leverte komplett brandingpakke og nettside for Nordic Fit treningssenter i Bergen. Fra logo til lansering på 2 uker.',
  alternates: { canonical: 'https://www.frameflow.no/prosjekter/nordic-fit' },
  openGraph: {
    title: 'Nordic Fit – Komplett branding og nettside på 2 uker',
    description: 'Frameflow leverte komplett brandingpakke og nettside for Nordic Fit treningssenter i Bergen. Fra logo til lansering på 2 uker.',
    url: 'https://www.frameflow.no/prosjekter/nordic-fit',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nordic Fit – Komplett branding og nettside på 2 uker',
    description: 'Frameflow leverte komplett brandingpakke og nettside for Nordic Fit treningssenter i Bergen. Fra logo til lansering på 2 uker.',
  },
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Nordic Fit – Komplett branding og nettside i Bergen',
  description: 'Komplett brandingpakke og nettside for Nordic Fit treningssenter i Bergen. Fra logo til lansering på 2 uker.',
  url: 'https://www.frameflow.no/prosjekter/nordic-fit',
  creator: { '@id': 'https://www.frameflow.no/#organization' },
  dateCreated: '2025',
  keywords: 'Branding, Web design, treningssenter Bergen, logo design Bergen',
  locationCreated: { '@type': 'Place', name: 'Bergen, Norge' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Prosjekter', item: 'https://www.frameflow.no/prosjekter' },
    { '@type': 'ListItem', position: 3, name: 'Nordic Fit', item: 'https://www.frameflow.no/prosjekter/nordic-fit' },
  ],
}

export default function NordicFitPage() {
  const project = getProject('nordic-fit')!
  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectPageTemplate project={project} />
    </>
  )
}
