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

const NO_MONTHS = [
  'januar', 'februar', 'mars', 'april', 'mai', 'juni',
  'juli', 'august', 'september', 'oktober', 'november', 'desember',
]

/** Converts a display date like "8. mai 2026" to "2026-05-08". Throws on unknown formats so bad data fails the build. */
export function norwegianDateToIso(date: string) {
  const match = date.trim().match(/^(\d{1,2})\.\s*([a-zæøå]+)\s+(\d{4})$/i)
  const month = match ? NO_MONTHS.indexOf(match[2].toLowerCase()) + 1 : 0
  if (!match || month === 0) throw new Error(`Unrecognised Norwegian date: "${date}"`)
  return `${match[3]}-${String(month).padStart(2, '0')}-${match[1].padStart(2, '0')}`
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
export const INDUSTRIES_CRUMB: BreadcrumbInput = { name: 'Bransjer', nameEn: 'Industries', noPath: '/bransjer', enPath: '/industries' }
