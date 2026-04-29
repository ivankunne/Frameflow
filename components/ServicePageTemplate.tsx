'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { WebMockup, CameraMockup, SocialMockup, BrandMockup, AppMockup } from '@/components/ServiceMockups'

interface ServicePageProps {
  label: string
  title: string
  description: string
  longDescription: string
  includes: string[]
  process: { step: string; title: string; description: string }[]
  relatedServices: { title: string; href: string }[]
  mockupType: 'web' | 'photo' | 'social' | 'brand' | 'app'
  pricingFrom?: string
}

const accordionItems = [
  {
    title: 'Omfang og sider',
    body: 'Antall undersider, funksjoner og integrasjoner påvirker prisen direkte.',
  },
  {
    title: 'Design kompleksitet',
    body: 'Skreddersydd design tar lengre tid enn templater, men gir bedre resultater.',
  },
  {
    title: 'Innhold og bilder',
    body: 'Trenger du foto/video i tillegg? Vi tilbyr pakker som kombinerer tjenester.',
  },
]

function PricingAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-2">
      {accordionItems.map((item, i) => (
        <div key={item.title} className="border border-border rounded-lg bg-white overflow-hidden">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-fg hover:text-accent transition-colors min-h-[44px]"
          >
            {item.title}
            <span className={`text-accent transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <p className="px-5 pb-4 text-sm text-fg-muted leading-relaxed">{item.body}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

const mockupBadgeLabels: Record<string, string> = {
  web: 'SEO optimalisert',
  photo: 'RAW · 24 megapiksel',
  social: '4.2% engasjement',
  brand: 'Brand guidelines',
  app: '98% uptime',
}

function HeroMockup({ mockupType, visible }: { mockupType: string; visible: boolean }) {
  if (mockupType === 'web') return <WebMockup visible={visible} />
  if (mockupType === 'photo') return <CameraMockup visible={visible} />
  if (mockupType === 'social') return <SocialMockup visible={visible} />
  if (mockupType === 'brand') return <BrandMockup visible={visible} />
  if (mockupType === 'app') return <AppMockup visible={visible} />
  return null
}

export default function ServicePageTemplate({
  label,
  title,
  description,
  longDescription,
  includes,
  process,
  relatedServices,
  mockupType,
  pricingFrom,
}: ServicePageProps) {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-80px' })
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: '-80px' })

  const badgeLabel = mockupBadgeLabels[mockupType] ?? 'Frameflow'

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-28 md:pt-32 pb-14 md:pb-20 px-6 lg:px-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            aria-label="Brødsmuler"
            className="flex items-center gap-2 text-xs text-fg-muted font-medium mb-8"
          >
            <Link href="/" className="hover:text-fg transition-colors">Hjem</Link>
            <span>/</span>
            <Link href="/tjenester" className="hover:text-fg transition-colors">Tjenester</Link>
            <span>/</span>
            <span className="text-fg">{title}</span>
          </motion.nav>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: text */}
            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
              >
                {label}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="display-text text-4xl sm:text-5xl lg:text-7xl text-fg max-w-3xl mb-6"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-fg-muted text-lg max-w-2xl leading-relaxed mb-10"
              >
                {description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/tilbud"
                  className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] inline-flex items-center gap-2 shadow-blue-sm"
                >
                  Be om tilbud
                </Link>
                <Link
                  href="/kontakt"
                  className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] inline-flex items-center gap-2 bg-white shadow-card"
                >
                  Ta kontakt
                </Link>
              </motion.div>
            </div>

            {/* Right: mockup — hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative">
                {/* Top-left badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.6 }}
                  className="absolute -top-4 -left-4 z-10 bg-white border border-border rounded-xl px-3 py-2 shadow-card flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[11px] font-semibold text-fg">{mockupType === 'app' ? '5000+ installs' : 'Levert i Bergen'}</span>
                </motion.div>

                <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border">
                  <HeroMockup mockupType={mockupType} visible={heroInView} />
                </div>

                {/* Bottom-right badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.85 }}
                  className="absolute -bottom-4 -right-4 z-10 bg-white border border-border rounded-xl px-4 py-3 shadow-card-hover flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-accent">
                      <path d="M2 7.5L5.5 11L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fg leading-tight">{badgeLabel}</p>
                    <p className="text-[10px] text-fg-muted mt-0.5">Frameflow</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="py-14 md:py-20 lg:py-24 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="display-text text-3xl text-fg mb-6">Hva vi leverer</h2>
            <p className="text-fg-muted leading-relaxed">{longDescription}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-6">Inkluderer</p>
            <ul className="flex flex-col gap-3">
              {includes.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={contentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
                  className="flex items-center gap-3 text-fg-muted"
                >
                  <span className="w-5 h-5 rounded-md bg-accent-light border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[10px] font-bold">✓</span>
                  </span>
                  <span className="text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="py-14 md:py-20 lg:py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-4 h-px bg-accent" /> Slik jobber vi
            </span>
            <h2 className="display-text text-3xl sm:text-4xl text-fg">Prosessen vår</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                className="bg-white border border-border rounded-xl p-8 shadow-card"
              >
                <p className="display-text text-4xl text-accent/20 mb-6">{step.step}</p>
                <h3 className="font-semibold text-fg mb-3">{step.title}</h3>
                <p className="text-fg-muted text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {pricingFrom && (
        <section className="bg-bg-2 py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                <span className="w-4 h-px bg-accent" /> Investering
              </span>
              <h2 className="display-text text-4xl text-fg">Hva koster det?</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Pricing card */}
              <div className="bg-white border border-border rounded-xl p-8 shadow-card-hover">
                <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-3">Fra</p>
                <p className="display-text text-4xl text-fg mb-2">{pricingFrom}</p>
                <p className="text-sm text-fg-muted mb-8">per prosjekt, eks. mva</p>
                <Link
                  href="/kontakt"
                  className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] inline-flex items-center gap-2 shadow-blue-sm"
                >
                  Book gratis samtale
                </Link>
              </div>

              {/* Accordion */}
              <div>
                <p className="text-sm font-semibold text-fg mb-4">Hva påvirker prisen?</p>
                <PricingAccordion />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related + CTA */}
      <section className="py-16 px-6 lg:px-8 bg-bg-2 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-5">Andre tjenester</p>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-sm font-medium text-fg border border-border hover:border-accent hover:text-accent px-4 py-2 rounded-lg transition-all duration-200 min-h-[44px] flex items-center bg-white shadow-card"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 shrink-0 items-start sm:items-end">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tilbud"
                className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] flex items-center shadow-blue-sm"
              >
                Be om tilbud
              </Link>
              <Link
                href="/kontakt"
                className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] flex items-center bg-white shadow-card"
              >
                Book gratis samtale
              </Link>
            </div>
            <p className="text-xs text-fg-muted">Svar innen 24 timer – alltid</p>
          </div>
        </div>
      </section>
    </>
  )
}
