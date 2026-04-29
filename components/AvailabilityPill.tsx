'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AvailabilityPill() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show after scrolling 90% of the viewport height (past the hero)
    const getThreshold = () => window.innerHeight * 0.9
    const onScroll = () => setVisible(window.scrollY > getThreshold())
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed right-5 z-40 transition-all duration-500 hidden md:block ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <Link
        href="/tilbud"
        className="flex items-center gap-2.5 bg-white border border-border shadow-card-hover rounded-full pl-3 pr-4 py-2.5 hover:shadow-blue-sm hover:border-accent/30 transition-all duration-200 group"
      >
        {/* Pulsing green dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>

        <span className="text-xs font-semibold text-fg whitespace-nowrap">
          Tilgjengelig for nye prosjekter
        </span>

        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          className="text-fg-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0"
        >
          <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  )
}
