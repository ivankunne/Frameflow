import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { HoOrbitCaseStudy } from '@/components/HoOrbitCaseStudy'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'App utvikling i Bergen | Fra MVP til fullskala løsninger',
  description:
    'Oppdagelse av skræddersydde webapper og mobilapper som løser reelle problemer. Fra MVP til fullskala – be om tilbud for å komme i gang.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester/app-utvikling' },
  openGraph: {
    title: 'App utvikling i Bergen | Frameflow',
    description: 'Skreddersydde webapper og mobilapper som løser reelle problemer. Fra MVP til fullskala løsninger for Bergen-bedrifter.',
    url: 'https://www.frameflow.no/tjenester/app-utvikling',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App utvikling i Bergen | Frameflow',
    description: 'Skreddersydde apper som løser reelle problemer. Fra MVP til fullskala løsninger – raskt og sikkert.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Tjenester', item: 'https://www.frameflow.no/tjenester' },
    { '@type': 'ListItem', position: 3, name: 'App utvikling', item: 'https://www.frameflow.no/tjenester/app-utvikling' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'App utvikling i Bergen',
  provider: { '@id': 'https://www.frameflow.no/#organization' },
  description: 'Skreddersydde webapper og mobilapper som løser reelle problemer for bedrifter.',
  areaServed: { '@type': 'City', name: 'Bergen' },
}

export default function AppUtvikling() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <ServicePageTemplate
        label="Tjeneste"
        title="Apper som løser reelle problemer"
        description="Fra idé til live-app. Vi bygger skreddersydde webapper og mobilapper som gjør jobben – raskere, smartere, og på måten som passer din bedrift."
        longDescription="En app er ikke en nettside. Det handler om å løse ett spesifikt problem så godt at folk bruker det daglig. Vi bygger apper i React, Next.js, React Native og Flutter – valget avhenger av hva som gir best resultat for deg. Fra MVP som du kan teste med kunder på dag 14, til fullskala løsninger som skalerer til tusenvis av brukere."
        includes={[
          'Full-stack utvikling (frontend, backend, database)',
          'API design og integrasjon med tredjepartstjenester',
          'Responsive og mobiloptimalisert design',
          'Database design og optimalisering',
          'Sikkerhet og data-compliance (GDPR-klar)',
          'Testing og kvalitetssikring',
          'Deployment, hosting og overvåking',
          'Dokumentasjon og opplæring for teamet ditt',
        ]}
        process={[
          {
            step: '01',
            title: 'Discovery og planlegging',
            description: 'Vi starter med å forstå problemet du løser, hvem som bruker appen, og hva success ser ut. Vi lager wireframes og user flows sammen med deg.',
          },
          {
            step: '02',
            title: 'MVP-utvikling',
            description: 'Vi bygger et minimum viable product raskt – nok til å teste med ekte brukere og validere idéen før vi investerer i full utbygging.',
          },
          {
            step: '03',
            title: 'Full-scale lansering',
            description: 'Når appen er validert, skalerer vi den. Flere features, større brukerbaser, integrasjoner – vi legger grunnmuren for vekst.',
          },
          {
            step: '04',
            title: 'Support og vedlikehold',
            description: 'Etter lansering tilbyr vi løpende support, bug-fixes og nye features basert på bruker-feedback.',
          },
        ]}
        relatedServices={[
          { title: 'Branding', href: '/tjenester/branding' },
          { title: 'Web design', href: '/tjenester/webdesign' },
          { title: 'Foto og videografi', href: '/tjenester/foto-og-videografi' },
        ]}
        mockupType="app"
        pricingFrom="45 000 kr"
      />

      {/* Case study section */}
      <HoOrbitCaseStudy />
    </>
  )
}
