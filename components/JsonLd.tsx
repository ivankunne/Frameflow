export function JsonLd({ data }: { data: object }) {
  // Escape </script> and HTML comment sequences so schema values can never
  // prematurely close the tag or break out into raw markup.
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://www.frameflow.no/#organization',
  name: 'Frameflow',
  url: 'https://www.frameflow.no',
  logo: 'https://www.frameflow.no/logo.png',
  image: 'https://www.frameflow.no/og-image.png',
  description:
    'Frameflow er et markedsføringsbyrå og webbyrå i Bergen (org.nr. 936 600 018) som leverer webdesign, SEO, foto og video, sosiale medier, branding og AI-tjenester til bedrifter i Bergen, Vestland og Norge. Grunnlagt av Ivan Kunne.',
  telephone: '+4799853781',
  email: 'ivan@frameflow.no',
  foundingDate: '2025',
  vatID: 'NO936600018MVA',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'NO:organisasjonsnummer',
    value: '936600018',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Damsgårdsveien 83a',
    addressLocality: 'Bergen',
    postalCode: '5058',
    addressCountry: 'NO',
    addressRegion: 'Vestland',
  },
  // OpenStreetMap node for Damsgårdsveien 83A, 5058 Bergen (Gyldenpris / Årstad)
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 60.381299,
    longitude: 5.320508,
  },
  hasMap:
    'https://www.google.com/maps/search/?api=1&query=Damsg%C3%A5rdsveien+83a+5058+Bergen',
  areaServed: [
    { '@type': 'City', name: 'Bergen' },
    { '@type': 'AdministrativeArea', name: 'Vestland' },
    { '@type': 'Country', name: 'Norge' },
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/frameflow_no/',
    'https://www.tiktok.com/@frameflow.no',
    'https://www.linkedin.com/in/frameflow-ivan-kunne-612106398/',
    'https://share.google/Lvsa0adlhzqe8wl5P',
    'https://data.brreg.no/enhetsregisteret/api/enheter/936600018',
  ],
  founder: {
    '@id': 'https://www.frameflow.no/#ivan-kunne',
  },
  potentialAction: [
    {
      '@type': 'ContactAction',
      target: 'https://www.frameflow.no/kontakt',
      name: 'Kontakt Frameflow',
    },
    {
      '@type': 'ReserveAction',
      target: 'https://www.frameflow.no/kontakt',
      name: 'Book gratis samtale med Frameflow',
    },
  ],
  knowsAbout: [
    'Webdesign',
    'Webflow',
    'Next.js',
    'Digital markedsføring',
    'Sosiale medier',
    'Foto og videografi',
    'Branding',
    'SEO',
    'Lokal SEO Bergen',
    'Markedsføring Vestland',
    'AI-automasjon',
    'AI SEO',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.frameflow.no/#website',
  name: 'Frameflow',
  url: 'https://www.frameflow.no',
  publisher: {
    '@id': 'https://www.frameflow.no/#organization',
  },
  inLanguage: ['nb-NO', 'en'],
  // SearchAction omitted until /blogg exposes a real search results UI for ?q=.
  // Declaring a broken SearchAction risks Rich Results rejection.
}

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.frameflow.no/#ivan-kunne',
  name: 'Ivan Kunne',
  jobTitle: 'Daglig leder',
  url: 'https://www.frameflow.no/om-oss',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.frameflow.no/ivan-about.jpg',
  },
  sameAs: [
    'https://www.linkedin.com/in/frameflow-ivan-kunne-612106398/',
  ],
  worksFor: {
    '@id': 'https://www.frameflow.no/#organization',
  },
  knowsAbout: [
    'Webdesign',
    'Digital markedsføring',
    'Sosiale medier',
    'Foto og videografi',
    'Branding',
    'SEO',
    'App utvikling',
  ],
}
