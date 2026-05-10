import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'SEO Bergen | Søkemotoroptimalisering – Frameflow',
  description:
    'Frameflow hjelper Bergen-bedrifter å rangere høyere på Google med lokal SEO, teknisk optimalisering og innholdsstrategi. Fra 4 500 kr/mnd. Ingen bindingstid.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester/seo' },
  openGraph: {
    title: 'SEO Bergen | Søkemotoroptimalisering – Frameflow',
    description: 'Frameflow hjelper Bergen-bedrifter å rangere høyere på Google med lokal SEO, teknisk optimalisering og innholdsstrategi. Fra 4 500 kr/mnd.',
    url: 'https://www.frameflow.no/tjenester/seo',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Bergen | Søkemotoroptimalisering – Frameflow',
    description: 'Frameflow hjelper Bergen-bedrifter å rangere høyere på Google med lokal SEO, teknisk optimalisering og innholdsstrategi. Fra 4 500 kr/mnd.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Tjenester', item: 'https://www.frameflow.no/tjenester' },
    { '@type': 'ListItem', position: 3, name: 'SEO', item: 'https://www.frameflow.no/tjenester/seo' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO og søkemotoroptimalisering i Bergen',
  provider: { '@id': 'https://www.frameflow.no/#organization' },
  description: 'Lokal SEO for Bergen-bedrifter – teknisk optimalisering, innholdsstrategi og Google Business Profile-oppsett som gir varig synlighet på Google.',
  areaServed: { '@type': 'City', name: 'Bergen' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NOK',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'NOK',
      minPrice: 4500,
      description: 'Fra 4 500 kr/mnd eks. mva.',
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
      name: 'Hva koster SEO i Bergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO-tjenester fra Frameflow starter fra 4 500 kr/mnd eks. mva. Prisen avhenger av konkurransesituasjonen i din bransje, antall søkeord du vil rangere på og hva slags innholdsarbeid som kreves. Vi gir alltid et fast månedlig tilbud uten skjulte kostnader.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvor lang tid tar det å se resultater fra SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De fleste Bergen-bedrifter ser målbare forbedringer i løpet av 3–6 måneder. Lokal SEO gir ofte raskere resultater enn nasjonal SEO fordi konkurransen er lavere. Tekniske forbedringer og Google Business Profile-oppsett kan gi synlige resultater innen noen uker.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva er lokal SEO og trenger jeg det?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lokal SEO handler om å rangere på Google når folk søker etter tjenester i Bergen og Vestland. Hvis du driver en lokal bedrift og ønsker kunder fra nærområdet, er lokal SEO langt mer effektivt enn generell SEO. Vi optimaliserer Google Business Profile, NAP-konsistens og lokale søkeord.',
      },
    },
    {
      '@type': 'Question',
      name: 'Er SEO fortsatt verdt det i 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja – organisk søketrafikk er fortsatt den mest kostnadseffektive og varige kilden til nye kunder. Til forskjell fra annonsering stopper ikke trafikken den dagen du slutter å betale. Godt SEO-arbeid gir synlighet som varer i årevis.',
      },
    },
  ],
}

export default function SEOPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ServicePageTemplate
        label="Tjeneste"
        title="SEO som gir deg kunder fra Google"
        description="Rangeringen din på Google avgjør hvem som finner deg – og hvem som finner konkurrenten din. Vi hjelper Bergen-bedrifter til side 1 med lokal SEO, teknisk optimalisering og innhold som rangerer."
        longDescription="SEO er ikke en engangsoppgave – det er et kontinuerlig arbeid som bygger opp din synlighet over tid. Hos Frameflow starter vi alltid med en grundig teknisk revisjon, analyserer hvilke søkeord kundene dine bruker, og lager en innholdsstrategi som treffer dem i riktig øyeblikk. Vi spesialiserer oss på lokal SEO for Bergen og Vestland, der du har størst sjanse for å slå konkurrentene raskt."
        includes={[
          'Teknisk SEO-revisjon og feilretting',
          'Lokal SEO og Google Business Profile',
          'Søkeordsanalyse for Bergen-markedet',
          'Innholdsoptimalisering og nye tekster',
          'Backlink-analyse og lenkebygging',
          'Core Web Vitals og sidehastighetsforbedring',
          'Google Search Console-oppfølging',
          'Månedlig rangeringsrapport',
        ]}
        process={[
          {
            step: '01',
            title: 'SEO-revisjon og analyse',
            description: 'Vi gjennomgår nettstedet ditt teknisk, kartlegger søkeordmuligheter i Bergen-markedet og analyserer hva konkurrentene gjør riktig.',
          },
          {
            step: '02',
            title: 'Optimalisering og innhold',
            description: 'Vi retter tekniske feil, optimaliserer eksisterende sider og lager nytt innhold som treffer søkeintensjonene til dine fremtidige kunder.',
          },
          {
            step: '03',
            title: 'Rapportering og forbedring',
            description: 'Hver måned får du en klar rapport over rangeringer, trafikk og resultater – og vi justerer strategien basert på hva dataene forteller oss.',
          },
        ]}
        relatedServices={[
          { title: 'Webdesign', href: '/tjenester/webdesign' },
          { title: 'Sosiale medier', href: '/tjenester/sosiale-medier' },
          { title: 'Branding', href: '/tjenester/branding' },
        ]}
        mockupType="seo"
        pricingFrom="4 500 kr/mnd"
      />
    </>
  )
}
