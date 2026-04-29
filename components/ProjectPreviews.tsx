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

// ─── Bergen Bakeri ───────────────────────────────────────────────────────────
export function BergenBakeriPreview({ visible }: { visible: boolean }) {
  return (
    <div className="h-full w-full rounded-xl overflow-hidden relative" style={{ background: '#fef9f0' }}>
      <div className="absolute inset-0 p-3 flex flex-col">
        <motion.div initial={{ opacity: 0, y: -6 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay: 0.3 }} className="flex items-center justify-between mb-2.5">
          <div className="w-16 h-2.5 bg-[#f59e0b]/50 rounded" />
          <div className="flex gap-2">{[...Array(3)].map((_, i) => <div key={i} className="w-7 h-2 bg-[#f59e0b]/25 rounded" />)}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.42 }} className="h-12 rounded-xl mb-2.5 flex items-center px-3" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' }}>
          <div className="w-28 h-3 bg-white/80 rounded" />
        </motion.div>
        <div className="grid grid-cols-3 gap-2 mb-2.5">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={visible ? { opacity: 1, scale: 1 } : {}} transition={{ type: 'spring', stiffness: 240, damping: 16, delay: 0.62 + i * 0.09 }} className="h-8 rounded-lg bg-[#f59e0b]/15 border border-[#f59e0b]/20 flex items-end p-1.5">
              <div className="w-full h-2 bg-[#f59e0b]/30 rounded" />
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 4 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay: 0.9 }} className="w-24 h-6 rounded-lg bg-[#f59e0b] flex items-center justify-center">
          <span className="text-white text-[9px] font-semibold">Bestill nå</span>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.75, y: 6 }} animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}} transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 1.0 }} className="absolute bottom-3 right-3 bg-green-500 rounded-lg px-2.5 py-1.5 shadow-card">
        <span className="text-white text-[10px] font-bold">+234% trafikk</span>
      </motion.div>
    </div>
  )
}

// ─── Nordic Fit ──────────────────────────────────────────────────────────────
export function NordicFitPreview({ visible }: { visible: boolean }) {
  return (
    <div className="h-full w-full rounded-xl overflow-hidden relative" style={{ background: '#0f0a1e' }}>
      <div className="absolute inset-0 p-4 flex flex-col">
        <motion.div initial={{ opacity: 0, scale: 0.5, rotate: -20 }} animate={visible ? { opacity: 1, scale: 1, rotate: 0 } : {}} transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.35 }} className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mb-3 border-2 border-purple-400/30">
          <span className="text-white text-xs font-bold">NF</span>
        </motion.div>
        <div className="flex gap-2 mb-4">
          {[{ color: '#8b5cf6', delay: 0.52 }, { color: '#ffffff', delay: 0.62 }, { color: '#1a1a1a', delay: 0.72 }].map((s, i) => (
            <motion.div key={i} initial={{ scaleY: 0 }} animate={visible ? { scaleY: 1 } : {}} transition={{ duration: 0.3, delay: s.delay, ease: 'easeOut' }} style={{ transformOrigin: 'bottom', background: s.color }} className="w-10 h-10 rounded-lg border border-white/10" />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {[{ w: '70%', h: 'h-3', delay: 0.78 }, { w: '50%', h: 'h-2.5', delay: 0.86 }, { w: '80%', h: 'h-2', delay: 0.92 }].map((bar, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: bar.delay }} className={`${bar.h} rounded bg-white/20`} style={{ width: bar.w }} />
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.75, y: 6 }} animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}} transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 1.05 }} className="absolute bottom-3 right-3 bg-purple-600 rounded-lg px-2.5 py-1.5 shadow-card">
        <span className="text-white text-[10px] font-bold">Brand guidelines ✓</span>
      </motion.div>
    </div>
  )
}

// ─── Slug → component map ─────────────────────────────────────────────────────
export const projectPreviews: Record<string, React.ComponentType<{ visible: boolean }>> = {
  'artadent':          ArtadentPreview,
  'marbesa-project-94': MarbesaPreview,
  'gv-rentals':        GvRentalsPreview,
}
