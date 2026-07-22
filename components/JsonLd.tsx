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
    'Frameflow er et markedsføringsbyrå i Bergen som leverer webdesign, foto og video, sosiale medier og branding til bedrifter i Bergen og Vestland.',
  telephone: '+4799853781',
  email: 'ivan@frameflow.no',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 60.3913,
    longitude: 5.3221,
  },
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
    'Digital markedsføring',
    'Sosiale medier',
    'Foto og videografi',
    'Branding',
    'SEO',
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
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.frameflow.no/blogg?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
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
