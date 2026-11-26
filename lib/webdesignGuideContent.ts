// Platform-choice section rendered on /tjenester/webdesign (via ServicePageTemplate's children slot).
// Deliberately not about pricing: price levels live in /blogg/nettside-pris-bergen, and repeating
// them here would recreate the service-page vs blog overlap we removed for SEO.

export type WebdesignGuideContent = {
  platforms: {
    label: string
    title: string
    intro: string
    columns: [string, string, string]
    rows: { dimension: string; webflow: string; nextjs: string }[]
    notePrefix: string
    noteLink: string
    noteSuffix: string
  }
}

export const webdesignGuide: Record<'no' | 'en', WebdesignGuideContent> = {
  no: {
    platforms: {
      label: 'Plattform',
      title: 'Webflow eller Next.js – hva passer for din bedrift?',
      intro: 'Vi bygger nettsider i to plattformer, og valget avhenger av hva nettsiden skal gjøre og hvem som skal oppdatere den. Slik skiller de seg:',
      columns: ['Område', 'Webflow', 'Next.js'],
      rows: [
        { dimension: 'Passer best for', webflow: 'Bedrifter som vil oppdatere innhold selv i et visuelt CMS', nextjs: 'Bedrifter som trenger skreddersydde funksjoner, integrasjoner eller maksimal hastighet' },
        { dimension: 'Oppdatere innhold', webflow: 'Du endrer tekst og bilder direkte på siden', nextjs: 'Via et tilkoblet CMS, eller så gjør vi endringene for deg' },
        { dimension: 'Funksjoner', webflow: 'Godt egnet for nettsider, blogg og skjemaer – avansert logikk krever tredjepartsverktøy', nextjs: 'Ingen begrensninger – booking, innlogging, API-er og egne verktøy' },
        { dimension: 'Drift', webflow: 'Hosting hos Webflow med fast månedlig abonnement', nextjs: 'Hosting på en moderne skyplattform – kostnaden avhenger av trafikk og funksjoner' },
      ],
      notePrefix: 'Usikker? Vi anbefaler plattform i den første samtalen ut fra hva du faktisk trenger – ikke hva vi helst vil bygge. Les mer om ',
      noteLink: 'Webflow-utvikling i Bergen',
      noteSuffix: '.',
    },
  },
  en: {
    platforms: {
      label: 'Platform',
      title: 'Webflow or Next.js — which suits your business?',
      intro: 'We build websites on two platforms, and the choice depends on what the site needs to do and who will update it. This is how they differ:',
      columns: ['Area', 'Webflow', 'Next.js'],
      rows: [
        { dimension: 'Best for', webflow: 'Businesses that want to update content themselves in a visual CMS', nextjs: 'Businesses that need custom features, integrations or maximum speed' },
        { dimension: 'Updating content', webflow: 'You edit text and images directly on the page', nextjs: 'Through a connected CMS, or we make the changes for you' },
        { dimension: 'Features', webflow: 'Well suited to websites, blogs and forms — advanced logic needs third-party tools', nextjs: 'No limits — booking, log-in, APIs and custom tools' },
        { dimension: 'Hosting', webflow: 'Hosted by Webflow on a fixed monthly plan', nextjs: 'Hosted on a modern cloud platform — cost depends on traffic and features' },
      ],
      notePrefix: 'Not sure? We recommend a platform in the first call based on what you actually need — not what we would rather build. Read more about ',
      noteLink: 'Webflow development in Bergen',
      noteSuffix: '.',
    },
  },
}
