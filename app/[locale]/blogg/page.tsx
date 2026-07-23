import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JsonLd } from '@/components/JsonLd'
import { blogPosts } from '@/lib/data'
import BloggClient from './BloggClient'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })
  const canonical = locale === 'en' ? 'https://www.frameflow.no/en/blog' : 'https://www.frameflow.no/blogg'
  const isEn = locale === 'en'
  return {
    title: t('title') + ' – Frameflow',
    description: t('description'),
    keywords: isEn
      ? ['web design blog Bergen', 'digital marketing tips Norway', 'SEO guide Bergen', 'Frameflow blog']
      : ['webdesign blogg Bergen', 'digital markedsføring tips', 'SEO guide Bergen', 'Frameflow blogg'],
    alternates: buildAlternates('/blogg', '/blog', locale),
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

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.frameflow.no/blogg',
  name: 'Blogg – Markedsføringstips for Bergen-bedrifter',
  description: 'Artikler og guider om SEO, webdesign, sosiale medier og branding fra Frameflow i Bergen.',
  url: 'https://www.frameflow.no/blogg',
  publisher: { '@id': 'https://www.frameflow.no/#organization' },
  inLanguage: 'nb-NO',
  numberOfItems: blogPosts.length,
}

export default async function BloggPage({ params }: Props) {
  const { locale } = await params
  const breadcrumbSchema = buildBreadcrumbSchema(locale, [
    HOME_CRUMB,
    { name: 'Blogg', nameEn: 'Blog', noPath: '/blogg', enPath: '/blog' },
  ])
  return (
    <>
      <JsonLd data={collectionPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <BloggClient />
    </>
  )
}
