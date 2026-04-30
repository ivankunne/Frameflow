'use client'

import { motion } from 'framer-motion'

// ─── Artadent ────────────────────────────────────────────────────────────────
export function ArtadentPreview({ visible }: { visible: boolean }) {
  return (
    <div className="h-full w-full rounded-xl overflow-hidden relative" style={{ background: '#f0f6ff' }}>
      <div className="absolute inset-0 p-4 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex items-center justify-between mb-4"
        >
          <div className="w-14 h-2.5 bg-[#2172b5]/40 rounded" />
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => <div key={i} className="w-8 h-2 bg-[#2172b5]/20 rounded" />)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.46 }}
          className="mb-4"
        >
          <div className="w-3/4 h-5 bg-[#171717]/20 rounded mb-2" />
          <div className="w-1/2 h-3.5 bg-[#171717]/12 rounded mb-3" />
          <div className="flex gap-2">
            <div className="w-20 h-7 rounded-lg bg-[#2172b5]" />
            <div className="w-16 h-7 rounded-lg border border-[#2172b5]/30" />
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 flex-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 240, damping: 16, delay: 0.72 + i * 0.09 }}
              className="rounded-lg bg-[#2172b5]/10 border border-[#2172b5]/12"
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 6 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.95 }}
        className="absolute bottom-3 right-3 bg-white rounded-lg px-3 py-1.5 shadow-card flex items-center gap-2"
      >
        <span className="text-green-500 text-xs font-bold">●</span>
        <span className="text-xs font-semibold text-[#171717]">Topp 10 Google</span>
      </motion.div>
    </div>
  )
}

// ─── Marbesa ─────────────────────────────────────────────────────────────────
export function MarbesaPreview({ visible }: { visible: boolean }) {
  return (
    <div
      className="h-full w-full rounded-xl overflow-hidden relative"
      style={{ background: 'linear-gradient(160deg, #12100e 0%, #1c1710 50%, #241d13 100%)' }}
    >
      <div className="absolute inset-0 flex">
        <div className="flex-1 p-4 flex flex-col justify-center gap-2">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.35, delay: 0.32 }} className="w-10 h-2 rounded" style={{ background: '#c9a96e' }} />
          <motion.div initial={{ opacity: 0, x: -10 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: 0.44 }} className="w-24 h-4 bg-white/25 rounded" />
          <motion.div initial={{ opacity: 0, x: -10 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.28, delay: 0.54 }} className="w-16 h-3 bg-white/15 rounded" />
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={visible ? { opacity: 1, scale: 1 } : {}} transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.68 }} className="w-16 h-6 rounded-md mt-1" style={{ background: '#c9a96e' }} />
        </div>
        <div className="w-28 m-2.5 rounded-lg overflow-hidden flex-shrink-0 relative">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #2a2016 0%, #3d3020 100%)' }} />
          <motion.div initial={{ x: 0 }} animate={visible ? { x: '100%' } : {}} transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 z-10" style={{ background: '#1c1710' }} />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-2 mx-auto rounded mb-2" style={{ background: 'rgba(201,169,110,0.45)' }} />
              <div className="w-10 h-1.5 mx-auto rounded" style={{ background: 'rgba(201,169,110,0.25)' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: 'linear-gradient(45deg, transparent 40%, rgba(201,169,110,0.6) 50%, transparent 60%)' }} />
    </div>
  )
}

// ─── GV Rentals ──────────────────────────────────────────────────────────────
export function GvRentalsPreview({ visible }: { visible: boolean }) {
  const listings = [
    { color: '#34C759', label: 'Villa Sol', avail: true },
    { color: '#2172b5', label: 'Ocean View', avail: false },
    { color: '#f59e0b', label: 'Casa Blanca', avail: true },
  ]
  return (
    <div className="h-full w-full rounded-xl overflow-hidden relative bg-white border border-border/40">
      <div className="absolute inset-0 p-3 flex flex-col gap-2">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.28, delay: 0.3 }}
          className="flex items-center justify-between pb-2 border-b border-border/40"
        >
          <div className="w-16 h-2.5 bg-[#171717]/20 rounded" />
          <div className="flex gap-1.5">
            <div className="w-6 h-5 bg-bg-2 border border-border rounded text-[9px] flex items-center justify-center text-[#818181]">≡</div>
            <div className="w-14 h-5 bg-[#2172b5] rounded text-[9px] flex items-center justify-center text-white font-semibold">Book</div>
          </div>
        </motion.div>
        {listings.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 14 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.32, delay: 0.42 + i * 0.1 }}
            className="flex items-center gap-2.5 bg-[#f8f8f8]/60 rounded-lg px-2.5 py-2"
          >
            <div className="w-8 h-8 rounded-md shrink-0" style={{ background: `${item.color}22`, border: `1px solid ${item.color}28` }} />
            <div className="flex-1">
              <div className="w-16 h-2 bg-[#171717]/20 rounded mb-1.5" />
              <div className="w-10 h-1.5 bg-[#171717]/10 rounded" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={visible ? { scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 280, damping: 14, delay: 0.65 + i * 0.1 }}
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: item.avail ? '#34C759' : '#94a3b8' }}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 6 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.92 }}
        className="absolute bottom-3 right-3 bg-[#34C759] rounded-lg px-2.5 py-1.5 shadow-card"
      >
        <span className="text-white text-[10px] font-bold">↑ Økt booking</span>
      </motion.div>
    </div>
  )
}

// ─── h-orbit ─────────────────────────────────────────────────────────────────
export function HoOrbitPreview({ visible }: { visible: boolean }) {
  return (
    <div className="h-full w-full rounded-xl overflow-hidden relative bg-gradient-to-br from-cyan-900 to-cyan-800">
      <div className="absolute inset-0 p-3 flex">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={visible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.3 }}
          className="w-9 h-9 rounded-xl bg-cyan-400 flex items-center justify-center shrink-0 mb-auto"
        >
          <span className="text-cyan-900 text-[10px] font-bold">HO</span>
        </motion.div>
        <div className="flex-1 flex flex-col gap-1.5 px-2 ml-2">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: 0.4 }} className="w-14 h-2 bg-cyan-500/40 rounded" />
          {[0.5, 0.8, 1.1].map((delay) => (
            <motion.div key={delay} initial={{ opacity: 0, x: -10 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.28, delay }} className="w-10 h-1.5 bg-cyan-400/30 rounded" />
          ))}
        </div>
        <div className="flex flex-col gap-2 ml-auto">
          {[{ color: '#3b82f6', delay: 0.5 }, { color: '#fbbf24', delay: 0.65 }, { color: '#34c759', delay: 0.8 }].map((task, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 12 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: task.delay }} className="w-12 h-4 rounded-lg" style={{ background: task.color }} />
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 6 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 1.0 }}
        className="absolute bottom-3 right-3 bg-green-500 rounded-lg px-2.5 py-1.5 shadow-card flex items-center gap-1.5"
      >
        <span className="text-white text-[10px] font-bold">Live</span>
      </motion.div>
    </div>
  )
}

// ─── Slug → Preview map (used by ProsjekterClient) ───────────────────────────
import type React from 'react'
export const projectPreviews: Record<string, React.ComponentType<{ visible: boolean }>> = {
  'artadent':           ArtadentPreview,
  'marbesa-project-94': MarbesaPreview,
  'gv-rentals':         GvRentalsPreview,
  'ho-orbit':           HoOrbitPreview,
}
