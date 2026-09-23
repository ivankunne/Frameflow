import { NextResponse, type NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

// Projects removed with no equivalent replacement content. Redirecting these to the
// /prosjekter listing would be a soft-404 (see next.config.ts comment) — a real 410
// tells crawlers the page is gone for good instead of implying it moved.
// 'marbesa-94' is the old pre-rename slug from the original /case-studies redirect.
const GONE_PROJECT_SLUGS = new Set([
  'artadent',
  'bergen-bakeri',
  'nordic-fit',
  'marbesa-project-94',
  'marbesa-94',
  'gv-rentals',
])

const GONE_PROJECT_PATH = /^\/(?:en\/projects|prosjekter|case-studies)\/([^/]+)\/?$/

// App Router folder is app/[locale]/blogg/..., so /en/blogg/* is reachable even
// though next-intl pathnames map EN blog to /en/blog/*. Those ghosts serve
// Norwegian copy with lang=en — 301 to the Norwegian canonical.
const EN_BLOGG_PATH = /^\/en\/blogg(\/.*)?$/

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const enBlogg = pathname.match(EN_BLOGG_PATH)
  if (enBlogg) {
    const url = request.nextUrl.clone()
    url.pathname = `/blogg${enBlogg[1] ?? ''}`
    return NextResponse.redirect(url, 308)
  }

  const match = pathname.match(GONE_PROJECT_PATH)
  if (match && GONE_PROJECT_SLUGS.has(match[1])) {
    return new NextResponse('Gone', { status: 410 })
  }
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|og|.*\\..*).*)'],
}
