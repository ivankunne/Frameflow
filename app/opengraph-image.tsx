import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Frameflow – Markedsføringsbyrå i Bergen'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
          background: 'linear-gradient(135deg, #0a1628 0%, #0f2040 50%, #1a3a5c 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(33,114,181,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(33,114,181,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Blue glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(33,114,181,0.3) 0%, transparent 60%)',
          }}
        />

        {/* Wordmark top-left */}
        <div
          style={{
            position: 'absolute',
            top: 56,
            left: 64,
            fontSize: 28,
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.5px',
            display: 'flex',
          }}
        >
          Frame<span style={{ color: '#4a9fd4' }}>flow</span>
        </div>

        {/* Bergen badge top-right */}
        <div
          style={{
            position: 'absolute',
            top: 56,
            right: 64,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 100,
            padding: '8px 16px',
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80' }} />
          <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, fontWeight: 600 }}>Bergen, Norge</span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 62,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-2px',
            marginBottom: 20,
            maxWidth: 820,
            display: 'flex',
          }}
        >
          Bergen-byrået som faktisk leverer.
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 22,
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 400,
            marginBottom: 44,
            display: 'flex',
          }}
        >
          Webdesign · Foto & Video · Sosiale medier · Branding
        </div>

        {/* CTA pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              background: '#2172b5',
              borderRadius: 12,
              padding: '14px 28px',
              fontSize: 18,
              fontWeight: 700,
              color: '#ffffff',
              display: 'flex',
            }}
          >
            frameflow.no
          </div>
          <div
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: 16,
              display: 'flex',
            }}
          >
            Gratis konsultasjon · Svar innen 24 timer
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
