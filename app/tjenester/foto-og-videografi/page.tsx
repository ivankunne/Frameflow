import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Foto og videografi Bergen – Bedriftsfoto og video | Frameflow',
  description:
    'Frameflow produserer bedriftsfoto og video i Bergen for sosiale medier, nettsider og annonser. Fra 4 500 kr – levering innen 5–7 virkedager.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester/foto-og-videografi' },
  openGraph: {
    title: 'Bedriftsfoto og video i Bergen | Frameflow',
    description: 'Autentisk fotografi og videografi for sosiale medier, nettsider og markedsføring. Profesjonell produksjon i Bergen.',
    url: 'https://www.frameflow.no/tjenester/foto-og-videografi',
    images: [{ url: 'https://www.frameflow.no/og?title=Bedriftsfoto+og+video+i+Bergen&label=Foto+%26+Video', width: 1200, height: 630, alt: 'Foto og videografi Bergen – Frameflow' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bedriftsfoto og video i Bergen | Frameflow',
    description: 'Autentisk fotografi og videografi som øker engasjement. Profesjonell produksjon for alle kanaler.',
  },
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
  description: 'Profesjonell foto og videografi i Bergen. Autentisk visuelt innhold for sosiale medier, nettsider og markedsføring.',
  areaServed: { '@type': 'City', name: 'Bergen' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NOK',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'NOK',
      minPrice: 4500,
      description: 'Fra 4 500 kr eks. mva.',
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
      name: 'Hva koster bedriftsfotografering i Bergen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bedriftsfotografering fra Frameflow starter fra 4 500 kr. Prisen avhenger av antall timer, lokasjon og antall bilder som skal redigeres.' },
    },
    {
      '@type': 'Question',
      name: 'Leverer dere innhold til sosiale medier?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, vi produserer foto og video optimalisert for Instagram, TikTok, LinkedIn og andre plattformer – i riktig format og størrelse.' },
    },
    {
      '@type': 'Question',
      name: 'Hvor raskt leveres bildene etter fotografering?',
      acceptedAnswer: { '@type': 'Answer', text: 'Redigerte bilder og video leveres vanligvis innen 5–7 virkedager etter fotografering.' },
    },
    {
      '@type': 'Question',
      name: 'Kan dere kombinere foto og sosiale medier?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, vi tilbyr pakker som kombinerer innholdsproduksjon med administrasjon av sosiale medier for en sømløs løsning.' },
    },
  ],
}

export default function FotoOgVideografiPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ServicePageTemplate
        label="Tjeneste"
        title="Innhold som stopper scrollingen og selger"
        description="Vi produserer foto og video som ser profesjonelt ut, føles naturlig og forteller din historie tydelig. Autentisk visuelt innhold som fungerer på tvers av alle kanaler."
        longDescription="I 2026 er over-editerte, perfekte bilder ut. Forbrukere ønsker autentisitet. Vi fotograferer og filmer bedriften din, produktene dine og menneskene bak – på en måte som er profesjonell men ekte. Innhold som faktisk bygger tillit og engasjement."
        includes={[
          'Produkt- og bedriftsfotografering',
          'Video for sosiale medier, nettsider og annonser',
          'Instagram Reels og TikTok-videoer',
          'Behind-the-scenes og team-innhold',
          'Redigering og fargekorrigering',
          'Levering i alle nødvendige formater',
          'Rettighetsfri bruk av alt materiale',
        ]}
        process={[
          {
            step: '01',
            title: 'Briefing',
            description: 'Vi diskuterer stil, formål og hva du ønsker å formidle. Vi planlegger location, rekvisitter og innholdstype.',
          },
          {
            step: '02',
            title: 'Produksjon',
            description: 'Vi gjennomfører fotografering og filming. Naturlig, effektivt og alltid med fokus på det autentiske.',
          },
          {
            step: '03',
            title: 'Levering',
            description: 'Redigert og klart materiale leveres i avtalte formater, klart til bruk på alle kanaler.',
          },
        ]}
        relatedServices={[
          { title: 'Web design', href: '/tjenester/webdesign' },
          { title: 'Sosiale medier', href: '/tjenester/sosiale-medier' },
          { title: 'Branding', href: '/tjenester/branding' },
        ]}
        mockupType="photo"
        pricingFrom="4 500 kr"
        faqs={[
          { q: 'Hva koster bedriftsfotografering i Bergen?', a: 'Bedriftsfotografering fra Frameflow starter fra 4 500 kr. Prisen avhenger av antall timer, lokasjon og antall bilder som skal redigeres.' },
          { q: 'Leverer dere innhold til sosiale medier?', a: 'Ja, vi produserer foto og video optimalisert for Instagram, TikTok, LinkedIn og andre plattformer – i riktig format og størrelse.' },
          { q: 'Hvor raskt leveres bildene etter fotografering?', a: 'Redigerte bilder og video leveres vanligvis innen 5–7 virkedager etter fotografering.' },
          { q: 'Kan dere kombinere foto og sosiale medier?', a: 'Ja, vi tilbyr pakker som kombinerer innholdsproduksjon med administrasjon av sosiale medier for en sømløs løsning.' },
        ]}
      />
    </>
  )
}
