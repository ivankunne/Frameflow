import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/JsonLd'
import ProjectPageTemplate from '@/components/ProjectPageTemplate'
import { getProject, projects } from '@/lib/data'
import { buildAlternates, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const project = getProject(slug)
  if (!project?.seo) return {}

  const s = project.seo
  const isEn = locale === 'en'
  const noPath = `/prosjekter/${slug}`
  const enPath = `/projects/${slug}`
  const canonical = isEn
    ? `https://www.frameflow.no/en${enPath}`
    : `https://www.frameflow.no${noPath}`
  const title = isEn ? s.titleEn : s.titleNo
  const description = isEn ? s.descEn : s.descNo

  return {
    title,
    description,
    keywords: isEn ? s.keywordsEn : s.keywordsNo,
    alternates: buildAlternates(noPath, enPath, locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title,
      description,
      url: canonical,
      images: [{ url: s.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const s = project.seo
  const creativeWorkSchema = s && {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `https://www.frameflow.no/prosjekter/${slug}`,
    name: s.schemaName,
    description: s.schemaDescription,
    url: `https://www.frameflow.no/prosjekter/${slug}`,
    creator: { '@id': 'https://www.frameflow.no/#organization' },
    dateCreated: s.dateCreated,
    keywords: s.schemaKeywords,
    locationCreated: { '@type': 'Place', name: s.schemaLocation },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
      { '@type': 'ListItem', position: 2, name: 'Prosjekter', item: 'https://www.frameflow.no/prosjekter' },
      { '@type': 'ListItem', position: 3, name: project.title, item: `https://www.frameflow.no/prosjekter/${slug}` },
    ],
  }

  return (
    <>
      {creativeWorkSchema && <JsonLd data={creativeWorkSchema} />}
      <JsonLd data={breadcrumbSchema} />
      <ProjectPageTemplate project={project} />
    </>
  )
}
