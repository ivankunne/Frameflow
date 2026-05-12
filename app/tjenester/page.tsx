import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import TjenesterClient from './TjenesterClient'

export const metadata: Metadata = {
  title: 'Tjenester i Bergen | Web, SEO & Branding – Frameflow',
  description: 'Webdesign, SEO, app utvikling, foto og videografi, sosiale medier, og branding for bedrifter i Bergen. Seks tjenester som gir målbare resultater.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester' },
  openGraph: {
    title: 'Tjenester i Bergen | Frameflow',
    description: 'Webdesign, SEO, app utvikling, foto og videografi, sosiale medier, og branding for bedrifter i Bergen.',
    url: 'https://www.frameflow.no/tjenester',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tjenester i Bergen | Frameflow',
    description: 'Webdesign, SEO, app utvikling, foto og videografi, sosiale medier, og branding for bedrifter i Bergen.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Tjenester', item: 'https://www.frameflow.no/tjenester' },
  ],
}

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tjenester – Frameflow Bergen',
  description: 'Digitale tjenester for bedrifter i Bergen: webdesign, SEO, app utvikling, foto og videografi, sosiale medier og branding.',
  numberOfItems: 6,
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
      position: 5,
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
      position: 6,
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
  ],
}

export default function TjenesterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceListSchema} />
      <TjenesterClient />
    </>
  )
}
