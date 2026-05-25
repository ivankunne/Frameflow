import type { Metadata } from 'next'
import { markedsforing } from '@/lib/serviceContent'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'
import { buildAlternates, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const NO_URL = 'https://www.frameflow.no/tjenester/markedsforing'
const EN_URL = 'https://www.frameflow.no/en/services/marketing'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const m = markedsforing[lang].meta
  return {
    title: m.title,
    description: m.description,
    keywords: lang === 'en'
      ? ['marketing agency Bergen', 'digital marketing Bergen Norway', 'markedsføringsbyrå Bergen', 'Frameflow']
      : ['markedsføringsbyrå Bergen', 'digital markedsføring Bergen', 'markedsføringsbyrå', 'Frameflow'],
    alternates: buildAlternates('/tjenester/markedsforing', '/services/marketing', locale),
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Tjenester', item: 'https://www.frameflow.no/tjenester' },
    { '@type': 'ListItem', position: 3, name: 'Markedsføring', item: 'https://www.frameflow.no/tjenester/markedsforing' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Markedsføringsbyrå i Bergen – digital markedsføring',
  provider: { '@id': 'https://www.frameflow.no/#organization' },
  description: 'Helhetlig digital markedsføring for Bergen-bedrifter – webdesign, SEO, sosiale medier og branding under ett tak.',
  areaServed: { '@type': 'City', name: 'Bergen' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NOK',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'NOK', minPrice: 4500 },
  },
}

export default async function MarkedsforingPage({ params }: Props) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const c = markedsforing[lang]

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <ServicePageTemplate
        label={c.label}
        title={c.title}
        description={c.description}
        longDescription={c.longDescription}
        includes={c.includes}
        process={c.process}
        relatedServices={c.relatedServices}
        mockupType="seo"
        pricingFrom={c.pricingFrom}
        faqs={c.faqs}
      />
    </>
  )
}
