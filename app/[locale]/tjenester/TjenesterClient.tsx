'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { CameraVisual, SocialVisual, BrandVisual, SEOVisual, AIVisual } from '@/components/ServiceVisuals'
import { AppMockup } from '@/components/ServiceMockups'

type ServiceEntry = {
  number: string
  title: string
  shortTitle: string
  pricingFrom: string
  href: string
  description: string
  metric: string
  metricLabel: string
  metricSub: string
  includes: readonly string[]
  accentHex: string
  visual: 'web' | 'app' | 'camera' | 'social' | 'brand' | 'seo' | 'ai'
}

const servicesData: Record<'no' | 'en', ServiceEntry[]> = {
  no: [
    {
      number: '01', visual: 'web', accentHex: '#2172b5',
      href: '/tjenester/webdesign',
      shortTitle: 'Web design', pricingFrom: 'Fra 15 000 kr',
      title: 'Nettsider som rangerer og konverterer',
      description: 'Profesjonell webdesign i Bergen. Rene, raske nettsider som formidler budskapet ditt tydelig med SEO innebygd fra dag én – fordi en nettside ingen finner ikke er verdt noe.',
      metric: '+140%', metricLabel: 'organisk trafikk', metricSub: 'Sportsbytte · etter lansering',
      includes: ['Responsivt design', 'SEO-optimalisering', 'Core Web Vitals', 'CMS-integrasjon', 'Analytics-oppsett'],
    },
    {
      number: '02', visual: 'app', accentHex: '#06b6d4',
      href: '/tjenester/app-utvikling',
      shortTitle: 'App utvikling', pricingFrom: 'Fra 45 000 kr',
      title: 'Apper som løser reelle problemer',
      description: 'Skreddersydde webapper og mobilapper for Bergen-bedrifter. Fra MVP til fullskala løsninger – vi bygger apper som jobber for deg, ikke mot deg.',
      metric: '5000+', metricLabel: 'daglige interaksjoner', metricSub: 'h-orbit · Første måned',
      includes: ['Full-stack utvikling', 'API design og integrasjon', 'Database design', 'Responsiv design', 'Testing og kvalitetssikring', 'Deployment og hosting'],
    },
    {
      number: '03', visual: 'camera', accentHex: '#c2410c',
      href: '/tjenester/foto-og-videografi',
      shortTitle: 'Foto og videografi', pricingFrom: 'Fra 4 500 kr',
      title: 'Innhold som stopper scrollingen og selger',
      description: 'Foto og video produksjon i Bergen. Autentisk visuelt innhold som ser profesjonelt ut og forteller din historie – for sosiale medier, nettsider og alt imellom.',
      metric: '4K', metricLabel: 'profesjonelt innhold', metricSub: 'Levert klart til publisering',
      includes: ['Produktfotografering', 'Video for sosiale medier', 'Reels og TikTok', 'Redigering', 'Alle formater'],
    },
    {
      number: '04', visual: 'social', accentHex: '#7c3aed',
      href: '/tjenester/sosiale-medier',
      shortTitle: 'Sosiale medier', pricingFrom: 'Fra 3 500 kr/mnd',
      title: 'Sosiale medier som vokser, engasjerer og konverterer',
      description: 'Sosiale medier-håndtering for Bergen-bedrifter. Fra innholdsproduksjon til strategi og community management – konsekvent, autentisk og alltid på merkevaren din.',
      metric: '+890', metricLabel: 'følgere på 3 måneder', metricSub: 'GV Rentals · Instagram',
      includes: ['Innholdskalender', 'Instagram, TikTok, LinkedIn', 'Hashtag-strategi', 'Community management', 'Månedlig rapportering'],
    },
    {
      number: '05', visual: 'brand', accentHex: '#0f172a',
      href: '/tjenester/branding',
      shortTitle: 'Branding', pricingFrom: 'Fra 8 000 kr',
      title: 'En merkevare som skiller seg ut og huskes',
      description: 'Profesjonell branding for bedrifter i Bergen. Vi former utseendet, stemmen og følelsen av merkevaren din – fra logo til komplette brand guidelines. Konsekvent og umiskjennelig.',
      metric: '100%', metricLabel: 'komplett brandpakke', metricSub: 'Logo · Type · Farger · Maler',
      includes: ['Logo og identitet', 'Fargepalett og typografi', 'Brand guidelines', 'Visittkort', 'Digitale maler'],
    },
    {
      number: '06', visual: 'seo', accentHex: '#16a34a',
      href: '/tjenester/seo',
      shortTitle: 'SEO', pricingFrom: 'Fra 4 500 kr/mnd',
      title: 'SEO som gir deg kunder fra Google',
      description: 'Søkemotoroptimalisering for Bergen-bedrifter. Vi hjelper deg til side 1 på Google med lokal SEO, teknisk optimalisering og innhold som rangerer – og bli funnet av folk som aktivt søker etter det du tilbyr.',
      metric: '#1', metricLabel: 'på Google', metricSub: 'markedsføring Bergen',
      includes: ['Teknisk SEO-revisjon', 'Lokal SEO Bergen', 'Søkeordsanalyse', 'Innholdsoptimalisering', 'Google Search Console'],
    },
    {
      number: '07', visual: 'ai', accentHex: '#6366f1',
      href: '/tjenester/ai-automasjon',
      shortTitle: 'AI Automasjon', pricingFrom: 'Fra 8 000 kr',
      title: 'Automasjon som jobber mens du sover',
      description: 'AI-automasjon for Bergen-bedrifter. Vi bygger systemer som håndterer henvendelser, kvalifiserer leads og oppdaterer CRM automatisk – uten manuell innsats. Du fokuserer på det som faktisk vokser bedriften.',
      metric: '47', metricLabel: 'timer spart/mnd', metricSub: 'Gjennomsnitt · små bedrifter',
      includes: ['Automatisk henvendelseshåndtering', 'AI-chatbot 24/7', 'Lead-kvalifisering', 'CRM-integrasjon', 'E-postsekvenser', 'Make / n8n / Zapier'],
    },
  ],
  en: [
    {
      number: '01', visual: 'web', accentHex: '#2172b5',
      href: '/tjenester/webdesign',
      shortTitle: 'Web design', pricingFrom: 'From 15,000 kr',
      title: 'Websites that rank and convert',
      description: 'Professional web design in Bergen. Clean, fast websites that communicate your message clearly with SEO built in from day one – because a website no one finds is worth nothing.',
      metric: '+140%', metricLabel: 'organic traffic', metricSub: 'Sportsbytte · after launch',
      includes: ['Responsive design', 'SEO optimisation', 'Core Web Vitals', 'CMS integration', 'Analytics setup'],
    },
    {
      number: '02', visual: 'app', accentHex: '#06b6d4',
      href: '/tjenester/app-utvikling',
      shortTitle: 'App development', pricingFrom: 'From 45,000 kr',
      title: 'Apps that solve real problems',
      description: 'Custom web apps and mobile apps for Bergen businesses. From MVP to full-scale solutions – we build apps that work for you, not against you.',
      metric: '5000+', metricLabel: 'daily interactions', metricSub: 'h-orbit · First month',
      includes: ['Full-stack development', 'API design and integration', 'Database design', 'Responsive design', 'Testing and QA', 'Deployment and hosting'],
    },
    {
      number: '03', visual: 'camera', accentHex: '#c2410c',
      href: '/tjenester/foto-og-videografi',
      shortTitle: 'Photo & video', pricingFrom: 'From 4,500 kr',
      title: 'Content that stops the scroll and sells',
      description: 'Photo and video production in Bergen. Authentic visual content that looks professional and tells your story – for social media, websites and everything in between.',
      metric: '4K', metricLabel: 'professional content', metricSub: 'Delivered ready to publish',
      includes: ['Product photography', 'Video for social media', 'Reels and TikTok', 'Editing', 'All formats'],
    },
    {
      number: '04', visual: 'social', accentHex: '#7c3aed',
      href: '/tjenester/sosiale-medier',
      shortTitle: 'Social media', pricingFrom: 'From 3,500 kr/mo',
      title: 'Social media that grows, engages and converts',
      description: 'Social media management for Bergen businesses. From content production to strategy and community management – consistent, authentic and always on brand.',
      metric: '+890', metricLabel: 'followers in 3 months', metricSub: 'GV Rentals · Instagram',
      includes: ['Content calendar', 'Instagram, TikTok, LinkedIn', 'Hashtag strategy', 'Community management', 'Monthly reporting'],
    },
    {
      number: '05', visual: 'brand', accentHex: '#0f172a',
      href: '/tjenester/branding',
      shortTitle: 'Branding', pricingFrom: 'From 8,000 kr',
      title: 'A brand that stands out and is remembered',
      description: 'Professional branding for businesses in Bergen. We shape the look, voice and feel of your brand – from logo to complete brand guidelines. Consistent and unmistakable.',
      metric: '100%', metricLabel: 'complete brand package', metricSub: 'Logo · Type · Colours · Templates',
      includes: ['Logo and identity', 'Colour palette and typography', 'Brand guidelines', 'Business cards', 'Digital templates'],
    },
    {
      number: '06', visual: 'seo', accentHex: '#16a34a',
      href: '/tjenester/seo',
      shortTitle: 'SEO', pricingFrom: 'From 4,500 kr/mo',
      title: 'SEO that brings you customers from Google',
      description: 'Search engine optimisation for Bergen businesses. We help you reach page 1 on Google with local SEO, technical optimisation and content that ranks – so you get found by people actively searching for what you offer.',
      metric: '#1', metricLabel: 'on Google', metricSub: 'marketing Bergen',
      includes: ['Technical SEO audit', 'Local SEO Bergen', 'Keyword analysis', 'Content optimisation', 'Google Search Console'],
    },
    {
      number: '07', visual: 'ai', accentHex: '#6366f1',
      href: '/tjenester/ai-automasjon',
      shortTitle: 'AI Automation', pricingFrom: 'From 8,000 kr',
      title: 'Automation that works while you sleep',
      description: 'AI automation for Bergen businesses. We build systems that handle enquiries, qualify leads and update CRM automatically – without manual effort. You focus on what actually grows your business.',
      metric: '47', metricLabel: 'hours saved/mo', metricSub: 'Average · small businesses',
      includes: ['Automatic enquiry handling', 'AI chatbot 24/7', 'Lead qualification', 'CRM integration', 'Email sequences', 'Make / n8n / Zapier'],
    },
  ],
}

export default function TjenesterClient() {
  const t = useTranslations('services.index')
  const locale = useLocale()
  const services = servicesData[locale === 'en' ? 'en' : 'no']
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
            {t('label')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', damping: 20, stiffness: 150, delay: 0.08 }}
            className="display-text text-4xl sm:text-5xl lg:text-7xl text-fg max-w-3xl mb-6 leading-[1.08]"
          >
            {t('h1Part1')}{' '}
            <span className="gradient-text">{t('h1Part2')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-fg-muted text-lg max-w-2xl leading-relaxed mb-10"
          >
            {t('description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-fg-muted"
          >
            {[t('stat1'), t('stat2'), t('stat3'), t('stat4')].map((s) => (
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
        <ServiceSection key={service.number} service={service} index={i} readMoreLabel={t('readMore')} />
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
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-white mb-3">{t('ctaH2')}</h2>
            <p className="text-white/75 max-w-xl leading-relaxed">{t('ctaDesc')}</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/tilbud" className="text-sm font-semibold bg-white text-accent hover:bg-white/90 px-8 py-4 rounded-xl transition-colors min-h-[44px] flex items-center shadow-lg">
              {t('ctaQuote')}
            </Link>
            <Link href="/kontakt" className="text-sm font-semibold border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 px-8 py-4 rounded-xl transition-all min-h-[44px] flex items-center">
              {t('ctaContact')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceVisual({ visual, accentHex, visible }: { visual: ServiceEntry['visual']; accentHex: string; visible: boolean }) {
  if (visual === 'web') {
    return (
      <div className="h-full w-full rounded-xl overflow-hidden border border-border bg-white shadow-card-hover flex flex-col">
        <div className="bg-bg-2 border-b border-border px-4 py-2.5 flex items-center gap-2.5 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-white border border-border rounded px-2 py-1 flex items-center gap-1.5 min-w-0">
            <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            <span className="text-[10px] text-fg-muted font-mono truncate">sportsbytte.no</span>
          </div>
          <div className="bg-accent text-white text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0">100</div>
        </div>
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
  if (visual === 'seo') return <SEOVisual visible={visible} />
  if (visual === 'ai') return <AIVisual visible={visible} />
  return <BrandVisual visible={visible} />
}

function ServiceSection({ service, index, readMoreLabel }: { service: ServiceEntry; index: number; readMoreLabel: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 === 0

  return (
    <section ref={ref} className={`relative py-16 md:py-24 lg:py-32 px-6 lg:px-8 overflow-hidden ${isEven ? 'bg-bg-2' : 'bg-white'}`}>
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

          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={isEven ? 'lg:order-1' : 'lg:order-2'}
          >
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
              href={service.href as any}
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] bg-white border border-border hover:border-accent hover:text-accent shadow-card group"
              style={{ color: service.accentHex + 'cc' }}
            >
              {readMoreLabel} {service.shortTitle.toLowerCase()}
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20, scale: 0.97 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${isEven ? 'lg:order-2' : 'lg:order-1'} relative`}
          >
            <div className="h-72 sm:h-80 lg:h-96">
              <ServiceVisual visual={service.visual} accentHex={service.accentHex} visible={isInView} />
            </div>

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
