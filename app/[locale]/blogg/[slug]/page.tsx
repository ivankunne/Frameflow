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
        'AI automasjon': ['AI automasjon Bergen', 'automatisering Bergen', 'AI chatbot Bergen'],
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

  const guideHowToSchema = post.slug === 'lage-nettside-steg-for-steg-guide-2026' ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Slik lager du en profesjonell nettside steg for steg',
    description: 'En steg-for-steg guide til å lage en ny nettside – fra mål og innhold til webdesign, plattform, SEO og lansering.',
    inLanguage: 'nb-NO',
    author: { '@id': 'https://www.frameflow.no/#ivan-kunne' },
    publisher: { '@id': 'https://www.frameflow.no/#organization' },
    step: [
      { '@type': 'HowToStep', name: 'Sett mål og kartlegg målgruppen', text: 'Avklar hva nettsiden skal oppnå – flere henvendelser, salg eller tillit – og kartlegg hvem du snakker til og hva de søker etter.' },
      { '@type': 'HowToStep', name: 'Planlegg struktur og sidekart', text: 'Tegn opp hvilke sider nettsiden skal ha før design. Gi hver side ett tydelig tema og én søkeintensjon for bedre SEO.' },
      { '@type': 'HowToStep', name: 'Skaff innhold før design', text: 'Ha tekst, profesjonelle bilder, video og kundebevis klart før designet låses, slik at designet bygges rundt det faktiske innholdet.' },
      { '@type': 'HowToStep', name: 'Design som bygger tillit og konverterer', text: 'Lag et design som følger merkevaren, med tydelig verditilbud øverst, én klar call-to-action og mobil-først-prioritering.' },
      { '@type': 'HowToStep', name: 'Velg riktig plattform', text: 'Velg en plattform som gir rask, sikker og vedlikeholdsvennlig drift – for de fleste bedrifter er Webflow et godt valg.' },
      { '@type': 'HowToStep', name: 'Bygg inn SEO fra dag én', text: 'Sørg for ren kode, rask lastetid, gjennomtenkt struktur, unike metatitler og -beskrivelser, alt-tekst og strukturert data.' },
      { '@type': 'HowToStep', name: 'Test, lanser og følg opp', text: 'Test på alle skjermstørrelser, sjekk skjemaer og hastighet, lanser, og følg deretter opp med justeringer og jevnlige oppdateringer.' },
    ],
  } : null

  const guideFaqSchema = post.slug === 'lage-nettside-steg-for-steg-guide-2026' ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'nb-NO',
    mainEntity: [
      { '@type': 'Question', name: 'Hvor lang tid tar det å lage en nettside?', acceptedAnswer: { '@type': 'Answer', text: 'En standard bedriftsnettside tar typisk 3–6 uker fra oppstart til lansering, avhengig av omfang og hvor raskt innhold er på plass. Større nettsider med nettbutikk eller mange sider tar lengre tid.' } },
      { '@type': 'Question', name: 'Hva trenger jeg før vi starter?', acceptedAnswer: { '@type': 'Answer', text: 'Et tydelig mål, en idé om hvilke sider du trenger, og innhold – tekst, bilder og logo. Har du ikke alt klart, hjelper et godt byrå deg med å få det på plass underveis.' } },
      { '@type': 'Question', name: 'Kan jeg oppdatere nettsiden selv etterpå?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. På moderne plattformer som Webflow kan du trygt endre tekst og bilder selv i en brukervennlig redaktørmodus, uten teknisk kunnskap og uten å risikere å ødelegge designet.' } },
      { '@type': 'Question', name: 'Hva koster det å lage en profesjonell nettside?', acceptedAnswer: { '@type': 'Answer', text: 'Hos et byrå starter en skreddersydd bedriftsnettside typisk fra 15 000 kr og oppover, avhengig av antall sider og funksjonalitet.' } },
    ],
  } : null

  const aiAutomasjonFaqSchema = post.slug === 'ai-automasjon-oppgaver-bergen' ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'nb-NO',
    mainEntity: [
      { '@type': 'Question', name: 'Hva er AI-automasjon for en bedrift?', acceptedAnswer: { '@type': 'Answer', text: 'AI-automasjon er systemer som utfører repetitive, regelbaserte oppgaver automatisk – som å svare på henvendelser, logge leads i CRM eller sende oppfølginger. Målet er ikke å erstatte ansatte, men å frigjøre tiden deres fra rutinearbeid.' } },
      { '@type': 'Question', name: 'Hvilke oppgaver bør jeg automatisere først?', acceptedAnswer: { '@type': 'Answer', text: 'Begynn med oppgaven som tar mest tid og er enklest å beskrive steg for steg – for de fleste Bergen-bedrifter er det håndtering av innkommende e-post og henvendelser.' } },
      { '@type': 'Question', name: 'Hva koster det å automatisere med AI?', acceptedAnswer: { '@type': 'Answer', text: 'En enkel automasjon starter fra rundt 8 000 kr eks. mva som engangskostnad. Prisen øker med kompleksiteten, men sparer du noen timer i uken, betaler løsningen seg selv raskt.' } },
      { '@type': 'Question', name: 'Mister jeg den personlige kontakten med kundene?', acceptedAnswer: { '@type': 'Answer', text: 'Nei. Godt bygde automasjoner håndterer det rutinepregede og sender alt som krever en menneskelig vurdering videre til deg. Du får mer tid til de samtalene som faktisk betyr noe.' } },
    ],
  } : null

  const seoAdsFaqSchema = post.slug === 'seo-eller-google-ads-bergen' ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'nb-NO',
    mainEntity: [
      { '@type': 'Question', name: 'Hva er forskjellen på SEO og Google Ads?', acceptedAnswer: { '@type': 'Answer', text: 'SEO gir organisk synlighet på Google uten å betale per klikk, men tar tid å bygge. Google Ads er betalt annonsering som gir trafikk umiddelbart, men slutter å virke når du stopper å betale.' } },
      { '@type': 'Question', name: 'Er SEO eller Google Ads billigst?', acceptedAnswer: { '@type': 'Answer', text: 'Google Ads har lavest startkostnad, men du betaler for hvert klikk så lenge annonsene kjører. SEO koster mer i starten, men gir lavere kostnad per kunde over tid fordi trafikken fortsetter uten løpende klikkbetaling.' } },
      { '@type': 'Question', name: 'Hvor raskt ser jeg resultater med SEO og Google Ads?', acceptedAnswer: { '@type': 'Answer', text: 'Med Google Ads kan du få besøk og henvendelser samme dag annonsene går live. Med SEO ser de fleste Bergen-bedrifter synlig forbedring innen 3–6 måneder, og etablert lokal autoritet innen et år.' } },
      { '@type': 'Question', name: 'Bør en liten Bergen-bedrift velge SEO eller Google Ads?', acceptedAnswer: { '@type': 'Answer', text: 'Har du begrenset budsjett, anbefaler vi som regel å prioritere lokal SEO for den langsiktige økonomien, og bruke Google Ads i korte perioder når du trenger raske resultater eller vil teste nye søkeord.' } },
    ],
  } : null

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {howToSchema && <JsonLd data={howToSchema} />}
      {faqSchema && <JsonLd data={faqSchema} />}
      {guideHowToSchema && <JsonLd data={guideHowToSchema} />}
      {guideFaqSchema && <JsonLd data={guideFaqSchema} />}
      {seoAdsFaqSchema && <JsonLd data={seoAdsFaqSchema} />}
      {aiAutomasjonFaqSchema && <JsonLd data={aiAutomasjonFaqSchema} />}
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  )
}
