import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Branding i Bergen | Logo og visuell identitet',
  description:
    'Oppdag hvordan sterk branding gjør merkevaren din umiskjennelig. Logo, identitet og guidelines for Bergen-bedrifter – be om tilbud.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester/branding' },
  openGraph: {
    title: 'Branding i Bergen | Frameflow',
    description: 'Sterk branding som gjør merkevaren din umiskjennelig. Logo, identitet og guidelines for Bergen-bedrifter.',
    url: 'https://www.frameflow.no/tjenester/branding',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding i Bergen | Frameflow',
    description: 'Sterk branding og visuell identitet som skiller merkevaren din ut. Logo og guidelines fra eksperter i Bergen.',
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
  name: 'Branding i Bergen',
  provider: { '@id': 'https://www.frameflow.no/#organization' },
  description: 'Profesjonell branding for bedrifter i Bergen. Logo, visuell identitet og brand guidelines som gjør merkevaren din umiskjennelig.',
  areaServed: { '@type': 'City', name: 'Bergen' },
}

export default function BrandingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <ServicePageTemplate
        label="Tjeneste"
        title="En merkevare som skiller seg ut og huskes"
        description="Vi former utseendet, stemmen og følelsen av merkevaren din slik at alt føles konsekvent, gjennomtenkt og umiskjennelig deg."
        longDescription="En sterk merkevare er ikke bare en logo – det er summen av alt som gjør bedriften din til det den er. Farger, fonter, tone, verdier og opplevelse. Hos Frameflow lager vi en visuell identitet som holder seg konsistent på nett, i sosiale medier og i trykt materiell."
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
      />
    </>
  )
}
