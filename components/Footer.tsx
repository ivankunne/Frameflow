'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, INSTAGRAM_URL, TIKTOK_URL } from '@/lib/constants'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

  const navLinks = [
    { href: '/om-oss' as const, label: tNav('about') },
    { href: '/tjenester' as const, label: tNav('services') },
    { href: '/prosjekter' as const, label: tNav('projects') },
    { href: '/blogg' as const, label: tNav('blog') },
    { href: '/kontakt' as const, label: tNav('contact') },
  ]

  const serviceLinks = [
    { href: '/tjenester/webdesign' as const, label: 'Webdesign' },
    { href: '/tjenester/webflow' as const, label: 'Webflow' },
    { href: '/tjenester/seo' as const, label: 'SEO' },
    { href: '/tjenester/markedsforing' as const, label: 'Markedsføring' },
    { href: '/tjenester/app-utvikling' as const, label: 'App utvikling' },
    { href: '/tjenester/foto-og-videografi' as const, label: 'Foto og videografi' },
    { href: '/tjenester/sosiale-medier' as const, label: 'Sosiale medier' },
    { href: '/tjenester/branding' as const, label: 'Branding' },
    { href: '/tjenester/ai-automasjon' as const, label: 'AI-automasjon' },
  ]

  return (
    <footer ref={ref} className="relative overflow-hidden" style={{ backgroundColor: '#0d1f3c' }}>
      {/* Tech grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Blue radial glow */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(33,114,181,0.25) 0%, transparent 60%)' }}
      />

      {/* CTA strip */}
      <div className="relative" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }} data-nosnippet>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-14 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-3 py-1.5 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/80 font-medium">{t('available')}</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', damping: 22, stiffness: 150, delay: 0.05 }}
              className="display-text text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] max-w-2xl"
            >
              {t('cta').split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}{i < arr.length - 1 && <br />}
                  {i === arr.length - 1 && <span className="text-accent">.</span>}
                </span>
              ))}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 shrink-0"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/kontakt"
                  className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-xl transition-colors min-h-[44px] flex items-center justify-center shadow-blue-sm"
                >
                  {t('bookCall')}
                </Link>
                <a
                  href={EMAIL_HREF}
                  className="text-sm font-medium border border-white/25 text-white/85 hover:text-white hover:border-white/50 bg-white/5 hover:bg-white/10 px-7 py-3.5 rounded-xl transition-all min-h-[44px] flex items-center justify-center"
                >
                  {EMAIL}
                </a>
              </div>
              <p className="text-xs text-white/35 text-center sm:text-right">{t('orgNote')}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Brand col */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-flex" aria-label={t('wordmarkAlt')}>
              <Image
                src="/Wordmark-white.png"
                alt={t('wordmarkAlt')}
                width={952}
                height={204}
                className="h-6 w-auto object-contain"
                sizes="(max-width: 768px) 120px, 160px"
              />
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              {t('description')}
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('followInstagram')}
                className="text-xs text-white/70 hover:text-white border border-white/15 hover:border-white/35 hover:bg-white/8 px-3 py-1.5 rounded-lg transition-all font-medium"
              >
                Instagram
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('followTikTok')}
                className="text-xs text-white/70 hover:text-white border border-white/15 hover:border-white/35 hover:bg-white/8 px-3 py-1.5 rounded-lg transition-all font-medium"
              >
                TikTok
              </a>
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            <p className="text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-5">{t('navTitle')}</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.29 }}
          >
            <p className="text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-5">{t('servicesTitle')}</p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.36 }}
          >
            <p className="text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-5">{t('contactTitle')}</p>
            <ul className="flex flex-col gap-3" data-nosnippet>
              <li>
                <a href={PHONE_HREF} className="text-sm text-white/70 hover:text-white transition-colors">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="text-sm text-white/70 hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="text-sm text-white/55 leading-relaxed">
                {t('address')}<br />{t('city')}
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col gap-5">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/70 shrink-0" />
              {t('trust1')}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/70 shrink-0" />
              {t('trust2')}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/70 shrink-0" />
              {t('trust3')}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <p className="text-xs text-white/35">{t('copyright', { year: new Date().getFullYear() })}</p>
              <p className="text-xs text-white/35">{t('orgNr')}</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/personvern" className="text-xs text-white/35 hover:text-white/65 transition-colors">{t('privacy')}</Link>
              <span className="text-xs text-white/20">·</span>
              <p className="text-xs text-white/35">{t('location')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
