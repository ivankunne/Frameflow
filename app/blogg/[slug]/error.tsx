'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-bg-2">
      <span className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
        Kunne ikke laste artikkel
      </span>
      <h1 className="display-text text-4xl lg:text-5xl text-fg mb-4">Artikkelen er ikke tilgjengelig.</h1>
      <p className="text-fg-muted max-w-md mb-10 leading-relaxed">
        Det oppstod en feil ved lasting av artikkelen. Prøv igjen, eller se alle innleggene våre.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] shadow-blue-sm"
        >
          Prøv igjen
        </button>
        <Link
          href="/blogg"
          className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] flex items-center bg-white shadow-card"
        >
          Alle artikler →
        </Link>
      </div>
    </section>
  )
}
