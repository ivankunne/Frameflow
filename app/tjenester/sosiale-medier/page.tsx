import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Sosiale medier i Bergen',
  description:
    'Profesjonell håndtering av sosiale medier for Bergen-bedrifter. Innholdsproduksjon, strategi og community management. Ta kontakt i dag.',
  alternates: { canonical: 'https://www.frameflow.no/tjenester/sosiale-medier' },
  openGraph: {
    title: 'Sosiale medier i Bergen | Frameflow',
    description: 'Profesjonell håndtering av sosiale medier for Bergen-bedrifter. Innholdsproduksjon, strategi og community management. Ta kontakt i dag.',
    url: 'https://www.frameflow.no/tjenester/sosiale-medier',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sosiale medier i Bergen | Frameflow',
    description: 'Profesjonell håndtering av sosiale medier for Bergen-bedrifter. Innholdsproduksjon, strategi og community management.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Tjenester', item: 'https://www.frameflow.no/tjenester' },
    { '@type': 'ListItem', position: 3, name: 'Sosiale medier', item: 'https://www.frameflow.no/tjenester/sosiale-medier' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sosiale medier i Bergen',
  provider: { '@id': 'https://www.frameflow.no/#organization' },
  description: 'Profesjonell håndtering av sosiale medier for Bergen-bedrifter. Innholdsproduksjon, strategi og community management.',
  areaServed: { '@type': 'City', name: 'Bergen' },
}

export default function SosialeMedierPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <ServicePageTemplate
        label="Tjeneste"
        title="Sosiale medier som vokser, engasjerer og konverterer"
        description="Vi håndterer alt fra innholdsproduksjon til strategi og community management – slik at sosiale medier profilen din alltid er fersk, autentisk og profesjonell."
        longDescription="Sosiale medier er ikke lenger valgfritt. Men uten en klar strategi kaster du bort tid og penger. Vi hjelper Bergen-bedrifter med å bygge en sterk tilstedeværelse som faktisk engasjerer og konverterer – med innhold som passer hver plattform."
        includes={[
          'Innholdsstrategi og innholdskalender',
          'Foto og video-produksjon for sosiale medier',
          'Instagram, TikTok, Facebook, LinkedIn',
          'Hashtag-strategi og rekkeviddeoptimalisering',
          'Community management og kommentarsvar',
          'Månedlig analyse og rapportering',
          'Betalt annonsering (Facebook/Instagram Ads)',
        ]}
        process={[
          {
            step: '01',
            title: 'Strategi',
            description: 'Vi analyserer målgruppen din, konkurrenter og nåværende tilstedeværelse. Vi definerer mål og plattformstrategi.',
          },
          {
            step: '02',
            title: 'Innholdsproduksjon',
            description: 'Vi planlegger, produserer og publiserer innhold konsekvent. Du godkjenner alt på forhånd.',
          },
          {
            step: '03',
            title: 'Vekst og optimalisering',
            description: 'Vi analyserer hva som fungerer og tilpasser strategien løpende for maksimal vekst.',
          },
        ]}
        relatedServices={[
          { title: 'Foto og videografi', href: '/tjenester/foto-og-videografi' },
          { title: 'Branding', href: '/tjenester/branding' },
          { title: 'Web design', href: '/tjenester/webdesign' },
        ]}
        mockupType="social"
        pricingFrom="3 500 kr / mnd"
      />
    </>
  )
}
