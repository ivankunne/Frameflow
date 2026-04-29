'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, ADDRESS } from '@/lib/constants'

const floatingBadges = [
  { label: 'Gratis konsultasjon', sub: 'Ingen forpliktelser', icon: '✓', delay: 0.5, pos: 'top-6 right-6 lg:right-16' },
  { label: 'Svar innen 24 timer', sub: 'Direkte kontakt', icon: '⚡', delay: 0.7, pos: 'bottom-20 right-6 lg:right-24' },
]

export default function HomeCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-accent rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          {/* Radial glow */}
          <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)' }} />

          {/* Floating result badges */}
          {floatingBadges.map((badge) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 18, delay: badge.delay }}
              className={`absolute hidden lg:flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl px-4 py-3 ${badge.pos}`}
            >
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <span className="text-white text-xs">{badge.icon}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">{badge.label}</p>
                <p className="text-[10px] text-white/60 mt-0.5">{badge.sub}</p>
              </div>
            </motion.div>
          ))}

          {/* Mini browser badge — decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 180, damping: 20, delay: 0.9 }}
            className="absolute hidden lg:block bottom-6 right-6 bg-white/10 border border-white/20 rounded-xl p-3 w-44"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </div>
              <div className="flex-1 h-2.5 bg-white/15 rounded px-1.5 flex items-center">
                <span className="text-[7px] text-white/40 font-mono truncate">frameflow.no</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.4, delay: 1.0 }} style={{ transformOrigin: 'left' }} className="w-3/4 h-1.5 bg-white/20 rounded" />
              <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.35, delay: 1.1 }} style={{ transformOrigin: 'left' }} className="w-1/2 h-1.5 bg-white/15 rounded" />
              <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }} className="flex gap-1 mt-2">
                <div className="w-10 h-3 bg-white/30 rounded" />
                <div className="w-10 h-3 bg-white/15 rounded border border-white/20" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main content */}
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:pr-56">
            <div className="max-w-xl">
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">⚡ Ta kontakt i dag</p>
              <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">Start i dag. Resultater fra uke én.</h2>
              <p className="text-white/70 leading-relaxed">Gratis konsultasjon. Svar innen 24 timer. Ingen forpliktelser.</p>
            </div>

            <div className="flex flex-wrap sm:flex-row gap-3 shrink-0">
              <Link href="/tilbud" className="text-sm font-semibold bg-white text-accent hover:bg-white/90 px-8 py-4 rounded-xl transition-colors min-h-[44px] flex items-center justify-center shadow-lg">Få et gratis tilbud →</Link>
              <Link href="/prosjekter" className="text-sm font-semibold border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-200 min-h-[44px] flex items-center justify-center">Se våre prosjekter</Link>
            </div>
          </div>

          {/* Contact strip */}
          <div className="relative mt-12 pt-8 border-t border-white/20 flex flex-wrap gap-6 text-white/50 text-sm">
            <a href={PHONE_HREF} className="hover:text-white transition-colors font-medium">{PHONE}</a>
            <a href={EMAIL_HREF} className="hover:text-white transition-colors font-medium">{EMAIL}</a>
            <span>{ADDRESS}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
