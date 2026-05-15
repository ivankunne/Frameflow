import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/JsonLd'
import ProjectPageTemplate from '@/components/ProjectPageTemplate'
import { getProject } from '@/lib/data'
import { buildAlternates, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  const canonical = isEn
    ? 'https://www.frameflow.no/en/projects/marbesa-project-94'
    : 'https://www.frameflow.no/prosjekter/marbesa-project-94'
  const title = isEn
    ? 'Marbesa Project 94 – Luxury real estate website | Frameflow'
    : 'Marbesa Project 94 – Luksus eiendomsnettside | Frameflow'
  const description = isEn
    ? 'Frameflow designed an exclusive website for the luxury real estate project Marbesa Project 94 in Marbella, Spain.'
    : 'Frameflow designet en eksklusiv nettside for luksus eiendomsprosjektet Marbesa Project 94 i Marbella, Spania.'
  return {
    title,
    description,
    keywords: isEn
      ? ['Marbesa Project 94', 'luxury real estate website Marbella', 'web design Spain', 'Frameflow']
      : ['Marbesa Project 94', 'luksus eiendom nettside Marbella', 'webdesign Spania', 'Frameflow'],
    alternates: buildAlternates('/prosjekter/marbesa-project-94', '/projects/marbesa-project-94', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title,
      description,
      url: canonical,
      images: [{ url: 'https://www.frameflow.no/og?title=Marbesa+Project+94+%E2%80%93+Luksus+eiendomsnettside&label=Branding', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
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

export default async function MarbesaPage({ params }: Props) {
  await params
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
