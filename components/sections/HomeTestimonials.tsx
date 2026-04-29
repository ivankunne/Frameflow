'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: 'Vi lå ikke synlige på Google i det hele tatt. Etter seks uker med ny nettside fra Frameflow rangerte vi på side 1 for "tannlege Bergen". Antall nye pasienter har økt merkbart, og vi angrer ikke et sekund på investeringen.',
    name: 'Kari Nilsen',
    role: 'Daglig leder',
    company: 'Artadent',
    service: 'Web design + SEO',
    initials: 'KN',
  },
  {
    quote: 'Den nye nettsiden vår er rett og slett strålende. Innen den første måneden hadde henvendelsene fra nett doblet seg. Ivan er enestående å jobbe med – rask, profesjonell og han leverer det han lover.',
    name: 'Morten Berg',
    role: 'Eier',
    company: 'Bergen Bakeri',
    service: 'Web design + Sosiale medier',
    initials: 'MB',
  },
  {
    quote: 'Frameflow hjalp oss med å løfte innholdet på sosiale medier til et helt nytt nivå. Engasjementet tredoblet seg på tre måneder, og vi ser tydelig at vi når folk som faktisk er interessert i Bergen som reisemål.',
    name: 'Sofia Andersen',
    role: 'Markedssjef',
    company: 'VisitBergen',
    service: 'Sosiale medier',
    initials: 'SA',
  },
]

export default function HomeTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-bg-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-accent" /> Hva kundene sier
          </span>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg mb-4">Resultater du kan stole på</h2>
          <p className="text-fg-muted max-w-xl leading-relaxed">
            Vi måler ikke suksess i antall leverte filer – vi måler det i resultater kundene våre faktisk oppnår.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -18 : 18, scale: 0.97 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.12 }}
              className="bg-bg border border-border rounded-xl p-6 shadow-card flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3" aria-label="5 av 5 stjerner">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b" aria-hidden="true">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3l-3.7 1.9.7-4.1-3-2.9 4.2-.6z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-fg-muted text-[15px] leading-relaxed flex-1 mb-6">{t.quote}</p>

              {/* Service tag */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent bg-accent-light border border-accent/20 px-2.5 py-1 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {t.service}
                </span>
              </div>

              {/* Avatar + name */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-accent text-xs font-semibold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-fg">{t.name}</p>
                  <p className="text-xs text-fg-muted">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
