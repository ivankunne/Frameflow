'use client'

import { useEffect, useRef, useState } from 'react'

// Light-mode palette
const L = {
  dot:         '#0d1f3c',
  ring:        'rgba(13,31,60,0.5)',
  hoverBg:     'rgba(13,31,60,0.07)',
  hoverBorder: 'rgba(13,31,60,0.75)',
}

// Dark-mode palette (white / light-blue brand tint)
const D = {
  dot:         'rgba(255,255,255,0.92)',
  ring:        'rgba(255,255,255,0.45)',
  hoverBg:     'rgba(255,255,255,0.10)',
  hoverBorder: 'rgba(200,228,255,0.85)',
}

function luminance(r: number, g: number, b: number) {
  return 0.299 * r + 0.587 * g + 0.114 * b
}

function bgIsDark(el: Element | null): boolean {
  let current: Element | null = el
  while (current && current !== document.body) {
    const bg = window.getComputedStyle(current as HTMLElement).backgroundColor
    const m  = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/)
    if (m) {
      const r = +m[1], g = +m[2], b = +m[3]
      const a = m[4] !== undefined ? +m[4] : 1
      if (a > 0.4 && luminance(r, g, b) < 128) return true
    }
    current = current.parentElement
  }
  return false
}

export default function CursorFollower() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setActive(true)

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let vx = 0,    vy = 0

    let dotScale  = 1, dotTarget  = 1
    let ringScale = 1, ringTarget = 1
    let hovering  = false
    let dark      = false

    // ── apply current dark/light palette ────────────────────
    const palette = () => dark ? D : L

    const applyDotColor = () => {
      if (dotRef.current) dotRef.current.style.background = palette().dot
    }

    const applyRingColors = (hover: boolean) => {
      if (!ringRef.current) return
      const p = palette()
      ringRef.current.style.borderColor = hover ? p.hoverBorder : p.ring
      ringRef.current.style.background  = hover ? p.hoverBg     : 'transparent'
    }

    // ── throttled dark-background check ─────────────────────
    let darkTimer = 0
    const scheduleDarkCheck = () => {
      if (darkTimer) return
      darkTimer = window.setTimeout(() => {
        darkTimer = 0
        const wasDark = dark
        dark = bgIsDark(document.elementFromPoint(mx, my))
        if (dark !== wasDark) {
          applyDotColor()
          applyRingColors(hovering)
        }
      }, 80)
    }

    // ── helpers ─────────────────────────────────────────────
    const isInteractive = (el: Element | null): boolean => {
      if (!el || el === document.body) return false
      const tag = el.tagName.toLowerCase()
      if (tag === 'a' || tag === 'button') return true
      if (el.getAttribute('role') === 'button') return true
      if (window.getComputedStyle(el as HTMLElement).cursor === 'pointer') return true
      return isInteractive(el.parentElement)
    }

    const setRingStyle = (hover: boolean) => {
      hovering = hover
      applyRingColors(hover)
    }

    // ── event listeners ─────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      scheduleDarkCheck()
    }

    const onOver = (e: MouseEvent) => {
      if (!isInteractive(e.target as Element)) return
      dotTarget  = 0
      ringTarget = 1.65
      setRingStyle(true)
    }

    const onOut = (e: MouseEvent) => {
      if (!isInteractive(e.target as Element)) return
      dotTarget  = 1
      ringTarget = 1
      setRingStyle(false)
    }

    const onDown = () => {
      dotTarget  = hovering ? 0    : 0.5
      ringTarget = hovering ? 0.8  : 0.65
    }

    const onUp = () => {
      const el   = document.elementFromPoint(mx, my)
      const isHov = isInteractive(el)
      dotTarget  = isHov ? 0    : 1
      ringTarget = isHov ? 1.65 : 1
      setRingStyle(isHov)
    }

    // ── RAF loop ─────────────────────────────────────────────
    let raf: number
    const animate = () => {
      dotScale  += (dotTarget  - dotScale)  * 0.18
      ringScale += (ringTarget - ringScale) * 0.15

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mx - 4}px, ${my - 4}px) scale(${dotScale})`
      }

      vx = (vx + (mx - rx) * 0.06) * 0.72
      vy = (vy + (my - ry) * 0.06) * 0.72
      rx += vx
      ry += vy

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${rx - 16}px, ${ry - 16}px) scale(${ringScale})`
      }

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove',  onMove, { passive: true })
    window.addEventListener('mouseover',  onOver, { passive: true })
    window.addEventListener('mouseout',   onOut,  { passive: true })
    window.addEventListener('mousedown',  onDown, { passive: true })
    window.addEventListener('mouseup',    onUp,   { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('mouseover',  onOver)
      window.removeEventListener('mouseout',   onOut)
      window.removeEventListener('mousedown',  onDown)
      window.removeEventListener('mouseup',    onUp)
      cancelAnimationFrame(raf)
      if (darkTimer) clearTimeout(darkTimer)
    }
  }, [])

  if (!active) return null

  return (
    <>
      {/* Small solid dot — vanishes on hover */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998]"
        style={{
          willChange: 'transform',
          background: L.dot,
          transition: 'background 0.2s ease',
        }}
      />
      {/* Lagging ring — morphs into highlight bubble on hover */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9997]"
        style={{
          willChange: 'transform',
          border: `1px solid ${L.ring}`,
          transition: 'background 0.2s ease, border-color 0.2s ease',
        }}
      />
    </>
  )
}
