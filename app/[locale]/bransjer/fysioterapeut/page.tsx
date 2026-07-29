import type { Metadata } from 'next'
import { fysioterapeut } from '@/lib/industryContent'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import RelatedIndustries from '@/components/RelatedIndustries'
import { JsonLd } from '@/components/JsonLd'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, INDUSTRIES_CRUMB, ogLocale, schemaLanguage } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const m = fysioterapeut[lang].meta
  return {
    title: m.title,
    description: m.description,
    keywords: lang === 'en'
      ? ['physiotherapist website Bergen', 'web design for physiotherapists', 'physiotherapy clinic website', 'Frameflow']
      : ['nettside for fysioterapeut', 'fysioterapeut nettside Bergen', 'webdesign fysioterapiklinikk', 'Frameflow'],
    alternates: buildAlternates('/bransjer/fysioterapeut', '/industries/physiotherapist', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title: m.ogTitle,
      description: m.description,
      url: m.canonical,
      images: [{ url: `https://www.frameflow.no/og?title=${encodeURIComponent(m.ogImageTitle)}&label=${encodeURIComponent(m.ogImageLabel)}`, width: 1200, height: 630, alt: m.ogAlt }],
    },
    twitter: { card: 'summary_large_image', title: m.ogTitle, description: m.description },
  }
}

export default async function FysioterapeutPage({ params }: Props) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const c = fysioterapeut[lang]

  const breadcrumbSchema = buildBreadcrumbSchema(locale, [
    HOME_CRUMB,
    INDUSTRIES_CRUMB,
    { name: 'Fysioterapeut', nameEn: 'Physiotherapist', noPath: '/bransjer/fysioterapeut', enPath: '/industries/physiotherapist' },
  ])

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.title,
    provider: { '@id': 'https://www.frameflow.no/#organization' },
    description: c.longDescription,
    areaServed: { '@type': 'City', name: 'Bergen' },
    audience: { '@type': 'Audience', audienceType: lang === 'en' ? 'Physiotherapy clinics' : 'Fysioterapiklinikker' },
    serviceType: lang === 'en' ? 'Web design for physiotherapy clinics' : 'Nettside for fysioterapiklinikker',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'NOK',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'NOK', minPrice: 15000 },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: schemaLanguage(locale),
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ServicePageTemplate
        label={c.label}
        title={c.title}
        description={c.description}
        longDescription={c.longDescription}
        includes={c.includes}
        process={c.process}
        relatedServices={c.relatedServices}
        mockupType="web"
        pricingFrom={c.pricingFrom}
        faqs={c.faqs}
        breadcrumbLabel={lang === 'en' ? 'Industries' : 'Bransjer'}
        breadcrumbHref="/bransjer"
      >
        <RelatedIndustries current="fysioterapeut" locale={locale} />
      </ServicePageTemplate>
    </>
  )
}
