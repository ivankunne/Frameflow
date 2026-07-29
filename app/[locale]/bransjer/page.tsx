import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JsonLd } from '@/components/JsonLd'
import BransjerClient from './BransjerClient'
import { industryList, industries } from '@/lib/industryContent'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, ogLocale, schemaUrl } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'industries.index' })
  const isEn = locale === 'en'
  const canonical = isEn ? 'https://www.frameflow.no/en/industries' : 'https://www.frameflow.no/bransjer'
  const title = isEn ? 'Websites by industry – Bergen' : 'Nettsider for din bransje – Bergen'
  return {
    title: `${title} | Frameflow`,
    description: t('description'),
    keywords: isEn
      ? ['website by industry Bergen', 'web design for dentists', 'web design for real estate agents', 'web design for lawyers', 'web design for restaurants', 'Frameflow']
      : ['nettside for bransje Bergen', 'nettside for tannlege', 'nettside for eiendomsmegler', 'nettside for advokat', 'nettside for restaurant', 'Frameflow'],
    alternates: buildAlternates('/bransjer', '/industries', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title: `${title} | Frameflow`,
      description: t('description'),
      url: canonical,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${title} | Frameflow` }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | Frameflow`, description: t('description') },
  }
}

export default async function BransjerPage({ params }: Props) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'

  const breadcrumbSchema = buildBreadcrumbSchema(locale, [
    HOME_CRUMB,
    { name: 'Bransjer', nameEn: 'Industries', noPath: '/bransjer', enPath: '/industries' },
  ])

  const enPathBySlug: Record<string, string> = {
    tannlege: '/industries/dentist',
    eiendomsmegler: '/industries/real-estate-agent',
    advokat: '/industries/lawyer',
    restaurant: '/industries/restaurant',
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: lang === 'en' ? 'Industries – Frameflow Bergen' : 'Bransjer – Frameflow Bergen',
    description: lang === 'en'
      ? 'Websites tailored to specific industries: dentists, real estate agents, lawyers and restaurants in Bergen.'
      : 'Nettsider skreddersydd for spesifikke bransjer: tannleger, eiendomsmeglere, advokater og restauranter i Bergen.',
    numberOfItems: industryList.length,
    itemListElement: industryList.map((item, i) => {
      const c = industries[item.slug][lang]
      return {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: c.title,
          description: c.description,
          url: schemaUrl(locale, item.href, enPathBySlug[item.slug]),
          provider: { '@id': 'https://www.frameflow.no/#organization' },
          areaServed: { '@type': 'City', name: 'Bergen' },
          offers: { '@type': 'Offer', priceCurrency: 'NOK', priceSpecification: { '@type': 'PriceSpecification', minPrice: 15000 } },
        },
      }
    }),
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />
      <BransjerClient />
    </>
  )
}
