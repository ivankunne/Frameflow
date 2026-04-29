'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CameraVisual, SocialVisual, BrandVisual } from '@/components/ServiceVisuals'
import { AppMockup } from '@/components/ServiceMockups'

const services = [
  {
    number: '01',
    title: 'Nettsider som rangerer og konverterer',
    shortTitle: 'Web design',
    pricingFrom: 'Fra 15 000 kr',
    href: '/tjenester/webdesign',
    description: 'Profesjonell webdesign i Bergen. Rene, raske nettsider som formidler budskapet ditt tydelig med SEO innebygd fra dag én – fordi en nettside ingen finner ikke er verdt noe.',
    metric: '+140%',
    metricLabel: 'organisk trafikk',
    metricSub: 'Artadent · 3 måneder',
    includes: ['Responsivt design', 'SEO-optimalisering', 'Core Web Vitals', 'CMS-integrasjon', 'Analytics-oppsett'],
    accentHex: '#2172b5',
    visual: 'web' as const,
  },
  {
    number: '02',
    title: 'Apper som løser reelle problemer',
    shortTitle: 'App utvikling',
    pricingFrom: 'Fra 45 000 kr',
    href: '/tjenester/app-utvikling',
    description: 'Skreddersydde webapper og mobilapper for Bergen-bedrifter. Fra MVP til fullskala løsninger – vi bygger apper som jobber for deg, ikke mot deg.',
    metric: '5000+',
    metricLabel: 'daglige interaksjoner',
    metricSub: 'h-orbit · Første måned',
    includes: ['Full-stack utvikling', 'API design og integrasjon', 'Database design', 'Responsiv design', 'Testing og kvalitetssikring', 'Deployment og hosting'],
    accentHex: '#06b6d4',
    visual: 'app' as const,
  },
  {
    number: '03',
    title: 'Innhold som stopper scrollingen og selger',
    shortTitle: 'Foto og videografi',
    pricingFrom: 'Fra 4 500 kr',
    href: '/tjenester/foto-og-videografi',
    description: 'Foto og video produksjon i Bergen. Autentisk visuelt innhold som ser profesjonelt ut og forteller din historie – for sosiale medier, nettsider og alt imellom.',
    metric: '4K',
    metricLabel: 'profesjonelt innhold',
    metricSub: 'Levert klart til publisering',
    includes: ['Produktfotografering', 'Video for sosiale medier', 'Reels og TikTok', 'Redigering', 'Alle formater'],
    accentHex: '#c2410c',
    visual: 'camera' as const,
  },
  {
    number: '04',
    title: 'Sosiale medier som vokser, engasjerer og konverterer',
    shortTitle: 'Sosiale medier',
    pricingFrom: 'Fra 3 500 kr/mnd',
    href: '/tjenester/sosiale-medier',
    description: 'Sosiale medier-håndtering for Bergen-bedrifter. Fra innholdsproduksjon til strategi og community management – konsekvent, autentisk og alltid på merkevaren din.',
    metric: '+890',
    metricLabel: 'følgere på 3 måneder',
    metricSub: 'Bergen Bakeri · Instagram',
    includes: ['Innholdskalender', 'Instagram, TikTok, LinkedIn', 'Hashtag-strategi', 'Community management', 'Månedlig rapportering'],
    accentHex: '#7c3aed',
    visual: 'social' as const,
  },
  {
    number: '05',
    title: 'En merkevare som skiller seg ut og huskes',
    shortTitle: 'Branding',
    pricingFrom: 'Fra 8 000 kr',
    href: '/tjenester/branding',
    description: 'Profesjonell branding for bedrifter i Bergen. Vi former utseendet, stemmen og følelsen av merkevaren din – fra logo til komplette brand guidelines. Konsekvent og umiskjennelig.',
    metric: '100%',
    metricLabel: 'komplett brandpakke',
    metricSub: 'Logo · Type · Farger · Maler',
    includes: ['Logo og identitet', 'Fargepalett og typografi', 'Brand guidelines', 'Visittkort', 'Digitale maler'],
    accentHex: '#0f172a',
    visual: 'brand' as const,
  },
] as const

export default function TjenesterClient() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-6 lg:px-8 bg-white overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(33,114,181,0.07) 0%, transparent 65%)' }}
        />
        <div className="max-w-7xl mx-auto relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
          >
            Hva vi gjør
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', damping: 20, stiffness: 150, delay: 0.08 }}
            className="display-text text-4xl sm:text-5xl lg:text-7xl text-fg max-w-3xl mb-6 leading-[1.08]"
          >
            Tjenester som{' '}
            <span className="gradient-text">faktisk virker</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-fg-muted text-lg max-w-2xl leading-relaxed mb-10"
          >
            Fem tjenester. Ett mål: å gi din Bergen-bedrift en digital tilstedeværelse som faktisk konverterer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-fg-muted"
          >
            {['05 tjenester', '20+ prosjekter levert', 'Bergen, Norge', 'Svar innen 24 timer'].map((s) => (
              <span key={s} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <ServiceSection key={service.number} service={service} index={i} />
      ))}

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 lg:px-8 bg-accent relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-white mb-3">Klar for å komme i gang?</h2>
            <p className="text-white/75 max-w-xl leading-relaxed">Gratis konsultasjon. Svar innen 24 timer. Ingen forpliktelser.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/tilbud" className="text-sm font-semibold bg-white text-accent hover:bg-white/90 px-8 py-4 rounded-xl transition-colors min-h-[44px] flex items-center shadow-lg">
              Be om tilbud
            </Link>
            <Link href="/kontakt" className="text-sm font-semibold border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 px-8 py-4 rounded-xl transition-all min-h-[44px] flex items-center">
              Ta kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceVisual({ visual, accentHex, visible }: { visual: (typeof services)[0]['visual']; accentHex: string; visible: boolean }) {
  if (visual === 'web') {
    return (
      <div className="h-full w-full rounded-xl overflow-hidden border border-border bg-white shadow-card-hover flex flex-col">
        {/* Browser chrome */}
        <div className="bg-bg-2 border-b border-border px-4 py-2.5 flex items-center gap-2.5 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-white border border-border rounded px-2 py-1 flex items-center gap-1.5 min-w-0">
            <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            <span className="text-[10px] text-fg-muted font-mono truncate">artadent.no</span>
          </div>
          <div className="bg-accent text-white text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0">100</div>
        </div>
        {/* Page preview */}
        <div className="flex-1 p-4 space-y-3">
          <div className="h-16 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/10 flex items-center px-4 gap-3">
            <div className="space-y-1.5 flex-1">
              <div className="h-2 w-3/4 bg-fg/20 rounded" />
              <div className="h-1.5 w-1/2 bg-fg/10 rounded" />
            </div>
            <div className="h-7 w-14 rounded-md shrink-0" style={{ background: accentHex }} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(j => (
              <div key={j} className="h-10 rounded-lg bg-bg-2 border border-border" />
            ))}
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full bg-fg/8 rounded" />
            <div className="h-1.5 w-5/6 bg-fg/6 rounded" />
            <div className="h-1.5 w-4/6 bg-fg/5 rounded" />
          </div>
        </div>
        {/* Speed badge */}
        <div className="px-4 pb-4 flex items-center gap-2">
          <div className="flex-1 h-1.5 rounded-full bg-bg-2 overflow-hidden">
            <div className="h-full w-[92%] rounded-full" style={{ background: accentHex }} />
          </div>
          <span className="text-[10px] font-semibold text-accent shrink-0">0.8s</span>
        </div>
      </div>
    )
  }

  if (visual === 'app') return <AppMockup visible={visible} />
  if (visual === 'camera') return <CameraVisual visible={visible} />
  if (visual === 'social') return <SocialVisual visible={visible} />
  // brand
  return <BrandVisual visible={visible} />
}

function ServiceSection({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 === 0

  return (
    <section ref={ref} className={`relative py-16 md:py-24 lg:py-32 px-6 lg:px-8 overflow-hidden ${isEven ? 'bg-bg-2' : 'bg-white'}`}>
      {/* Watermark number */}
      <div
        className="absolute -bottom-8 right-0 select-none pointer-events-none"
        style={{
          fontFamily: 'var(--font-bricolage)',
          fontSize: 'clamp(100px, 18vw, 220px)',
          fontWeight: 700,
          color: service.accentHex,
          opacity: 0.04,
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        {service.number}
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text — swap order on odd */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={isEven ? 'lg:order-1' : 'lg:order-2'}
          >
            {/* Service label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs font-semibold text-fg-muted">{service.number}</span>
              <span className="h-px flex-1 max-w-[32px] bg-border" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: service.accentHex }}>
                {service.shortTitle}
              </span>
              {service.pricingFrom && (
                <span className="ml-auto text-xs font-semibold text-fg-muted bg-bg-2 border border-border px-2.5 py-1 rounded-full">
                  {service.pricingFrom}
                </span>
              )}
            </div>

            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg mb-5 leading-[1.1]">
              {service.title}
            </h2>
            <p className="text-fg-muted leading-relaxed mb-8 text-base lg:text-lg">
              {service.description}
            </p>

            {/* Includes */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {service.includes.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-fg-muted">
                  <span
                    className="w-4 h-4 rounded-md flex items-center justify-center shrink-0 text-[9px] font-bold"
                    style={{ background: service.accentHex + '18', color: service.accentHex, border: `1px solid ${service.accentHex}25` }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={service.href}
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] bg-white border border-border hover:border-accent hover:text-accent shadow-card group"
              style={{ color: service.accentHex + 'cc' }}
            >
              Les mer om {service.shortTitle.toLowerCase()}
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20, scale: 0.97 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${isEven ? 'lg:order-2' : 'lg:order-1'} relative`}
          >
            <div className="h-72 sm:h-80 lg:h-96">
              <ServiceVisual visual={service.visual} accentHex={service.accentHex} visible={isInView} />
            </div>

            {/* Metric badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.5 }}
              className={`absolute -bottom-4 ${isEven ? '-right-4' : '-left-4'} bg-white border border-border rounded-xl px-4 py-3 shadow-card-hover flex items-center gap-3`}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                style={{ background: service.accentHex + '15', color: service.accentHex, border: `1px solid ${service.accentHex}25` }}
              >
                ↑
              </div>
              <div>
                <p className="text-sm font-bold text-fg leading-tight">{service.metric} {service.metricLabel}</p>
                <p className="text-[10px] text-fg-muted mt-0.5">{service.metricSub}</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
