import type { Metadata } from 'next'
import { webdesign } from '@/lib/serviceContent'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, SERVICES_CRUMB, ogLocale, schemaLanguage } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const NO_URL = 'https://www.frameflow.no/tjenester/webdesign'
const EN_URL = 'https://www.frameflow.no/en/services/web-design'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const m = webdesign[lang].meta
  return {
    title: m.title,
    description: m.description,
    keywords: lang === 'en'
      ? ['web design Bergen', 'web agency Bergen Norway', 'website development Bergen', 'Webflow Bergen', 'Frameflow']
      : ['webdesign Bergen', 'nettside Bergen', 'webbyrå Bergen', 'lage nettside Bergen', 'Webflow Bergen', 'Frameflow'],
    alternates: buildAlternates('/tjenester/webdesign', '/services/web-design', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title: m.ogTitle,
      description: m.description,
      url: locale === 'en' ? EN_URL : NO_URL,
      images: [{ url: `https://www.frameflow.no/og?title=${encodeURIComponent(m.ogImageTitle)}&label=${encodeURIComponent(m.ogImageLabel)}`, width: 1200, height: 630, alt: m.ogAlt }],
    },
    twitter: { card: 'summary_large_image', title: m.ogTitle, description: m.description },
  }
}

export default async function WebdesignPage({ params }: Props) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const c = webdesign[lang]

  const breadcrumbSchema = buildBreadcrumbSchema(locale, [
    HOME_CRUMB,
    SERVICES_CRUMB,
    { name: 'Webdesign', nameEn: 'Web Design', noPath: '/tjenester/webdesign', enPath: '/services/web-design' },
  ])

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.title,
    provider: { '@id': 'https://www.frameflow.no/#organization' },
    description: c.longDescription,
    areaServed: { '@type': 'City', name: 'Bergen' },
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
      />
    </>
  )
}
