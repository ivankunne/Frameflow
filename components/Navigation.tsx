'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { NAV_LINKS as links } from '@/lib/constants'

function Wordmark() {
  return (
    <Image
      src="/Wordmark.png"
      alt="Frameflow"
      width={140}
      height={32}
      priority
      className="h-7 w-auto"
    />
  )
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    window.dispatchEvent(new Event(menuOpen ? 'navmenuopen' : 'navmenuclose'))
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-md border-b border-border shadow-[0_1px_8px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Frameflow – tilbake til forsiden">
            <Wordmark />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm transition-colors ${
                    isActive ? 'text-accent font-semibold' : 'text-fg-muted font-medium hover:text-fg'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/kontakt"
              className="text-sm font-semibold text-fg hover:text-accent border border-fg/15 hover:border-accent/50 bg-bg-2 px-5 py-2 rounded-lg transition-all min-h-[44px] flex items-center shadow-card"
            >
              Book samtale
            </Link>
            <Link
              href="/tilbud"
              className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-lg transition-colors shadow-blue-sm min-h-[44px] flex items-center"
            >
              Få tilbud →
            </Link>
          </div>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex flex-col gap-1.5 items-center justify-center"
            aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-fg transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-fg transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-fg transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col pt-24 px-8 overflow-y-auto"
          >
            {/* Mobile menu logo */}
            <div className="absolute top-0 left-0 right-0 h-16 flex items-center px-6 border-b border-border">
              <Link href="/" aria-label="Frameflow">
                <Wordmark />
              </Link>
            </div>

            <nav className="flex flex-col gap-2">
              {links.map((link, i) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`display-text text-3xl flex items-center gap-3 py-3 border-b border-border ${
                        isActive ? 'text-accent' : 'text-fg'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mb-1" />}
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.06 + 0.1 }}
                className="mt-8 flex flex-col gap-3"
              >
                <Link href="/kontakt" className="text-sm font-medium text-fg-muted">
                  Ta kontakt
                </Link>
                <Link
                  href="/tilbud"
                  className="text-sm font-semibold bg-accent text-white px-6 py-3.5 rounded-lg text-center"
                >
                  Få et gratis tilbud
                </Link>
              </motion.div>
            </nav>

            <div className="mt-auto pb-8 text-fg-muted text-sm">
              +47 99 85 37 81
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
