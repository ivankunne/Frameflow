import type { Metadata } from 'next'
import { Bricolage_Grotesque, Figtree } from 'next/font/google'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import StickyConsultationBar from '@/components/StickyConsultationBar'
import AvailabilityPill from '@/components/AvailabilityPill'
import PageTransition from '@/components/PageTransition'
import CursorFollower from '@/components/CursorFollower'
import Providers from '@/components/Providers'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
})

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isNo = locale === 'no'
  return {
    metadataBase: new URL('https://www.frameflow.no'),
    title: isNo
      ? 'Frameflow – Markedsføringsbyrå i Bergen'
      : 'Frameflow – Marketing Agency in Bergen',
    description: isNo
      ? 'Frameflow er et markedsføringsbyrå i Bergen. Vi leverer webdesign, foto og video, sosiale medier og branding som gir målbare resultater for bedrifter i Bergen og Vestland.'
      : 'Frameflow is a marketing agency in Bergen. We deliver web design, photo and video, social media and branding that drives measurable results for businesses in Bergen and Western Norway.',
    keywords: isNo
      ? ['markedsføringsbyrå Bergen', 'webbyrå Bergen', 'webdesign Bergen', 'grafisk design Bergen', 'digital markedsføring Bergen', 'Frameflow']
      : ['marketing agency Bergen', 'web agency Bergen', 'web design Bergen', 'branding Bergen', 'digital marketing Bergen', 'Frameflow'],
    authors: [{ name: 'Ivan Kunne', url: 'https://www.frameflow.no' }],
    creator: 'Frameflow',
    publisher: 'Frameflow',
    alternates: {
      canonical: locale === 'no' ? 'https://www.frameflow.no' : 'https://www.frameflow.no/en',
      languages: {
        'nb-NO': 'https://www.frameflow.no',
        'en': 'https://www.frameflow.no/en',
        'x-default': 'https://www.frameflow.no',
      },
    },
    openGraph: {
      type: 'website',
      locale: isNo ? 'nb_NO' : 'en_US',
      url: isNo ? 'https://www.frameflow.no' : 'https://www.frameflow.no/en',
      siteName: 'Frameflow',
      title: isNo
        ? 'Frameflow – Markedsføringsbyrå i Bergen'
        : 'Frameflow – Marketing Agency in Bergen',
      description: isNo
        ? 'Webdesign, foto og video, sosiale medier og branding som gir resultater. Bergen og Vestland.'
        : 'Web design, photo and video, social media and branding that delivers results. Bergen, Norway.',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: isNo ? 'Frameflow – Markedsføringsbyrå i Bergen' : 'Frameflow – Marketing Agency in Bergen' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isNo ? 'Frameflow – Markedsføringsbyrå i Bergen' : 'Frameflow – Marketing Agency in Bergen',
      description: isNo
        ? 'Webdesign, foto og video, sosiale medier og branding i Bergen.'
        : 'Web design, photo and video, social media and branding in Bergen.',
      images: ['/og-image.png'],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/icon.svg',
    },
    manifest: '/manifest.webmanifest',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }
  const messages = await getMessages()

  return (
    <html lang={locale === 'no' ? 'nb-NO' : 'en'} className={`${bricolage.variable} ${figtree.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly site summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM-friendly full site content" />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6W98WB3');`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6W98WB3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Navigation />
            <main>
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <CookieBanner />
            <StickyConsultationBar />
            <AvailabilityPill />
            <CursorFollower />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
