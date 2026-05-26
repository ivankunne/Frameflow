'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'

const QUICK_LINKS = [
  { href: '/tjenester',  label: 'Tjenester',     desc: 'Webdesign, branding & mer' },
  { href: '/prosjekter', label: 'Prosjekter',    desc: 'Se hva vi har laget' },
  { href: '/blogg',      label: 'Blogg',          desc: 'Tips, innsikt og tanker' },
  { href: '/om-oss',     label: 'Om oss',         desc: 'Hvem er Frameflow?' },
  { href: '/tilbud',     label: 'Be om tilbud',   desc: 'Gratis og uforpliktende' },
  { href: '/kontakt',    label: 'Kontakt',        desc: 'Vi svarer innen 24 timer' },
] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.4, 0, 0.2, 1] as number[] },
})

export default function NotFound() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-white">

      {/* Background glows */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(33,114,181,0.07) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(33,114,181,0.04) 0%, transparent 65%)' }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />

      {/* Ghost 404 watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="display-text font-extrabold leading-none text-fg/[0.025]"
          style={{ fontSize: 'clamp(12rem, 28vw, 24rem)' }}
        >
          404
        </span>
      </motion.div>

      {/* Desktop floating card — left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.5, ease: 'easeOut' }}
        className="absolute left-10 top-[38%] hidden xl:block -translate-y-1/2"
      >
        <div className="bg-white border border-border rounded-2xl px-4 py-3.5 shadow-card w-44">
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-[10px] font-semibold text-fg-muted uppercase tracking-widest">HTTP Status</span>
          </div>
          <p className="display-text text-3xl font-bold text-fg leading-none">404</p>
          <p className="text-xs text-fg-muted mt-1">Not Found</p>
          <div className="mt-3 h-1 bg-bg-3 rounded-full" />
        </div>
      </motion.div>

      {/* Desktop floating card — right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.6, ease: 'easeOut' }}
        className="absolute right-10 top-[38%] hidden xl:block -translate-y-1/2"
      >
        <div className="bg-white border border-border rounded-2xl px-4 py-3.5 shadow-card w-52">
          <p className="text-[9px] font-semibold text-fg-muted uppercase tracking-widest mb-2">URL forsøkt</p>
          <div className="bg-bg-2 border border-border/60 rounded-lg px-3 py-2 font-mono text-[11px] flex items-center gap-0.5 overflow-hidden">
            <span className="text-accent/60 truncate shrink-0">frameflow.no</span>
            <span className="text-red-400 shrink-0">/???</span>
          </div>
          <div className="flex items-center gap-1.5 mt-2.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-red-400 shrink-0">
              <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3.5 3.5l3 3M6.5 3.5l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] text-fg-muted">Siden ble ikke funnet</span>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">

        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Side ikke funnet
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} className="display-text text-5xl sm:text-6xl text-fg mb-5 leading-[1.05]">
          Denne siden<br />
          <span className="gradient-text">eksisterer ikke.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-fg-muted text-lg leading-relaxed mb-10 max-w-md">
          Siden er kanskje flyttet, slettet, eller adressen er feil. La oss hjelpe deg videre.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <Link
            href="/"
            className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] flex items-center gap-2 shadow-blue-sm"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Til forsiden
          </Link>
          <Link
            href="/kontakt"
            className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] flex items-center bg-bg-2 shadow-card"
          >
            Ta kontakt
          </Link>
        </motion.div>

        {/* Quick links */}
        <motion.div {...fadeUp(0.4)} className="w-full">
          <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-5">Populære sider</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {QUICK_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.48 + i * 0.07, ease: 'easeOut' }}
              >
                <Link
                  href={link.href}
                  className="group block bg-bg-2 border border-border hover:border-accent/40 hover:bg-accent-light/50 rounded-xl p-4 text-left transition-all duration-200"
                >
                  <p className="text-sm font-semibold text-fg group-hover:text-accent transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-fg-muted mt-0.5 leading-snug">{link.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
