'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function HomeTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const t = useTranslations('home.testimonials')

  const testimonials = [
    { quote: t('t1'), name: t('t1Author'), jobTitle: t('t1JobTitle'), company: t('t1Role'), service: t('t1Service'), initials: 'TH' },
    { quote: t('t2'), name: t('t2Author'), jobTitle: t('t2JobTitle'), company: t('t2Role'), service: t('t2Service'), initials: 'LH' },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-bg-2">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-accent" /> {t('label')}
          </span>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg mb-4">{t('title')}</h2>
          <p className="text-fg-muted max-w-xl leading-relaxed">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -18 : 18, scale: 0.97 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.12 }}
              className="bg-bg border border-border rounded-xl p-6 shadow-card flex flex-col"
            >
              <div className="flex gap-0.5 mb-3" aria-label="5 of 5 stars">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b" aria-hidden="true">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3l-3.7 1.9.7-4.1-3-2.9 4.2-.6z" />
                  </svg>
                ))}
              </div>

              <p className="text-fg-muted text-[15px] leading-relaxed flex-1 mb-6">{item.quote}</p>

              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent bg-accent-light border border-accent/20 px-2.5 py-1 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {item.service}
                </span>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-accent text-xs font-semibold">{item.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-fg">{item.name}</p>
                  <p className="text-xs text-fg-muted">{item.jobTitle}, {item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
