import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Side ikke funnet – Frameflow',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-bg text-center">
      {/* Ghost 404 number */}
      <p className="display-text text-[10rem] sm:text-[14rem] font-extrabold leading-none text-fg/[0.04] select-none -mb-8 sm:-mb-12">
        404
      </p>

      <div className="relative z-10 flex flex-col items-center max-w-md">
        <span className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Fant ikke siden
        </span>

        <h1 className="display-text text-4xl sm:text-5xl text-fg mb-4">
          Denne siden finnes ikke.
        </h1>
        <p className="text-fg-muted leading-relaxed mb-10">
          Siden er kanskje flyttet, slettet, eller adressen er skrevet feil. La oss hjelpe deg videre.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] flex items-center shadow-blue-sm"
          >
            ← Til forsiden
          </Link>
          <Link
            href="/kontakt"
            className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] flex items-center bg-bg-2 shadow-card"
          >
            Ta kontakt
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-border w-full">
          <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-4">Populære sider</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { href: '/tjenester', label: 'Tjenester' },
              { href: '/prosjekter', label: 'Prosjekter' },
              { href: '/blogg', label: 'Blogg' },
              { href: '/om-oss', label: 'Om oss' },
              { href: '/tilbud', label: 'Be om tilbud' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-fg-muted hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
