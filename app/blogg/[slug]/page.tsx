import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { blogPosts, getBlogPost } from '@/lib/data'
import BlogPostClient from '@/components/BlogPostClient'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.frameflow.no/blogg/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://www.frameflow.no/blogg/${post.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
      authors: ['Ivan Kunne'],
      publishedTime: post.updatedAt ?? post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const publishedDate = post.updatedAt ?? post.date
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: publishedDate,
    dateModified: publishedDate,
    articleSection: post.category,
    image: {
      '@type': 'ImageObject',
      url: 'https://www.frameflow.no/og-image.png',
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      '@id': 'https://www.frameflow.no/#ivan-kunne',
      name: 'Ivan Kunne',
      url: 'https://www.frameflow.no/om-oss',
    },
    publisher: {
      '@id': 'https://www.frameflow.no/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.frameflow.no/blogg/${post.slug}`,
    },
    inLanguage: 'nb-NO',
    keywords: [
      post.category,
      'markedsføring Bergen',
      'Frameflow',
      ...({
        SEO: ['lokal SEO Bergen', 'søkemotoroptimalisering Bergen', 'Google rangering Bergen'],
        Webdesign: ['webdesign Bergen', 'nettside Bergen', 'webdesign byrå Bergen'],
        'Sosiale medier': ['sosiale medier Bergen', 'Instagram markedsføring Bergen', 'Facebook Bergen'],
        Branding: ['branding Bergen', 'merkevare Bergen', 'logo design Bergen'],
        'Foto & Video': ['bedriftsfoto Bergen', 'videografi Bergen', 'fotograf Bergen'],
        Markedsføring: ['digital markedsføring Bergen', 'markedsføringsbyrå Bergen', 'annonsering Bergen'],
        'App utvikling': ['app utvikling Bergen', 'apputvikling Bergen', 'mobilapp Bergen'],
      }[post.category] ?? []),
    ].join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.frameflow.no' },
      { '@type': 'ListItem', position: 2, name: 'Blogg', item: 'https://www.frameflow.no/blogg' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.frameflow.no/blogg/${post.slug}` },
    ],
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  )
}
