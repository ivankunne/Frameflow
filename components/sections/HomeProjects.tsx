'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getProject } from '@/lib/data'

function SportsbyttePreview({ visible }: { visible: boolean }) {
  const categories = ['Ski', 'Sykkel', 'Løping']
  return (
    <div className="h-36 rounded-lg overflow-hidden relative" style={{ background: '#f0fdf4' }}>
      <div className="absolute inset-0 p-3 flex flex-col">
        <motion.div initial={{ opacity: 0, y: -6 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay: 0.3 }} className="flex items-center justify-between mb-3">
          <div className="w-14 h-2 bg-[#16a34a]/50 rounded" />
          <div className="flex gap-1.5">{[...Array(3)].map((_, i) => <div key={i} className="w-6 h-1.5 bg-[#16a34a]/20 rounded" />)}</div>
        </motion.div>
        <div className="flex gap-1.5 mb-3">
          {categories.map((cat, i) => (
            <motion.div key={cat} initial={{ opacity: 0, scale: 0.8 }} animate={visible ? { opacity: 1, scale: 1 } : {}} transition={{ type: 'spring', stiffness: 240, damping: 16, delay: 0.42 + i * 0.08 }} className="px-2 h-5 rounded-full text-[8px] font-semibold flex items-center" style={{ background: i === 0 ? '#16a34a' : '#16a34a18', color: i === 0 ? '#fff' : '#16a34a' }}>{cat}</motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {[0, 1].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 12 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: 0.62 + i * 0.1 }} className="flex items-center gap-2 bg-white/70 rounded-md px-2 py-1.5">
              <div className="w-6 h-6 rounded shrink-0" style={{ background: '#16a34a18', border: '1px solid #16a34a28' }} />
              <div className="flex-1"><div className="w-16 h-1.5 bg-[#171717]/20 rounded mb-1" /><div className="w-10 h-1 bg-[#171717]/10 rounded" /></div>
              <div className="w-8 h-4 rounded" style={{ background: '#16a34a' }} />
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.75, y: 6 }} animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}} transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.95 }} className="absolute bottom-2.5 right-2.5 bg-white rounded-lg px-2.5 py-1.5 shadow-card flex items-center gap-1.5">
        <span className="text-green-500 text-[10px] font-bold">●</span>
        <span className="text-[10px] font-semibold text-fg">Ny plattform live</span>
      </motion.div>
    </div>
  )
}

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

  const projects = [
    { slug: 'ho-orbit', title: 'h-orbit', description: t('horbitDesc'), tags: ['App utvikling', 'Branding', 'Full-stack'], location: 'Bergen, Norge', result: t('horbitStat'), color: '#06b6d4', Preview: HoOrbitPreview },
    { slug: 'sportsbytte', title: 'Sportsbytte', description: t('sportsbytteDesc'), tags: ['Web design', 'Branding', 'SEO'], location: 'Norge', result: t('sportsbytteStat'), color: '#16a34a', Preview: SportsbyttePreview },
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
              <Link href={`/prosjekter/${slug}` as any} className="group block bg-white border border-border rounded-2xl p-6 hover:border-accent transition-all duration-250 hover:shadow-blue-sm h-full">
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
                  ) : (
                    <Preview visible={isInView} />
                  )}
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
