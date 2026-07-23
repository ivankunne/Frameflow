'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
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
  const t = useTranslations('about')
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true, margin: '-80px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  const stats = [
    { end: 5, suffix: '+', start: 0, label: t('stat1'), sub: t('stat1Sub') },
    { end: 98, suffix: '%', start: 0, label: t('stat2'), sub: t('stat2Sub') },
    { end: 140, suffix: '%', start: 0, label: t('stat3'), sub: t('stat3Sub') },
  ]

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-28 pb-12 lg:pt-32 lg:pb-16 px-6 lg:px-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
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
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-text text-4xl sm:text-5xl lg:text-7xl text-fg max-w-4xl mb-5 lg:mb-6 [hyphens:auto]"
          >
            {t('subtitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-fg-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-6 lg:mb-8"
          >
            {t('description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link href="/kontakt" className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] inline-flex items-center gap-2 shadow-blue-sm">
              {t('contact')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section ref={aboutRef} className="py-16 lg:py-24 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] max-h-[480px] lg:max-h-none rounded-2xl overflow-hidden border border-border relative shadow-card-hover">
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-4 h-px bg-accent" /> {t('meetTeam')}
            </span>
            <h2 className="display-text text-3xl lg:text-4xl text-fg mb-5">{t('founderName')}</h2>
            <p className="text-fg-muted leading-relaxed mb-4">{t('founderBio1')}</p>
            <p className="text-fg-muted leading-relaxed mb-4">{t('founderBio2')}</p>
            <p className="text-fg-muted leading-relaxed mb-8">{t('founded')}</p>
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
      <section ref={statsRef} className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
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
      <section ref={ctaRef} className="py-16 lg:py-24 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-4 h-px bg-accent" /> {t('readyCta')}
            </span>
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg max-w-3xl mx-auto mb-5 lg:mb-6">
              {t('readyTitle')}
            </h2>
            <p className="text-fg-muted text-sm sm:text-base max-w-xl mx-auto mb-8 lg:mb-10 leading-relaxed">
              {t('readyDesc')}
            </p>
            <Link href="/kontakt" className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg transition-colors min-h-[44px] inline-flex items-center gap-2 shadow-blue-sm">
              {t('readyBtn')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
