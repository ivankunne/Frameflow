import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import ProjectPageTemplate from '@/components/ProjectPageTemplate'
import { getProject } from '@/lib/data'
import { buildAlternates, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  const canonical = isEn
    ? 'https://www.frameflow.no/en/projects/ho-orbit'
    : 'https://www.frameflow.no/prosjekter/ho-orbit'
  const title = isEn
    ? 'h-orbit – Music platform for artists | Frameflow'
    : 'h-orbit – Musikkplattform for artister | Frameflow'
  const description = isEn
    ? 'Frameflow built h-orbit, a music platform connecting artists with fans. Used by 150+ team members with 5000+ daily interactions.'
    : 'Frameflow bygde h-orbit, en musikkplattform som samler artister og fans. Brukt av 150+ team-medlemmer og 5000+ daglige interaksjoner.'
  return {
    title,
    description,
    keywords: isEn
      ? ['h-orbit', 'music platform app', 'app development Bergen', 'Frameflow']
      : ['h-orbit', 'musikkplattform', 'app utvikling Bergen', 'Frameflow'],
    alternates: buildAlternates('/prosjekter/ho-orbit', '/projects/ho-orbit', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title,
      description,
      url: canonical,
      images: [{ url: 'https://www.frameflow.no/og?title=h-orbit+%E2%80%93+Musikkplattform+for+artister&label=App+utvikling', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'h-orbit – Musikkplattform for artister',
  description: 'En musikkplattform som samler artister og fans på ett sted.',
  url: 'https://www.frameflow.no/prosjekter/ho-orbit',
  creator: { '@id': 'https://www.frameflow.no/#organization' },
  dateCreated: '2025',
  keywords: 'App utvikling, Branding, React, Full-stack, musikk, artister',
  locationCreated: { '@type': 'Place', name: 'Bergen, Norge' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Prosjekter', item: 'https://www.frameflow.no/prosjekter' },
    { '@type': 'ListItem', position: 3, name: 'h-orbit', item: 'https://www.frameflow.no/prosjekter/ho-orbit' },
  ],
}

export default async function HoOrbitPage({ params }: Props) {
  await params
  const project = getProject('ho-orbit')!
  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectPageTemplate project={project} />
    </>
  )
}
