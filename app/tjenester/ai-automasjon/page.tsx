import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'AI Automasjon Bergen – Automatiser tidstyvene | Frameflow',
  description:
    'Frameflow bygger AI-automasjoner for Bergen-bedrifter. Henvendelseshåndtering, AI-chatbot, lead-kvalifisering og CRM-integrasjon – frigjør timer ukentlig. Fra 8 000 kr.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester/ai-automasjon' },
  openGraph: {
    title: 'AI Automasjon Bergen – Automatiser tidstyvene | Frameflow',
    description: 'Frameflow bygger AI-automasjoner for Bergen-bedrifter. Henvendelseshåndtering, AI-chatbot, lead-kvalifisering og CRM-integrasjon – frigjør timer ukentlig. Fra 8 000 kr.',
    url: 'https://www.frameflow.no/tjenester/ai-automasjon',
    images: [{ url: 'https://www.frameflow.no/og?title=AI+Automasjon+Bergen&label=AI+Automasjon', width: 1200, height: 630, alt: 'AI Automasjon Bergen – Frameflow' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automasjon Bergen – Automatiser tidstyvene | Frameflow',
    description: 'Frameflow bygger AI-automasjoner for Bergen-bedrifter. Henvendelseshåndtering, AI-chatbot, lead-kvalifisering og CRM-integrasjon – frigjør timer ukentlig. Fra 8 000 kr.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Tjenester', item: 'https://www.frameflow.no/tjenester' },
    { '@type': 'ListItem', position: 3, name: 'AI Automasjon', item: 'https://www.frameflow.no/tjenester/ai-automasjon' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automasjon for bedrifter i Bergen',
  provider: { '@id': 'https://www.frameflow.no/#organization' },
  description: 'Vi bygger AI-drevne automatiseringer som håndterer henvendelser, kvalifiserer leads og oppdaterer CRM automatisk – slik at Bergen-bedrifter kan bruke tiden på det som faktisk vokser virksomheten.',
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
      name: 'Hva kan AI-automasjon gjøre for bedriften min?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Den kan håndtere alle repetitive, regelbaserte oppgaver: svare på standardhenvendelser, sortere og videresende e-poster, logge leads i CRM, sende oppfølgings-e-poster, bekrefte bookinger og mye mer. En god tommelfingerregel: hvis du kan beskrive oppgaven som en serie trinn, kan den automatiseres.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva koster AI-automasjon i Bergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prisen avhenger av kompleksiteten. En enkel automasjon starter fra 8 000 kr eks. mva. Mer komplekse flyter med AI-behandling, chatbot og flere integrasjoner koster mer. Vi gir alltid et fast tilbud uten skjulte kostnader.',
      },
    },
    {
      '@type': 'Question',
      name: 'Trenger bedriften min teknisk kompetanse for å bruke AI-automasjon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nei. Vi setter opp alt, dokumenterer systemet og opplærer deg. Du trenger ikke vite noe om kode eller teknologi – bare bruke resultatet og se at henvendelsene håndteres mens du er opptatt med andre ting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvilke systemer kan dere integrere mot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De fleste. Vi jobber med HubSpot, Pipedrive, Notion, Slack, Google Workspace, Calendly, Stripe, WooCommerce og hundrevis av andre via Make, n8n og Zapier. Har du et system du bruker, spør oss – sannsynligheten er stor for at vi kan koble det til.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan AI-automasjon erstatte personlig kundekontakt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nei – og det skal den ikke. Den håndterer det rutinepregede slik at du kan bruke mer tid på relasjonsbygging og komplekse kundesituasjoner. Alle systemer vi bygger har tydelig «human handoff» for henvendelser som krever personlig oppfølging.',
      },
    },
  ],
}

export default function AIAutomasjonPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ServicePageTemplate
        label="Tjeneste"
        title="La AI håndtere det manuelle. Du fokuserer på vekst."
        description="Vi bygger smarte automasjoner for Bergen-bedrifter som håndterer henvendelser, kvalifiserer leads og følger opp kunder – automatisk, konsekvent, uten at du løfter en finger."
        longDescription="AI-automasjon handler ikke om å erstatte mennesker – det handler om å frigjøre dem. Hver uke bruker bedrifter som din timer på oppgaver som en smart automasjon kan gjøre på sekunder: svare på standardspørsmål, flytte data mellom systemer, sende påminnelser, logge leads i CRM. Vi kartlegger nøyaktig hvor du taper tid, og bygger robuste automatiseringer som fungerer i bakgrunnen – alltid på, alltid konsekvent, aldri syk."
        includes={[
          'Automatisk henvendelseshåndtering via e-post og nett',
          'AI-chatbot på nettsiden (24/7 svar til kunder)',
          'Lead-kvalifisering og automatisk CRM-logging',
          'Booking og avtalebehandling (Calendly, Cal.com)',
          'E-postsekvenser og automatiske oppfølginger',
          'Integrasjon mot HubSpot, Pipedrive, Notion, Slack m.fl.',
          'Oppsett via Make, n8n eller Zapier',
          'Månedlig gjennomgang og optimalisering',
        ]}
        process={[
          {
            step: '01',
            title: 'Kartlegging',
            description: 'Vi gjennomgår arbeidsflyten din steg for steg og identifiserer oppgavene som stjeler mest tid – og som er enklest å automatisere uten risiko.',
          },
          {
            step: '02',
            title: 'Bygging og testing',
            description: 'Vi bygger automasjonen, kobler den mot dine eksisterende systemer og tester grundig mot reelle scenarioer. Ingenting lanseres før det er pålitelig.',
          },
          {
            step: '03',
            title: 'Lansering og optimalisering',
            description: 'Etter lansering overvåker vi ytelsen, retter avvik og optimaliserer basert på ekte data. Du får full innsikt i hva som skjer og hva det sparer deg.',
          },
        ]}
        relatedServices={[
          { title: 'Webdesign', href: '/tjenester/webdesign' },
          { title: 'App utvikling', href: '/tjenester/app-utvikling' },
          { title: 'SEO', href: '/tjenester/seo' },
        ]}
        mockupType="ai"
        pricingFrom="8 000 kr"
        faqs={[
          {
            q: 'Hva kan AI-automasjon gjøre for bedriften min?',
            a: 'Den kan håndtere alle repetitive, regelbaserte oppgaver: svare på standardhenvendelser, sortere og videresende e-poster, logge leads i CRM, sende oppfølgings-e-poster, bekrefte bookinger og mye mer. En god tommelfingerregel: hvis du kan beskrive oppgaven som en serie trinn, kan den automatiseres.',
          },
          {
            q: 'Hva koster AI-automasjon i Bergen?',
            a: 'Prisen avhenger av kompleksiteten. En enkel automasjon starter fra 8 000 kr eks. mva. Mer komplekse flyter med AI-behandling, chatbot og flere integrasjoner koster mer. Vi gir alltid et fast tilbud uten skjulte kostnader.',
          },
          {
            q: 'Trenger bedriften min teknisk kompetanse for å bruke AI-automasjon?',
            a: 'Nei. Vi setter opp alt, dokumenterer systemet og opplærer deg. Du trenger ikke vite noe om kode eller teknologi – bare bruke resultatet og se at henvendelsene håndteres mens du er opptatt med andre ting.',
          },
          {
            q: 'Hvilke systemer kan dere integrere mot?',
            a: 'De fleste. Vi jobber med HubSpot, Pipedrive, Notion, Slack, Google Workspace, Calendly, Stripe, WooCommerce og hundrevis av andre via Make, n8n og Zapier. Har du et system du bruker, spør oss – sannsynligheten er stor for at vi kan koble det til.',
          },
          {
            q: 'Kan AI-automasjon erstatte personlig kundekontakt?',
            a: 'Nei – og det skal den ikke. Den håndterer det rutinepregede slik at du kan bruke mer tid på relasjonsbygging og komplekse kundesituasjoner. Alle systemer vi bygger har tydelig «human handoff» for henvendelser som krever personlig oppfølging.',
          },
        ]}
      />
    </>
  )
}
