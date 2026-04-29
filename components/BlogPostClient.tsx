'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { BlogPost } from '@/lib/data'

export default function BlogPostClient({
  post,
  relatedPosts,
}: {
  post: BlogPost
  relatedPosts: BlogPost[]
}) {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true })

  // Convert markdown-ish content to HTML paragraphs
  const paragraphs = post.content
    .split('\n\n')
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-8 bg-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            aria-label="Brødsmuler"
            className="flex items-center gap-2 label-text text-xs text-fg-muted mb-8"
          >
            <Link href="/" className="hover:text-fg transition-colors">Hjem</Link>
            <span>/</span>
            <Link href="/blogg" className="hover:text-fg transition-colors">Blogg</Link>
            <span>/</span>
            <span className="text-fg truncate max-w-[200px]">{post.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="label-text text-xs text-accent">{post.category}</span>
            <span className="label-text text-xs text-fg-muted">·</span>
            <span className="label-text text-xs text-fg-muted">{post.readTime} lesing</span>
            <span className="label-text text-xs text-fg-muted">·</span>
            <span className="label-text text-xs text-fg-muted">{post.date}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-text text-4xl lg:text-6xl text-fg mb-8"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-fg-muted text-xl leading-relaxed"
          >
            {post.excerpt}
          </motion.p>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-4 mt-10 pt-8 border-t border-border"
          >
            <div className="w-10 h-10 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center shrink-0">
              <span className="display-text text-sm text-fg">IK</span>
            </div>
            <div>
              <p className="font-sans font-medium text-fg text-sm">Ivan Kunne</p>
              <p className="label-text text-xs text-fg-muted">Daglig leder, Frameflow Bergen</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="prose-custom"
          >
            {paragraphs.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2
                    key={i}
                    className="display-text text-2xl lg:text-3xl text-fg mt-12 mb-4 first:mt-0"
                  >
                    {block.replace('## ', '')}
                  </h2>
                )
              }
              if (block.startsWith('### ')) {
                return (
                  <h3 key={i} className="font-sans font-semibold text-fg text-xl mt-8 mb-3">
                    {block.replace('### ', '')}
                  </h3>
                )
              }
              if (block.startsWith('- ')) {
                const items = block.split('\n').filter((l) => l.startsWith('- '))
                return (
                  <ul key={i} className="flex flex-col gap-2 my-6 ml-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-fg-muted">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-fg-muted leading-relaxed my-5">
                  {block}
                </p>
              )
            })}
          </motion.article>

          {/* Related service — internal link for SEO */}
          {post.relatedService && (
            <div className="mt-12 flex items-center justify-between bg-bg-2 border border-border rounded-xl px-6 py-4">
              <div>
                <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-1">Relatert tjeneste</p>
                <p className="text-sm font-semibold text-fg">{post.relatedService.title}</p>
              </div>
              <Link
                href={post.relatedService.href}
                className="text-sm font-semibold text-accent hover:text-accent-hover flex items-center gap-1.5 transition-colors shrink-0"
              >
                Les mer →
              </Link>
            </div>
          )}

          {/* CTA in post */}
          <div className="mt-8 p-8 bg-accent-light border border-accent/20 rounded-2xl">
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-4 h-px bg-accent" /> Trenger du hjelp?
            </span>
            <h3 className="display-text text-2xl text-fg mb-3">La Frameflow ta seg av det.</h3>
            <p className="text-fg-muted text-sm mb-6 leading-relaxed">
              Kontakt oss for en gratis konsultasjon og finn ut hvordan vi kan hjelpe din bedrift i Bergen.
            </p>
            <div className="flex gap-3">
              <Link
                href="/tilbud"
                className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors min-h-[44px] inline-flex items-center shadow-blue-sm"
              >
                Be om tilbud
              </Link>
              <Link
                href="/kontakt"
                className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] inline-flex items-center bg-white shadow-card"
              >
                Ta kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Author bio */}
      <section className="py-10 px-6 lg:px-8 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-5 p-6 bg-bg-2 border border-border rounded-2xl shadow-card">
            <div className="w-14 h-14 rounded-full bg-accent-light border-2 border-accent/20 flex items-center justify-center shrink-0">
              <span className="display-text text-lg text-accent">IK</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold text-fg text-sm">Ivan Kunne</p>
                <span className="text-fg-muted text-xs">·</span>
                <span className="text-xs font-semibold text-accent">Daglig leder, Frameflow</span>
              </div>
              <p className="text-fg-muted text-sm leading-relaxed mb-3">
                Grunnlegger av Frameflow Bergen. Hjelper norske og internasjonale bedrifter med webdesign, branding, foto/video og sosiale medier som gir målbare resultater.
              </p>
              <a
                href="/om-oss"
                className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                Les mer om Ivan →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 lg:px-8 bg-bg-2 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <p className="label-text text-xs text-fg-muted mb-8">Relaterte artikler</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blogg/${p.slug}`}
                  className="group block bg-white border border-border rounded-xl p-6 hover:border-accent hover:shadow-blue-sm transition-all duration-200 shadow-card"
                >
                  <p className="text-xs font-semibold text-accent mb-3">{p.category}</p>
                  <h4 className="font-semibold text-fg text-sm leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
                    {p.title}
                  </h4>
                  <p className="text-xs text-fg-muted">{p.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
