import type { Metadata } from 'next'
import { fotoOgVideografi } from '@/lib/serviceContent'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'
import { buildAlternates, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const m = fotoOgVideografi[lang].meta
  return {
    title: m.title,
    description: m.description,
    keywords: lang === 'en'
      ? ['business photography Bergen', 'video production Bergen Norway', 'corporate photo video', 'Frameflow']
      : ['bedriftsfoto Bergen', 'videografi Bergen', 'produktfoto Bergen', 'foto og video bedrift', 'Frameflow'],
    alternates: buildAlternates('/tjenester/foto-og-videografi', '/services/photo-video', locale),
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
    { '@type': 'ListItem', position: 3, name: 'Foto og videografi', item: 'https://www.frameflow.no/tjenester/foto-og-videografi' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Foto og videografi i Bergen',
  provider: { '@id': 'https://www.frameflow.no/#organization' },
  description: 'Profesjonell foto og videografi i Bergen for sosiale medier, nettsider og annonser.',
  areaServed: { '@type': 'City', name: 'Bergen' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NOK',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'NOK', minPrice: 4500 },
  },
}

export default async function FotoOgVideografiPage({ params }: Props) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const c = fotoOgVideografi[lang]

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
        mockupType="photo"
        pricingFrom={c.pricingFrom}
        faqs={c.faqs}
      />
    </>
  )
}
