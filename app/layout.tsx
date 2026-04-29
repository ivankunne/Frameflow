import type { Metadata } from 'next'
import { Bricolage_Grotesque, Figtree } from 'next/font/google'
import './globals.css'
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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.frameflow.no'),
  title: {
    default: 'Frameflow – Markedsføringsbyrå i Bergen',
    template: '%s | Frameflow Bergen',
  },
  description:
    'Frameflow er et markedsføringsbyrå i Bergen. Vi leverer webdesign, foto og video, sosiale medier og branding som gir målbare resultater for bedrifter i Bergen og Vestland.',
  keywords: [
    'markedsføringsbyrå Bergen',
    'webdesign Bergen',
    'sosiale medier Bergen',
    'branding Bergen',
    'foto video Bergen',
    'digital markedsføring Bergen',
    'Frameflow',
  ],
  authors: [{ name: 'Ivan Kunne', url: 'https://www.frameflow.no' }],
  creator: 'Frameflow',
  publisher: 'Frameflow',
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://www.frameflow.no',
    siteName: 'Frameflow',
    title: 'Frameflow – Markedsføringsbyrå i Bergen',
    description:
      'Webdesign, foto og video, sosiale medier og branding som gir resultater. Bergen og Vestland.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Frameflow – Markedsføringsbyrå i Bergen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frameflow – Markedsføringsbyrå i Bergen',
    description: 'Webdesign, foto og video, sosiale medier og branding i Bergen.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb" className={`${bricolage.variable} ${figtree.variable}`}>
<body suppressHydrationWarning>
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
      </body>
    </html>
  )
}
