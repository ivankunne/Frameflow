'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from '@/lib/constants'

function CountUp({ end, suffix = '', start = 0, duration = 1.8, triggered }: {
  end: number; suffix?: string; start?: number; duration?: number; triggered: boolean
}) {
  const [display, setDisplay] = useState(start)

  useEffect(() => {
    if (!triggered) return
    const controls = animate(start, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [triggered, end, start, duration])

  return <>{display}{suffix}</>
}

export default function OmOssClient() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true, margin: '-80px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
          >
            Om Frameflow
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-text text-5xl lg:text-7xl text-fg max-w-4xl mb-6"
          >
            Markedsføringsbyrå i Bergen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-fg-muted text-lg max-w-2xl leading-relaxed mb-8"
          >
            Frameflow hjelper bedrifter i Bergen og Vestland med digital vekst. Med ekspertise innen webdesign, sosiale medier, foto og video, og branding gir vi din bedrift verktøyene til å nå sitt publikum.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link href="/kontakt" className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] inline-flex items-center gap-2 shadow-blue-sm">
              Ta kontakt
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section ref={aboutRef} className="py-24 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border relative shadow-card-hover">
              <Image
                src="/ivan-about.jpg"
                alt="Ivan Kunne – Daglig leder, Frameflow"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-blue-400" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-4 h-px bg-accent" /> Møt teamet
            </span>
            <h2 className="display-text text-4xl text-fg mb-5">Ivan Kunne — Daglig leder</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Jeg er opprinnelig fra Nederland, men flyttet til Norge i 2023. Siden den gang har jeg tatt kreativiteten og ferdighetene mine til neste nivå – dykket dypere inn i innhold på sosiale medier, markedsføring, webdesign og merkevarebygging.
            </p>
            <p className="text-fg-muted leading-relaxed mb-4">
              Nå bruker jeg alt jeg har lært i det virkelige arbeidet: å hjelpe merkevarer med å se bra ut, høres bra ut og fremstå med selvtillit på nett.
            </p>
            <p className="text-fg-muted leading-relaxed mb-8">
              Grunnlagt i Bergen i 2025, Frameflow er et moderne byrå med ett mål: å gi bedrifter en digital tilstedeværelse som faktisk leverer resultater.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={EMAIL_HREF}
                className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-4 py-2 rounded-lg transition-all duration-200 min-h-[44px] flex items-center bg-white shadow-card">
                {EMAIL}
              </a>
              <a href={PHONE_HREF}
                className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-4 py-2 rounded-lg transition-all duration-200 min-h-[44px] flex items-center bg-white shadow-card">
                {PHONE}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { end: 20, suffix: '+', start: 0, label: 'Prosjekter levert', sub: 'Webdesign, branding, sosiale medier' },
            { end: 98, suffix: '%', start: 0, label: 'Kundetilfredshet', sub: 'Basert på kundeevalueringer' },
            { end: 140, suffix: '%', start: 0, label: 'Mer organisk trafikk', sub: 'Artadent · 3 måneder etter lansering' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-2 rounded-2xl p-8 border border-border"
            >
              <p className="display-text text-5xl lg:text-6xl text-accent mb-3">
                <CountUp end={stat.end} suffix={stat.suffix} start={stat.start} triggered={statsInView} />
              </p>
              <p className="font-semibold text-fg mb-1">{stat.label}</p>
              <p className="text-fg-muted text-sm">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-24 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-4 h-px bg-accent" /> Klar for vekst?
            </span>
            <h2 className="display-text text-4xl lg:text-5xl text-fg max-w-3xl mx-auto mb-6">
              Klar til å transformere din digitale tilstedeværelse?
            </h2>
            <p className="text-fg-muted max-w-xl mx-auto mb-10 leading-relaxed">
              Kontakt oss for en gratis konsultasjon. Vi finner den rette løsningen for din bedrift.
            </p>
            <Link href="/kontakt" className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg transition-colors min-h-[44px] inline-flex items-center gap-2 shadow-blue-sm">
              Ta kontakt →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
