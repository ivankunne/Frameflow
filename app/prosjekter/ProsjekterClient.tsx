'use client'

import React from 'react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '@/lib/data'
import { projectPreviews } from '@/components/ProjectPreviews'

const tagMeta: Record<string, { color: string; bg: string; border: string; accent: string }> = {
  'Web design':     { color: '#2172b5', bg: '#e8f0f9', border: '#2172b520', accent: '#2172b5' },
  SEO:              { color: '#0891b2', bg: '#e0f2fe', border: '#0891b220', accent: '#0891b2' },
  Branding:         { color: '#92400e', bg: '#fef3c7', border: '#92400e20', accent: '#c2410c' },
  'Sosiale medier': { color: '#7c3aed', bg: '#ede9fe', border: '#7c3aed20', accent: '#7c3aed' },
  'App utvikling':  { color: '#0891b2', bg: '#e0f2fe', border: '#0891b220', accent: '#0891b2' },
  'Full-stack':     { color: '#0891b2', bg: '#e0f2fe', border: '#0891b220', accent: '#0891b2' },
  React:            { color: '#0891b2', bg: '#e0f2fe', border: '#0891b220', accent: '#0891b2' },
}

const tagGradient: Record<string, string> = {
  'Web design':     'linear-gradient(135deg, #1a3a5c 0%, #2172b5 60%, #3b8fd4 100%)',
  SEO:              'linear-gradient(135deg, #0c4a6e 0%, #0891b2 60%, #22d3ee 100%)',
  Branding:         'linear-gradient(135deg, #431407 0%, #c2410c 60%, #f97316 100%)',
  'Sosiale medier': 'linear-gradient(135deg, #2e1065 0%, #7c3aed 60%, #a78bfa 100%)',
  'App utvikling':  'linear-gradient(135deg, #0c4a6e 0%, #0891b2 60%, #22d3ee 100%)',
  'Full-stack':     'linear-gradient(135deg, #0c4a6e 0%, #0891b2 60%, #22d3ee 100%)',
  React:            'linear-gradient(135deg, #0c4a6e 0%, #0891b2 60%, #22d3ee 100%)',
}

type TagMeta = { color: string; bg: string; border: string; accent: string }

const ALL_FILTERS = ['Alle', 'Web design', 'App utvikling', 'Branding', 'Sosiale medier', 'SEO'] as const
type Filter = (typeof ALL_FILTERS)[number]

export default function ProsjekterClient() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })
  const [activeFilter, setActiveFilter] = useState<Filter>('Alle')

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
            className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
          >
            Vårt arbeid
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', damping: 20, stiffness: 150, delay: 0.08 }}
            className="display-text text-4xl sm:text-5xl lg:text-7xl text-fg max-w-3xl mb-6 leading-[1.08]"
          >
            Prosjekter som{' '}
            <span className="gradient-text">snakker for seg</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-fg-muted text-lg max-w-xl leading-relaxed mb-10"
          >
            Fra Bergen til Marbella – se hvordan Frameflow skaper digitale tilstedeværelser som faktisk leverer resultater.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-fg-muted"
          >
            {[`${projects.length} prosjekter`, 'Bergen & internasjonalt', 'Web · Branding · Sosiale medier'].map((s) => (
              <span key={s} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section ref={gridRef} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto">

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {ALL_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-accent text-white border-accent shadow-blue-sm'
                    : 'bg-bg text-fg-muted border-border hover:border-accent/40 hover:text-fg shadow-card'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
            {projects.filter((p) => activeFilter === 'Alle' || p.tags.includes(activeFilter)).map((project, i) => {
              const primaryTag = project.tags[0]
              const meta: TagMeta = tagMeta[primaryTag] || { color: '#818181', bg: '#f8f8f8', border: '#e5e5e5', accent: '#818181' }
              const firstResult = project.results?.[0]
              const Preview = projectPreviews[project.slug]
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 28 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <ProjectCard project={project} meta={meta} firstResult={firstResult ?? null} Preview={Preview} primaryTag={primaryTag} index={i} />
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 lg:px-8 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <h2 className="display-text text-3xl sm:text-4xl text-fg mb-2">Ditt prosjekt kan bli det neste.</h2>
            <p className="text-fg-muted">La oss skape noe bra sammen.</p>
          </div>
          <Link
            href="/tilbud"
            className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg transition-colors min-h-[44px] inline-flex items-center gap-2 shrink-0 shadow-blue-sm"
          >
            Be om tilbud →
          </Link>
        </div>
      </section>
    </>
  )
}

function ProjectCard({
  project,
  meta,
  firstResult,
  Preview,
  primaryTag,
  index,
}: {
  project: Project
  meta: TagMeta
  firstResult: string | null
  Preview: React.ComponentType<{ visible: boolean }> | undefined
  primaryTag: string
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)
  const inView = useInView(cardRef, { once: true, margin: '-60px' })

  return (
    <div ref={cardRef}>
      <Link
        href={`/prosjekter/${project.slug}`}
        className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-blue-sm transition-all duration-300 shadow-card h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Animated preview */}
        <div
          className="h-52 w-full shrink-0 relative overflow-hidden p-3 transition-all duration-300"
          style={{ background: '#f5f5f5' }}
        >
          {Preview ? (
            <Preview visible={inView} />
          ) : (
            <div
              className="h-full w-full rounded-xl"
              style={{ background: tagGradient[primaryTag] || 'linear-gradient(135deg, #1a3a5c 0%, #2172b5 100%)' }}
            />
          )}

          {/* Hover: accent glow overlay */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(33,114,181,0.12) 0%, transparent 55%)' }}
          />

          {/* Hover: location badge slides up */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                key="loc"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-5 left-5"
              >
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white/92 border border-border/60 shadow-card backdrop-blur-sm text-fg">
                  📍 {project.location}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col flex-1 p-7">
          {/* Top row: tags + project number */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => {
                const m = tagMeta[tag] || { color: '#818181', bg: '#f8f8f8', border: '#e5e5e5', accent: '#818181' }
                return (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border"
                    style={{ color: m.color, background: m.bg, borderColor: m.border }}
                  >
                    {tag}
                  </span>
                )
              })}
            </div>
            <span
              className="font-mono text-xs font-semibold shrink-0 mt-0.5"
              style={{ color: meta.accent + '80' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Title */}
          <h2 className="display-text text-2xl sm:text-3xl text-fg mb-3 group-hover:text-accent transition-colors duration-200 leading-tight">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-fg-muted text-sm leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          {/* Result highlight */}
          {firstResult && (
            <div
              className="flex items-center gap-2.5 rounded-xl px-4 py-3 mb-6"
              style={{ background: meta.accent + '0d', border: `1px solid ${meta.accent}20` }}
            >
              <span className="text-base" style={{ color: '#22c55e' }}>↑</span>
              <span className="text-sm font-medium" style={{ color: meta.accent }}>
                {firstResult}
              </span>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-end border-t border-border pt-4">
            <span
              aria-hidden
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-fg-muted group-hover:border-accent group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 text-sm"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
