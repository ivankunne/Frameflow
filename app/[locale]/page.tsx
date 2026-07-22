import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { JsonLd, personSchema } from '@/components/JsonLd'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, ogLocale } from '@/lib/seo'

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

type Props = { params: Promise<{ locale: string }> }

const metaByLocale = {
  no: {
    title: 'Frameflow – Markedsføringsbyrå og webbyrå i Bergen',
    description: 'Frameflow er markedsføringsbyrå og webbyrå i Bergen. Vi lager nettside, design, foto & video og branding. Ingen oppstartsgebyr – svar innen 24 timer.',
    keywords: ['markedsføringsbyrå Bergen', 'webbyrå Bergen', 'webdesign Bergen', 'digital markedsføring Bergen', 'Frameflow Bergen'],
  },
  en: {
    title: 'Frameflow – Digital agency in Bergen, Norway',
    description: 'Frameflow is a digital agency in Bergen. We build websites, branding, photo & video and social media. No setup fee — reply within 24 hours.',
    keywords: ['marketing agency Bergen', 'web agency Bergen Norway', 'web design Bergen', 'digital marketing Bergen', 'Frameflow'],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const m = metaByLocale[lang]
  const canonical = locale === 'en' ? 'https://www.frameflow.no/en' : 'https://www.frameflow.no'
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: buildAlternates('', '', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title: m.title,
      description: m.description,
      url: canonical,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: m.title }],
    },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nb-NO',
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
    {
      '@type': 'Question',
      name: 'Hva er et webbyrå og hva gjør Frameflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Et webbyrå hjelper bedrifter med å lage nettside, webdesign og digital tilstedeværelse. Frameflow er et webbyrå i Bergen som i tillegg leverer grafisk design, logodesign, foto, video og sosiale medier – alt under ett tak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan dere hjelpe meg med å lage nettside i Bergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, vi hjelper deg med å lage nettside tilpasset din bedrift – fra design til lansering. Alle nettsider vi lager er SEO-optimalisert, mobilvenlig og klar til å konvertere besøkende til kunder. Priser starter fra 15 000 kr eks. mva.',
      },
    },
  ],
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  const breadcrumbSchema = buildBreadcrumbSchema(locale, [HOME_CRUMB])
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={personSchema} />
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
