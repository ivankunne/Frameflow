// Buyer-guide sections rendered on /tjenester/seo (via ServicePageTemplate's children slot).
// Merged in from the former blog post /blogg/seo-byraa-bergen, which now 301-redirects here,
// so the service page is the single page targeting "SEO Bergen" / "SEO-byrå Bergen".

export type SeoGuideContent = {
  pricing: {
    label: string
    title: string
    intro: string
    columns: [string, string, string]
    rows: { level: string; price: string; includes: string }[]
    note: string
  }
  choose: {
    label: string
    title: string
    intro: string
    goodTitle: string
    good: string[]
    badTitle: string
    bad: string[]
  }
  local: {
    label: string
    title: string
    body: string
    examplesLabel: string
    examples: string[]
    guidePrefix: string
    guideLink: string
    gbpPrefix: string
    gbpLink: string
    suffix: string
  }
}

export const seoGuide: Record<'no' | 'en', SeoGuideContent> = {
  no: {
    pricing: {
      label: 'Markedspriser',
      title: 'Prisnivåer for SEO i Bergen',
      intro: 'Prisene på søkemotoroptimalisering i Bergen varierer mye, og det er lett å sammenligne epler og pærer. Slik ser de vanligste nivåene ut i markedet:',
      columns: ['Tjenestenivå', 'Pris', 'Hva du typisk får'],
      rows: [
        { level: 'Grunnleggende SEO', price: '2 000–4 000 kr/mnd', includes: 'Teknisk oppsett og en månedlig rapport' },
        { level: 'Standard SEO-pakke', price: '5 000–12 000 kr/mnd', includes: 'Teknisk SEO, innhold og rapportering' },
        { level: 'Fullservice SEO', price: '12 000–30 000 kr/mnd', includes: 'Alt inkludert, med tett oppfølging' },
        { level: 'Engangsoppsett', price: '8 000–25 000 kr', includes: 'Teknisk SEO uten løpende arbeid' },
      ],
      note: 'Det billigste alternativet er sjelden det beste. SEO som gir reelle resultater krever tid og kompetanse, så vær skeptisk til pakker som lover mye for lite. Hvor du havner avhenger av konkurransen i bransjen din og hvor mye innhold som trengs – vår egen pris står lenger ned på siden.',
    },
    choose: {
      label: 'Velg riktig',
      title: 'Slik skiller du et godt SEO-byrå fra et dårlig',
      intro: 'Uansett hvilket SEO-byrå i Bergen du ender opp med, bør du sjekke dette før du signerer:',
      goodTitle: 'Tegn på et godt byrå',
      good: [
        'Viser deg faktiske rangeringer og trafikktall',
        'Forklarer hva de gjør, og hvorfor',
        'Gir realistiske forventninger – SEO tar typisk 3–6 måneder',
        'Rapporterer på resultater, ikke bare aktivitet',
        'Lar deg eie domenet, innholdet og kontoene dine',
      ],
      badTitle: 'Varselsignaler',
      bad: [
        'Lover side 1 på Google innen 30 dager',
        'Er vage om hvilke metoder de bruker',
        'Selger «100 backlinks» til en lav pris',
        'Rapporterer på timer og antall innlegg i stedet for resultater',
        'Krever lang bindingstid uten å vise fremgang underveis',
      ],
    },
    local: {
      label: 'Lokal SEO',
      title: 'Lokal eller nasjonal SEO – hva trenger du?',
      body: 'For de fleste Bergen-bedrifter er lokal SEO den viktigste investeringen. Det handler om å dukke opp når noen søker etter det du tilbyr i nærområdet – ofte i kartresultatene øverst på Google. Nasjonal SEO, der du konkurrerer på søk uten stedsnavn, er langt dyrere og sjelden nødvendig for en lokal bedrift.',
      examplesLabel: 'Typiske lokale søk',
      examples: ['tannlege Bergen', 'regnskapsfører Bergenhus', 'rørlegger Åsane', 'restaurant Sandviken'],
      guidePrefix: 'Vil du gjøre mye av jobben selv? ',
      guideLink: 'Guiden vår til lokal SEO i Bergen',
      gbpPrefix: ' tar deg gjennom stegene, og ',
      gbpLink: 'guiden til Google Business Profile',
      suffix: ' viser det viktigste grepet du kan ta gratis.',
    },
  },
  en: {
    pricing: {
      label: 'Market prices',
      title: 'SEO price levels in Bergen',
      intro: 'Prices for search engine optimisation in Bergen vary a lot, and it is easy to compare apples with oranges. These are the most common levels in the market:',
      columns: ['Service level', 'Price', 'What you typically get'],
      rows: [
        { level: 'Basic SEO', price: 'NOK 2,000–4,000/mo', includes: 'Technical setup and a monthly report' },
        { level: 'Standard SEO package', price: 'NOK 5,000–12,000/mo', includes: 'Technical SEO, content and reporting' },
        { level: 'Full-service SEO', price: 'NOK 12,000–30,000/mo', includes: 'Everything included, with close follow-up' },
        { level: 'One-off setup', price: 'NOK 8,000–25,000', includes: 'Technical SEO with no ongoing work' },
      ],
      note: 'The cheapest option is rarely the best. SEO that delivers real results takes time and expertise, so be wary of packages that promise a lot for very little. Where you land depends on competition in your industry and how much content is needed — our own price is further down the page.',
    },
    choose: {
      label: 'Choose well',
      title: 'How to tell a good SEO agency from a bad one',
      intro: 'Whichever SEO agency in Bergen you end up with, check these before you sign:',
      goodTitle: 'Signs of a good agency',
      good: [
        'Shows you actual rankings and traffic numbers',
        'Explains what they do, and why',
        'Sets realistic expectations — SEO typically takes 3–6 months',
        'Reports on results, not just activity',
        'Lets you own your domain, content and accounts',
      ],
      badTitle: 'Warning signs',
      bad: [
        'Promises page 1 on Google within 30 days',
        'Is vague about their methods',
        'Sells "100 backlinks" at a low price',
        'Reports on hours and number of posts instead of results',
        'Requires a long lock-in without showing progress along the way',
      ],
    },
    local: {
      label: 'Local SEO',
      title: 'Local or national SEO — what do you need?',
      body: 'For most businesses in Bergen, local SEO is the most important investment. It is about showing up when someone searches for what you offer nearby — often in the map results at the top of Google. National SEO, where you compete on searches without a place name, is far more expensive and rarely necessary for a local business.',
      examplesLabel: 'Typical local searches',
      examples: ['dentist Bergen', 'accountant Bergenhus', 'plumber Åsane', 'restaurant Sandviken'],
      guidePrefix: 'Want to do much of the work yourself? ',
      guideLink: 'Our guide to local SEO in Bergen',
      gbpPrefix: ' walks you through the steps, and ',
      gbpLink: 'the Google Business Profile guide',
      suffix: ' covers the most important free step.',
    },
  },
}
