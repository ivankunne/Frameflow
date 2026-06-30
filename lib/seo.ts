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
