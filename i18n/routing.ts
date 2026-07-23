import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['no', 'en'],
  defaultLocale: 'no',
  localePrefix: 'as-needed',
  // Never sniff Accept-Language. Googlebot crawls with en-US and would otherwise
  // be 307-redirected off every canonical Norwegian URL to /en. Norwegian is the
  // default and is always served at the unprefixed URLs; English is reached only
  // via explicit /en links and the language switcher.
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/om-oss': { no: '/om-oss', en: '/about' },
    '/tjenester': { no: '/tjenester', en: '/services' },
    '/tjenester/webdesign': { no: '/tjenester/webdesign', en: '/services/web-design' },
    '/tjenester/webflow': { no: '/tjenester/webflow', en: '/services/webflow' },
    '/tjenester/seo': { no: '/tjenester/seo', en: '/services/seo' },
    '/tjenester/app-utvikling': { no: '/tjenester/app-utvikling', en: '/services/app-development' },
    '/tjenester/foto-og-videografi': { no: '/tjenester/foto-og-videografi', en: '/services/photo-video' },
    '/tjenester/sosiale-medier': { no: '/tjenester/sosiale-medier', en: '/services/social-media' },
    '/tjenester/branding': { no: '/tjenester/branding', en: '/services/branding' },
    '/tjenester/markedsforing': { no: '/tjenester/markedsforing', en: '/services/marketing' },
    '/tjenester/ai-automasjon': { no: '/tjenester/ai-automasjon', en: '/services/ai-automation' },
    '/tjenester/ai-seo': { no: '/tjenester/ai-seo', en: '/services/ai-seo' },
    '/prosjekter': { no: '/prosjekter', en: '/projects' },
    '/prosjekter/[slug]': { no: '/prosjekter/[slug]', en: '/projects/[slug]' },
    '/blogg': { no: '/blogg', en: '/blog' },
    '/blogg/[slug]': { no: '/blogg/[slug]', en: '/blog/[slug]' },
    '/kontakt': { no: '/kontakt', en: '/contact' },
    '/tilbud': { no: '/tilbud', en: '/quote' },
    '/personvern': { no: '/personvern', en: '/privacy' },
  },
})

export type Locale = (typeof routing.locales)[number]
