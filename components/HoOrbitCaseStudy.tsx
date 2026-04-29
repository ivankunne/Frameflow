'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function HoOrbitCaseStudy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

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
          <span className="inline-flex items-center gap-2 text-cyan-600 text-xs font-semibold uppercase tracking-widest mb-4">
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
                        <span className="text-cyan-600 text-[10px] font-bold">✓</span>
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
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-border bg-gradient-to-br from-cyan-50 to-cyan-100/50 p-6 min-h-80">
              {/* App frame - desktop app style */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border/50 h-full flex flex-col">
                {/* Top bar */}
                <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 px-6 py-4 text-white flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-cyan-400 flex items-center justify-center">
                      <span className="text-xs font-bold text-cyan-900">♪</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">h-orbit</p>
                      <p className="text-[10px] text-cyan-200">Discover & Collaborate</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-cyan-400 flex items-center justify-center text-[10px] font-bold text-cyan-900">♫</div>
                  </div>
                </div>

                {/* Content area */}
                <div className="flex-1 overflow-hidden">
                  <div className="grid grid-cols-3 gap-3 p-5">
                    {/* Sidebar */}
                    <div className="col-span-1 border-r border-border pr-3 space-y-2">
                      <div className="text-[10px] font-semibold text-fg-muted uppercase mb-2">Browse</div>
                      {['My Tracks', 'Collaborators', 'Events'].map((p, i) => (
                        <div
                          key={i}
                          className={`text-xs p-2 rounded-lg cursor-pointer transition-colors ${
                            i === 0 ? 'bg-cyan-100 text-cyan-900 font-medium' : 'text-fg-muted hover:bg-fg/5'
                          }`}
                        >
                          {p}
                        </div>
                      ))}
                    </div>

                    {/* Main content */}
                    <div className="col-span-2 space-y-3">
                      <div className="text-[10px] font-semibold text-fg-muted uppercase mb-2">Your Music Feed</div>
                      {[
                        { title: 'Upload new track', status: 'Ready', color: 'bg-blue-100' },
                        { title: 'Collab request from Luna', status: 'New', color: 'bg-yellow-100' },
                        { title: 'Indie Music Night - Aug 15', status: 'Interested', color: 'bg-green-100' },
                      ].map((track, i) => (
                        <div key={i} className={`${track.color} rounded-lg p-2.5 border border-border/50`}>
                          <div className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full border border-border mt-0.5 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] font-medium text-fg truncate">{track.title}</p>
                              <p className="text-[8px] text-fg-muted">{track.status}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="border-t border-border bg-fg/2 px-5 py-3 grid grid-cols-3 gap-2 shrink-0">
                  {[
                    { label: 'Tracks', value: '24' },
                    { label: 'Collabs', value: '8' },
                    { label: 'Events', value: '12' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-sm font-bold text-cyan-600">{stat.value}</p>
                      <p className="text-[8px] text-fg-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.5 }}
                className="absolute -bottom-3 -right-3 bg-white border border-border rounded-xl px-4 py-2 shadow-card-hover flex items-center gap-2"
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
