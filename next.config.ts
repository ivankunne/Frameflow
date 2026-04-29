import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const securityHeaders = [
  // Prevent DNS prefetching leaking visited subresources
  { key: 'X-DNS-Prefetch-Control', value: 'on' },

  // Clickjacking protection
  { key: 'X-Frame-Options', value: 'DENY' },

  // Prevent MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },

  // Referrer sent only to same-origin and HTTPS cross-origin
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

  // Disable unnecessary browser features
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },

  // Force HTTPS for 2 years — production only (would break HTTP dev server)
  ...(isProd ? [{
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  }] : []),

  // Content Security Policy
  // Notes:
  //   - 'unsafe-inline' in script-src is required for Next.js hydration scripts.
  //     Prefer nonce-based CSP in future when Next.js nonce support matures.
  //   - 'unsafe-inline' in style-src is required for Framer Motion inline styles.
  //   - img-src includes data: for base64 placeholders and blob: for canvas exports.
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isProd ? '' : " 'unsafe-eval'"}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "media-src 'none'",
      "object-src 'none'",
      "connect-src 'self' https://api.resend.com",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      // upgrade-insecure-requests only in production — breaks HTTP dev server
      ...(isProd ? ["upgrade-insecure-requests"] : []),
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/prosjeketer',
        destination: '/prosjekter',
        permanent: true,
      },
      {
        source: '/prosjeketer/:slug',
        destination: '/prosjekter/:slug',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
