'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { getProject } from '@/lib/data'

export function HoOrbitCaseStudy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const project = getProject('h-orbit')

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Gradient accent */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(6,182,212,0.07) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-cyan-700 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-cyan-600" /> Case Study
          </span>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg">h-orbit</h2>
          <p className="text-fg-muted text-lg mt-4 max-w-2xl">Musikk-plattform som kobler artister, muliggjør samarbeid og åpner dører til nye muligheter</p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-3">Utfordring</p>
                <p className="text-fg-muted leading-relaxed">
                  Unge artister manglet en plass for å dele musikk, finne andre artister å samarbeide med og oppdage relevante events. De spredte seg over SoundCloud, Instagram og Discord – og mistet ofte muligheter.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-3">Løsning</p>
                <p className="text-fg-muted leading-relaxed">
                  Vi bygde h-orbit – en musikk-plattform som lar artister dele musikk, finne samarbeidsmuligheter, følge andre artister og oppdage events. Alt på ett sted, designet for musikeres arbetsflyt.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-3">Resultat</p>
                <ul className="space-y-2">
                  {[
                    '2000+ artister på plattformen',
                    '500+ samarbeidsprosjekter startet',
                    '98% app uptime og stabilitet',
                    '1000+ events oppdaget per måned',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
                      className="flex items-center gap-2 text-fg-muted"
                    >
                      <span className="w-5 h-5 rounded-full bg-cyan-100 border border-cyan-300 flex items-center justify-center shrink-0">
                        <span className="text-cyan-700 text-[10px] font-bold">✓</span>
                      </span>
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.97 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-border">
              {project?.image && (
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={3200}
                  height={2000}
                  sizes="(min-width: 1024px) 576px, 100vw"
                  className="w-full h-auto"
                />
              )}

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.5 }}
                className="absolute -bottom-3 -left-3 bg-white border border-border rounded-xl px-4 py-2 shadow-card-hover flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-fg">Live</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
