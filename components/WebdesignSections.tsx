'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import type { WebdesignGuideContent } from '@/lib/webdesignGuideContent'

export default function WebdesignSections({ content }: { content: WebdesignGuideContent }) {
  const { platforms } = content
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-14 md:py-20 lg:py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-accent" /> {platforms.label}
          </span>
          <h2 className="display-text text-3xl sm:text-4xl text-fg mb-5">{platforms.title}</h2>
          <p className="text-fg-muted leading-relaxed">{platforms.intro}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white border border-border rounded-xl overflow-hidden shadow-card mb-8"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-bg-2 border-b border-border">
                  {platforms.columns.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="text-left font-semibold text-fg-muted text-xs uppercase tracking-widest px-5 py-3.5 whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {platforms.rows.map((row, i) => (
                  <tr key={row.dimension} className={i < platforms.rows.length - 1 ? 'border-b border-border' : ''}>
                    <th scope="row" className="text-left font-semibold text-fg px-5 py-4 align-top whitespace-nowrap">{row.dimension}</th>
                    <td className="text-fg-muted px-5 py-4 align-top leading-relaxed min-w-[14rem]">{row.webflow}</td>
                    <td className="text-fg-muted px-5 py-4 align-top leading-relaxed min-w-[14rem]">{row.nextjs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-fg-muted text-sm leading-relaxed max-w-3xl"
        >
          {platforms.notePrefix}
          <Link href="/tjenester/webflow" className="text-accent font-medium hover:underline">{platforms.noteLink}</Link>
          {platforms.noteSuffix}
        </motion.p>
      </div>
    </section>
  )
}
