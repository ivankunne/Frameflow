import type { Metadata } from 'next'
import { aiAutomasjon } from '@/lib/serviceContent'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'
import { buildAlternates, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const m = aiAutomasjon[lang].meta
  return {
    title: m.title,
    description: m.description,
    keywords: lang === 'en'
      ? ['AI automation Bergen', 'business automation Norway', 'AI chatbot Bergen', 'workflow automation', 'Frameflow']
      : ['AI automasjon Bergen', 'bedriftsautomasjon Norge', 'AI chatbot Bergen', 'arbeidsflyt automatisering', 'Frameflow'],
    alternates: buildAlternates('/tjenester/ai-automasjon', '/services/ai-automation', locale),
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Tjenester', item: 'https://www.frameflow.no/tjenester' },
    { '@type': 'ListItem', position: 3, name: 'AI Automasjon', item: 'https://www.frameflow.no/tjenester/ai-automasjon' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automasjon for bedrifter i Bergen',
  provider: { '@id': 'https://www.frameflow.no/#organization' },
  description: 'Vi bygger AI-drevne automatiseringer som håndterer henvendelser, kvalifiserer leads og oppdaterer CRM automatisk.',
  areaServed: { '@type': 'City', name: 'Bergen' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NOK',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'NOK', minPrice: 8000 },
  },
}

export default async function AIAutomasjonPage({ params }: Props) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const c = aiAutomasjon[lang]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
        mockupType="ai"
        pricingFrom={c.pricingFrom}
        faqs={c.faqs}
      />
    </>
  )
}
