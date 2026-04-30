'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WebMockup, CameraMockup, SocialMockup, BrandMockup, AppMockup } from '@/components/ServiceMockups'

// ─── Service data ──────────────────────────────────────────────────────────
const services = [
  { number: '01', title: 'Web design', pricingFrom: 'Fra 12 000 kr', description: 'Raske, konverteringsfokuserte nettsider for Bergen-bedrifter med SEO innebygd fra dag én. Ingen rot – bare det som fungerer.', href: '/tjenester/webdesign', tags: ['Next.js', 'Webflow', 'SEO'], Mockup: WebMockup },
  { number: '02', title: 'App utvikling', pricingFrom: 'Fra 35 000 kr', description: 'Skreddersydde apper som løser reelle problemer – fra MVP til fullskala. Vi bygger apper som folk faktisk bruker daglig.', href: '/tjenester/app-utvikling', tags: ['React', 'React Native', 'Full-stack'], Mockup: AppMockup },
  { number: '03', title: 'Foto og videografi', pricingFrom: 'Fra 3 500 kr', description: 'Autentisk foto og video produksjon i Bergen – ser profesjonelt ut, forteller din historie og fungerer på alle flater.', href: '/tjenester/foto-og-videografi', tags: ['Produktfoto', 'Reels', 'Video'], Mockup: CameraMockup },
  { number: '04', title: 'Branding', pricingFrom: 'Fra 6 000 kr', description: 'Vi former utseendet, stemmen og følelsen av merkevaren din – skreddersydd for Bergen-markedet, konsekvent og umiskjennelig.', href: '/tjenester/branding', tags: ['Logo', 'Identitet', 'Guidelines'], Mockup: BrandMockup },
]

export default function HomeServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-bg-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4"><span className="w-4 h-px bg-accent" /> Hva vi gjør</span>
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg">Våre tjenester</h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-fg-muted max-w-sm leading-relaxed">
            Helhetlige løsninger som styrker din digitale tilstedeværelse og gir målbare resultater.
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
                  Se mer
                  <span aria-hidden className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.6 }} className="mt-8 flex justify-end">
          <Link href="/tjenester" className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1.5">Se alle tjenester <span aria-hidden>→</span></Link>
        </motion.div>
      </div>
    </section>
  )
}
