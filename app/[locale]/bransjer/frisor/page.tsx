import type { Metadata } from 'next'
import { frisor } from '@/lib/industryContent'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import RelatedIndustries from '@/components/RelatedIndustries'
import { JsonLd } from '@/components/JsonLd'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, INDUSTRIES_CRUMB, ogLocale, schemaLanguage } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const m = frisor[lang].meta
  return {
    title: m.title,
    description: m.description,
    keywords: lang === 'en'
      ? ['hairdresser website Bergen', 'web design for hairdressers', 'beauty salon website Bergen', 'Frameflow']
      : ['nettside for frisør', 'frisør nettside Bergen', 'webdesign skjønnhetssalong', 'Frameflow'],
    alternates: buildAlternates('/bransjer/frisor', '/industries/hairdresser', locale),
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

export default async function FrisorPage({ params }: Props) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const c = frisor[lang]

  const breadcrumbSchema = buildBreadcrumbSchema(locale, [
    HOME_CRUMB,
    INDUSTRIES_CRUMB,
    { name: 'Frisør', nameEn: 'Hairdresser', noPath: '/bransjer/frisor', enPath: '/industries/hairdresser' },
  ])

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.title,
    provider: { '@id': 'https://www.frameflow.no/#organization' },
    description: c.longDescription,
    areaServed: { '@type': 'City', name: 'Bergen' },
    audience: { '@type': 'Audience', audienceType: lang === 'en' ? 'Hair and beauty salons' : 'Frisør- og skjønnhetssalonger' },
    serviceType: lang === 'en' ? 'Web design for hair salons' : 'Nettside for frisørsalonger',
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
        <RelatedIndustries current="frisor" locale={locale} />
      </ServicePageTemplate>
    </>
  )
}
