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
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  sameAs: ['https://www.instagram.com/frameflow.no', 'https://www.tiktok.com/@frameflow.no'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hvilke tjenester tilbyr Frameflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Frameflow i Bergen leverer webdesign, sosiale medier strategi, foto og video produksjon, branding og SEO-optimalisering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan Frameflow håndtere alle sosiale medieplattformer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, vi jobber med alle relevante sosiale medier plattformer inkludert Instagram, Facebook, TikTok, LinkedIn og Pinterest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva gjør Frameflow annerledes enn andre markedsføringsbyrå i Bergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Frameflow kombinerer kreativitet med datadrevne strategier for å skape innhold som engasjerer din målgruppe. Vi prioriterer tett kommunikasjon og skreddersyr alle løsninger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvordan kommer vi i gang med Frameflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kontakt oss via kontaktskjemaet, e-post eller ring oss på +47 99 85 37 81. Vi starter med en gratis konsultasjon.',
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
      <HomeServices />
      <HomeProcess />
      <HomeProjects />
      <HomeStats />
      <HomeTestimonials />
      <HomeAbout />
      <HomeFAQ />
      <HomeCTA />
    </>
  )
}
