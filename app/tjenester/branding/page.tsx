import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Grafisk design og logodesign Bergen | Branding – Frameflow',
  description:
    'Frameflow leverer logodesign og grafisk profilering for Bergen-bedrifter. Visuell identitet som gjør deg umiskjennelig. Fra 8 000 kr – levering 2–4 uker.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester/branding' },
  openGraph: {
    title: 'Grafisk design og logodesign Bergen | Frameflow',
    description: 'Grafisk design, logodesign og branding som gjør merkevaren din umiskjennelig. Visuell identitet og guidelines for Bergen-bedrifter.',
    url: 'https://www.frameflow.no/tjenester/branding',
    images: [{ url: 'https://www.frameflow.no/og?title=Grafisk+design+og+branding+Bergen&label=Branding', width: 1200, height: 630, alt: 'Branding Bergen – Frameflow' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grafisk design og logodesign Bergen | Frameflow',
    description: 'Grafisk design, logodesign og branding som skiller merkevaren din ut. Visuell identitet og guidelines fra eksperter i Bergen.',
  },
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
  description: 'Profesjonell grafisk design, logodesign og branding for bedrifter i Bergen. Visuell identitet og brand guidelines som gjør merkevaren din umiskjennelig.',
  areaServed: { '@type': 'City', name: 'Bergen' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NOK',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'NOK',
      minPrice: 8000,
      description: 'Fra 8 000 kr eks. mva.',
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
      name: 'Hva er inkludert i en brandingpakke?',
      acceptedAnswer: { '@type': 'Answer', text: 'Alle brandingpakker inkluderer logo, fargepalett, typografi og brand guidelines. Vi leverer alle filer i vektorformat for bruk på nett og i trykk.' },
    },
    {
      '@type': 'Question',
      name: 'Hva koster branding og logo design?',
      acceptedAnswer: { '@type': 'Answer', text: 'Brandingpakker fra Frameflow starter fra 8 000 kr eks. mva. Prisen avhenger av omfang og leveranser.' },
    },
    {
      '@type': 'Question',
      name: 'Hvor lang tid tar et brandingprosjekt?',
      acceptedAnswer: { '@type': 'Answer', text: 'Et komplett brandingprosjekt tar typisk 2–4 uker, inkludert konsept, presentasjon og revisjoner.' },
    },
    {
      '@type': 'Question',
      name: 'Kan jeg bruke merkevaren på tvers av alle medier?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, du mottar alle filer i vektorformat (SVG, PDF, PNG) som fungerer i alle størrelser – fra visittkort til bannere.' },
    },
    {
      '@type': 'Question',
      name: 'Hva er forskjellen på grafisk design og logodesign?',
      acceptedAnswer: { '@type': 'Answer', text: 'Logodesign handler om selve logosymbolet og logotypen – kjernen i merkevaren din. Grafisk design er bredere og inkluderer alt visuelt: fargepalett, typografi, maler, ikoner og trykksaker. Hos Frameflow leverer vi begge deler som en samlet brandingpakke.' },
    },
  ],
}

export default function BrandingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ServicePageTemplate
        label="Tjeneste"
        title="Grafisk design og logodesign som huskes"
        description="Vi leverer grafisk design, logodesign og branding for Bergen-bedrifter – slik at alt føles konsekvent, gjennomtenkt og umiskjennelig deg."
        longDescription="En sterk merkevare er ikke bare en logo – det er summen av alt som gjør bedriften din til det den er. Farger, fonter, tone, verdier og opplevelse. Hos Frameflow leverer vi grafisk design og logodesign som holder seg konsistent på nett, i sosiale medier og i trykt materiell."
        includes={[
          'Logo og logovariasjoner (farger, svart/hvit, mørk/lys)',
          'Fargepalett med HEX, RGB og CMYK-verdier',
          'Typografi-system med font-par',
          'Brand guidelines-dokument',
          'Ikoner og grafiske elementer',
          'Visittkort og profilering',
          'Digitale maler for sosiale medier',
        ]}
        process={[
          {
            step: '01',
            title: 'Oppdagelse',
            description: 'Vi kartlegger hvem du er, hvem målgruppen er, og hva som skiller deg fra konkurrentene i Bergen-markedet.',
          },
          {
            step: '02',
            title: 'Design',
            description: 'Vi utvikler konsepter og itererer til vi har en identitet som treffer. Du er involvert gjennom hele prosessen.',
          },
          {
            step: '03',
            title: 'Levering',
            description: 'Du mottar alle filer i alle nødvendige formater, pluss en brand guide som gjør det enkelt å bruke identiteten korrekt.',
          },
        ]}
        relatedServices={[
          { title: 'Web design', href: '/tjenester/webdesign' },
          { title: 'Foto og videografi', href: '/tjenester/foto-og-videografi' },
          { title: 'Sosiale medier', href: '/tjenester/sosiale-medier' },
        ]}
        mockupType="brand"
        pricingFrom="8 000 kr"
        faqs={[
          { q: 'Hva er inkludert i en brandingpakke?', a: 'Alle brandingpakker inkluderer logo, fargepalett, typografi og brand guidelines. Vi leverer alle filer i vektorformat for bruk på nett og i trykk.' },
          { q: 'Hva koster branding og logo design i Bergen?', a: 'Brandingpakker fra Frameflow starter fra 8 000 kr eks. mva. Prisen avhenger av omfang og leveranser.' },
          { q: 'Hvor lang tid tar et brandingprosjekt?', a: 'Et komplett brandingprosjekt tar typisk 2–4 uker, inkludert konsept, presentasjon og revisjoner.' },
          { q: 'Kan jeg bruke merkevaren på tvers av alle medier?', a: 'Ja, du mottar alle filer i vektorformat (SVG, PDF, PNG) som fungerer i alle størrelser – fra visittkort til bannere.' },
          { q: 'Hva er forskjellen på grafisk design og logodesign?', a: 'Logodesign handler om selve logosymbolet og logotypen – kjernen i merkevaren din. Grafisk design er bredere og inkluderer alt visuelt: fargepalett, typografi, maler, ikoner og trykksaker. Hos Frameflow leverer vi begge deler som en samlet brandingpakke.' },
        ]}
      />
    </>
  )
}
