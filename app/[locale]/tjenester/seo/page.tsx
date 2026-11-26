import type { Metadata } from 'next'
import { seo } from '@/lib/serviceContent'
import { seoGuide } from '@/lib/seoGuideContent'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import SeoGuideSections from '@/components/SeoGuideSections'
import { JsonLd } from '@/components/JsonLd'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, SERVICES_CRUMB, ogLocale, schemaLanguage } from '@/lib/seo'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const m = seo[lang].meta
  return {
    title: m.title,
    description: m.description,
    keywords: lang === 'en'
      ? ['SEO Bergen', 'SEO agency Bergen', 'local SEO Norway', 'search engine optimisation Bergen', 'Frameflow']
      : ['SEO Bergen', 'SEO-byrå Bergen', 'søkemotoroptimalisering Bergen', 'lokal SEO Bergen', 'Frameflow'],
    alternates: buildAlternates('/tjenester/seo', '/services/seo', locale),
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

export default async function SEOPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const lang = locale === 'en' ? 'en' : 'no'
  const c = seo[lang]

  const breadcrumbSchema = buildBreadcrumbSchema(locale, [
    HOME_CRUMB,
    SERVICES_CRUMB,
    { name: 'SEO', nameEn: 'SEO', noPath: '/tjenester/seo', enPath: '/services/seo' },
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
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'NOK', minPrice: 4500 },
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
        relatedProjectSlug={c.relatedProjectSlug}
        relatedBlogSlug={c.relatedBlogSlug}
        mockupType="seo"
        pricingFrom={c.pricingFrom}
        pricingUnit={c.pricingUnit}
        pricingFactors={c.pricingFactors}
        faqs={c.faqs}
      >
        <SeoGuideSections content={seoGuide[lang]} />
      </ServicePageTemplate>
    </>
  )
}
