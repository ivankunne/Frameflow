import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getTranslations } from 'next-intl/server'
import { JsonLd, personSchema } from '@/components/JsonLd'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, ogLocale, schemaLanguage } from '@/lib/seo'

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

// Derived from the same translation keys HomeFAQ.tsx renders, so the schema can never
// drift from the visible Q&A text or serve the wrong locale (both bugs the previous
// hardcoded, NO-only schema had).
async function buildHomeFaqSchema(locale: string) {
  const t = await getTranslations({ locale, namespace: 'home.faq' })
  const questionKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'] as const
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: schemaLanguage(locale),
    mainEntity: questionKeys.map((key, i) => ({
      '@type': 'Question',
      name: t(key),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(`a${i + 1}`),
      },
    })),
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  const breadcrumbSchema = buildBreadcrumbSchema(locale, [HOME_CRUMB])
  const faqSchema = await buildHomeFaqSchema(locale)
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
