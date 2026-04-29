'use client'

import { motion } from 'framer-motion'

// ── 02 Foto & Videografi — Production Monitor ──────────────────────────────
// Full-height cinematic camera interface: waveform, viewfinder, colour grade
export function CameraVisual({ visible }: { visible: boolean }) {
  const waveHeights = [32, 55, 78, 62, 88, 74, 52, 84, 68, 44, 60, 90, 70, 56, 80]

  return (
    <div className="h-full w-full rounded-xl overflow-hidden flex flex-col" style={{ background: '#07090d' }}>

      {/* ── toolbar ── */}
      <div
        className="flex items-center justify-between px-4 py-3 shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.28 }}
          className="flex items-center gap-2.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[8px] font-mono font-bold tracking-wider" style={{ color: '#e54949' }}>REC</span>
          <span className="text-[8px] font-mono ml-1.5" style={{ color: 'rgba(255,255,255,0.20)' }}>4K · 24fps · S-LOG3</span>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.38 }}
          className="text-[8px] font-mono tabular-nums"
          style={{ color: 'rgba(255,255,255,0.16)' }}
        >
          00:02:34:18
        </motion.span>
      </div>

      {/* ── main preview ── */}
      <div className="flex-1 relative overflow-hidden">

        {/* Scene bg */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.32 }}
          className="absolute inset-0"
          style={{ background: 'linear-gradient(165deg, #16120a 0%, #2a1c0c 45%, #0c1619 100%)' }}
        />

        {/* Letterbox bars */}
        <div className="absolute top-0 inset-x-0 h-5" style={{ background: 'rgba(0,0,0,0.88)' }} />
        <div className="absolute bottom-0 inset-x-0 h-5" style={{ background: 'rgba(0,0,0,0.88)' }} />

        {/* Warm colour grade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 1.6, delay: 0.65 }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 72% 42%, rgba(255,175,55,0.18) 0%, transparent 58%)' }}
        />
        {/* Cool shadow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.82 }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 22% 78%, rgba(15,55,85,0.38) 0%, transparent 52%)' }}
        />

        {/* Viewfinder corner brackets */}
        {[
          'top-7 left-5 border-t border-l',
          'top-7 right-5 border-t border-r',
          'bottom-7 left-5 border-b border-l',
          'bottom-7 right-5 border-b border-r',
        ].map((cls, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 0.55 } : {}}
            transition={{ duration: 0.22, delay: 0.72 + i * 0.04 }}
            className={`absolute w-5 h-5 ${cls}`}
            style={{ borderColor: 'rgba(255,255,255,0.6)', borderWidth: '1.5px' }}
          />
        ))}

        {/* AF square */}
        <motion.div
          initial={{ opacity: 0, scale: 1.8 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 140, damping: 14, delay: 0.9 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 border border-white/25 rounded-sm" />
            <div className="absolute top-1/2 -left-2.5 -right-2.5 h-px" style={{ background: 'rgba(255,255,255,0.18)' }} />
            <div className="absolute left-1/2 -top-2.5 -bottom-2.5 w-px" style={{ background: 'rgba(255,255,255,0.18)' }} />
          </div>
        </motion.div>

        {/* Exposure */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 1.12 }}
          className="absolute bottom-7 left-4"
        >
          <span className="text-[7px] font-mono" style={{ color: 'rgba(255,255,255,0.28)' }}>ISO 800 · f/1.8 · 1⁄50s</span>
        </motion.div>

        {/* LUT badge */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.26 }}
          className="absolute bottom-7 right-4"
        >
          <span
            className="text-[7px] font-bold px-1.5 py-0.5 rounded tracking-wider"
            style={{ background: 'rgba(245,158,11,0.14)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.24)' }}
          >
            VENICE LUT ✓
          </span>
        </motion.div>
      </div>

      {/* ── bottom strip: settings + waveform ── */}
      <div
        className="shrink-0 px-4 py-2.5 flex items-center gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        {/* Settings pills */}
        <div className="flex gap-1.5 flex-1">
          {[
            { label: 'WB', val: '5600K', c: '#f59e0b' },
            { label: 'PP', val: 'S-LOG3', c: '#818cf8' },
            { label: 'AF', val: 'FACE', c: '#34d399' },
            { label: 'ND', val: '1/8', c: '#fb7185' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 4 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.07 }}
              className="flex items-center gap-1 rounded px-1.5 py-0.5"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span className="text-[6px]" style={{ color: 'rgba(255,255,255,0.22)' }}>{item.label}</span>
              <span className="text-[7px] font-bold" style={{ color: item.c }}>{item.val}</span>
            </motion.div>
          ))}
        </div>

        {/* Waveform monitor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
          className="flex items-end gap-px h-7 shrink-0"
        >
          {waveHeights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={visible ? { scaleY: 1 } : {}}
              transition={{ duration: 0.28, delay: 0.72 + i * 0.022, ease: 'easeOut' }}
              style={{
                height: `${h}%`,
                width: 3,
                transformOrigin: 'bottom',
                background: `rgba(52,211,153,${0.12 + (h / 100) * 0.6})`,
                borderRadius: '1px 1px 0 0',
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// ── 03 Sosiale Medier — Campaign Analytics Dashboard ───────────────────────
// Growth numbers, grouped bar chart, engagement breakdown
export function SocialVisual({ visible }: { visible: boolean }) {
  const bars = [
    { d: 'Ma', ig: 62, tt: 38 },
    { d: 'Ti', ig: 48, tt: 56 },
    { d: 'On', ig: 78, tt: 72 },
    { d: 'To', ig: 44, tt: 28 },
    { d: 'Fr', ig: 92, tt: 88 },
    { d: 'Lø', ig: 68, tt: 62 },
    { d: 'Sø', ig: 54, tt: 44 },
  ]
  const platforms = [
    { name: 'Instagram', val: '4.2K', color: '#e1306c', dot: '◈' },
    { name: 'TikTok', val: '8.7K', color: '#171717', dot: '◆' },
    { name: 'LinkedIn', val: '1.2K', color: '#0077b5', dot: '◉' },
  ]
  const metrics = [
    { icon: '♥', label: 'Likes', val: '2.3K', c: '#e1306c' },
    { icon: '●', label: 'Comments', val: '341', c: '#2172b5' },
    { icon: '↗', label: 'Delt', val: '189', c: '#7c3aed' },
    { icon: '★', label: 'Lagret', val: '94', c: '#f59e0b' },
  ]

  return (
    <div
      className="h-full w-full rounded-xl overflow-hidden flex flex-col"
      style={{ background: '#ffffff', border: '1px solid #e8e8e8' }}
    >
      {/* ── header: platforms ── */}
      <div
        className="px-5 pt-4 pb-3 flex items-center justify-between shrink-0"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="flex gap-2">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.78 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.28 + i * 0.07 }}
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
              style={{ background: p.color + '12', border: `1px solid ${p.color}28` }}
            >
              <span className="text-[9px]" style={{ color: p.color }}>{p.dot}</span>
              <span className="text-[9px] font-bold" style={{ color: p.color }}>{p.val}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.56 }}
          className="flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] font-semibold text-green-600">Live</span>
        </motion.div>
      </div>

      {/* ── hero number ── */}
      <div className="px-5 pt-4 pb-2 shrink-0">
        <p className="text-[8px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#818181' }}>
          Ukentlig rekkevidde
        </p>
        <div className="flex items-end gap-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.42 }}
            className="font-bold tabular-nums leading-none"
            style={{ fontSize: 36, color: '#171717', fontFamily: 'var(--font-bricolage)', letterSpacing: '-0.03em' }}
          >
            12.4K
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.62 }}
            className="pb-1"
          >
            <span className="text-[11px] font-bold" style={{ color: '#22c55e' }}>↑ +23%</span>
            <span className="text-[9px] ml-1" style={{ color: '#818181' }}>vs forrige uke</span>
          </motion.div>
        </div>
      </div>

      {/* ── bar chart ── */}
      <div className="flex-1 px-5 pb-2 flex items-end min-h-0">
        <div className="w-full flex items-end gap-2">
          {bars.map((bar, i) => (
            <div key={bar.d} className="flex-1 flex flex-col items-center gap-1.5">
              <div className="w-full flex gap-0.5 items-end" style={{ height: 68 }}>
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={visible ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.38, delay: 0.64 + i * 0.055, ease: 'easeOut' }}
                  className="flex-1 rounded-t"
                  style={{ height: `${bar.ig}%`, background: '#e1306c20', border: '1px solid #e1306c30', transformOrigin: 'bottom' }}
                />
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={visible ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.38, delay: 0.70 + i * 0.055, ease: 'easeOut' }}
                  className="flex-1 rounded-t"
                  style={{ height: `${bar.tt}%`, background: '#17171720', border: '1px solid #17171730', transformOrigin: 'bottom' }}
                />
              </div>
              <span className="text-[7px] font-semibold" style={{ color: '#a0a0a0' }}>{bar.d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── engagement row ── */}
      <div
        className="px-4 py-3 shrink-0 grid grid-cols-4 gap-2"
        style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}
      >
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 6 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.28, delay: 0.88 + i * 0.07 }}
            className="text-center"
          >
            <p className="text-[11px] font-bold tabular-nums" style={{ color: m.c }}>{m.icon} {m.val}</p>
            <p className="text-[7px] font-medium mt-0.5" style={{ color: '#a0a0a0' }}>{m.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── 04 Branding — Identity System Reveal ─────────────────────────────────
// Logo assembles, palette expands, type scale appears, manual footer
export function BrandVisual({ visible }: { visible: boolean }) {
  const palette = [
    { color: '#0d1f3c', label: 'Natt' },
    { color: '#2172b5', label: 'Blå' },
    { color: '#4a9fd4', label: 'Himmel' },
    { color: '#e8f0f9', label: 'Is' },
    { color: '#f8f8f8', label: 'Off-white', border: true },
  ]

  return (
    <div
      className="h-full w-full rounded-xl overflow-hidden flex flex-col px-6 pt-5 pb-4"
      style={{ background: '#f6f5f2', border: '1px solid #e2e0db' }}
    >
      {/* ── doc header ── */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, delay: 0.22 }}
        className="flex items-center justify-between mb-5 shrink-0"
      >
        <span className="text-[8px] font-semibold uppercase tracking-widest" style={{ color: '#a0a0a0' }}>
          Brand Identity System
        </span>
        <span className="text-[8px]" style={{ color: '#c0bdb8' }}>v 2.0 · 2025</span>
      </motion.div>

      {/* ── logo mark ── */}
      <div className="flex items-center gap-4 mb-6 shrink-0">
        <motion.div
          initial={{ rotate: -135, scale: 0.3, opacity: 0 }}
          animate={visible ? { rotate: 0, scale: 1, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 140, damping: 13, delay: 0.3 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
          style={{ background: '#0d1f3c', boxShadow: '0 4px 16px rgba(13,31,60,0.28)' }}
        >
          <span className="text-white font-bold text-base" style={{ fontFamily: 'var(--font-bricolage)' }}>FF</span>
        </motion.div>

        <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
          <div className="overflow-hidden h-3.5">
            <motion.div
              initial={{ y: '110%' }}
              animate={visible ? { y: '0%' } : {}}
              transition={{ duration: 0.36, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="h-3.5 w-24 rounded"
              style={{ background: 'rgba(13,31,60,0.18)' }}
            />
          </div>
          <div className="overflow-hidden h-2.5">
            <motion.div
              initial={{ y: '110%' }}
              animate={visible ? { y: '0%' } : {}}
              transition={{ duration: 0.3, delay: 0.64, ease: [0.22, 1, 0.36, 1] }}
              className="h-2.5 w-16 rounded"
              style={{ background: 'rgba(13,31,60,0.10)' }}
            />
          </div>
        </div>
      </div>

      {/* ── colour palette ── */}
      <div className="mb-5 shrink-0">
        <p className="text-[8px] uppercase tracking-widest font-semibold mb-2.5" style={{ color: '#a0a0a0' }}>
          Fargesystem
        </p>
        <div className="flex gap-2">
          {palette.map((p, i) => (
            <div key={p.color} className="flex-1 flex flex-col items-center gap-1.5">
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                animate={visible ? { scaleY: 1, opacity: 1 } : {}}
                transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.72 + i * 0.08 }}
                className="w-full h-10 rounded-lg"
                style={{
                  background: p.color,
                  transformOrigin: 'bottom',
                  border: p.border ? '1px solid #d8d5d0' : undefined,
                  boxShadow: p.border ? undefined : '0 2px 8px rgba(0,0,0,0.1)',
                }}
              />
              <span className="text-[7px] font-medium" style={{ color: '#a0a0a0' }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── type scale ── */}
      <div className="flex-1 flex flex-col justify-center mb-4">
        <p className="text-[8px] uppercase tracking-widest font-semibold mb-3" style={{ color: '#a0a0a0' }}>
          Typografi
        </p>
        <div className="flex items-end gap-5">
          {[
            { size: 40, label: 'Display', delay: 0.98 },
            { size: 26, label: 'Heading', delay: 1.06 },
            { size: 16, label: 'Body', delay: 1.14 },
          ].map((t) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 8 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: t.delay }}
              className="text-center"
            >
              <p
                className="font-bold leading-none"
                style={{ fontSize: t.size, color: '#0d1f3c', fontFamily: 'var(--font-bricolage)', letterSpacing: '-0.03em' }}
              >
                Aa
              </p>
              <p className="text-[7px] font-medium mt-1" style={{ color: '#a0a0a0' }}>{t.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── footer seal ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 1.32 }}
        className="shrink-0 flex items-center justify-between pt-3"
        style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
      >
        <span className="text-[7px] font-mono" style={{ color: '#c0bdb8' }}>Brand Manual · Frameflow 2025</span>
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={visible ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 240, damping: 14, delay: 1.42 }}
          className="text-[7px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: '#2172b514', color: '#2172b5', border: '1px solid #2172b528' }}
        >
          ✓ Godkjent
        </motion.span>
      </motion.div>
    </div>
  )
}
