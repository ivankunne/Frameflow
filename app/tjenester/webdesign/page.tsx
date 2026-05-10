import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Webdesign Bergen | Nettsider som konverterer – Frameflow',
  description:
    'Frameflow lager nettsider for Bergen-bedrifter som konverterer besøkende til kunder – SEO innebygd fra dag én. Ingen oppstartsgebyr, svar innen 24 timer.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester/webdesign' },
  openGraph: {
    title: 'Webdesign Bergen | Nettsider som konverterer – Frameflow',
    description: 'Frameflow lager nettsider for Bergen-bedrifter som konverterer besøkende til kunder – SEO innebygd fra dag én. Ingen oppstartsgebyr, svar innen 24 timer.',
    url: 'https://www.frameflow.no/tjenester/webdesign',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign Bergen | Nettsider som konverterer – Frameflow',
    description: 'Frameflow lager nettsider for Bergen-bedrifter som konverterer besøkende til kunder – SEO innebygd fra dag én. Ingen oppstartsgebyr, svar innen 24 timer.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Tjenester', item: 'https://www.frameflow.no/tjenester' },
    { '@type': 'ListItem', position: 3, name: 'Web design', item: 'https://www.frameflow.no/tjenester/webdesign' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Webdesign i Bergen',
  provider: { '@id': 'https://www.frameflow.no/#organization' },
  description: 'Profesjonell webdesign i Bergen med fokus på hastighet, SEO og konvertering.',
  areaServed: { '@type': 'City', name: 'Bergen' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NOK',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'NOK',
      minPrice: 15000,
      description: 'Fra 15 000 kr eks. mva.',
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
      name: 'Hva koster en nettside i Bergen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nettsider fra Frameflow starter fra 15 000 kr eks. mva. Prisen avhenger av antall sider, funksjoner og designkompleksitet. Vi gir alltid et fast tilbud uten skjulte kostnader.' },
    },
    {
      '@type': 'Question',
      name: 'Hvor lang tid tar det å lage en nettside?',
      acceptedAnswer: { '@type': 'Answer', text: 'De fleste prosjekter tar 3–6 uker fra første samtale til lansering, avhengig av størrelse og innholdsleveranse fra deg.' },
    },
    {
      '@type': 'Question',
      name: 'Er nettsiden SEO-optimalisert?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, SEO er innebygd fra dag én. Vi setter opp metadata, strukturert data, sitemap og Google Search Console som standard – uten ekstra kostnad.' },
    },
    {
      '@type': 'Question',
      name: 'Kan jeg oppdatere nettsiden selv?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, alle nettsider leveres med et brukervennlig CMS slik at du kan endre tekst, bilder og innhold uten teknisk kunnskap.' },
    },
  ],
}

export default function WebdesignPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ServicePageTemplate
        label="Tjeneste"
        title="Nettsider som rangerer og konverterer"
        description="Fra 0 til side 1 på Google – og besøkende til kunder. Vi bygger raske, konverteringsfokuserte nettsider i Bergen med SEO innebygd fra dag én."
        longDescription="En god nettside er mer enn pen design. Den skal laste raskt, rangere på Google, og guide besøkende mot handling. Hos Frameflow bygger vi nettsider i Webflow og Next.js med SEO, hastighet og konvertering innebygd fra dag én – ikke som ettertanke."
        includes={[
          'Responsivt design optimalisert for mobil, nettbrett og desktop',
          'SEO-grunnmur: metadata, strukturert data, sitemap',
          'Rask lastetid – Core Web Vitals i grønt',
          'CMS for enkel oppdatering uten utvikler',
          'Google Analytics og Search Console-oppsett',
          'Kontaktskjema og lead capture',
          'SSL og sikker hosting',
          '30 dagers support etter lansering',
        ]}
        process={[
          {
            step: '01',
            title: 'Første samtale',
            description: 'Vi starter med en gratis konsultasjon for å forstå virksomheten din, målene dine og hvem du ønsker å nå.',
          },
          {
            step: '02',
            title: 'Design og utvikling',
            description: 'Vi designer og bygger nettsiden med fokus på din merkevare, brukervennlighet og konvertering.',
          },
          {
            step: '03',
            title: 'Lansering og oppfølging',
            description: 'Vi lanserer, setter opp analytics og gir deg opplæring. Du er aldri alene etter leveranse.',
          },
        ]}
        relatedServices={[
          { title: 'Foto og videografi', href: '/tjenester/foto-og-videografi' },
          { title: 'Branding', href: '/tjenester/branding' },
          { title: 'Sosiale medier', href: '/tjenester/sosiale-medier' },
        ]}
        mockupType="web"
        pricingFrom="15 000 kr"
      />
    </>
  )
}
