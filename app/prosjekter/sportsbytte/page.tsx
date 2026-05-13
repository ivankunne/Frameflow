import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import ProjectPageTemplate from '@/components/ProjectPageTemplate'
import { getProject } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Sportsbytte – Webdesign og branding for norsk bytteplatform',
  description: 'Frameflow skapte ny nettside og visuell identitet for Sportsbytte, Norges plattform for kjøp, salg og bytte av brukt sportsutstyr.',
  alternates: { canonical: 'https://www.frameflow.no/prosjekter/sportsbytte' },
  openGraph: {
    title: 'Sportsbytte – Webdesign og branding for norsk bytteplatform',
    description: 'Frameflow skapte ny nettside og visuell identitet for Sportsbytte, Norges plattform for kjøp, salg og bytte av brukt sportsutstyr.',
    url: 'https://www.frameflow.no/prosjekter/sportsbytte',
    images: [{ url: 'https://www.frameflow.no/og?title=Sportsbytte+%E2%80%93+Webdesign+og+branding+for+norsk+bytteplatform&label=Web+design', width: 1200, height: 630, alt: 'Sportsbytte – Webdesign og branding for norsk bytteplatform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sportsbytte – Webdesign og branding for norsk bytteplatform',
    description: 'Frameflow skapte ny nettside og visuell identitet for Sportsbytte. Profesjonell digital tilstedeværelse for Norges sports-byttemarked.',
  },
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Sportsbytte – Webdesign og branding for norsk bytteplatform',
  description: 'Ny nettside og visuell identitet for Sportsbytte – plattformen for kjøp, salg og bytte av brukt sportsutstyr i Norge.',
  url: 'https://www.frameflow.no/prosjekter/sportsbytte',
  creator: { '@id': 'https://www.frameflow.no/#organization' },
  dateCreated: '2025',
  keywords: 'Web design, Branding, SEO, sportsbytte, brukt sportsutstyr, Norge',
  locationCreated: { '@type': 'Place', name: 'Bergen, Norge' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Prosjekter', item: 'https://www.frameflow.no/prosjekter' },
    { '@type': 'ListItem', position: 3, name: 'Sportsbytte', item: 'https://www.frameflow.no/prosjekter/sportsbytte' },
  ],
}

export default function SportsbyttePage() {
  const project = getProject('sportsbytte')!
  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectPageTemplate project={project} />
    </>
  )
}
