'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function HomeHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const t = useTranslations('home.hero')

  return (
    <section
      ref={ref}
      className="relative min-h-[600px] sm:min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 lg:px-8 overflow-hidden bg-white"
      aria-label="Hero-seksjon"
    >
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(33,114,181,0.07) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content. H1 + lead stay fully opaque for LCP. */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-fg-muted border border-border bg-white px-3 py-1.5 rounded-full shadow-card">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                {t('label')}
              </span>
            </div>

            <h1 className="display-text text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-fg max-w-xl mb-6 leading-[1.02]">
              <span className="block">{t('h1Line1')}</span>
              <span className="block">{t('h1Line2')}</span>
              <span className="block gradient-text">{t('h1Line3')}</span>
            </h1>

            <p className="text-fg text-lg max-w-md leading-relaxed font-body mb-8">
              {t('description')}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/tilbud"
                className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] flex items-center shadow-blue-sm"
              >
                {t('getQuote')}
              </Link>
              <Link
                href="/kontakt"
                className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] flex items-center gap-1 bg-white shadow-card"
              >
                {t('contact')}
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4">
              {([t('trust1'), t('trust2'), t('trust3')] as string[]).map((trust) => (
                <span key={trust} className="flex items-center gap-1.5 text-xs text-fg-muted">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-green-500 shrink-0">
                    <path d="M2 6.5l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {trust}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile-only proof cards — below LCP text, safe to animate */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="block lg:hidden mt-8"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-border rounded-xl p-3.5 shadow-card relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400" />
                <p className="text-[9px] font-semibold text-fg-muted uppercase tracking-widest mb-1">Web · Branding</p>
                <p className="text-xs font-bold text-fg mb-3">Sportsbytte</p>
                <div className="flex items-end gap-0.5 h-7 mb-2">
                  {[30, 42, 55, 68, 82, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{ background: `rgba(22,163,74,${0.25 + i * 0.13})` }}
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${h * 0.28}px` } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.06, ease: 'easeOut' }}
                    />
                  ))}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-green-700">Live</span>
                  <span className="text-[9px] text-fg-muted">ny plattform</span>
                </div>
              </div>

              <div className="bg-white border border-border rounded-xl p-3.5 shadow-card relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
                <p className="text-[9px] font-semibold text-fg-muted uppercase tracking-widest mb-1">App utvikling</p>
                <p className="text-xs font-bold text-fg mb-3">h-orbit</p>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-2 mb-2">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-3.5 h-3.5 rounded bg-cyan-300/50 flex items-center justify-center shrink-0">
                      <span className="text-[7px] text-cyan-700 font-bold">♪</span>
                    </div>
                    <div className="h-1.5 w-10 bg-fg/10 rounded" />
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="flex-1 h-1 bg-fg/10 rounded" />
                    ))}
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-cyan-700">2 000+</span>
                  <span className="text-[9px] text-fg-muted">artister</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-3">
              <span className="w-1 h-1 rounded-full bg-accent/60" />
              <span className="text-[10px] text-fg-muted">{t('lastProjects')}</span>
            </div>
          </motion.div>

          {/* Right — animated browser mockup (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.35 }}
              className="absolute -top-4 -left-4 z-10 bg-white border border-border rounded-xl px-3 py-2 shadow-card flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-fg">{t('speedBadge')}</span>
            </motion.div>

            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-card-hover">
              <div className="bg-bg-2 border-b border-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-white border border-border rounded-md px-3 py-1.5 flex items-center gap-2 min-w-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 text-green-500">
                    <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 5l1.5 1.5L7 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs text-fg-muted font-mono truncate">din-bedrift.no</span>
                </div>
              </div>

              <motion.div
                className="h-0.5 bg-accent origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
              />

              <div className="bg-white overflow-hidden">
                <div className="px-5 py-3 flex items-center justify-between border-b border-border/40">
                  <div className="w-14 h-3 bg-fg/20 rounded" />
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-2 bg-fg/10 rounded" />
                    <div className="w-7 h-2 bg-fg/10 rounded" />
                    <div className="w-7 h-2 bg-fg/10 rounded" />
                    <div className="w-16 h-6 rounded-md" style={{ background: '#2172b5' }} />
                  </div>
                </div>

                <div
                  className="mx-5 mt-5 rounded-xl overflow-hidden h-24 relative"
                  style={{ background: 'linear-gradient(135deg, #1a3a5c 0%, #1e4f80 50%, #2172b5 100%)' }}
                >
                  <div className="absolute inset-0 flex flex-col justify-center px-5">
                    <div className="w-20 h-2 rounded mb-2.5" style={{ background: 'rgba(255,255,255,0.4)' }} />
                    <div className="w-32 h-4 rounded mb-2" style={{ background: 'rgba(255,255,255,0.9)' }} />
                    <div className="w-24 h-2.5 rounded" style={{ background: 'rgba(255,255,255,0.25)' }} />
                  </div>
                </div>

                <div className="px-5 py-4 space-y-2.5">
                  {[0.85, 0.95, 0.9].map((w, i) => (
                    <div key={i} className="h-2 rounded bg-fg/8" style={{ width: `${w * 100}%` }} />
                  ))}
                </div>

                <div className="px-5 pb-5 grid grid-cols-3 gap-2.5">
                  {['rgba(33,114,181,0.12)', 'rgba(33,114,181,0.07)', 'rgba(33,114,181,0.10)'].map((accent, i) => (
                    <div key={i} className="bg-bg-2 border border-border rounded-lg p-2.5">
                      <div className="h-5 rounded mb-2" style={{ background: accent }} />
                      <div className="w-3/4 h-1.5 bg-fg/12 rounded mb-1.5" />
                      <div className="w-full h-1.5 bg-fg/7 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 8 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.55 }}
              className="absolute -bottom-4 -right-4 z-10 bg-white border border-border rounded-xl px-3 py-2.5 shadow-card-hover"
            >
              <p className="text-[9px] font-semibold text-fg-muted uppercase tracking-widest mb-2">Lighthouse</p>
              {[
                { label: 'Performance', score: 98, color: '#15803d' },
                { label: 'SEO', score: 97, color: '#15803d' },
                { label: 'Best Pract.', score: 92, color: '#15803d' },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-2 mb-1 last:mb-0">
                  <span className="text-[9px] text-fg-muted w-16 shrink-0">{row.label}</span>
                  <div className="flex-1 h-1 bg-fg/6 rounded-full overflow-hidden w-16">
                    <motion.div className="h-full rounded-full" style={{ background: row.color }} initial={{ width: 0 }} animate={isInView ? { width: `${row.score}%` } : {}} transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }} />
                  </div>
                  <span className="text-[9px] font-bold shrink-0" style={{ color: row.color }}>{row.score}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
