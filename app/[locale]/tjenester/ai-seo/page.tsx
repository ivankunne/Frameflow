import type { Metadata } from 'next'
import { aiSeo } from '@/lib/aiSeoContent'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import AISeoSections from '@/components/AISeoSections'
import { JsonLd } from '@/components/JsonLd'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, SERVICES_CRUMB, ogLocale, schemaLanguage } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const m = aiSeo[lang].meta
  return {
    title: m.title,
    description: m.description,
    keywords: lang === 'en'
      ? ['AI SEO', 'Generative Engine Optimization', 'GEO agency', 'Answer Engine Optimization', 'ChatGPT SEO', 'AI search optimization Bergen', 'Frameflow']
      : ['AI SEO', 'Generative Engine Optimization', 'GEO byrå', 'entitets-SEO', 'ChatGPT SEO', 'AI-søkeoptimalisering Bergen', 'Frameflow'],
    alternates: buildAlternates('/tjenester/ai-seo', '/services/ai-seo', locale),
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

export default async function AISeoPage({ params }: Props) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const c = aiSeo[lang]

  const breadcrumbSchema = {
    ...buildBreadcrumbSchema(locale, [
      HOME_CRUMB,
      SERVICES_CRUMB,
      { name: 'AI SEO', nameEn: 'AI SEO', noPath: '/tjenester/ai-seo', enPath: '/services/ai-seo' },
    ]),
    '@id': 'https://www.frameflow.no/tjenester/ai-seo#breadcrumb',
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.frameflow.no/tjenester/ai-seo#service',
    name: c.title,
    serviceType: 'AI Search Engine Optimization',
    provider: { '@id': 'https://www.frameflow.no/#organization' },
    description: c.longDescription,
    areaServed: { '@type': 'City', name: 'Bergen' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'NOK',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'NOK', minPrice: 6500 },
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

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${c.meta.canonical}#webpage`,
    url: c.meta.canonical,
    name: c.meta.title,
    description: c.meta.description,
    inLanguage: schemaLanguage(locale),
    isPartOf: { '@id': 'https://www.frameflow.no/#website' },
    about: { '@id': 'https://www.frameflow.no/tjenester/ai-seo#service' },
    breadcrumb: { '@id': 'https://www.frameflow.no/tjenester/ai-seo#breadcrumb' },
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />
      <ServicePageTemplate
        label={c.label}
        title={c.title}
        description={c.description}
        longDescription={c.longDescription}
        includes={c.includes}
        process={c.process}
        relatedServices={c.relatedServices}
        mockupType="aiseo"
        pricingFrom={c.pricingFrom}
        faqs={c.faqs}
      >
        <AISeoSections content={c} lang={lang} />
      </ServicePageTemplate>
    </>
  )
}
