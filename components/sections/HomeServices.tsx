'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { WebMockup, CameraMockup, AppMockup, MarketingMockup } from '@/components/ServiceMockups'

export default function HomeServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const t = useTranslations('home.services')

  const services = [
    { number: '01', title: t('webTitle'), pricingFrom: t('webPrice'), description: t('webDesc'), href: '/tjenester/webdesign' as const, tags: ['Next.js', 'Webflow', 'SEO'], Mockup: WebMockup },
    { number: '02', title: t('appTitle'), pricingFrom: t('appPrice'), description: t('appDesc'), href: '/tjenester/app-utvikling' as const, tags: ['React', 'React Native', 'Full-stack'], Mockup: AppMockup },
    { number: '03', title: t('photoTitle'), pricingFrom: t('photoPrice'), description: t('photoDesc'), href: '/tjenester/foto-og-videografi' as const, tags: ['Produktfoto', 'Reels', 'Video'], Mockup: CameraMockup },
    { number: '04', title: t('marketingTitle'), pricingFrom: t('marketingPrice'), description: t('marketingDesc'), href: '/tjenester/markedsforing' as const, tags: ['Webdesign', 'SEO', 'Sosiale medier'], Mockup: MarketingMockup },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-bg-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-4 h-px bg-accent" /> {t('label')}
            </span>
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg">{t('title')}</h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-fg-muted max-w-sm leading-relaxed">
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(({ number, title, pricingFrom, description, href, tags, Mockup }, i) => (
            <motion.div key={number} initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.12 + i * 0.09 }}>
              <Link href={href} className="group flex flex-col bg-white border border-border rounded-xl p-6 hover:border-accent hover:shadow-blue-sm transition-all duration-250 h-full">
                <div className="mb-6"><Mockup visible={isInView} /></div>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold text-fg-muted font-mono">{number}</span>
                  <span className="text-xs font-semibold text-accent bg-accent-light border border-accent/20 px-2.5 py-1 rounded-full">{pricingFrom}</span>
                </div>
                <h3 className="display-text text-2xl text-fg mb-2 group-hover:text-accent transition-colors duration-200">{title}</h3>
                <p className="text-fg text-[15px] leading-relaxed mb-5">{description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-fg-muted bg-bg-2 border border-border px-2.5 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-accent">
                  {t('seeMore')}
                  <span aria-hidden className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.6 }} className="mt-8 flex justify-end">
          <Link href="/tjenester" className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1.5">
            {t('seeAll')} <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
