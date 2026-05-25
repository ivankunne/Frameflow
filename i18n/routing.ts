import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['no', 'en'],
  defaultLocale: 'no',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/om-oss': { no: '/om-oss', en: '/about' },
    '/tjenester': { no: '/tjenester', en: '/services' },
    '/tjenester/webdesign': { no: '/tjenester/webdesign', en: '/services/web-design' },
    '/tjenester/seo': { no: '/tjenester/seo', en: '/services/seo' },
    '/tjenester/app-utvikling': { no: '/tjenester/app-utvikling', en: '/services/app-development' },
    '/tjenester/foto-og-videografi': { no: '/tjenester/foto-og-videografi', en: '/services/photo-video' },
    '/tjenester/sosiale-medier': { no: '/tjenester/sosiale-medier', en: '/services/social-media' },
    '/tjenester/branding': { no: '/tjenester/branding', en: '/services/branding' },
    '/tjenester/markedsforing': { no: '/tjenester/markedsforing', en: '/services/marketing' },
    '/tjenester/ai-automasjon': { no: '/tjenester/ai-automasjon', en: '/services/ai-automation' },
    '/prosjekter': { no: '/prosjekter', en: '/projects' },
    '/prosjekter/[slug]': { no: '/prosjekter/[slug]', en: '/projects/[slug]' },
    '/blogg': { no: '/blogg', en: '/blog' },
    '/blogg/[slug]': { no: '/blogg/[slug]', en: '/blog/[slug]' },
    '/kontakt': { no: '/kontakt', en: '/contact' },
    '/tilbud': { no: '/tilbud', en: '/quote' },
    '/personvern': { no: '/personvern', en: '/privacy' },
    '/salgsvilkaar': { no: '/salgsvilkaar', en: '/terms' },
  },
})

export type Locale = (typeof routing.locales)[number]
