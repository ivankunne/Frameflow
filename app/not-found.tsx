import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Side ikke funnet – Frameflow',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=Figtree:wght@400;500;600&display=swap');
        body { margin: 0; font-family: 'Figtree', system-ui, sans-serif; background: #fff; color: #171717; }
      `}</style>
      <main
        style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
      >
        {/* Ghost 404 */}
        <p style={{ position: 'absolute', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 'clamp(10rem,25vw,22rem)', lineHeight: 1, color: 'rgba(23,23,23,0.025)', userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.03em' }}>
          404
        </p>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '28rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#e8f0f9', border: '1px solid rgba(33,114,181,0.2)', color: '#2172b5', fontSize: '0.75rem', fontWeight: 600, padding: '0.375rem 0.75rem', borderRadius: '9999px', marginBottom: '1.75rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2172b5', flexShrink: 0 }} />
            Side ikke funnet
          </span>

          <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 'clamp(2.25rem,6vw,3.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            Denne siden eksisterer ikke.
          </h1>

          <p style={{ color: '#818181', fontSize: '1.0625rem', lineHeight: 1.65, marginBottom: '2.5rem' }}>
            Siden er kanskje flyttet, slettet, eller adressen er feil. La oss hjelpe deg videre.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', background: '#2172b5', color: '#fff', fontWeight: 600, fontSize: '0.875rem', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none', minHeight: 44 }}>
              ← Til forsiden
            </Link>
            <Link href="/kontakt" style={{ display: 'inline-flex', alignItems: 'center', background: '#f8f8f8', color: '#171717', fontWeight: 600, fontSize: '0.875rem', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e5e5', textDecoration: 'none', minHeight: 44 }}>
              Ta kontakt
            </Link>
          </div>

          <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '2rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, color: '#818181', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>Populære sider</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.375rem 1.5rem' }}>
              {[
                { href: '/tjenester', label: 'Tjenester' },
                { href: '/prosjekter', label: 'Prosjekter' },
                { href: '/blogg', label: 'Blogg' },
                { href: '/om-oss', label: 'Om oss' },
                { href: '/tilbud', label: 'Be om tilbud' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ fontSize: '0.875rem', color: '#818181', textDecoration: 'none', fontWeight: 500 }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
