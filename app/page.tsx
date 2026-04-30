import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { JsonLd, organizationSchema, websiteSchema } from '@/components/JsonLd'

import HomeHero from '@/components/sections/HomeHero'
import HomeLogoStrip from '@/components/sections/HomeLogoStrip'
import HomeStats from '@/components/sections/HomeStats'
import HomeServices from '@/components/sections/HomeServices'
import HomeAbout from '@/components/sections/HomeAbout'

const HomeProcess = dynamic(() => import('@/components/sections/HomeProcess'))
const HomeProjects = dynamic(() => import('@/components/sections/HomeProjects'))
const HomeTestimonials = dynamic(() => import('@/components/sections/HomeTestimonials'))
const HomeFAQ = dynamic(() => import('@/components/sections/HomeFAQ'))
const HomeCTA = dynamic(() => import('@/components/sections/HomeCTA'))

export const metadata: Metadata = {
  title: 'Frameflow – Markedsføringsbyrå i Bergen',
  description:
    'Webdesign, app utvikling, foto & video, sosiale medier og branding i Bergen. Få målbare resultater med én kontaktperson. Gratis konsultasjon – svar innen 24 timer.',
  alternates: {
    canonical: 'https://www.frameflow.no',
  },
  openGraph: {
    title: 'Frameflow – Markedsføringsbyrå i Bergen',
    description:
      'Webdesign, app utvikling, foto & video, sosiale medier og branding i Bergen. Få målbare resultater med én kontaktperson.',
    url: 'https://www.frameflow.no',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frameflow – Markedsføringsbyrå i Bergen',
    description: 'Webdesign, app utvikling, foto & video, sosiale medier og branding i Bergen. Målbare resultater, én kontaktperson.',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Frameflow',
  description: 'Markedsføringsbyrå i Bergen – webdesign, foto og video, sosiale medier og branding under ett tak.',
  url: 'https://www.frameflow.no',
  telephone: '+4799853781',
  email: 'ivan@frameflow.no',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Damsgårdsveien 83a',
    addressLocality: 'Bergen',
    postalCode: '5058',
    addressCountry: 'NO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 60.3913,
    longitude: 5.3221,
  },
  areaServed: [
    { '@type': 'City', name: 'Bergen' },
    { '@type': 'AdministrativeArea', name: 'Vestland' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  sameAs: ['https://www.instagram.com/frameflow_no/', 'https://www.tiktok.com/@frameflow.no'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hva koster en nettside i Bergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En bedriftsnettside hos Frameflow starter fra 12 000 kr. Prisen avhenger av omfang, funksjonalitet og design. Vi gir alltid fast pris – ingen overraskelser etterpå. Be om et uforpliktende tilbud, så får du et konkret tall innen 24 timer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvilke tjenester tilbyr Frameflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Frameflow leverer webdesign, app utvikling, foto og video produksjon, branding og sosiale medier – alt under ett tak i Bergen. Vi skreddersyr tjenestene til din bedrift og leverer målbare resultater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva gjør Frameflow annerledes enn andre markedsføringsbyrå i Bergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du snakker alltid direkte med Ivan – personen som faktisk gjør jobben. Ingen mellommenn, ingen junior-leveranser. Vi kjenner Bergen-markedet og jobber med fast pris og fornøyd garanti.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvor lang tid tar det å lage en nettside?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En standard bedriftsnettside tar typisk 3–6 uker fra oppstart til lansering, avhengig av omfang og tilgang på innhold. Vi setter opp en klar tidsplan fra dag én.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jobber dere kun med bedrifter i Bergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi har base i Bergen og kjenner det lokale markedet godt, men jobber like gjerne med bedrifter i resten av Norge og internasjonalt – som med Marbesa Project 94 i Marbella.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvordan kommer vi i gang med Frameflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book en gratis 30-minutters samtale via kontaktskjemaet, e-post eller ring +47 99 85 37 81. Ingen forpliktelser – vi hører om prosjektet ditt og forteller deg ærlig hva vi kan gjøre.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <HomeHero />
      <HomeLogoStrip />
      <HomeStats />
      <HomeServices />
      <HomeAbout />
      <HomeProcess />
      <HomeProjects />
      <HomeTestimonials />
      <HomeFAQ />
      <HomeCTA />
    </>
  )
}
