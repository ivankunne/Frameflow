import type { MetadataRoute } from 'next'
import { blogPosts, projects } from '@/lib/data'

const BASE_URL = 'https://www.frameflow.no'
const EN_BASE = `${BASE_URL}/en`
const SITE_UPDATED = new Date('2026-05-25')

type SitemapEntry = {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
  alternates?: { languages: Record<string, string> }
}

function dual(noPath: string, enPath: string, freq: SitemapEntry['changeFrequency'], priority: number, mod: Date = SITE_UPDATED): SitemapEntry[] {
  const noUrl = `${BASE_URL}${noPath}`
  const enUrl = `${EN_BASE}${enPath}`
  return [
    { url: noUrl, lastModified: mod, changeFrequency: freq, priority, alternates: { languages: { 'nb-NO': noUrl, 'en': enUrl, 'x-default': noUrl } } },
    { url: enUrl, lastModified: mod, changeFrequency: freq, priority: priority * 0.9, alternates: { languages: { 'nb-NO': noUrl, 'en': enUrl, 'x-default': noUrl } } },
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: SitemapEntry[] = [
    ...dual('', '', 'weekly', 1),
    ...dual('/om-oss', '/about', 'monthly', 0.8),
    ...dual('/tjenester', '/services', 'monthly', 0.9),
    ...dual('/tjenester/webdesign', '/services/web-design', 'monthly', 0.8),
    ...dual('/tjenester/webflow', '/services/webflow', 'monthly', 0.8),
    ...dual('/tjenester/foto-og-videografi', '/services/photo-video', 'monthly', 0.8),
    ...dual('/tjenester/sosiale-medier', '/services/social-media', 'monthly', 0.8),
    ...dual('/tjenester/app-utvikling', '/services/app-development', 'monthly', 0.8),
    ...dual('/tjenester/branding', '/services/branding', 'monthly', 0.8),
    ...dual('/tjenester/seo', '/services/seo', 'monthly', 0.8),
    ...dual('/tjenester/markedsforing', '/services/marketing', 'monthly', 0.9),
    ...dual('/tjenester/ai-automasjon', '/services/ai-automation', 'monthly', 0.8),
    ...dual('/prosjekter', '/projects', 'monthly', 0.8),
    ...dual('/blogg', '/blog', 'weekly', 0.8),
    ...dual('/kontakt', '/contact', 'yearly', 0.7),
    ...dual('/tilbud', '/quote', 'yearly', 0.6),
  ]

  const projectPages: SitemapEntry[] = projects.flatMap((project) => {
    const mod = new Date(`${project.year}-01-01`)
    return dual(`/prosjekter/${project.slug}`, `/projects/${project.slug}`, 'monthly', 0.7, mod)
  })

  const blogPages: SitemapEntry[] = blogPosts.map((post) => {
    const mod = post.updatedAt ? new Date(post.updatedAt) : SITE_UPDATED
    const noUrl = `${BASE_URL}/blogg/${post.slug}`
    return { url: noUrl, lastModified: mod, changeFrequency: 'monthly' as const, priority: 0.7 }
  })

  return [...staticPages, ...projectPages, ...blogPages]
}
