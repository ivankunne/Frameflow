'use client'

import { useEffect, useRef, useState } from 'react'

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

    // Lerp-animated scales
    let dotScale  = 1, dotTarget  = 1
    let ringScale = 1, ringTarget = 1
    let hovering  = false

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
      if (!ringRef.current) return
      ringRef.current.style.background    = hover ? 'rgba(13,31,60,0.07)' : 'transparent'
      ringRef.current.style.borderColor   = hover ? 'rgba(13,31,60,0.75)' : 'rgba(13,31,60,0.5)'
    }

    // ── event listeners ─────────────────────────────────────
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    const onOver = (e: MouseEvent) => {
      if (!isInteractive(e.target as Element)) return
      hovering     = true
      dotTarget    = 0      // dot shrinks away inside ring
      ringTarget   = 1.65   // ring expands into highlight bubble
      setRingStyle(true)
    }

    const onOut = (e: MouseEvent) => {
      if (!isInteractive(e.target as Element)) return
      hovering     = false
      dotTarget    = 1
      ringTarget   = 1
      setRingStyle(false)
    }

    const onDown = () => {
      // Click: compress both elements
      dotTarget  = hovering ? 0   : 0.5
      ringTarget = hovering ? 0.8 : 0.65
    }

    const onUp = () => {
      // Re-check what's under the cursor — handles cases where the clicked
      // element was removed from the DOM (e.g. cookie banner disappearing),
      // which prevents the normal mouseout from firing.
      const el = document.elementFromPoint(mx, my)
      hovering   = isInteractive(el)
      dotTarget  = hovering ? 0    : 1
      ringTarget = hovering ? 1.65 : 1
      setRingStyle(hovering)
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
    }
  }, [])

  if (!active) return null

  return (
    <>
      {/* Small solid dot — vanishes on hover */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998]"
        style={{ willChange: 'transform', background: '#0d1f3c' }}
      />
      {/* Lagging ring — morphs into highlight bubble on hover */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9997]"
        style={{
          willChange: 'transform',
          border: '1px solid rgba(13,31,60,0.5)',
          transition: 'background 0.18s ease, border-color 0.18s ease',
        }}
      />
    </>
  )
}
