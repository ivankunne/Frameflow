'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function HomeAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-card">
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

            {/* Floating availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 1.2 }}
              className="absolute -bottom-3 -right-3 bg-white border border-border rounded-xl p-3 shadow-card-hover z-10"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs font-semibold text-fg">Tilgjengelig</p>
              </div>
              <p className="text-[10px] text-fg-muted">Nye prosjekter</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-4 h-px bg-accent" /> Om oss
            </span>
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg mb-6 leading-tight">
              Én person.<br />Hele byrået.
            </h2>
            <p className="text-fg leading-relaxed mb-5 max-w-prose">
              Jeg heter Ivan Kunne og er Frameflow. Den som skriver tilbudet ditt, er den samme som bygger nettsiden din, tar bildene, styrer sosiale medier – og svarer på telefonen klokken 20:00 hvis noe butter. Det er ikke vanlig. Og det er hele poenget.
            </p>
            <p className="text-fg-muted leading-relaxed mb-6 max-w-prose">
              Opprinnelig fra Nederland, men Bergen ble mitt hjem i 2023. Siden da har jeg hjulpet bedrifter i Bergen og internasjonalt med å bygge en digital tilstedeværelse som faktisk konverterer – ikke bare ser bra ut.
            </p>

            {/* Callout box */}
            <div className="bg-accent-light border border-accent/20 rounded-xl px-5 py-4 mb-6">
              <p className="text-sm font-semibold text-accent mb-1">Ingen mellommenn. Aldri.</p>
              <p className="text-sm text-fg-muted leading-relaxed">Alle prosjekter fullføres av meg personlig – ingen vikarer, ingen junior-leveranser, ingen overraskelser. Alle filer og tilganger er alltid dine.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {['Du snakker alltid med meg, ikke en account manager', 'Én kontaktperson fra idé til lansering', 'Lokalkunnskap om Bergen-markedet', 'Svar innen 24 timer – alltid'].map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-accent text-[10px]">✓</span>
                  </span>
                  <span className="text-sm text-fg font-medium leading-snug">{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/om-oss"
              className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 inline-flex items-center gap-2 min-h-[44px] shadow-card"
            >
              Les mer om meg →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
