const BASE = 'https://www.frameflow.no'
const EN_BASE = `${BASE}/en`

export function buildAlternates(noPath: string, enPath: string, locale: string) {
  const noUrl = `${BASE}${noPath}`
  const enUrl = `${EN_BASE}${enPath}`
  return {
    canonical: locale === 'en' ? enUrl : noUrl,
    languages: {
      'nb-NO': noUrl,
      'en': enUrl,
      'x-default': noUrl,
    },
  }
}

export function ogLocale(locale: string) {
  return locale === 'en' ? 'en_US' : 'nb_NO'
}

export function schemaUrl(locale: string, noPath: string, enPath: string) {
  return locale === 'en' ? `${EN_BASE}${enPath}` : `${BASE}${noPath}`
}

export function schemaLanguage(locale: string) {
  return locale === 'en' ? 'en' : 'nb-NO'
}

type BreadcrumbInput = { name: string; nameEn?: string; noPath: string; enPath: string }

export function buildBreadcrumbSchema(locale: string, items: BreadcrumbInput[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: locale === 'en' && item.nameEn ? item.nameEn : item.name,
      item: schemaUrl(locale, item.noPath, item.enPath),
    })),
  }
}

export const HOME_CRUMB: BreadcrumbInput = { name: 'Hjem', nameEn: 'Home', noPath: '', enPath: '' }
export const SERVICES_CRUMB: BreadcrumbInput = { name: 'Tjenester', nameEn: 'Services', noPath: '/tjenester', enPath: '/services' }
