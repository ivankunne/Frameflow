import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { JsonLd } from '@/components/JsonLd'
import { vestlandContent } from '@/lib/vestlandContent'
import { buildAlternates, buildBreadcrumbSchema, HOME_CRUMB, ogLocale, schemaLanguage } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const NO_URL = 'https://www.frameflow.no/vestland'
const EN_URL = 'https://www.frameflow.no/en/vestland'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const c = vestlandContent[lang]
  const canonical = locale === 'en' ? EN_URL : NO_URL
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: [...c.keywords],
    alternates: buildAlternates('/vestland', '/vestland', locale),
    openGraph: {
      type: 'website',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      title: c.metaTitle,
      description: c.metaDescription,
      url: canonical,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: c.metaTitle }],
    },
    twitter: { card: 'summary_large_image', title: c.metaTitle, description: c.metaDescription },
  }
}

export default async function VestlandPage({ params }: Props) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'no'
  const c = vestlandContent[lang]

  const breadcrumbSchema = buildBreadcrumbSchema(locale, [
    HOME_CRUMB,
    { name: 'Vestland', nameEn: 'Vestland', noPath: '/vestland', enPath: '/vestland' },
  ])

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: lang === 'en' ? 'Marketing and web design in Vestland' : 'Markedsføring og webdesign i Vestland',
    provider: { '@id': 'https://www.frameflow.no/#organization' },
    description: c.metaDescription,
    url: locale === 'en' ? EN_URL : NO_URL,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Vestland' },
      { '@type': 'City', name: 'Bergen' },
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'NOK',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'NOK', minPrice: 15000 },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: schemaLanguage(locale),
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <main>
        <section className="relative pt-28 pb-16 px-6 lg:px-8 bg-white overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top right, rgba(33,114,181,0.07) 0%, transparent 65%)' }}
          />
          <div className="max-w-3xl mx-auto relative">
            <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-4">{c.label}</p>
            <h1 className="display-text text-4xl sm:text-5xl lg:text-6xl text-fg leading-[1.05] mb-6">
              {c.h1}
            </h1>
            <p className="text-lg text-fg leading-relaxed font-body mb-8">{c.lead}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tilbud"
                className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] inline-flex items-center shadow-blue-sm"
              >
                {c.ctaPrimary}
              </Link>
              <Link
                href="/kontakt"
                className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all min-h-[44px] inline-flex items-center bg-white shadow-card"
              >
                {c.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-8 pb-16 bg-white">
          <div className="max-w-3xl mx-auto space-y-5">
            {c.intro.map((p) => (
              <p key={p.slice(0, 40)} className="text-fg leading-relaxed font-body">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16 bg-bg-2 border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="display-text text-2xl sm:text-3xl text-fg mb-4">{c.honestyTitle}</h2>
            <p className="text-fg leading-relaxed font-body">{c.honestyBody}</p>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="display-text text-2xl sm:text-3xl text-fg mb-8">{c.servicesTitle}</h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {c.services.map((s) => (
                <li key={s.title}>
                  <Link href={s.href} className="block group h-full">
                    <h3 className="text-base font-semibold text-fg group-hover:text-accent transition-colors mb-2">
                      {s.title} →
                    </h3>
                    <p className="text-sm text-fg-muted leading-relaxed">{s.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16 bg-bg-2 border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="display-text text-2xl sm:text-3xl text-fg mb-3">{c.proofTitle}</h2>
            <p className="text-lg font-semibold text-fg mb-3">{c.proofName}</p>
            <p className="text-fg leading-relaxed font-body mb-6">{c.proofText}</p>
            <Link
              href={{ pathname: '/prosjekter/[slug]', params: { slug: c.proofSlug } }}
              className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              {c.proofCta} →
            </Link>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="display-text text-2xl sm:text-3xl text-fg mb-8">{c.howTitle}</h2>
            <ol className="space-y-8">
              {c.howItems.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span className="text-sm font-bold text-accent shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-base font-semibold text-fg mb-1">{item.title}</h3>
                    <p className="text-sm text-fg-muted leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16 bg-bg-2 border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="display-text text-2xl sm:text-3xl text-fg mb-8">
              {lang === 'en' ? 'FAQ' : 'Ofte stilte spørsmål'}
            </h2>
            <div className="divide-y divide-border">
              {c.faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-left text-base font-semibold text-fg hover:text-accent transition-colors">
                    {f.q}
                    <span className="text-accent shrink-0 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-fg-muted leading-relaxed pr-8">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-20 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="display-text text-3xl sm:text-4xl text-fg mb-4">{c.ctaTitle}</h2>
            <p className="text-fg-muted leading-relaxed mb-8 max-w-xl mx-auto">{c.ctaText}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/tilbud"
                className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] inline-flex items-center shadow-blue-sm"
              >
                {c.ctaPrimary}
              </Link>
              <Link
                href="/kontakt"
                className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all min-h-[44px] inline-flex items-center bg-white shadow-card"
              >
                {c.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
