'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { industryList, industries } from '@/lib/industryContent'

export default function BransjerClient() {
  const t = useTranslations('industries.index')
  const locale = useLocale()
  const isEn = locale === 'en'
  const lang = isEn ? 'en' : 'no'

  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

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
            className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent-hover text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
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

      {/* Grid */}
      <section ref={gridRef} className="py-16 md:py-24 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {industryList.map((item, i) => {
            const content = industries[item.slug][lang]
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={item.href as any}
                  className="group flex flex-col bg-white border border-border rounded-2xl p-8 hover:border-accent hover:shadow-blue-sm transition-all duration-200 h-full shadow-card"
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold text-accent-hover bg-accent-light border border-accent/20 px-3 py-1 rounded-full">
                      {isEn ? item.labelEn : item.labelNo}
                    </span>
                    <span className="text-xs font-semibold text-fg-muted bg-bg-2 border border-border px-2.5 py-1 rounded-full">
                      {content.pricingFrom}
                    </span>
                  </div>
                  <h2 className="display-text text-2xl sm:text-3xl text-fg mb-3 group-hover:text-accent transition-colors duration-200 leading-tight">
                    {content.title}
                  </h2>
                  <p className="text-fg-muted text-sm leading-relaxed mb-6 flex-1">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm font-semibold text-accent">
                      {t('ctaLabel')} {(isEn ? item.labelEn : item.labelNo).toLowerCase()}
                    </span>
                    <span
                      aria-hidden
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-fg-muted group-hover:border-accent group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 text-sm"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 lg:px-8 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <h2 className="display-text text-3xl sm:text-4xl text-fg mb-2">{t('ctaH2')}</h2>
            <p className="text-fg-muted max-w-xl">{t('ctaDesc')}</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/tilbud"
              className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg transition-colors min-h-[44px] inline-flex items-center gap-2 shadow-blue-sm"
            >
              {t('ctaQuote')}
            </Link>
            <Link
              href="/kontakt"
              className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-8 py-4 rounded-lg transition-all duration-200 min-h-[44px] inline-flex items-center gap-2 bg-white shadow-card"
            >
              {t('ctaContact')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
