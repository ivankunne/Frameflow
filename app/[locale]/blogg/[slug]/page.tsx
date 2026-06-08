import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/JsonLd'
import { blogPosts, getBlogPost } from '@/lib/data'
import BlogPostClient from '@/components/BlogPostClient'
import { buildAlternates, ogLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  const isEn = locale === 'en'
  const noUrl = `https://www.frameflow.no/blogg/${post.slug}`
  const enUrl = `https://www.frameflow.no/en/blog/${post.slug}`

  return {
    title: post.metaTitle ?? post.title,
    description: post.excerpt,
    // EN blog posts serve Norwegian content — canonical to NO to avoid duplicate-language penalty
    ...(isEn && { robots: { index: false, follow: true } }),
    alternates: {
      canonical: noUrl,
      // hreflang only on the canonical (NO) version — non-canonical EN pages must not carry hreflang
      ...(isEn ? {} : { languages: { 'nb-NO': noUrl } }),
    },
    openGraph: {
      title: post.metaTitle ?? post.title,
      description: post.excerpt,
      type: 'article',
      locale: ogLocale(locale),
      siteName: 'Frameflow',
      url: noUrl,
      authors: ['Ivan Kunne'],
      publishedTime: post.updatedAt ?? post.date,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: post.metaTitle ?? post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle ?? post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const publishedDate = post.updatedAt ?? post.date
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: publishedDate,
    dateModified: publishedDate,
    articleSection: post.category,
    image: {
      '@type': 'ImageObject',
      url: `https://www.frameflow.no/blogg/${post.slug}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      '@id': 'https://www.frameflow.no/#ivan-kunne',
      name: 'Ivan Kunne',
      url: 'https://www.frameflow.no/om-oss',
    },
    publisher: { '@id': 'https://www.frameflow.no/#organization' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.frameflow.no/blogg/${post.slug}`,
    },
    inLanguage: 'nb-NO',
    keywords: [
      post.category,
      'markedsføring Bergen',
      'Frameflow',
      ...({
        SEO: ['lokal SEO Bergen', 'søkemotoroptimalisering Bergen', 'Google rangering Bergen'],
        Webdesign: ['webdesign Bergen', 'nettside Bergen', 'webdesign byrå Bergen'],
        'Sosiale medier': ['sosiale medier Bergen', 'Instagram markedsføring Bergen', 'Facebook Bergen'],
        Branding: ['branding Bergen', 'merkevare Bergen', 'logo design Bergen'],
        'Foto & Video': ['bedriftsfoto Bergen', 'videografi Bergen', 'fotograf Bergen'],
        Markedsføring: ['digital markedsføring Bergen', 'markedsføringsbyrå Bergen', 'annonsering Bergen'],
        'App utvikling': ['app utvikling Bergen', 'apputvikling Bergen', 'mobilapp Bergen'],
      }[post.category] ?? []),
    ].join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
      { '@type': 'ListItem', position: 2, name: 'Blogg', item: 'https://www.frameflow.no/blogg' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.frameflow.no/blogg/${post.slug}` },
    ],
  }

  const relatedPosts = [
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3)

  const howToSchema = post.slug === 'lokal-seo-bergen-guide-2025' ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Slik optimaliserer du lokal SEO for Bergen-bedriften din',
    description: 'En steg-for-steg guide til lokal SEO for Bergen-bedrifter – fra Google Business Profile til innholdsstrategi og mobiloptimalisering.',
    author: { '@id': 'https://www.frameflow.no/#ivan-kunne' },
    publisher: { '@id': 'https://www.frameflow.no/#organization' },
    step: [
      { '@type': 'HowToStep', name: 'Optimaliser Google Business Profile', text: 'Fyll ut alle felt: navn, adresse, telefon, åpningstider og nettsted. Velg riktige kategorier og legg Bergen-spesifikke søkeord i beskrivelsesteksten. Last opp profesjonelle bilder av lokalet, teamet og produktene.' },
      { '@type': 'HowToStep', name: 'Sikre NAP-konsistens', text: 'Kontroller at bedriftsnavnet, adressen og telefonnummeret er identisk skrevet på alle nettsteder: nettside, GBP, 1881, Finn.no, Facebook og andre kataloger.' },
      { '@type': 'HowToStep', name: 'Integrer lokale søkeord på nettsiden', text: 'Legg inn Bergen-spesifikke søkeord naturlig i sidetitler, metabeskrivelser og innhold. Nevn bydeler som Bergenhus, Fana, Åsane, Fyllingsdalen og Laksevåg der det er relevant for bedriften.' },
      { '@type': 'HowToStep', name: 'Bygg en lokal innholdsstrategi', text: 'Publiser regelmessig relevant, lokalt innhold på bloggen. Skriv om hendelser og nyheter i Bergen som er relevante for bransjen din for å signalisere lokal autoritet til Google.' },
      { '@type': 'HowToStep', name: 'Skaff tilbakekoblinger fra lokale nettsteder', text: 'Få lenker fra Bergen-baserte nettsteder som Bergen Næringsråd, Bergens Tidende og lokale samarbeidspartnere. Lokale backlinks er sterke signaler for lokal SEO.' },
      { '@type': 'HowToStep', name: 'Optimaliser for mobil og hastighet', text: 'Over 70 % av lokale søk skjer på mobil. Test nettsiden din med Google PageSpeed Insights og sørg for en score over 80 på mobil. Sidehastighet er en viktig rangeringsfaktor for Google.' },
    ],
  } : null

  const faqSchema = post.slug === 'webflow-bergen' ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'nb-NO',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Er Webflow bra for SEO?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja. Webflow gir ren kode, rask lastetid og full kontroll på metadata og strukturert data – alt som skal til for et godt SEO-fundament. Resultatene avhenger likevel av riktig oppsett og innhold.' },
      },
      {
        '@type': 'Question',
        name: 'Kan jeg oppdatere Webflow-nettsiden selv?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja. Webflow har et brukervennlig CMS og en redaktørmodus der du trygt kan endre tekst og bilder uten teknisk kunnskap, og uten å risikere å ødelegge designet.' },
      },
      {
        '@type': 'Question',
        name: 'Hva koster Webflow i måneden?',
        acceptedAnswer: { '@type': 'Answer', text: 'Selve plattformen koster typisk 200 – 500 kr/mnd avhengig av plan, inkludert hosting og SSL. Utviklingen av selve nettsiden er en separat engangskostnad.' },
      },
      {
        '@type': 'Question',
        name: 'Bør jeg velge Webflow eller WordPress?',
        acceptedAnswer: { '@type': 'Answer', text: 'For de fleste Bergen-bedrifter er Webflow det enkleste valget: profesjonelt resultat uten løpende vedlikehold. WordPress passer best for store, komplekse nettsteder med spesielle integrasjoner.' },
      },
    ],
  } : null

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {howToSchema && <JsonLd data={howToSchema} />}
      {faqSchema && <JsonLd data={faqSchema} />}
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  )
}
