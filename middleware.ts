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

export default function middleware(request: NextRequest) {
  const match = request.nextUrl.pathname.match(GONE_PROJECT_PATH)
  if (match && GONE_PROJECT_SLUGS.has(match[1])) {
    return new NextResponse('Gone', { status: 410 })
  }
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|og|.*\\..*).*)'],
}
