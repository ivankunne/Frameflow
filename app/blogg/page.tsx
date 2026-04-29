'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { JsonLd } from '@/components/JsonLd'
import { blogPosts } from '@/lib/data'

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.frameflow.no/blogg',
  name: 'Blogg – Markedsføringstips for Bergen-bedrifter',
  description: 'Artikler og guider om SEO, webdesign, sosiale medier og branding fra Frameflow i Bergen.',
  url: 'https://www.frameflow.no/blogg',
  publisher: { '@id': 'https://www.frameflow.no/#organization' },
  inLanguage: 'nb-NO',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
    { '@type': 'ListItem', position: 2, name: 'Blogg', item: 'https://www.frameflow.no/blogg' },
  ],
}

const categoryColors: Record<string, string> = {
  'Web design': '#2172b5',
  'Sosiale medier': '#7c3aed',
  'Foto og video': '#0891b2',
  Markedsføring: '#059669',
  Branding: '#92400e',
  SEO: '#b45309',
}

export default function BloggPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' })

  const [featured, ...rest] = blogPosts

  return (
    <>
      <JsonLd data={collectionPageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
          >
            Innsikt og kunnskap
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-text text-5xl lg:text-7xl text-fg max-w-2xl mb-6"
          >
            Blogg
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-fg-muted text-lg max-w-xl leading-relaxed"
          >
            Tips, guider og innsikt om webdesign, sosiale medier, branding og digital markedsføring for Bergen-bedrifter.
          </motion.p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 px-6 lg:px-8 bg-bg-2 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link href={`/blogg/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="aspect-video bg-white rounded-2xl border border-border overflow-hidden relative shadow-card">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #f0f4fb 0%, #e8f0f9 100%)' }} />
<div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-semibold" style={{ color: categoryColors[featured.category] || '#2172b5' }}>
                  {featured.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-blue-400" />
            </div>
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold" style={{ color: categoryColors[featured.category] || '#2172b5' }}>{featured.category}</span>
                <span className="text-fg-muted text-xs">·</span>
                <span className="text-fg-muted text-xs font-medium">{featured.readTime} lesing</span>
              </div>
              <h2 className="display-text text-3xl lg:text-4xl text-fg mb-4 group-hover:text-accent transition-colors duration-200">{featured.title}</h2>
              <p className="text-fg-muted leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-fg-muted">{featured.date}</p>
                <span aria-hidden className="text-fg-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section ref={gridRef} className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Link href={`/blogg/${post.slug}`} className="group block bg-white border border-border rounded-xl p-6 hover:border-accent hover:shadow-blue-sm transition-all duration-200 h-full shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold" style={{ color: categoryColors[post.category] || '#2172b5' }}>{post.category}</span>
                  <span className="text-fg-muted text-xs">·</span>
                  <span className="text-fg-muted text-xs">{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-fg mb-3 group-hover:text-accent transition-colors duration-200 leading-snug">{post.title}</h3>
                <p className="text-fg-muted text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <p className="text-xs font-medium text-fg-muted">{post.date}</p>
                  <span aria-hidden className="text-fg-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 text-sm">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
