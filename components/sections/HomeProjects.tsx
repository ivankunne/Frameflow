'use client'

import { useRef, type ComponentType } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getProject } from '@/lib/data'

function HoOrbitPreview({ visible }: { visible: boolean }) {
  return (
    <div className="h-36 rounded-lg overflow-hidden relative bg-gradient-to-br from-cyan-900 to-cyan-800">
      <div className="absolute inset-0 p-2.5 flex">
        <motion.div initial={{ opacity: 0, scale: 0.5, rotate: -20 }} animate={visible ? { opacity: 1, scale: 1, rotate: 0 } : {}} transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.3 }} className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center shrink-0 mb-auto"><span className="text-cyan-900 text-[9px] font-bold">HO</span></motion.div>
        <div className="flex-1 flex flex-col gap-1 px-1.5 ml-1.5">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: 0.4 }} className="w-12 h-1.5 bg-cyan-500/40 rounded" />
          {[0.5, 0.8, 1.1].map((delay) => (<motion.div key={delay} initial={{ opacity: 0, x: -10 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.28, delay }} className="w-10 h-1 bg-cyan-400/30 rounded" />))}
        </div>
        <div className="flex flex-col gap-1.5 ml-auto">
          {[{ color: '#3b82f6', delay: 0.5 }, { color: '#fbbf24', delay: 0.65 }, { color: '#34c759', delay: 0.8 }].map((task, i) => (<motion.div key={i} initial={{ opacity: 0, x: 12 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: task.delay }} className="w-10 h-3 rounded-md" style={{ background: task.color }} />))}
        </div>
      </div>
    </div>
  )
}

export default function HomeProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const t = useTranslations('home.projects')

  const projects: {
    slug: string
    title: string
    description: string
    tags: string[]
    location: string
    result: string
    color: string
    Preview?: ComponentType<{ visible: boolean }>
  }[] = [
    { slug: 'h-orbit', title: 'h-orbit', description: t('horbitDesc'), tags: ['App utvikling', 'Branding', 'Full-stack'], location: 'Bergen, Norge', result: t('horbitStat'), color: '#155e75', Preview: HoOrbitPreview },
    { slug: 'betlehem', title: 'Betlehem, Bergens Indremisjon', description: t('betlehemDesc'), tags: ['Webflow', 'SEO', 'Vedlikehold'], location: 'Bergen, Norge', result: t('betlehemStat'), color: '#2172b5' },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-bg-2 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4"><span className="w-4 h-px bg-accent" /> {t('label')}</span>
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg">{t('title')}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
            <Link href="/prosjekter" className="text-sm font-semibold text-fg-muted hover:text-fg transition-colors inline-flex items-center gap-1.5">
              {t('seeAll')} <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map(({ slug, title, description, tags, result, color, Preview }, i) => {
            const image = getProject(slug)?.image
            return (
            <motion.div key={slug} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}>
              <Link href={{ pathname: '/prosjekter/[slug]', params: { slug } }} className="group block bg-white border border-border rounded-2xl p-6 hover:border-accent transition-all duration-250 hover:shadow-blue-sm h-full">
                <div className="mb-6">
                  {image ? (
                    <div className="relative h-56 sm:h-64 lg:h-72 w-full rounded-xl overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 620px, 100vw"
                        className="object-cover object-left-top"
                      />
                    </div>
                  ) : Preview ? (
                    <Preview visible={isInView} />
                  ) : null}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => <span key={tag} className="text-xs font-medium text-fg-muted">{tag}</span>)}
                </div>
                <h3 className="display-text text-2xl sm:text-3xl text-fg mb-2 group-hover:text-accent transition-colors duration-200">{title}</h3>
                <p className="text-fg-muted text-sm leading-relaxed mb-6">{description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ color, backgroundColor: `${color}18` }}>{result}</span>
                  <span aria-hidden className="text-fg-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">→</span>
                </div>
              </Link>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
