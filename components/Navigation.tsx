'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter, Link } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

function Wordmark() {
  const t = useTranslations('nav')
  return (
    <Image
      src="/Wordmark.png"
      alt={t('wordmarkAlt')}
      width={140}
      height={32}
      priority
      className="h-7 w-auto"
    />
  )
}

const LANGUAGES = [
  { code: 'no', flag: '/norway.png', label: 'Norsk' },
  { code: 'en', flag: '/united-kingdom.png', label: 'English' },
] as const

function LangDropdown({ locale, onSwitch }: { locale: string; onSwitch: (code: string) => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = LANGUAGES.find(l => l.code === locale) ?? LANGUAGES[0]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 text-xs font-semibold text-fg-muted hover:text-fg border border-fg/15 hover:border-fg/30 bg-bg-2 px-3 py-1.5 rounded-lg transition-all min-h-[36px]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Image src={current.flag} alt={current.label} width={18} height={18} className="rounded-sm object-cover" />
        <span>{current.label}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            className="absolute right-0 mt-1.5 w-36 bg-bg border border-border rounded-xl shadow-card-hover overflow-hidden z-50"
          >
            {LANGUAGES.map(lang => (
              <li key={lang.code}>
                <button
                  role="option"
                  aria-selected={locale === lang.code}
                  onClick={() => { onSwitch(lang.code); setOpen(false) }}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors ${
                    locale === lang.code
                      ? 'bg-accent/10 text-accent font-semibold'
                      : 'text-fg hover:bg-bg-2 font-medium'
                  }`}
                >
                  <Image src={lang.flag} alt={lang.label} width={18} height={18} className="rounded-sm object-cover shrink-0" />
                  <span>{lang.label}</span>
                  {locale === lang.code && (
                    <svg className="ml-auto w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('nav')

  const links = [
    { href: '/om-oss' as const, label: t('about') },
    { href: '/tjenester' as const, label: t('services') },
    { href: '/prosjekter' as const, label: t('projects') },
    { href: '/blogg' as const, label: t('blog') },
  ]

  const switchLocale = (code: string) => {
    router.replace(pathname as any, { locale: code })
  }

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
          <Link href="/" className="flex items-center shrink-0" aria-label={t('backToHome')}>
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

          {/* Desktop CTA + lang switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LangDropdown locale={locale} onSwitch={switchLocale} />
            <Link
              href="/kontakt"
              className="text-sm font-semibold text-fg hover:text-accent border border-fg/15 hover:border-accent/50 bg-bg-2 px-5 py-2 rounded-lg transition-all min-h-[44px] flex items-center shadow-card"
            >
              {t('bookCall')}
            </Link>
            <Link
              href="/tilbud"
              className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-lg transition-colors shadow-blue-sm min-h-[44px] flex items-center"
            >
              {t('getQuote')}
            </Link>
          </div>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col gap-[5px] items-center justify-center rounded-lg border border-border bg-bg-2 hover:bg-white shadow-card hover:shadow-card-hover transition-all duration-200"
            aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={menuOpen}
          >
            <span className={`block w-[18px] h-[1.5px] bg-fg rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-[18px] h-[1.5px] bg-fg rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-[18px] h-[1.5px] bg-fg rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
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
            <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-6 border-b border-border">
              <Link href="/" aria-label={t('backToHome')}>
                <Wordmark />
              </Link>
              <LangDropdown locale={locale} onSwitch={switchLocale} />
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
                <Link
                  href="/tilbud"
                  className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg text-center shadow-blue-sm transition-colors"
                >
                  {t('getQuoteFree')}
                </Link>
                <Link
                  href="/kontakt"
                  className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent bg-white px-6 py-3.5 rounded-lg text-center shadow-card transition-all"
                >
                  {t('contact')}
                </Link>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: links.length * 0.06 + 0.25 }}
              className="mt-auto pb-8 pt-6 border-t border-border flex items-center justify-between"
            >
              <a href="tel:+4799853781" className="text-fg-muted text-sm hover:text-fg transition-colors">
                +47 99 85 37 81
              </a>
              <a href="mailto:ivan@frameflow.no" className="text-fg-muted text-sm hover:text-fg transition-colors">
                ivan@frameflow.no
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
