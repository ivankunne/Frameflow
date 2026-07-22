import type { Metadata } from 'next'
import { JsonLd, personSchema } from '@/components/JsonLd'
import OmOssClient from '@/components/OmOssClient'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const metaByLocale = {
  no: {
    title: 'Om oss – Markedsføringsbyrå og webbyrå i Bergen | Frameflow',
    description: 'Møt Ivan Kunne bak Frameflow – webbyrå og markedsføringsbyrå i Bergen. Webdesign, SEO, sosiale medier og branding. Én kontaktperson, full ansvarlighet.',
    keywords: ['markedsføringsbyrå Bergen', 'webbyrå Bergen', 'Ivan Kunne Frameflow', 'digitalbyrå Bergen'],
  },
  en: {
    title: 'About us – Digital agency in Bergen, Norway | Frameflow',
    description: 'Meet Ivan Kunne behind Frameflow — a digital agency in Bergen. Web design, SEO, social media and branding. One point of contact, full accountability.',
    keywords: ['digital agency Bergen', 'web agency Bergen Norway', 'Ivan Kunne Frameflow', 'marketing agency Bergen'],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const m = metaByLocale[lang]
  const canonical = locale === 'en' ? 'https://www.frameflow.no/en/about' : 'https://www.frameflow.no/om-oss'
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: buildAlternates('/om-oss', '/about', locale),
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

export default async function OmOssPage({ params }: Props) {
  const { locale } = await params
  const breadcrumbSchema = buildBreadcrumbSchema(locale, [
    HOME_CRUMB,
    { name: 'Om oss', nameEn: 'About', noPath: '/om-oss', enPath: '/about' },
  ])
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={personSchema} />
      <OmOssClient />
    </>
  )
}
