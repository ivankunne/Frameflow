import { ImageResponse } from 'next/og'
import { getBlogPost } from '@/lib/data'

export const runtime = 'edge'
export const alt = 'Frameflow Blogg'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PILL_COLORS: Record<string, string> = {
  SEO:              '#10b981',
  Webdesign:        '#2172b5',
  'Web design':     '#2172b5',
  Branding:         '#f59e0b',
  'Sosiale medier': '#8b5cf6',
  'Foto & Video':   '#ec4899',
  'App utvikling':  '#06b6d4',
  Markedsføring:    '#2172b5',
}

export default function OgImage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  const title    = post?.title    ?? 'Frameflow Blogg'
  const category = post?.category ?? 'Blogg'
  const date     = post?.date     ?? ''
  const readTime = post?.readTime ?? ''
  const color    = PILL_COLORS[category] ?? '#2172b5'
  const fontSize = title.length > 70 ? 36 : title.length > 52 ? 42 : 50

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
        {/* Grid overlay */}
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
        {/* Wordmark */}
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
        {/* Category pill */}
        <div
          style={{
            position: 'absolute',
            top: 56,
            right: 64,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: `${color}22`,
            border: `1px solid ${color}55`,
            borderRadius: 100,
            padding: '8px 18px',
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
          <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, fontWeight: 600 }}>
            {category}
          </span>
        </div>
        {/* Title */}
        <div
          style={{
            fontSize,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            letterSpacing: '-1px',
            marginBottom: 24,
            maxWidth: 920,
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {title}
        </div>
        {/* Meta row */}
        {(date || readTime) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 28,
            }}
          >
            {date && (
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15, display: 'flex' }}>
                {date}
              </span>
            )}
            {readTime && (
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15, display: 'flex' }}>
                · {readTime} lesetid
              </span>
            )}
          </div>
        )}
        {/* Footer */}
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
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 16, display: 'flex' }}>
            Bergen · Markedsføring & design
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
