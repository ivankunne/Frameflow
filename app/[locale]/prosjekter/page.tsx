import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JsonLd } from '@/components/JsonLd'
import { projects } from '@/lib/data'
import ProsjekterClient from './ProsjekterClient'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'projects' })
  const canonical = locale === 'en' ? 'https://www.frameflow.no/en/projects' : 'https://www.frameflow.no/prosjekter'
  const isEn = locale === 'en'
  return {
    title: t('title') + ' – Frameflow',
    description: t('description'),
    keywords: isEn
      ? ['projects Bergen', 'web design portfolio Norway', 'Frameflow case studies']
      : ['prosjekter Bergen', 'webdesign portefølje Bergen', 'Frameflow caseStudier'],
    alternates: buildAlternates('/prosjekter', '/projects', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title: t('title') + ' | Frameflow',
      description: t('description'),
      url: canonical,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: t('title') + ' | Frameflow' }],
    },
    twitter: { card: 'summary_large_image', title: t('title') + ' | Frameflow', description: t('description') },
  }
}

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Prosjekter – Frameflow Bergen',
  description: 'Utvalgte prosjekter innen webdesign, app utvikling og branding levert av Frameflow for bedrifter i Bergen og internasjonalt.',
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      '@id': `https://www.frameflow.no/prosjekter/${project.slug}`,
      name: project.title,
      description: project.description,
      url: `https://www.frameflow.no/prosjekter/${project.slug}`,
      creator: { '@id': 'https://www.frameflow.no/#organization' },
      dateCreated: project.year,
      locationCreated: { '@type': 'Place', name: project.location },
      keywords: project.tags.join(', '),
    },
  })),
}

export default async function ProsjekterPage({ params }: Props) {
  const { locale } = await params
  const breadcrumbSchema = buildBreadcrumbSchema(locale, [
    HOME_CRUMB,
    { name: 'Prosjekter', nameEn: 'Projects', noPath: '/prosjekter', enPath: '/projects' },
  ])
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={portfolioSchema} />
      <ProsjekterClient />
    </>
  )
}
