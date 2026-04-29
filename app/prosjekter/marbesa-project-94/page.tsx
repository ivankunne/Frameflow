import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/JsonLd'
import ProjectPageTemplate from '@/components/ProjectPageTemplate'
import { getProject } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Marbesa Project 94 – Luksus eiendomsnettside',
  description: 'Frameflow designet en eksklusiv nettside for luksus eiendomsprosjektet Marbesa Project 94 i Marbella, Spania.',
  alternates: { canonical: 'https://www.frameflow.no/prosjekter/marbesa-project-94' },
  openGraph: {
    title: 'Marbesa Project 94 – Luksus eiendomsnettside',
    description: 'Frameflow designet en eksklusiv nettside for luksus eiendomsprosjektet Marbesa Project 94 i Marbella, Spania.',
    url: 'https://www.frameflow.no/prosjekter/marbesa-project-94',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marbesa Project 94 – Luksus eiendomsnettside',
    description: 'Frameflow designet en eksklusiv nettside for luksus eiendomsprosjektet Marbesa Project 94 i Marbella.',
  },
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Marbesa Project 94 – Luksus eiendomsnettside',
  description: 'Eksklusiv nettside for luksus eiendomsprosjektet Marbesa Project 94 i Marbella, Spania.',
  url: 'https://www.frameflow.no/prosjekter/marbesa-project-94',
  creator: { '@id': 'https://www.frameflow.no/#organization' },
  dateCreated: '2024',
  keywords: 'Web design, luksus eiendom, Marbella, webdesign Bergen',
  locationCreated: { '@type': 'Place', name: 'Marbella, Spania' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Prosjekter', item: 'https://www.frameflow.no/prosjekter' },
    { '@type': 'ListItem', position: 3, name: 'Marbesa Project 94', item: 'https://www.frameflow.no/prosjekter/marbesa-project-94' },
  ],
}

export default function MarbesaPage() {
  const project = getProject('marbesa-project-94')
  if (!project) notFound()
  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectPageTemplate project={project} />
    </>
  )
}
