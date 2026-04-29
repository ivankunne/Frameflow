import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Personvernserklæring – Frameflow Bergen',
  description:
    'Les om hvordan Frameflow behandler personopplysninger, hvilke data vi samler inn og dine rettigheter under GDPR.',
  alternates: { canonical: 'https://www.frameflow.no/personvern' },
  openGraph: {
    title: 'Personvernserklæring – Frameflow Bergen',
    description: 'Les om hvordan Frameflow behandler personopplysninger, hvilke data vi samler inn og dine rettigheter under GDPR.',
    url: 'https://www.frameflow.no/personvern',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  twitter: {
    card: 'summary_large_image',
    title: 'Personvernserklæring – Frameflow Bergen',
    description: 'Les om hvordan Frameflow behandler personopplysninger, hvilke data vi samler inn og dine rettigheter under GDPR.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Personvern', item: 'https://www.frameflow.no/personvern' },
  ],
}

export default function PersonvernPage() {
  return (
    <>
    <JsonLd data={breadcrumbSchema} />
    <section className="pt-32 pb-24 px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Brødsmuler" className="flex items-center gap-2 text-xs text-fg-muted mb-10">
          <Link href="/" className="hover:text-fg transition-colors">Hjem</Link>
          <span>/</span>
          <span className="text-fg">Personvern</span>
        </nav>

        <span className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          GDPR-informasjon
        </span>
        <h1 className="display-text text-4xl lg:text-5xl text-fg mb-4">Personvernserklæring</h1>
        <p className="text-fg-muted mb-10">Sist oppdatert: mars 2026</p>

        <div className="prose-custom space-y-10">

          <div>
            <h2 className="display-text text-2xl text-fg mb-3">1. Behandlingsansvarlig</h2>
            <p className="text-fg-muted leading-relaxed">
              Frameflow v/ Ivan Kunne er behandlingsansvarlig for personopplysninger som samles inn via denne nettsiden.
            </p>
            <div className="mt-4 bg-bg-2 border border-border rounded-xl p-5 text-sm text-fg-muted space-y-1">
              <p><span className="font-medium text-fg">Organisasjon:</span> Frameflow</p>
              <p><span className="font-medium text-fg">Org.nr:</span> 934 205 156</p>
              <p><span className="font-medium text-fg">Adresse:</span> Damsgårdsveien 83a, 5058 Bergen</p>
              <p><span className="font-medium text-fg">E-post:</span>{' '}
                <a href="mailto:ivan@frameflow.no" className="text-accent hover:underline">ivan@frameflow.no</a>
              </p>
              <p><span className="font-medium text-fg">Telefon:</span>{' '}
                <a href="tel:+4799853781" className="text-accent hover:underline">+47 99 85 37 81</a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="display-text text-2xl text-fg mb-3">2. Hvilke opplysninger samler vi inn?</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Vi samler kun inn opplysninger du selv oppgir når du tar kontakt med oss via nettsiden:
            </p>
            <ul className="flex flex-col gap-2">
              {[
                'Navn',
                'E-postadresse',
                'Telefonnummer (valgfritt)',
                'Bedriftsnavn (valgfritt)',
                'Innholdet i meldingen eller tilbudsforespørselen din',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-fg-muted text-sm">
                  <span className="w-4 h-4 rounded-md bg-accent-light border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-accent text-[9px] font-bold">✓</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-fg-muted leading-relaxed mt-4">
              Vi samler ikke inn personopplysninger automatisk ved vanlig besøk på nettsiden, og vi bruker ikke tredjeparts sporingsverktøy som Google Analytics uten ditt samtykke.
            </p>
          </div>

          <div>
            <h2 className="display-text text-2xl text-fg mb-3">3. Formål og behandlingsgrunnlag</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Opplysningene du oppgir brukes utelukkende til å besvare din henvendelse og eventuelt inngå et samarbeidsforhold.
            </p>
            <div className="bg-bg-2 border border-border rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 text-xs font-semibold text-fg-muted uppercase tracking-widest border-b border-border px-5 py-3">
                <span>Formål</span>
                <span>Behandlingsgrunnlag</span>
              </div>
              {[
                ['Besvare henvendelser via kontaktskjema', 'Berettiget interesse (GDPR art. 6(1)(f))'],
                ['Sende tilbud og prisinformasjon', 'Berettiget interesse / forhåndssamtykke'],
                ['Oppfylle avtaler med kunder', 'Avtalens gjennomføring (GDPR art. 6(1)(b))'],
              ].map(([formål, grunnlag]) => (
                <div key={formål} className="grid grid-cols-2 text-sm px-5 py-3 border-b border-border last:border-0">
                  <span className="text-fg-muted">{formål}</span>
                  <span className="text-fg-muted">{grunnlag}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="display-text text-2xl text-fg mb-3">4. Lagring og sletting</h2>
            <p className="text-fg-muted leading-relaxed">
              Vi lagrer dine opplysninger kun så lenge det er nødvendig for det formålet de ble samlet inn. Henvendelser der det ikke inngås avtale slettes normalt innen 12 måneder. Opplysninger knyttet til aktive kundeforhold oppbevares i henhold til regnskapslovens krav (5 år).
            </p>
          </div>

          <div>
            <h2 className="display-text text-2xl text-fg mb-3">5. Informasjonskapsler (cookies)</h2>
            <p className="text-fg-muted leading-relaxed">
              Nettsiden bruker funksjonelle informasjonskapsler som er nødvendige for at skjemaer og navigasjon skal fungere. Vi bruker ikke tredjeparts markedsføringscookies uten eksplisitt samtykke. Samtykket ditt lagres i nettleseren din og kan når som helst trekkes tilbake ved å slette nettleserens lagringsdata.
            </p>
          </div>

          <div>
            <h2 className="display-text text-2xl text-fg mb-3">6. Dine rettigheter</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Under GDPR har du følgende rettigheter knyttet til dine personopplysninger:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                ['Rett til innsyn', 'Du kan be om å se hvilke opplysninger vi har om deg.'],
                ['Rett til retting', 'Du kan be om å korrigere uriktige opplysninger.'],
                ['Rett til sletting', 'Du kan be om at opplysningene dine slettes («retten til å bli glemt»).'],
                ['Rett til begrensning', 'Du kan be oss om å begrense behandlingen av dine opplysninger.'],
                ['Rett til å protestere', 'Du kan protestere mot behandling basert på berettiget interesse.'],
                ['Rett til dataportabilitet', 'Du kan be om å motta dine opplysninger i et maskinlesbart format.'],
              ].map(([tittel, beskrivelse]) => (
                <li key={tittel} className="flex items-start gap-3 text-sm">
                  <span className="w-4 h-4 rounded-md bg-accent-light border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-accent text-[9px] font-bold">✓</span>
                  </span>
                  <span>
                    <span className="font-medium text-fg">{tittel}: </span>
                    <span className="text-fg-muted">{beskrivelse}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-fg-muted leading-relaxed mt-4">
              For å utøve dine rettigheter, kontakt oss på{' '}
              <a href="mailto:ivan@frameflow.no" className="text-accent hover:underline font-medium">ivan@frameflow.no</a>.
              Vi svarer innen 30 dager.
            </p>
          </div>

          <div>
            <h2 className="display-text text-2xl text-fg mb-3">7. Klagerett</h2>
            <p className="text-fg-muted leading-relaxed">
              Dersom du mener vi behandler dine personopplysninger i strid med GDPR, har du rett til å klage til{' '}
              <a
                href="https://www.datatilsynet.no"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Datatilsynet
              </a>
              {' '}(datatilsynet.no).
            </p>
          </div>

          <div>
            <h2 className="display-text text-2xl text-fg mb-3">8. Endringer</h2>
            <p className="text-fg-muted leading-relaxed">
              Vi kan oppdatere denne personvernserklæringen ved behov. Datoen øverst på siden viser når den sist ble oppdatert. Vi oppfordrer deg til å lese erklæringen regelmessig.
            </p>
          </div>

        </div>

        <div className="mt-16 p-6 bg-accent-light border border-accent/20 rounded-2xl">
          <h3 className="display-text text-xl text-fg mb-2">Spørsmål om personvern?</h3>
          <p className="text-fg-muted text-sm mb-5">Ta kontakt med Ivan direkte – vi svarer raskt.</p>
          <Link
            href="/kontakt"
            className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] inline-flex items-center shadow-blue-sm"
          >
            Ta kontakt
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
