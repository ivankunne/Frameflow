import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JsonLd } from '@/components/JsonLd'
import TjenesterClient from './TjenesterClient'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, SERVICES_CRUMB, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services.index' })
  const canonical = locale === 'en' ? 'https://www.frameflow.no/en/services' : 'https://www.frameflow.no/tjenester'
  const isEn = locale === 'en'
  return {
    title: t('title') + ' – Frameflow',
    description: t('description'),
    keywords: isEn
      ? ['services Bergen', 'digital services Bergen Norway', 'web design SEO branding Bergen', 'Frameflow']
      : ['tjenester Bergen', 'digitale tjenester Bergen', 'webdesign SEO branding Bergen', 'Frameflow'],
    alternates: buildAlternates('/tjenester', '/services', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title: t('title') + ' | Frameflow',
      description: t('description'),
      url: canonical,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: t('title') + ' | Frameflow' }],
    },
    twitter: { card: 'summary_large_image', title: t('title') + ' | Frameflow', description: t('description') },
  }
}

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tjenester – Frameflow Bergen',
  description: 'Digitale tjenester for bedrifter i Bergen: webdesign, SEO, AI automasjon, app utvikling, foto og videografi, sosiale medier og branding.',
  numberOfItems: 10,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Webdesign i Bergen',
        description: 'Skreddersydde nettsider med SEO innebygd fra dag én. Konverterer besøkende til kunder.',
        url: 'https://www.frameflow.no/tjenester/webdesign',
        provider: { '@id': 'https://www.frameflow.no/#organization' },
        areaServed: { '@type': 'City', name: 'Bergen' },
        offers: { '@type': 'Offer', priceCurrency: 'NOK', priceSpecification: { '@type': 'PriceSpecification', minPrice: 15000 } },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'SEO og søkemotoroptimalisering i Bergen',
        description: 'Lokal SEO og teknisk optimalisering som hjelper Bergen-bedrifter å rangere høyere på Google.',
        url: 'https://www.frameflow.no/tjenester/seo',
        provider: { '@id': 'https://www.frameflow.no/#organization' },
        areaServed: { '@type': 'City', name: 'Bergen' },
        offers: { '@type': 'Offer', priceCurrency: 'NOK', priceSpecification: { '@type': 'PriceSpecification', minPrice: 4500 } },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'App utvikling i Bergen',
        description: 'Skreddersydde mobilapper og webapplikasjoner – fra MVP klar på 2–4 uker til fullskala løsninger.',
        url: 'https://www.frameflow.no/tjenester/app-utvikling',
        provider: { '@id': 'https://www.frameflow.no/#organization' },
        areaServed: { '@type': 'City', name: 'Bergen' },
        offers: { '@type': 'Offer', priceCurrency: 'NOK', priceSpecification: { '@type': 'PriceSpecification', minPrice: 45000 } },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Markedsføringsbyrå i Bergen – digital markedsføring',
        description: 'Helhetlig digital markedsføring for Bergen-bedrifter – webdesign, SEO, sosiale medier og branding under ett tak.',
        url: 'https://www.frameflow.no/tjenester/markedsforing',
        provider: { '@id': 'https://www.frameflow.no/#organization' },
        areaServed: { '@type': 'City', name: 'Bergen' },
        offers: { '@type': 'Offer', priceCurrency: 'NOK', priceSpecification: { '@type': 'PriceSpecification', minPrice: 4500 } },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Foto og videografi i Bergen',
        description: 'Profesjonell bedriftsfoto og video for sosiale medier, nettsider og annonser.',
        url: 'https://www.frameflow.no/tjenester/foto-og-videografi',
        provider: { '@id': 'https://www.frameflow.no/#organization' },
        areaServed: { '@type': 'City', name: 'Bergen' },
        offers: { '@type': 'Offer', priceCurrency: 'NOK', priceSpecification: { '@type': 'PriceSpecification', minPrice: 4500 } },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Service',
        name: 'Sosiale medier i Bergen',
        description: 'Innholdsproduksjon, strategi og kanalforvaltning for Bergen-bedrifter på Instagram, Facebook, TikTok og LinkedIn.',
        url: 'https://www.frameflow.no/tjenester/sosiale-medier',
        provider: { '@id': 'https://www.frameflow.no/#organization' },
        areaServed: { '@type': 'City', name: 'Bergen' },
        offers: { '@type': 'Offer', priceCurrency: 'NOK', priceSpecification: { '@type': 'PriceSpecification', minPrice: 3500 } },
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'Service',
        name: 'Branding og logodesign i Bergen',
        description: 'Logodesign og grafisk profilering som gjør Bergen-bedrifter umiskjennelige.',
        url: 'https://www.frameflow.no/tjenester/branding',
        provider: { '@id': 'https://www.frameflow.no/#organization' },
        areaServed: { '@type': 'City', name: 'Bergen' },
        offers: { '@type': 'Offer', priceCurrency: 'NOK', priceSpecification: { '@type': 'PriceSpecification', minPrice: 8000 } },
      },
    },
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'Service',
        name: 'AI Automasjon for bedrifter i Bergen',
        description: 'AI-drevne automatiseringer som håndterer henvendelser, kvalifiserer leads og oppdaterer CRM automatisk – slik at Bergen-bedrifter kan bruke tiden på det som vokser virksomheten.',
        url: 'https://www.frameflow.no/tjenester/ai-automasjon',
        provider: { '@id': 'https://www.frameflow.no/#organization' },
        areaServed: { '@type': 'City', name: 'Bergen' },
        offers: { '@type': 'Offer', priceCurrency: 'NOK', priceSpecification: { '@type': 'PriceSpecification', minPrice: 8000 } },
      },
    },
    {
      '@type': 'ListItem',
      position: 9,
      item: {
        '@type': 'Service',
        name: 'Webflow-byrå i Bergen',
        description: 'Design og utvikling av raske, SEO-optimaliserte Webflow-nettsider med et CMS du enkelt oppdaterer selv.',
        url: 'https://www.frameflow.no/tjenester/webflow',
        provider: { '@id': 'https://www.frameflow.no/#organization' },
        areaServed: { '@type': 'City', name: 'Bergen' },
        offers: { '@type': 'Offer', priceCurrency: 'NOK', priceSpecification: { '@type': 'PriceSpecification', minPrice: 15000 } },
      },
    },
    {
      '@type': 'ListItem',
      position: 10,
      item: {
        '@type': 'Service',
        name: 'AI SEO og Generative Engine Optimization',
        description: 'Entitets-SEO, strukturert data og innholdsstrategi som gjør bedriften synlig og siterbar i ChatGPT, Perplexity, Gemini og Google AI Overviews.',
        url: 'https://www.frameflow.no/tjenester/ai-seo',
        provider: { '@id': 'https://www.frameflow.no/#organization' },
        areaServed: { '@type': 'City', name: 'Bergen' },
        offers: { '@type': 'Offer', priceCurrency: 'NOK', priceSpecification: { '@type': 'PriceSpecification', minPrice: 6500 } },
      },
    },
  ],
}

export default async function TjenesterPage({ params }: Props) {
  const { locale } = await params
  const breadcrumbSchema = buildBreadcrumbSchema(locale, [HOME_CRUMB, SERVICES_CRUMB])
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceListSchema} />
      <TjenesterClient />
    </>
  )
}
