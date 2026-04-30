import type { MetadataRoute } from 'next'
import { blogPosts, projects } from '@/lib/data'

const BASE_URL = 'https://www.frameflow.no'
const SITE_UPDATED = new Date('2026-04-30')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/om-oss`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tjenester`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/tjenester/webdesign`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tjenester/foto-og-videografi`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tjenester/sosiale-medier`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tjenester/app-utvikling`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tjenester/branding`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/prosjekter`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blogg`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/kontakt`, lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/tilbud`, lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.9 },
    { url: `${BASE_URL}/personvern`, lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/prosjekter/${project.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blogg/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : SITE_UPDATED,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...projectPages, ...blogPages]
}
