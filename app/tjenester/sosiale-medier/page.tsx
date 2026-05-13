import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Sosiale medier Bergen – Strategi og innhold | Frameflow',
  description:
    'Frameflow håndterer sosiale medier for Bergen-bedrifter. Innholdsproduksjon, strategi og kanalforvaltning på Instagram, TikTok og LinkedIn. Fra 3 500 kr/mnd.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester/sosiale-medier' },
  openGraph: {
    title: 'Sosiale medier Bergen – Strategi og innhold | Frameflow',
    description: 'Profesjonell håndtering av sosiale medier for Bergen-bedrifter. Innholdsproduksjon, strategi og kanalforvaltning. Ta kontakt i dag.',
    url: 'https://www.frameflow.no/tjenester/sosiale-medier',
    images: [{ url: 'https://www.frameflow.no/og?title=Sosiale+medier+for+Bergen-bedrifter&label=Sosiale+medier', width: 1200, height: 630, alt: 'Sosiale medier Bergen – Frameflow' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sosiale medier Bergen – Strategi og innhold | Frameflow',
    description: 'Profesjonell håndtering av sosiale medier for Bergen-bedrifter. Innholdsproduksjon, strategi og kanalforvaltning.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Tjenester', item: 'https://www.frameflow.no/tjenester' },
    { '@type': 'ListItem', position: 3, name: 'Sosiale medier', item: 'https://www.frameflow.no/tjenester/sosiale-medier' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sosiale medier i Bergen',
  provider: { '@id': 'https://www.frameflow.no/#organization' },
  description: 'Profesjonell håndtering av sosiale medier for Bergen-bedrifter. Innholdsproduksjon, strategi og kanalforvaltning.',
  areaServed: { '@type': 'City', name: 'Bergen' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NOK',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'NOK',
      minPrice: 3500,
      description: 'Fra 3 500 kr/mnd.',
    },
    eligibleRegion: { '@type': 'City', name: 'Bergen' },
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hva koster administrasjon av sosiale medier?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sosiale medier-pakker fra Frameflow starter fra 3 500 kr per måned, avhengig av antall plattformer og innholdsmengde.' },
    },
    {
      '@type': 'Question',
      name: 'Hvilke plattformer håndterer dere?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vi håndterer Instagram, Facebook, TikTok og LinkedIn – tilpasset der målgruppen din befinner seg.' },
    },
    {
      '@type': 'Question',
      name: 'Produserer dere også innhold og bilder?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, vi tilbyr kombinerte pakker der vi produserer foto og video samt håndterer publisering og kanalforvaltning.' },
    },
    {
      '@type': 'Question',
      name: 'Får vi se innholdet før det publiseres?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, vi presenterer en innholdskalender for godkjenning hver måned slik at du alltid har full kontroll.' },
    },
  ],
}

export default function SosialeMedierPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ServicePageTemplate
        label="Tjeneste"
        title="Sosiale medier som vokser, engasjerer og konverterer"
        description="Vi håndterer alt fra innholdsproduksjon til strategi og kanalforvaltning – slik at sosiale medier profilen din alltid er fersk, autentisk og profesjonell."
        longDescription="Sosiale medier er ikke lenger valgfritt. Men uten en klar strategi kaster du bort tid og penger. Vi hjelper Bergen-bedrifter med å bygge en sterk tilstedeværelse som faktisk engasjerer og konverterer – med innhold som passer hver plattform."
        includes={[
          'Innholdsstrategi og innholdskalender',
          'Foto og video-produksjon for sosiale medier',
          'Instagram, TikTok, Facebook, LinkedIn',
          'Hashtag-strategi og rekkeviddeoptimalisering',
          'Community management og kommentarsvar',
          'Månedlig analyse og rapportering',
          'Betalt annonsering (Facebook/Instagram Ads)',
        ]}
        process={[
          {
            step: '01',
            title: 'Strategi',
            description: 'Vi analyserer målgruppen din, konkurrenter og nåværende tilstedeværelse. Vi definerer mål og plattformstrategi.',
          },
          {
            step: '02',
            title: 'Innholdsproduksjon',
            description: 'Vi planlegger, produserer og publiserer innhold konsekvent. Du godkjenner alt på forhånd.',
          },
          {
            step: '03',
            title: 'Vekst og optimalisering',
            description: 'Vi analyserer hva som fungerer og tilpasser strategien løpende for maksimal vekst.',
          },
        ]}
        relatedServices={[
          { title: 'Foto og videografi', href: '/tjenester/foto-og-videografi' },
          { title: 'Branding', href: '/tjenester/branding' },
          { title: 'Web design', href: '/tjenester/webdesign' },
        ]}
        mockupType="social"
        pricingFrom="3 500 kr / mnd"
        faqs={[
          { q: 'Hva koster administrasjon av sosiale medier?', a: 'Sosiale medier-pakker fra Frameflow starter fra 3 500 kr per måned, avhengig av antall plattformer og innholdsmengde.' },
          { q: 'Hvilke plattformer håndterer dere?', a: 'Vi håndterer Instagram, Facebook, TikTok og LinkedIn – tilpasset der målgruppen din befinner seg.' },
          { q: 'Produserer dere også innhold og bilder?', a: 'Ja, vi tilbyr kombinerte pakker der vi produserer foto og video samt håndterer publisering og kanalforvaltning.' },
          { q: 'Får vi se innholdet før det publiseres?', a: 'Ja, vi presenterer en innholdskalender for godkjenning hver måned slik at du alltid har full kontroll.' },
        ]}
      />
    </>
  )
}
