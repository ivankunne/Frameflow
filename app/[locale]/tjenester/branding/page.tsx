import type { Metadata } from 'next'
import { branding } from '@/lib/serviceContent'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'
import { buildAlternates, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const m = branding[lang].meta
  return {
    title: m.title,
    description: m.description,
    keywords: lang === 'en'
      ? ['branding Bergen', 'logo design Bergen Norway', 'brand identity Norway', 'graphic design Bergen', 'Frameflow']
      : ['branding Bergen', 'logodesign Bergen', 'grafisk profil Bergen', 'merkevare Bergen', 'Frameflow'],
    alternates: buildAlternates('/tjenester/branding', '/services/branding', locale),
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
    { '@type': 'ListItem', position: 3, name: 'Branding', item: 'https://www.frameflow.no/tjenester/branding' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Grafisk design og logodesign i Bergen',
  provider: { '@id': 'https://www.frameflow.no/#organization' },
  description: 'Profesjonell grafisk design, logodesign og branding for bedrifter i Bergen.',
  areaServed: { '@type': 'City', name: 'Bergen' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NOK',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'NOK', minPrice: 8000 },
  },
}

export default async function BrandingPage({ params }: Props) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const c = branding[lang]

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
        mockupType="brand"
        pricingFrom={c.pricingFrom}
        faqs={c.faqs}
      />
    </>
  )
}
