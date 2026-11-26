'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import type { SeoGuideContent } from '@/lib/seoGuideContent'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
      <span className="w-4 h-px bg-accent" /> {children}
    </span>
  )
}

export default function SeoGuideSections({ content }: { content: SeoGuideContent }) {
  const { pricing, choose, local } = content

  const pricingRef = useRef(null)
  const pricingInView = useInView(pricingRef, { once: true, margin: '-80px' })
  const chooseRef = useRef(null)
  const chooseInView = useInView(chooseRef, { once: true, margin: '-80px' })
  const localRef = useRef(null)
  const localInView = useInView(localRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* Market price levels */}
      <section ref={pricingRef} className="py-14 md:py-20 lg:py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10 max-w-3xl"
          >
            <Eyebrow>{pricing.label}</Eyebrow>
            <h2 className="display-text text-3xl sm:text-4xl text-fg mb-5">{pricing.title}</h2>
            <p className="text-fg-muted leading-relaxed">{pricing.intro}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white border border-border rounded-xl overflow-hidden shadow-card mb-8"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-bg-2 border-b border-border">
                    {pricing.columns.map((col) => (
                      <th key={col} scope="col" className="text-left font-semibold text-fg-muted text-xs uppercase tracking-widest px-5 py-3.5 whitespace-nowrap">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricing.rows.map((row, i) => (
                    <tr key={row.level} className={i < pricing.rows.length - 1 ? 'border-b border-border' : ''}>
                      <th scope="row" className="text-left font-semibold text-fg px-5 py-4 align-top whitespace-nowrap">{row.level}</th>
                      <td className="text-fg px-5 py-4 align-top whitespace-nowrap">{row.price}</td>
                      <td className="text-fg-muted px-5 py-4 align-top leading-relaxed">{row.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-fg-muted text-sm leading-relaxed max-w-3xl"
          >
            {pricing.note}
          </motion.p>
        </div>
      </section>

      {/* Choosing an agency */}
      <section ref={chooseRef} className="py-14 md:py-20 lg:py-24 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={chooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10 max-w-3xl"
          >
            <Eyebrow>{choose.label}</Eyebrow>
            <h2 className="display-text text-3xl sm:text-4xl text-fg mb-5">{choose.title}</h2>
            <p className="text-fg-muted leading-relaxed">{choose.intro}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: choose.goodTitle, items: choose.good, mark: '✓', markClass: 'text-accent' },
              { title: choose.badTitle, items: choose.bad, mark: '✕', markClass: 'text-fg-muted' },
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                animate={chooseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                className="bg-white border border-border rounded-xl p-6 sm:p-8 shadow-card"
              >
                <h3 className="font-semibold text-fg mb-5">{col.title}</h3>
                <ul className="flex flex-col gap-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-fg-muted leading-relaxed">
                      <span aria-hidden="true" className={`${col.markClass} font-bold shrink-0 leading-relaxed`}>{col.mark}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local vs national */}
      <section ref={localRef} className="py-14 md:py-20 lg:py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={localInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Eyebrow>{local.label}</Eyebrow>
            <h2 className="display-text text-3xl sm:text-4xl text-fg mb-5">{local.title}</h2>
            <p className="text-fg-muted leading-relaxed mb-6">{local.body}</p>

            <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-3">{local.examplesLabel}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {local.examples.map((q) => (
                <span key={q} className="text-xs font-medium text-fg-muted bg-bg-2 border border-border px-3 py-1.5 rounded-full">
                  {q}
                </span>
              ))}
            </div>

            <p className="text-fg-muted text-sm leading-relaxed">
              {local.guidePrefix}
              <Link
                href={{ pathname: '/blogg/[slug]', params: { slug: 'lokal-seo-bergen-guide-2025' } }}
                className="text-accent font-medium hover:underline"
              >
                {local.guideLink}
              </Link>
              {local.gbpPrefix}
              <Link
                href={{ pathname: '/blogg/[slug]', params: { slug: 'google-my-business-bergen-guide' } }}
                className="text-accent font-medium hover:underline"
              >
                {local.gbpLink}
              </Link>
              {local.suffix}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
