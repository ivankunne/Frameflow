import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JsonLd } from '@/components/JsonLd'
import TilbudClient from '@/components/TilbudClient'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'quote' })
  const canonical = locale === 'en' ? 'https://www.frameflow.no/en/quote' : 'https://www.frameflow.no/tilbud'
  const isEn = locale === 'en'
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
    keywords: isEn
      ? ['get a quote Bergen', 'web project quote Norway', 'Frameflow pricing']
      : ['be om tilbud Bergen', 'pris nettside Bergen', 'Frameflow tilbud'],
    alternates: buildAlternates('/tilbud', '/quote', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title: t('metaTitle'),
      description: t('metaDesc'),
      url: canonical,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: t('metaTitle') }],
    },
    twitter: { card: 'summary_large_image', title: t('metaTitle'), description: t('metaDesc') },
  }
}

export default async function TilbudPage({ params }: Props) {
  const { locale } = await params
  const breadcrumbSchema = buildBreadcrumbSchema(locale, [
    HOME_CRUMB,
    { name: 'Be om tilbud', nameEn: 'Get a quote', noPath: '/tilbud', enPath: '/quote' },
  ])
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <TilbudClient />
    </>
  )
}
