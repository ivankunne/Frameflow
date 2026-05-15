import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JsonLd, organizationSchema } from '@/components/JsonLd'
import KontaktClient from '@/components/KontaktClient'
import { buildAlternates, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  const canonical = locale === 'en' ? 'https://www.frameflow.no/en/contact' : 'https://www.frameflow.no/kontakt'
  const isEn = locale === 'en'
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
    keywords: isEn
      ? ['contact Frameflow', 'web agency Bergen contact', 'book consultation Bergen']
      : ['kontakt Frameflow', 'kontakt webbyrå Bergen', 'bestill konsultasjon Bergen'],
    alternates: buildAlternates('/kontakt', '/contact', locale),
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://www.frameflow.no/kontakt' },
  ],
}

export default async function KontaktPage({ params }: Props) {
  await params
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <KontaktClient />
    </>
  )
}
