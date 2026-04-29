export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.frameflow.no/#organization',
  name: 'Frameflow',
  url: 'https://www.frameflow.no',
  logo: 'https://www.frameflow.no/logo.png',
  image: 'https://www.frameflow.no/og-image.png',
  description:
    'Frameflow er et markedsføringsbyrå i Bergen som leverer webdesign, foto og video, sosiale medier og branding til bedrifter i Bergen og Vestland.',
  telephone: '+4799853781',
  email: 'ivan@frameflow.no',
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
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/frameflow.no',
    'https://www.tiktok.com/@frameflow.no',
  ],
  founder: {
    '@type': 'Person',
    name: 'Ivan Kunne',
    jobTitle: 'Daglig leder',
  },
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
  inLanguage: 'nb-NO',
}
