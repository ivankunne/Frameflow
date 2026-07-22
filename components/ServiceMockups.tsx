'use client'

import { motion } from 'framer-motion'

// ─── 01 Web design: page-load simulation ───────────────────────────────────
// Animation language: top-down progressive reveal, load progress bar, card pop-ins
export function WebMockup({ visible }: { visible: boolean }) {
  return (
    <div className="h-44 bg-white rounded-xl border border-border overflow-hidden shadow-card">
      {/* Browser chrome */}
      <div className="bg-bg-2 border-b border-border px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1 shrink-0">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-white border border-border/60 rounded px-2 py-0.5 relative overflow-hidden">
          {/* URL load flash */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0.6 }}
            animate={visible ? { scaleX: [0, 1, 1], opacity: [0.6, 0.4, 0] } : {}}
            transition={{ duration: 0.7, delay: 0.2, times: [0, 0.75, 1] }}
            style={{ transformOrigin: 'left' }}
            className="absolute inset-y-0 left-0 right-0 bg-accent/20 rounded"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 }}
            className="text-[9px] text-fg-muted font-mono relative z-10"
          >
            sportsbytte.no
          </motion.span>
        </div>
      </div>

      <div className="p-3.5 relative overflow-hidden">
        {/* Page load progress bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={visible ? { scaleX: [0, 0.6, 1], opacity: [1, 1, 0] } : {}}
          transition={{ duration: 0.75, delay: 0.25, times: [0, 0.65, 1] }}
          style={{ transformOrigin: 'left' }}
          className="absolute top-0 left-0 right-0 h-0.5 bg-accent z-10"
        />

        {/* Nav — slides down from above */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.58 }}
          className="flex items-center justify-between mb-3"
        >
          <div className="w-12 h-2 bg-accent/25 rounded-full" />
          <div className="flex gap-1.5">
            <div className="w-8 h-1.5 bg-fg/10 rounded" />
            <div className="w-8 h-1.5 bg-fg/10 rounded" />
            <div className="w-12 h-5 bg-accent rounded-md" />
          </div>
        </motion.div>

        {/* Hero block — slides up */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.7 }}
          className="mb-3"
        >
          <div className="w-3/4 h-3.5 bg-fg/18 rounded mb-1.5" />
          <div className="w-1/2 h-2.5 bg-fg/10 rounded mb-2.5" />
          <div className="flex gap-1.5">
            <div className="w-14 h-5 bg-accent rounded-md" />
            <div className="w-14 h-5 border border-border rounded-md" />
          </div>
        </motion.div>

        {/* Service cards — spring pop-in stagger */}
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.82 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 240, damping: 18, delay: 0.85 + i * 0.1 }}
              className="h-9 rounded-md border border-border/50 bg-bg-2"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── 02 Foto/video: cinematic video editor ─────────────────────────────────
// Animation language: dark interface, colour grade washes in, timeline clips fill, playhead scrubs
export function CameraMockup({ visible }: { visible: boolean }) {
  return (
    <div className="h-44 rounded-xl overflow-hidden flex flex-col" style={{ background: '#0d0e11' }}>
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-3 py-1.5 shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[8px] font-mono uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
            4K · 24fps
          </span>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-[8px] font-mono tabular-nums"
          style={{ color: 'rgba(255,255,255,0.22)' }}
        >
          00:00:03:18
        </motion.span>
      </div>

      {/* Middle: preview + grade panel */}
      <div className="flex flex-1 min-h-0">
        {/* Video preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex-1 relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #1a1208 0%, #2c1d0e 50%, #1a1208 100%)' }}
        >
          {/* Letterbox bars */}
          <div className="absolute top-0 inset-x-0 h-2" style={{ background: 'rgba(0,0,0,0.8)' }} />
          <div className="absolute bottom-0 inset-x-0 h-2" style={{ background: 'rgba(0,0,0,0.8)' }} />

          {/* Warm colour grade washing in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.75 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 65% 40%, rgba(255,175,50,0.14) 0%, transparent 65%)',
            }}
          />
          {/* Teal shadow push */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.9 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 20% 80%, rgba(30,80,100,0.2) 0%, transparent 60%)',
            }}
          />

          {/* LUT badge */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.15 }}
            className="absolute bottom-3 left-2.5"
          >
            <span
              className="text-[7px] font-bold px-1.5 py-0.5 rounded tracking-wider"
              style={{
                background: 'rgba(245,158,11,0.14)',
                color: '#f59e0b',
                border: '1px solid rgba(245,158,11,0.22)',
              }}
            >
              CINEMATIC LUT ✓
            </span>
          </motion.div>
        </motion.div>

        {/* Colour grading panel */}
        <div
          className="w-[76px] flex flex-col px-2 pt-1.5 pb-2 gap-1.5"
          style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.45 }}
            className="text-[7px] uppercase tracking-widest font-semibold shrink-0"
            style={{ color: 'rgba(255,255,255,0.22)' }}
          >
            Fargesetting
          </motion.p>

          {[
            { label: 'Temp', color: '#f59e0b', pct: '68%' },
            { label: 'Tint', color: '#818cf8', pct: '38%' },
            { label: 'Exp', color: '#34d399', pct: '57%' },
            { label: 'Sat', color: '#f472b6', pct: '46%' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 8 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.52 + i * 0.08 }}
            >
              <span className="text-[7px] block mb-0.5" style={{ color: 'rgba(255,255,255,0.22)' }}>
                {item.label}
              </span>
              <div
                className="h-0.5 rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={visible ? { width: item.pct } : {}}
                  transition={{ duration: 0.42, delay: 0.62 + i * 0.09, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: item.color }}
                />
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 1.05 }}
            className="mt-auto rounded py-1.5 flex items-center justify-center shrink-0"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span className="text-[8px] font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Export
            </span>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div
        className="px-2.5 py-2 shrink-0 relative"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex flex-col gap-1.5">
          {[
            { id: 'V', color: '#2172b5', pct: '72%' },
            { id: 'A', color: '#34d399', pct: '88%' },
          ].map((track, i) => (
            <div key={track.id} className="flex items-center gap-1.5">
              <span
                className="text-[7px] w-2.5 font-mono shrink-0 text-center"
                style={{ color: 'rgba(255,255,255,0.2)' }}
              >
                {track.id}
              </span>
              <div
                className="flex-1 h-3 rounded-sm overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={visible ? { width: track.pct } : {}}
                  transition={{ duration: 0.55, delay: 0.78 + i * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-sm"
                  style={{
                    background: `${track.color}30`,
                    borderRight: `2px solid ${track.color}70`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Playhead — scrubs left to right */}
        <motion.div
          initial={{ left: '16px' }}
          animate={visible ? { left: 'calc(72% - 4px)' } : {}}
          transition={{ duration: 0.9, delay: 0.88, ease: 'easeInOut' }}
          className="absolute top-1.5 bottom-1.5 w-px pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.55)' }}
        />
      </div>
    </div>
  )
}

// ─── 03 Social media: stories + live post card ─────────────────────────────
// Animation language: spring pop-ins for avatar rings, y-slide for post card, fill bar for reach
export function SocialMockup({ visible }: { visible: boolean }) {
  const storyColors = ['#f59e0b', '#ec4899', '#8b5cf6', '#2172b5', '#34d399']

  return (
    <div className="h-44 rounded-xl border border-border overflow-hidden bg-white shadow-card">
      {/* Account header */}
      <div className="px-3 pt-2.5 pb-2 flex items-center justify-between border-b border-border/50">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(45deg,#f59e0b,#ec4899)' }}
          >
            <span className="text-white text-[8px] font-bold">FF</span>
          </div>
          <span className="text-xs font-semibold text-fg">@frameflow</span>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.38 }}
          className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-2 py-0.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] font-semibold text-green-700">Live</span>
        </motion.div>
      </div>

      {/* Stories row — spring stagger pop-in */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30">
        {storyColors.map((color, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={visible ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.3 + i * 0.07 }}
            className="w-7 h-7 rounded-full border-2 shrink-0"
            style={{ borderColor: color, background: `${color}1a` }}
          />
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.78 }}
          className="text-[9px] text-fg-muted ml-0.5 shrink-0"
        >
          +12
        </motion.span>
      </div>

      {/* Latest post — slides up */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.38, delay: 0.62 }}
        className="px-3 pt-2 flex gap-2.5 items-start"
      >
        <div
          className="w-14 h-11 rounded-lg shrink-0"
          style={{ background: 'linear-gradient(135deg, #2172b5 0%, #60a5fa 100%)' }}
        />
        <div className="flex-1 pt-0.5">
          <div className="w-full h-2 bg-fg/15 rounded mb-1.5" />
          <div className="w-4/5 h-1.5 bg-fg/10 rounded mb-2" />
          <div className="flex gap-3">
            <motion.span
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ delay: 0.85 }}
              className="text-[9px] text-fg-muted"
            >
              ♥ 234
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="text-[9px] text-fg-muted"
            >
              💬 18
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Reach fill bar */}
      <div className="px-3 pt-2.5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[9px] text-fg-muted">Ukentlig rekkevidde</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.98 }}
            className="text-[9px] font-bold text-accent"
          >
            12.4K ↑ 23%
          </motion.span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden bg-bg-2">
          <motion.div
            initial={{ width: 0 }}
            animate={visible ? { width: '74%' } : {}}
            transition={{ duration: 0.65, delay: 1.05, ease: 'easeOut' }}
            className="h-full rounded-full bg-accent"
          />
        </div>
      </div>
    </div>
  )
}

// ─── 04 Branding: brand system reveal ─────────────────────────────────────
// Animation language: logo rotates in, text clips reveal upward, swatches flip up (scaleY from bottom), type stagger
export function BrandMockup({ visible }: { visible: boolean }) {
  const palette = ['#171717', '#2172b5', '#e8f0f9', '#818181', '#f8f8f8']

  return (
    <div className="h-44 bg-white rounded-xl border border-border overflow-hidden p-3.5 shadow-card">
      {/* Logo + wordmark */}
      <div className="flex items-center gap-3 mb-3.5">
        <motion.div
          initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
          animate={visible ? { rotate: 0, scale: 1, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.28 }}
          className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shrink-0 shadow-blue-sm"
        >
          <span className="text-white text-xs font-bold display-text">FF</span>
        </motion.div>

        <div className="flex flex-col gap-1 flex-1">
          {/* Clip reveal — text slides up from below */}
          <div className="overflow-hidden h-3">
            <motion.div
              initial={{ y: '100%' }}
              animate={visible ? { y: '0%' } : {}}
              transition={{ duration: 0.38, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="w-20 h-3 bg-fg/20 rounded"
            />
          </div>
          <div className="overflow-hidden h-2">
            <motion.div
              initial={{ y: '100%' }}
              animate={visible ? { y: '0%' } : {}}
              transition={{ duration: 0.32, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
              className="w-14 h-2 bg-fg/10 rounded"
            />
          </div>
        </div>
      </div>

      {/* Colour palette — swatches flip up (scaleY from bottom) */}
      <div className="mb-3">
        <p className="text-[8px] uppercase tracking-widest text-fg-muted font-semibold mb-1.5">
          Fargepalett
        </p>
        <div className="flex gap-1">
          {palette.map((color, i) => (
            <motion.div
              key={color}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={visible ? { scaleY: 1, opacity: 1 } : {}}
              transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.6 + i * 0.08 }}
              style={{
                backgroundColor: color,
                transformOrigin: 'bottom',
                border: color === '#f8f8f8' ? '1px solid #e8e8e8' : undefined,
              }}
              className="flex-1 h-6 rounded-sm"
            />
          ))}
        </div>
      </div>

      {/* Typography scale — staggered x-slide */}
      <div>
        <p className="text-[8px] uppercase tracking-widest text-fg-muted font-semibold mb-1.5">
          Typografi
        </p>
        {[
          { w: 'w-24', h: 'h-3', opacity: 'bg-fg/20' },
          { w: 'w-20', h: 'h-2', opacity: 'bg-fg/13' },
          { w: 'w-28', h: 'h-1.5', opacity: 'bg-fg/8' },
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 1.02 + i * 0.08 }}
            className={`${line.w} ${line.h} ${line.opacity} rounded mb-1`}
          />
        ))}
      </div>
    </div>
  )
}

// ─── 05 App development: dashboard interface ───────────────────────────────
// Animation language: app header fades in, sidebar items slide, tasks pop with colors
export function AppMockup({ visible }: { visible: boolean }) {
  return (
    <div className="h-full w-full bg-white rounded-xl border border-border overflow-hidden shadow-card flex flex-col">
      {/* App header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="bg-gradient-to-r from-cyan-600 to-cyan-500 px-3.5 py-2.5 text-white flex items-center justify-between shrink-0"
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-cyan-400 flex items-center justify-center text-[7px] font-bold text-cyan-900">
            ♪
          </div>
          <div>
            <p className="text-[10px] font-semibold leading-tight">h-orbit</p>
            <p className="text-[7px] text-cyan-200">Music Platform</p>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-cyan-400/60" />
      </motion.div>

      {/* Dashboard content */}
      <div className="flex-1 flex overflow-hidden p-3 gap-3">
        {/* Sidebar - navigation */}
        <div className="w-14 flex flex-col gap-2">
          {[0.3, 0.42, 0.54].map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, x: -8 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay }}
              className="h-5 bg-cyan-300/60 rounded-full"
            />
          ))}
        </div>

        {/* Main content - tasks */}
        <div className="flex-1 flex flex-col gap-2">
          {[
            { color: '#3b82f6', delay: 0.48 },
            { color: '#fbbf24', delay: 0.6 },
            { color: '#34c759', delay: 0.72 },
          ].map((task) => (
            <motion.div
              key={task.color}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 240, damping: 16, delay: task.delay }}
              className="flex gap-2 items-center flex-1 bg-white rounded-lg px-3 py-2 border border-border/50"
            >
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: task.color }}
              />
              <div className="flex-1 h-2 bg-fg/12 rounded" />
              <div className="w-3 h-3 rounded-sm bg-fg/10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, delay: 0.82 }}
        className="bg-white border-t border-border px-3 py-1.5 flex justify-around text-[8px] text-fg-muted"
      >
        <span>2.4k artists</span>
        <span>•</span>
        <span>500+ collabs</span>
        <span>•</span>
        <span>1k+ events</span>
      </motion.div>
    </div>
  )
}

// ─── 07 AI Automasjon: workflow pipeline ──────────────────────────────────
export function AIMockup({ visible }: { visible: boolean }) {
  const steps = [
    { label: 'Ny henvendelse mottatt', color: '#6366f1', bg: '#eef2ff', border: '#c7d2fe', icon: '↓' },
    { label: 'AI behandler og svarer', color: '#8b5cf6', bg: '#f5f3ff', border: '#ddd6fe', icon: '◆' },
    { label: 'Svar sendt · CRM oppdatert', color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', icon: '✓' },
  ]

  return (
    <div className="h-44 bg-white rounded-xl border border-border overflow-hidden shadow-card">
      <div className="bg-bg-2 border-b border-border px-3 py-2 flex items-center justify-between">
        <span className="text-[9px] font-bold uppercase tracking-widest text-fg-muted">AI Automasjon</span>
        <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] font-semibold text-green-700">Aktiv</span>
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1">
        {steps.map((step, i) => (
          <div key={step.label}>
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.28 }}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg"
              style={{ background: step.bg, border: `1px solid ${step.border}` }}
            >
              <span className="text-[9px] font-bold shrink-0" style={{ color: step.color }}>{step.icon}</span>
              <span className="text-[9px] font-medium text-fg-muted flex-1">{step.label}</span>
              {i === 1 ? (
                <motion.span
                  animate={visible ? { opacity: [1, 0.3, 1] } : {}}
                  transition={{ duration: 1, delay: 0.8, repeat: Infinity }}
                  className="text-[8px] font-bold shrink-0"
                  style={{ color: step.color }}
                >
                  ···
                </motion.span>
              ) : (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={visible ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.28 }}
                  className="text-[8px] font-bold shrink-0"
                  style={{ color: step.color }}
                >
                  {i === 0 ? '→' : '✓'}
                </motion.span>
              )}
            </motion.div>
            {i < 2 && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={visible ? { opacity: 1, scaleY: 1 } : {}}
                transition={{ duration: 0.15, delay: 0.56 + i * 0.28 }}
                className="ml-4 w-px h-1.5 my-0.5"
                style={{ background: '#6366f120', transformOrigin: 'top' }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="px-3 pt-1 flex items-center justify-between">
        <span className="text-[8px] text-fg-muted">47 håndtert i dag</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-[8px] font-semibold"
          style={{ color: '#16a34a' }}
        >
          0 manuelt ✓
        </motion.span>
      </div>
    </div>
  )
}

// ─── SEO: Google Search Console style ranking dashboard ───────────────────
export function SEOMockup({ visible }: { visible: boolean }) {
  const results = [
    { rank: 1, title: 'Frameflow – Markedsføringsbyrå Bergen', url: 'frameflow.no', highlight: true },
    { rank: 2, title: 'Annet byrå i Bergen', url: 'example.no', highlight: false },
    { rank: 3, title: 'Digital markedsføring Bergen', url: 'eksempel.no', highlight: false },
  ]
  const bars = [22, 35, 28, 48, 42, 60, 55, 74, 68, 88]

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden shadow-card">
      {/* Browser chrome */}
      <div className="bg-bg-2 border-b border-border px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1 shrink-0">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-white border border-border/60 rounded-full px-3 py-0.5 flex items-center gap-2">
          <span className="text-[9px] text-fg-muted font-mono">google.com · markedsføring Bergen</span>
        </div>
      </div>

      {/* SERP results */}
      <div className="px-3 pt-3 pb-1 space-y-2">
        {results.map((r, i) => (
          <motion.div
            key={r.rank}
            initial={{ opacity: 0, y: 6 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.35 + i * 0.1 }}
            className={`p-2 rounded-lg ${r.highlight ? 'bg-accent/5 border border-accent/20' : 'bg-bg-2 border border-border/50'}`}
          >
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[8px] font-bold" style={{ color: r.highlight ? '#2172b5' : '#9ca3af' }}>#{r.rank}</span>
              <span className="text-[8px] text-fg-muted truncate">{r.url}</span>
              {r.highlight && (
                <span className="ml-auto text-[7px] font-bold px-1.5 py-0.5 rounded" style={{ background: '#dcfce7', color: '#16a34a' }}>
                  Din side ↑
                </span>
              )}
            </div>
            <div className={`text-[9px] font-semibold truncate ${r.highlight ? 'text-accent' : 'text-fg-muted'}`}>{r.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Traffic sparkline */}
      <div className="px-3 pt-2 pb-2">
        <p className="text-[8px] text-fg-muted mb-1 font-medium">Organisk trafikk · 10 uker</p>
        <div className="flex items-end gap-0.5" style={{ height: 28 }}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={visible ? { scaleY: 1 } : {}}
              transition={{ duration: 0.25, delay: 0.65 + i * 0.04, ease: 'easeOut' }}
              style={{
                flex: 1,
                height: `${h}%`,
                transformOrigin: 'bottom',
                background: `rgba(33,114,181,${0.15 + (h / 100) * 0.6})`,
                borderRadius: '2px 2px 0 0',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── AI SEO: chat answer citing the brand as a source ─────────────────────
export function AISEOMockup({ visible }: { visible: boolean }) {
  const engines = [
    { name: 'ChatGPT', cited: true },
    { name: 'Perplexity', cited: true },
    { name: 'Gemini', cited: true },
    { name: 'Copilot', cited: false },
  ]

  return (
    <div className="h-44 bg-white rounded-xl border border-border overflow-hidden shadow-card flex flex-col">
      {/* Chat chrome */}
      <div className="bg-bg-2 border-b border-border px-3 py-2 flex items-center gap-2 shrink-0">
        <div className="flex gap-1 shrink-0">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-white border border-border/60 rounded px-2 py-1 flex items-center gap-1.5">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={visible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            style={{ transformOrigin: 'left' }}
            className="h-1.5 w-2/3 bg-fg/12 rounded-full"
          />
          <span className="text-[9px] text-fg-muted shrink-0">?</span>
        </div>
      </div>

      <div className="p-3 flex-1 flex flex-col gap-2 overflow-hidden">
        {/* AI answer bubble */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="rounded-lg px-3 py-2"
          style={{ background: '#f5f3ff', border: '1px solid #ddd6fe' }}
        >
          <div className="space-y-1 mb-1.5">
            <div className="h-1.5 w-full bg-[#8b5cf6]/15 rounded" />
            <div className="h-1.5 w-4/5 bg-[#8b5cf6]/15 rounded" />
            <div className="h-1.5 w-3/5 bg-[#8b5cf6]/15 rounded" />
          </div>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.7 }}
            className="inline-flex items-center gap-1 text-[9px] font-semibold px-2 py-1 rounded-full"
            style={{ background: '#ede9fe', color: '#6d28d9' }}
          >
            ✓ nettsiden din — kilde
          </motion.span>
        </motion.div>

        {/* engine citation strip */}
        <div className="grid grid-cols-4 gap-1.5 mt-auto">
          {engines.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 6 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 1.0 + i * 0.1 }}
              className="rounded-md py-1 text-center"
              style={{
                background: e.cited ? '#f0fdf4' : '#f9fafb',
                border: `1px solid ${e.cited ? '#bbf7d0' : '#e5e7eb'}`,
              }}
            >
              <p className="text-[7px] font-semibold truncate px-1" style={{ color: e.cited ? '#16a34a' : '#9ca3af' }}>
                {e.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Marketing: multi-channel dashboard ────────────────────────────────────
export function MarketingMockup({ visible }: { visible: boolean }) {
  const channels = [
    { label: 'Nettside', value: '+140%', color: '#2172b5' },
    { label: 'SEO', value: '#1', color: '#16a34a' },
    { label: 'Sosiale', value: '+890', color: '#7c3aed' },
    { label: 'Branding', value: '100%', color: '#d97706' },
  ]
  const bars = [30, 45, 38, 55, 50, 68, 62, 78, 72, 90]

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden shadow-card">
      <div className="bg-bg-2 border-b border-border px-3 py-2 flex items-center justify-between">
        <span className="text-[9px] font-semibold text-fg-muted">Frameflow · Bergen · Alle kanaler</span>
        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ background: '#dcfce7', color: '#16a34a' }}>Live</span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 px-3 pt-3">
        {channels.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 6 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
            className="rounded-lg p-1.5 text-center"
            style={{ background: c.color + '12', border: `1px solid ${c.color}28` }}
          >
            <p className="text-[10px] font-bold leading-tight" style={{ color: c.color }}>{c.value}</p>
            <p className="text-[8px] text-fg-muted mt-0.5 leading-tight">{c.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="px-3 pt-3 pb-2">
        <p className="text-[8px] text-fg-muted mb-1.5 font-medium">Samlet digital synlighet · 10 uker</p>
        <div className="flex items-end gap-0.5" style={{ height: 32 }}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={visible ? { scaleY: 1 } : {}}
              transition={{ duration: 0.25, delay: 0.6 + i * 0.04, ease: 'easeOut' }}
              style={{
                flex: 1,
                height: `${h}%`,
                transformOrigin: 'bottom',
                background: `rgba(33,114,181,${0.15 + (h / 100) * 0.65})`,
                borderRadius: '2px 2px 0 0',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
