'use client'

/**
 * Pass-through wrapper. A global opacity:0 → 1 fade on mount delayed LCP on
 * the homepage (hero text was painted invisible). Soft page fades aren't worth
 * that cost; route changes already feel instant.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
