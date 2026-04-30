'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// ─── Project preview visuals ────────────────────────────────────────────────

function ArtadentPreview({ visible }: { visible: boolean }) {
  // Animation language: top-to-bottom page reveal, cards scale in
  return (
    <div className="h-36 rounded-lg overflow-hidden relative" style={{ background: '#f0f6ff' }}>
      <div className="absolute inset-0 p-3 flex flex-col">
        {/* Nav — fade down */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex items-center justify-between mb-3"
        >
          <div className="w-12 h-2 bg-[#2172b5]/40 rounded" />
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-6 h-1.5 bg-[#2172b5]/20 rounded" />
            ))}
          </div>
        </motion.div>

        {/* Hero text — slide up */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.46 }}
          className="mb-3"
        >
          <div className="w-3/4 h-4 bg-[#171717]/20 rounded mb-1.5" />
          <div className="w-1/2 h-3 bg-[#171717]/13 rounded mb-2.5" />
          <div className="flex gap-2">
            <div className="w-16 h-6 rounded-md bg-[#2172b5]" />
            <div className="w-14 h-6 rounded-md border border-[#2172b5]/30" />
          </div>
        </motion.div>

        {/* Feature cards — scale pop stagger */}
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 240, damping: 16, delay: 0.72 + i * 0.09 }}
              className="h-6 rounded bg-[#2172b5]/10 border border-[#2172b5]/12"
            />
          ))}
        </div>
      </div>

      {/* Google rank badge — spring pop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 6 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.95 }}
        className="absolute bottom-2.5 right-2.5 bg-white rounded-lg px-2.5 py-1.5 shadow-card flex items-center gap-1.5"
      >
        <span className="text-green-500 text-[10px] font-bold">●</span>
        <span className="text-[10px] font-semibold text-fg">Topp 10 Google</span>
      </motion.div>
    </div>
  )
}

function MarbesaPreview({ visible }: { visible: boolean }) {
  // Animation language: luxury reveal — image wipes in from right, text fades left-to-right
  return (
    <div
      className="h-36 rounded-lg overflow-hidden relative"
      style={{ background: 'linear-gradient(160deg, #12100e 0%, #1c1710 50%, #241d13 100%)' }}
    >
      <div className="absolute inset-0 flex">
        {/* Left: text — staggered fade + x-slide */}
        <div className="flex-1 p-3 flex flex-col justify-center gap-1.5">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.32 }}
            className="w-8 h-1.5 rounded"
            style={{ background: '#c9a96e' }}
          />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.44 }}
            className="w-20 h-3 bg-white/25 rounded"
          />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.28, delay: 0.54 }}
            className="w-14 h-2.5 bg-white/15 rounded"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.68 }}
            className="w-14 h-5 rounded-md mt-1"
            style={{ background: '#c9a96e' }}
          />
        </div>

        {/* Right: image — wipes in from the right edge */}
        <div className="w-24 m-2 rounded-md overflow-hidden flex-shrink-0 relative">
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, #2a2016 0%, #3d3020 50%, #2a2016 100%)' }}
          />
          {/* Wipe reveal curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={visible ? { x: '100%' } : {}}
            transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-10"
            style={{ background: '#1c1710' }}
          />
          <div className="relative h-full flex items-center justify-center z-0">
            <div className="text-center">
              <div className="w-12 h-1.5 mx-auto rounded mb-1.5" style={{ background: 'rgba(201,169,110,0.45)' }} />
              <div className="w-8 h-1 mx-auto rounded" style={{ background: 'rgba(201,169,110,0.25)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Gold shimmer */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 40%, rgba(201,169,110,0.6) 50%, transparent 60%)',
        }}
      />
    </div>
  )
}

function GvRentalsPreview({ visible }: { visible: boolean }) {
  // Animation language: listings slide in from right (not left), availability dots pulse in
  const listings = [
    { color: '#34C759', label: 'Villa Sol', avail: true },
    { color: '#2172b5', label: 'Ocean View', avail: false },
    { color: '#f59e0b', label: 'Casa Blanca', avail: true },
  ]
  return (
    <div className="h-36 rounded-lg overflow-hidden relative bg-white border border-border/40">
      <div className="absolute inset-0 p-2.5 flex flex-col gap-1.5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.28, delay: 0.3 }}
          className="flex items-center justify-between pb-1.5 border-b border-border/40"
        >
          <div className="w-14 h-2 bg-fg/20 rounded" />
          <div className="flex gap-1">
            <div className="w-5 h-4 bg-bg-2 border border-border rounded text-[8px] flex items-center justify-center text-fg-muted">
              ≡
            </div>
            <div className="w-12 h-4 bg-accent rounded text-[8px] flex items-center justify-center text-white font-semibold">
              Book
            </div>
          </div>
        </motion.div>

        {/* Listing rows — slide from right */}
        {listings.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 14 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.32, delay: 0.42 + i * 0.1 }}
            className="flex items-center gap-2 bg-bg-2/60 rounded-md px-2 py-1.5"
          >
            <div
              className="w-7 h-7 rounded shrink-0"
              style={{ background: `${item.color}22`, border: `1px solid ${item.color}28` }}
            />
            <div className="flex-1">
              <div className="w-14 h-1.5 bg-fg/20 rounded mb-1" />
              <div className="w-10 h-1 bg-fg/10 rounded" />
            </div>
            {/* Availability dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={visible ? { scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 280, damping: 14, delay: 0.65 + i * 0.1 }}
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: item.avail ? '#34C759' : '#94a3b8' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Booking badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 6 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.92 }}
        className="absolute bottom-2 right-2 bg-[#34C759] rounded-lg px-2 py-1 shadow-card"
      >
        <span className="text-white text-[9px] font-bold">↑ Økt booking</span>
      </motion.div>
    </div>
  )
}

function BergenBakeriPreview({ visible }: { visible: boolean }) {
  return (
    <div className="h-36 rounded-lg overflow-hidden relative" style={{ background: '#fef9f0' }}>
      <div className="absolute inset-0 p-3 flex flex-col">
        {/* Nav */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex items-center justify-between mb-2"
        >
          <div className="w-14 h-2 bg-[#f59e0b]/50 rounded" />
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-6 h-1.5 bg-[#f59e0b]/25 rounded" />
            ))}
          </div>
        </motion.div>

        {/* Hero — amber gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.42 }}
          className="h-10 rounded-lg mb-2 flex items-center px-3"
          style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' }}
        >
          <div className="w-24 h-2.5 bg-white/80 rounded" />
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 240, damping: 16, delay: 0.62 + i * 0.09 }}
              className="h-7 rounded-md bg-[#f59e0b]/15 border border-[#f59e0b]/20 flex items-end p-1"
            >
              <div className="w-full h-1.5 bg-[#f59e0b]/30 rounded" />
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.9 }}
          className="w-20 h-5 rounded-md bg-[#f59e0b] flex items-center justify-center"
        >
          <span className="text-white text-[8px] font-semibold">Bestill nå</span>
        </motion.div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 6 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 1.0 }}
        className="absolute bottom-2.5 right-2.5 bg-green-500 rounded-lg px-2.5 py-1.5 shadow-card flex items-center gap-1.5"
      >
        <span className="text-white text-[9px] font-bold">+234% trafikk</span>
      </motion.div>
    </div>
  )
}

function HoOrbitPreview({ visible }: { visible: boolean }) {
  // Animation language: app dashboard — icon pops, sidebar fades in, tasks slide in from right
  return (
    <div className="h-36 rounded-lg overflow-hidden relative bg-gradient-to-br from-cyan-900 to-cyan-800">
      <div className="absolute inset-0 p-2.5 flex">
        {/* Logo/icon — spring pop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={visible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.3 }}
          className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center shrink-0 mb-auto"
        >
          <span className="text-cyan-900 text-[9px] font-bold">HO</span>
        </motion.div>

        {/* Sidebar — fade in left */}
        <div className="flex-1 flex flex-col gap-1 px-1.5 ml-1.5">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="w-12 h-1.5 bg-cyan-500/40 rounded"
          />
          {[0.5, 0.8, 1.1].map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, x: -10 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.28, delay }}
              className="w-10 h-1 bg-cyan-400/30 rounded"
            />
          ))}
        </div>

        {/* Tasks column — slide from right */}
        <div className="flex flex-col gap-1.5 ml-auto">
          {[
            { color: '#3b82f6', delay: 0.5 },
            { color: '#fbbf24', delay: 0.65 },
            { color: '#34c759', delay: 0.8 },
          ].map((task, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 12 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: task.delay }}
              className="w-10 h-3 rounded-md"
              style={{ background: task.color }}
            />
          ))}
        </div>
      </div>

      {/* Live indicator badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 6 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 1.0 }}
        className="absolute bottom-2.5 right-2.5 bg-green-500 rounded-lg px-2 py-1 shadow-card flex items-center gap-1"
      >
        <span className="text-white text-[9px] font-bold">Live</span>
      </motion.div>
    </div>
  )
}

function NordicFitPreview({ visible }: { visible: boolean }) {
  return (
    <div className="h-36 rounded-lg overflow-hidden relative" style={{ background: '#0f0a1e' }}>
      <div className="absolute inset-0 p-3 flex flex-col">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={visible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.35 }}
          className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mb-2 border-2 border-purple-400/30"
        >
          <span className="text-white text-[10px] font-bold">NF</span>
        </motion.div>

        {/* Colour swatches */}
        <div className="flex gap-1.5 mb-3">
          {[
            { color: '#8b5cf6', delay: 0.52 },
            { color: '#ffffff', delay: 0.62 },
            { color: '#1a1a1a', delay: 0.72 },
          ].map((swatch, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={visible ? { scaleY: 1 } : {}}
              transition={{ duration: 0.3, delay: swatch.delay, ease: 'easeOut' }}
              style={{ transformOrigin: 'bottom', background: swatch.color }}
              className="w-8 h-8 rounded-md border border-white/10"
            />
          ))}
        </div>

        {/* Typography bars */}
        <div className="flex flex-col gap-1.5">
          {[{ w: '70%', h: 'h-2.5', delay: 0.78 }, { w: '50%', h: 'h-2', delay: 0.86 }, { w: '80%', h: 'h-1.5', delay: 0.92 }].map((bar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: bar.delay }}
              className={`${bar.h} rounded bg-white/20`}
              style={{ width: bar.w }}
            />
          ))}
        </div>
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 6 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 1.05 }}
        className="absolute bottom-2.5 right-2.5 bg-purple-600 rounded-lg px-2.5 py-1.5 shadow-card"
      >
        <span className="text-white text-[9px] font-bold">Brand guidelines ✓</span>
      </motion.div>
    </div>
  )
}

// ─── Project data ────────────────────────────────────────────────────────────
const projects = [
  {
    slug: 'ho-orbit',
    title: 'h-orbit',
    description: 'Workflow-app som samler oppgaver, chat og dokumenter. 150+ team-medlemmer og 5000+ daglige interaksjoner.',
    tags: ['App utvikling', 'Full-stack'],
    location: 'Bergen, Norge',
    result: '5000+ daily interactions',
    color: '#06b6d4',
    Preview: HoOrbitPreview,
  },
  {
    slug: 'artadent',
    title: 'Artadent',
    description: 'Side 1 på Google for "tannlege Bergen" innen 6 uker etter lansering. Besøkstall økt med 340%.',
    tags: ['Web design', 'SEO'],
    location: 'Bergen, Norge',
    result: 'Side 1 på Google – 6 uker',
    color: '#2172b5',
    Preview: ArtadentPreview,
  },
  {
    slug: 'marbesa-project-94',
    title: 'Marbesa Project 94',
    description: 'Luksus eiendomsnettside lansert på 3 uker. Genererte 12 kvalifiserte leads i første måned.',
    tags: ['Web design', 'Branding'],
    location: 'Marbella, Spania',
    result: 'Premium luksusestetikk',
    color: '#C8A882',
    Preview: MarbesaPreview,
  },
  {
    slug: 'gv-rentals',
    title: 'GV Rentals',
    description: 'Nettside og sosiale medier som økte bookingrate med 67% i første kvartal etter lansering.',
    tags: ['Web design', 'Sosiale medier'],
    location: 'Marbella, Spania',
    result: '+67% bookingrate',
    color: '#34C759',
    Preview: GvRentalsPreview,
  },
  {
    slug: 'bergen-bakeri',
    title: 'Bergen Bakeri',
    description: 'Ny nettside og Instagram-strategi som doblet antall henvendelser på 30 dager.',
    tags: ['Web design', 'Sosiale medier'],
    location: 'Bergen, Norge',
    result: '2× henvendelser på 30 dager',
    color: '#f59e0b',
    Preview: BergenBakeriPreview,
  },
  {
    slug: 'nordic-fit',
    title: 'Nordic Fit',
    description: 'Komplett brandingpakke og nettside for treningssenter i Bergen – fra logo til lansering.',
    tags: ['Branding', 'Web design'],
    location: 'Bergen, Norge',
    result: 'Komplett brand på 2 uker',
    color: '#8b5cf6',
    Preview: NordicFitPreview,
  },
]

export default function HomeProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-bg-dark overflow-hidden relative">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-4 h-px bg-accent" /> Vårt arbeid
            </span>
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg-light">Utvalgte prosjekter</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/prosjekter" className="text-sm font-semibold text-fg-light/60 hover:text-fg-light transition-colors inline-flex items-center gap-1.5">
              Se alle prosjekter <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>

        {/* Project cards — 3 featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.slice(0, 3).map(({ slug, title, description, tags, location, result, color, Preview }, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <Link
                href={`/prosjekter/${slug}`}
                className="group block bg-bg-dark-2 border border-border-dark rounded-xl p-5 hover:border-accent transition-all duration-250 hover:shadow-blue-sm h-full"
              >
                {/* Animated project preview */}
                <div className="mb-5">
                  <Preview visible={isInView} />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-fg-light/40">{tag}</span>
                  ))}
                </div>

                {/* Title + description */}
                <h3 className="display-text text-2xl text-fg-light mb-2 group-hover:text-accent transition-colors duration-200">{title}</h3>
                <p className="text-fg-light/50 text-sm leading-relaxed mb-6">{description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ color, backgroundColor: `${color}18` }}>
                    {result}
                  </span>
                  <span aria-hidden className="text-fg-light/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
