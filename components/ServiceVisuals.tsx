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
          <span className="text-[9px] font-semibold text-green-700">Live</span>
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

// ── 05 SEO — Keyword Ranking Dashboard ────────────────────────────────────
export function SEOVisual({ visible }: { visible: boolean }) {
  const keywords = [
    { kw: 'markedsføring Bergen', pos: 3, change: 8 },
    { kw: 'webdesign Bergen', pos: 7, change: 12 },
    { kw: 'SEO Bergen', pos: 4, change: 21 },
    { kw: 'digitalbyrå Bergen', pos: 2, change: 5 },
  ]
  const bars = [18, 26, 22, 34, 28, 42, 38, 56, 48, 68, 58, 78]

  return (
    <div
      className="h-full w-full rounded-xl overflow-hidden flex flex-col"
      style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
    >
      {/* header */}
      <div
        className="px-5 pt-4 pb-3 flex items-center justify-between shrink-0"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
      >
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#9ca3af' }}>
          Posisjonssporing · Bergen
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-[8px] font-semibold px-2 py-0.5 rounded-full"
          style={{ background: '#dcfce7', color: '#16a34a' }}
        >
          ↑ Forbedring
        </motion.span>
      </div>

      {/* big number */}
      <div className="px-5 pt-4 pb-2 shrink-0">
        <p className="text-[8px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#9ca3af' }}>
          Gjennomsnittlig posisjon
        </p>
        <div className="flex items-end gap-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.38 }}
            className="font-bold tabular-nums leading-none"
            style={{ fontSize: 36, color: '#0d1f3c', fontFamily: 'var(--font-bricolage)', letterSpacing: '-0.03em' }}
          >
            4.0
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 }}
            className="pb-1"
          >
            <span className="text-[11px] font-bold" style={{ color: '#22c55e' }}>↑ +11.5</span>
            <span className="text-[9px] ml-1" style={{ color: '#9ca3af' }}>vs 3 mnd siden</span>
          </motion.div>
        </div>
      </div>

      {/* mini sparkline */}
      <div className="px-5 pb-3 flex items-end gap-px shrink-0" style={{ height: 32 }}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={visible ? { scaleY: 1 } : {}}
            transition={{ duration: 0.25, delay: 0.5 + i * 0.03, ease: 'easeOut' }}
            style={{
              flex: 1,
              height: `${h}%`,
              transformOrigin: 'bottom',
              background: `rgba(33,114,181,${0.12 + (h / 100) * 0.55})`,
              borderRadius: '2px 2px 0 0',
            }}
          />
        ))}
      </div>

      {/* keyword rows */}
      <div className="flex-1 px-4 pb-4 flex flex-col gap-1.5 justify-end">
        {keywords.map((k, i) => (
          <motion.div
            key={k.kw}
            initial={{ opacity: 0, x: -8 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.28, delay: 0.62 + i * 0.07 }}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg"
            style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}
          >
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 font-bold text-[11px]"
              style={{
                background: k.pos <= 3 ? '#dcfce7' : '#dbeafe',
                color: k.pos <= 3 ? '#16a34a' : '#2172b5',
              }}
            >
              {k.pos}
            </div>
            <span className="text-[9px] font-medium flex-1 truncate" style={{ color: '#374151' }}>{k.kw}</span>
            <span className="text-[9px] font-bold shrink-0" style={{ color: '#22c55e' }}>+{k.change}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── 07 AI Automasjon — Automation Pipeline Dashboard ─────────────────────
export function AIVisual({ visible }: { visible: boolean }) {
  const automations = [
    { trigger: 'Webskjema', action: 'E-post svar', time: '0.4s', delay: 0.62 },
    { trigger: 'Chat-melding', action: 'AI chatbot', time: '0.2s', delay: 0.72 },
    { trigger: 'Bookingforsp.', action: 'Kalender ✓', time: '0.3s', delay: 0.82 },
    { trigger: 'E-post lead', action: 'CRM logget', time: '0.6s', delay: 0.92 },
  ]
  const bars = [12, 18, 24, 16, 32, 28, 44, 36, 52, 48, 62, 58]

  return (
    <div
      className="h-full w-full rounded-xl overflow-hidden flex flex-col"
      style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
    >
      {/* header */}
      <div
        className="px-5 pt-4 pb-3 flex items-center justify-between shrink-0"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
      >
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#9ca3af' }}>
          Automasjonssenter · Bergen
        </span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[8px] font-semibold" style={{ color: '#16a34a' }}>94% auto</span>
        </motion.div>
      </div>

      {/* big number */}
      <div className="px-5 pt-4 pb-2 shrink-0">
        <p className="text-[8px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#9ca3af' }}>
          Automatisk håndtert
        </p>
        <div className="flex items-end gap-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.38 }}
            className="font-bold tabular-nums leading-none"
            style={{ fontSize: 36, color: '#0d1f3c', fontFamily: 'var(--font-bricolage)', letterSpacing: '-0.03em' }}
          >
            94%
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 }}
            className="pb-1"
          >
            <span className="text-[11px] font-bold" style={{ color: '#22c55e' }}>↑ 47 i dag</span>
            <span className="text-[9px] ml-1" style={{ color: '#9ca3af' }}>henvendelser</span>
          </motion.div>
        </div>
      </div>

      {/* sparkline */}
      <div className="px-5 pb-3 flex items-end gap-px shrink-0" style={{ height: 32 }}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={visible ? { scaleY: 1 } : {}}
            transition={{ duration: 0.25, delay: 0.5 + i * 0.03, ease: 'easeOut' }}
            style={{
              flex: 1,
              height: `${h}%`,
              transformOrigin: 'bottom',
              background: `rgba(99,102,241,${0.12 + (h / 100) * 0.55})`,
              borderRadius: '2px 2px 0 0',
            }}
          />
        ))}
      </div>

      {/* automation rows */}
      <div className="flex-1 px-4 pb-4 flex flex-col gap-1.5 justify-end">
        {automations.map((a) => (
          <motion.div
            key={a.trigger}
            initial={{ opacity: 0, x: -8 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.28, delay: a.delay }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
            style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}
          >
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 font-bold text-[10px]"
              style={{ background: '#eef2ff', color: '#6366f1', border: '1px solid #c7d2fe' }}
            >
              →
            </div>
            <span className="text-[9px] font-medium flex-1 truncate" style={{ color: '#374151' }}>
              {a.trigger} → {a.action}
            </span>
            <span className="text-[8px] font-mono shrink-0" style={{ color: '#22c55e' }}>{a.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── 09 AI SEO — AI Citation Dashboard ─────────────────────────────────────
export function AISeoVisual({ visible }: { visible: boolean }) {
  const engines = [
    { name: 'ChatGPT', status: 'Sitert', cited: true, delay: 0.62 },
    { name: 'Perplexity', status: 'Sitert', cited: true, delay: 0.72 },
    { name: 'Google AI Overview', status: 'Sitert', cited: true, delay: 0.82 },
    { name: 'Gemini', status: 'Under vurdering', cited: false, delay: 0.92 },
  ]
  const bars = [8, 10, 14, 12, 18, 22, 28, 34, 40, 46, 54, 62]

  return (
    <div
      className="h-full w-full rounded-xl overflow-hidden flex flex-col"
      style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
    >
      {/* header */}
      <div
        className="px-5 pt-4 pb-3 flex items-center justify-between shrink-0"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
      >
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#9ca3af' }}>
          AI-synlighet · Bergen
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-[8px] font-semibold px-2 py-0.5 rounded-full"
          style={{ background: '#ccfbf1', color: '#0d9488' }}
        >
          ↑ Sitert
        </motion.span>
      </div>

      {/* big number */}
      <div className="px-5 pt-4 pb-2 shrink-0">
        <p className="text-[8px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#9ca3af' }}>
          AI-siteringer denne måneden
        </p>
        <div className="flex items-end gap-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.38 }}
            className="font-bold tabular-nums leading-none"
            style={{ fontSize: 36, color: '#0d1f3c', fontFamily: 'var(--font-bricolage)', letterSpacing: '-0.03em' }}
          >
            3/4
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 }}
            className="pb-1"
          >
            <span className="text-[11px] font-bold" style={{ color: '#0d9488' }}>AI-motorer</span>
            <span className="text-[9px] ml-1" style={{ color: '#9ca3af' }}>siterer siden aktivt</span>
          </motion.div>
        </div>
      </div>

      {/* sparkline */}
      <div className="px-5 pb-3 flex items-end gap-px shrink-0" style={{ height: 32 }}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={visible ? { scaleY: 1 } : {}}
            transition={{ duration: 0.25, delay: 0.5 + i * 0.03, ease: 'easeOut' }}
            style={{
              flex: 1,
              height: `${h}%`,
              transformOrigin: 'bottom',
              background: `rgba(13,148,136,${0.12 + (h / 100) * 0.55})`,
              borderRadius: '2px 2px 0 0',
            }}
          />
        ))}
      </div>

      {/* engine rows */}
      <div className="flex-1 px-4 pb-4 flex flex-col gap-1.5 justify-end">
        {engines.map((e) => (
          <motion.div
            key={e.name}
            initial={{ opacity: 0, x: -8 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.28, delay: e.delay }}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg"
            style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}
          >
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 font-bold text-[10px]"
              style={{
                background: e.cited ? '#ccfbf1' : '#f3f4f6',
                color: e.cited ? '#0d9488' : '#9ca3af',
              }}
            >
              {e.cited ? '✓' : '···'}
            </div>
            <span className="text-[9px] font-medium flex-1 truncate" style={{ color: '#374151' }}>{e.name}</span>
            <span className="text-[8px] font-bold shrink-0" style={{ color: e.cited ? '#0d9488' : '#9ca3af' }}>{e.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── 04 Markedsføring — Multi-channel Campaign Dashboard ──────────────────
export function MarketingVisual({ visible }: { visible: boolean }) {
  const channels = [
    { icon: '◎', name: 'Webdesign', metric: '+140%', color: '#2172b5', delay: 0.62 },
    { icon: '◈', name: 'SEO Bergen', metric: '#1', color: '#16a34a', delay: 0.72 },
    { icon: '◆', name: 'Sosiale medier', metric: '+890', color: '#7c3aed', delay: 0.82 },
    { icon: '★', name: 'Branding', metric: '100%', color: '#d97706', delay: 0.92 },
  ]
  const bars = [22, 32, 28, 42, 38, 56, 48, 68, 60, 78, 70, 90]

  return (
    <div
      className="h-full w-full rounded-xl overflow-hidden flex flex-col"
      style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
    >
      <div
        className="px-5 pt-4 pb-3 flex items-center justify-between shrink-0"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
      >
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#9ca3af' }}>
          Markedsføring · Bergen · Alle kanaler
        </span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#d97706' }} />
          <span className="text-[8px] font-semibold" style={{ color: '#d97706' }}>4 kanaler aktive</span>
        </motion.div>
      </div>

      <div className="px-5 pt-4 pb-2 shrink-0">
        <p className="text-[8px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#9ca3af' }}>
          Samlet digital synlighet
        </p>
        <div className="flex items-end gap-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.38 }}
            className="font-bold tabular-nums leading-none"
            style={{ fontSize: 36, color: '#0d1f3c', fontFamily: 'var(--font-bricolage)', letterSpacing: '-0.03em' }}
          >
            4/4
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 }}
            className="pb-1"
          >
            <span className="text-[11px] font-bold" style={{ color: '#22c55e' }}>↑ vekst</span>
            <span className="text-[9px] ml-1" style={{ color: '#9ca3af' }}>under ett tak</span>
          </motion.div>
        </div>
      </div>

      <div className="px-5 pb-3 flex items-end gap-px shrink-0" style={{ height: 32 }}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={visible ? { scaleY: 1 } : {}}
            transition={{ duration: 0.25, delay: 0.5 + i * 0.03, ease: 'easeOut' }}
            style={{
              flex: 1,
              height: `${h}%`,
              transformOrigin: 'bottom',
              background: `rgba(217,119,6,${0.12 + (h / 100) * 0.55})`,
              borderRadius: '2px 2px 0 0',
            }}
          />
        ))}
      </div>

      <div className="flex-1 px-4 pb-4 flex flex-col gap-1.5 justify-end">
        {channels.map((c) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: -8 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.28, delay: c.delay }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
            style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}
          >
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 font-bold text-[11px]"
              style={{ background: c.color + '15', color: c.color, border: `1px solid ${c.color}25` }}
            >
              {c.icon}
            </div>
            <span className="text-[9px] font-medium flex-1 truncate" style={{ color: '#374151' }}>{c.name}</span>
            <span className="text-[9px] font-bold shrink-0" style={{ color: c.color }}>{c.metric}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── 06 Branding — Identity System Reveal ─────────────────────────────────
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
        <span className="text-[8px]" style={{ color: '#c0bdb8' }}>v 2.0</span>
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
        <span className="text-[7px] font-mono" style={{ color: '#c0bdb8' }}>Brand Manual · Frameflow</span>
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
