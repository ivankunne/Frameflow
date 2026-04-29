import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import ProjectPageTemplate from '@/components/ProjectPageTemplate'
import { getProject } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Ho-orbit – Workflow app for teams',
  description: 'Frameflow bygde Ho-orbit, en workflow-app som samler oppgaver, chat og dokumenter på ett sted. 150+ team-medlemmer og 5000+ daglige interaksjoner.',
  alternates: { canonical: 'https://www.frameflow.no/prosjekter/ho-orbit' },
  openGraph: {
    title: 'Ho-orbit – Workflow app for teams',
    description: 'Frameflow bygde Ho-orbit, en workflow-app som samler oppgaver, chat og dokumenter på ett sted. Brukt av 150+ team-medlemmer.',
    url: 'https://www.frameflow.no/prosjekter/ho-orbit',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ho-orbit – Workflow app for teams',
    description: 'Frameflow bygde Ho-orbit, en workflow-app som samler oppgaver, chat og dokumenter på ett sted.',
  },
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Ho-orbit – Workflow app for teams',
  description: 'En intuitiv workflow-app som samler oppgaver, chat og dokumenter på ett sted. Reduserer kaos og øker fokus for teams.',
  url: 'https://www.frameflow.no/prosjekter/ho-orbit',
  creator: { '@id': 'https://www.frameflow.no/#organization' },
  dateCreated: '2025',
  keywords: 'App utvikling, React, Full-stack, Workflow, Team collaboration',
  locationCreated: { '@type': 'Place', name: 'Bergen, Norge' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Prosjekter', item: 'https://www.frameflow.no/prosjekter' },
    { '@type': 'ListItem', position: 3, name: 'Ho-orbit', item: 'https://www.frameflow.no/prosjekter/ho-orbit' },
  ],
}

export default function HoOrbitPage() {
  const project = getProject('ho-orbit')!
  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectPageTemplate project={project} />
    </>
  )
}
