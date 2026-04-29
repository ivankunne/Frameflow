'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Project } from '@/lib/data'

// ─── Project-specific browser mockup ──────────────────────────────────────
function ProjectBrowserMockup({ project, visible }: { project: Project; visible: boolean }) {
  const slug = project.slug

  return (
    <div className="flex flex-col h-80 overflow-hidden rounded-2xl border border-border shadow-card-hover bg-white">
      {/* Browser chrome */}
      <div className="bg-bg-2 border-b border-border px-4 py-2.5 flex items-center gap-3 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-white border border-border/60 rounded-md px-3 py-1">
          <motion.span
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-[10px] text-fg-muted font-mono"
          >
            {slug === 'artadent' ? 'artadent.no' : slug === 'marbesa-project-94' ? 'marbesa-project-94.com' : slug === 'gv-rentals' ? 'gv-rentals.com' : `frameflow.no/${slug}`}
          </motion.span>
        </div>
      </div>

      {/* ── ARTADENT: top-down page build + perspective card flip + SERP result ── */}
      {slug === 'artadent' && (
        <div className="flex-1 bg-white flex flex-col h-full relative overflow-hidden">
          {/* Page load progress bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={visible ? { scaleX: [0, 0.65, 1], opacity: [1, 1, 0] } : {}}
            transition={{ duration: 0.8, delay: 0.42, times: [0, 0.65, 1] }}
            style={{ transformOrigin: 'left', background: '#2172b5' }}
            className="absolute top-0 left-0 right-0 h-0.5 z-20"
          />

          <div className="p-5 flex flex-col h-full">
            {/* Nav — slides down */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.52 }}
              className="flex items-center justify-between mb-6"
            >
              <div className="w-16 h-2.5 rounded-full" style={{ background: '#2172b5' }} />
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 6 }}
                    animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.58 + i * 0.06 }}
                    className="w-10 h-2 bg-fg/12 rounded"
                  />
                ))}
                <div className="w-16 h-6 rounded-md" style={{ background: '#2172b5' }} />
              </div>
            </motion.div>

            {/* Hero — clip reveal upward */}
            <div className="mb-6">
              <div className="overflow-hidden mb-2">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={visible ? { y: '0%' } : {}}
                  transition={{ duration: 0.42, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="w-3/4 h-5 bg-fg/20 rounded"
                />
              </div>
              <div className="overflow-hidden mb-4">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={visible ? { y: '0%' } : {}}
                  transition={{ duration: 0.36, delay: 0.74, ease: [0.22, 1, 0.36, 1] }}
                  className="w-1/2 h-3.5 bg-fg/12 rounded"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.86 }}
                className="flex gap-2"
              >
                <div className="w-24 h-8 rounded-lg" style={{ background: '#2172b5' }} />
                <div className="w-24 h-8 border border-border rounded-lg" />
              </motion.div>
            </div>

            {/* Service cards — perspective flip */}
            <div className="grid grid-cols-3 gap-3" style={{ perspective: '600px' }}>
              {[0.94, 1.05, 1.16].map((delay, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotateX: 40, y: 14 }}
                  animate={visible ? { opacity: 1, rotateX: 0, y: 0 } : {}}
                  transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-bg-2 border border-border rounded-lg p-3"
                >
                  <div className="w-5 h-5 rounded-full mb-2" style={{ background: `rgba(33,114,181,${0.15 + i * 0.06})` }} />
                  <div className="w-full h-2 bg-fg/15 rounded mb-1.5" />
                  <div className="w-2/3 h-1.5 bg-fg/8 rounded" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Google SERP result — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 190, damping: 20, delay: 1.2 }}
            className="absolute bottom-4 right-4 bg-white border rounded-xl p-3 shadow-card-hover"
            style={{ borderColor: 'rgba(33,114,181,0.18)', maxWidth: '168px' }}
          >
            <p className="text-[8px] font-mono text-green-600 mb-0.5">artadent.no</p>
            <p className="text-[9px] font-semibold text-fg mb-1 leading-tight">Tannlege Bergen – Artadent</p>
            <p className="text-[8px] text-fg-muted leading-tight">Moderne tannklinikk i Bergen sentrum...</p>
            <div className="flex items-center gap-0.5 mt-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={visible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 320, damping: 16, delay: 1.35 + i * 0.05 }}
                  className="text-yellow-400 text-[9px]"
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* ── MARBESA: curtain wipe + center-expand gold rule + elevator cards ── */}
      {slug === 'marbesa-project-94' && (
        <div className="flex-1 h-full relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0d1117 0%, #0f1f2e 50%, #0a1520 100%)' }}>
          {/* Scene fades in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.38 }}
            className="absolute inset-0 p-6"
          >
            {/* Nav */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-20 h-2.5 rounded-full" style={{ background: '#c9a96e' }} />
              <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-1.5 rounded-full bg-white/20" />
                ))}
              </div>
            </div>

            {/* Gold rule extends from center outward */}
            <div className="relative h-0.5 w-16 mb-5 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={visible ? { scaleX: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'center', background: 'linear-gradient(90deg, #c9a96e, #e8c97a)' }}
                className="absolute inset-0 rounded-full"
              />
            </div>

            {/* Heading — clip reveal */}
            <div className="mb-6">
              <div className="overflow-hidden mb-2">
                <motion.div
                  initial={{ y: '110%' }}
                  animate={visible ? { y: '0%' } : {}}
                  transition={{ duration: 0.48, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
                  className="w-2/3 h-5 bg-white/80 rounded"
                />
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '110%' }}
                  animate={visible ? { y: '0%' } : {}}
                  transition={{ duration: 0.4, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
                  className="w-1/2 h-3.5 bg-white/45 rounded"
                />
              </div>
            </div>

            {/* CTA — spring pop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.9 }}
              className="w-28 h-8 rounded-lg flex items-center justify-center"
              style={{ background: '#c9a96e' }}
            >
              <div className="w-14 h-1.5 rounded-full bg-white/70" />
            </motion.div>
          </motion.div>

          {/* Property cards — elevator rise (y + scale together) */}
          <div className="absolute bottom-4 left-6 right-6 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, scale: 0.9 }}
                animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.97 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-lg p-2.5 border"
                style={{ background: 'rgba(201,169,110,0.07)', borderColor: 'rgba(201,169,110,0.2)' }}
              >
                <div className="w-full h-1.5 rounded-full mb-1.5 bg-white/20" />
                <div className="w-3/4 h-1 rounded-full bg-white/12" />
              </motion.div>
            ))}
          </div>

          {/* Curtain wipe — reveals a hero image area at the right */}
          <motion.div
            initial={{ x: 0 }}
            animate={visible ? { x: '100%' } : {}}
            transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-12 right-6 w-32 bottom-20 rounded-lg z-10 pointer-events-none"
            style={{ background: '#0a1520' }}
          />
          <div
            className="absolute top-12 right-6 w-32 bottom-20 rounded-lg overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #1c1508 0%, #2e2010 60%, #1c1508 100%)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-1.5 rounded" style={{ background: 'rgba(201,169,110,0.3)' }} />
            </div>
          </div>
        </div>
      )}

      {/* ── GV RENTALS: search focus + filters from right + diagonal listing entries ── */}
      {slug === 'gv-rentals' && (
        <div className="flex-1 bg-white p-5 h-full relative overflow-hidden">
          {/* Nav */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.48 }}
            className="flex items-center justify-between mb-4"
          >
            <div className="w-18 h-2.5 bg-accent/25 rounded-full" />
            <div className="flex gap-2 items-center">
              <div className="w-16 h-6 bg-bg-2 border border-border rounded-md" />
              <div className="w-14 h-6 bg-accent rounded-md" />
            </div>
          </motion.div>

          {/* Search bar — focus animation (border glow) */}
          <motion.div
            initial={{ opacity: 0, borderColor: 'rgba(33,114,181,0)' }}
            animate={visible ? { opacity: 1, borderColor: ['rgba(33,114,181,0)', 'rgba(33,114,181,0.5)', 'rgba(33,114,181,0.25)'] } : {}}
            transition={{ duration: 0.7, delay: 0.58, times: [0, 0.6, 1] }}
            className="w-full h-9 bg-bg-2 border-2 rounded-lg mb-3 flex items-center px-3 gap-2"
          >
            <div className="w-3 h-3 rounded-full border-2 border-fg/20 shrink-0" />
            <div className="w-1/3 h-1.5 bg-fg/10 rounded-full" />
          </motion.div>

          {/* Filter tags — slide from right */}
          <div className="flex gap-2 mb-4 overflow-hidden">
            {['Marbella', 'Villa', '2+ sov', 'Pool'].map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, x: 18 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.72 + i * 0.07 }}
                className="shrink-0 h-6 px-2.5 rounded-full border border-border bg-bg-2 flex items-center"
              >
                <span className="text-[9px] text-fg-muted font-medium">{tag}</span>
              </motion.div>
            ))}
          </div>

          {/* Listing rows — diagonal entry (y + x together) */}
          {[
            { bg: '#e8f0f9', delay: 0.82 },
            { bg: '#fef3c7', delay: 0.94 },
            { bg: '#fce7f3', delay: 1.06 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16, y: 10 }}
              animate={visible ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.38, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-2.5"
            >
              <div className="w-12 h-10 rounded-lg shrink-0" style={{ background: item.bg }} />
              <div className="flex-1">
                <div className="w-3/4 h-2 bg-fg/15 rounded mb-1.5" />
                <div className="w-1/2 h-1.5 bg-fg/8 rounded" />
              </div>
              {/* Availability dot — spring pop */}
              <motion.div
                initial={{ scale: 0 }}
                animate={visible ? { scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 14, delay: item.delay + 0.15 }}
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: i === 1 ? '#94a3b8' : '#34C759' }}
              />
            </motion.div>
          ))}
        </div>
      )}

      {slug !== 'artadent' && slug !== 'marbesa-project-94' && slug !== 'gv-rentals' && (
        <div className="flex-1 relative h-full">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #f0f4fb 0%, #e8f0f9 50%, #f8f8f8 100%)' }} />
<div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="display-text text-6xl text-fg/5 mb-4">{project.title}</p>
              <p className="text-xs text-fg-muted font-medium">Prosjektbilde</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-blue-400" />
        </div>
      )}
    </div>
  )
}

export default function ProjectPageTemplate({ project }: { project: Project }) {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-28 md:pt-32 pb-14 md:pb-20 px-6 lg:px-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            aria-label="Brødsmuler"
            className="flex items-center gap-2 text-xs text-fg-muted font-medium mb-8"
          >
            <Link href="/" className="hover:text-fg transition-colors">Hjem</Link>
            <span>/</span>
            <Link href="/prosjekter" className="hover:text-fg transition-colors">Prosjekter</Link>
            <span>/</span>
            <span className="text-fg">{project.title}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-accent bg-accent-light border border-accent/20 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="display-text text-4xl sm:text-5xl lg:text-7xl text-fg mb-6">{project.title}</h1>
                <p className="text-fg-muted text-xl leading-relaxed">{project.description}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-border lg:pl-12 self-end pb-2"
            >
              {[
                { label: 'Klient', value: project.client },
                { label: 'Sted', value: project.location },
                { label: 'År', value: project.year },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-semibold text-fg">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="py-14 md:py-20 lg:py-24 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto">
          {/* Animated browser mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative mb-16"
          >
            {/* Top-left: Lansert + year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={contentInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.5 }}
              className="absolute -top-4 -left-4 z-10 bg-white border border-border rounded-xl px-3 py-2 shadow-card hidden sm:flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[11px] font-semibold text-fg">Lansert · {project.year}</span>
            </motion.div>

            <ProjectBrowserMockup project={project} visible={contentInView} />

            {/* Bottom-right: first result badge */}
            {project.results && project.results[0] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.7 }}
                className="absolute -bottom-4 -right-4 z-10 bg-white border border-border rounded-xl px-4 py-3 shadow-card-hover hidden sm:flex items-center gap-3 max-w-[220px]"
              >
                <div className="w-7 h-7 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-accent">
                    <path d="M2 7.5L5.5 11L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[10px] font-semibold text-fg leading-snug">{project.results[0]}</p>
              </motion.div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Challenge */}
            {project.challenge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="inline-flex items-center gap-2 text-fg-muted text-xs font-semibold uppercase tracking-widest mb-4">
                  <span className="w-4 h-px bg-fg-muted/40" /> Utfordring
                </span>
                <p className="text-fg-muted text-sm leading-relaxed">{project.challenge}</p>
              </motion.div>
            )}

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                <span className="w-4 h-px bg-accent" /> Løsning
              </span>
              <p className="text-fg-muted text-sm leading-relaxed">{project.fullDescription}</p>
            </motion.div>

            {/* Results */}
            {project.results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.26 }}
              >
                <span className="inline-flex items-center gap-2 text-green-600 text-xs font-semibold uppercase tracking-widest mb-4">
                  <span className="w-4 h-px bg-green-500" /> Resultater
                </span>
                <ul className="flex flex-col gap-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-fg-muted">
                      <span className="w-4 h-4 rounded-md bg-green-50 border border-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-600 text-[9px] font-bold">✓</span>
                      </span>
                      <span className="text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <h2 className="display-text text-3xl text-fg mb-2">Lignende resultater for deg?</h2>
            <p className="text-fg-muted">La oss ta en gratis prat om prosjektet ditt.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/prosjekter" className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] inline-flex items-center bg-white shadow-card">
              Alle prosjekter
            </Link>
            <Link href="/tilbud" className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] inline-flex items-center gap-2 shadow-blue-sm">
              Be om tilbud
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
