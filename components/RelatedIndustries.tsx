'use client'

import { Link } from '@/i18n/navigation'
import { industryList, type IndustrySlug } from '@/lib/industryContent'

export default function RelatedIndustries({ current, locale }: { current: IndustrySlug; locale: string }) {
  const isEn = locale === 'en'
  const others = industryList.filter((i) => i.slug !== current)

  return (
    <section className="py-14 md:py-20 px-6 lg:px-8 bg-bg-2 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-5">
          {isEn ? 'We also build for' : 'Vi bygger også for'}
        </p>
        <div className="flex flex-wrap gap-3">
          {others.map((i) => (
            <Link
              key={i.slug}
              href={i.href as any}
              className="text-sm font-medium text-fg border border-border hover:border-accent hover:text-accent px-4 py-2 rounded-lg transition-all duration-200 min-h-[44px] flex items-center bg-white shadow-card"
            >
              {isEn ? i.labelEn : i.labelNo}
            </Link>
          ))}
          <Link
            href={'/bransjer' as any}
            className="text-sm font-semibold text-accent hover:text-accent-hover px-4 py-2 rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
          >
            {isEn ? 'See all industries →' : 'Se alle bransjer →'}
          </Link>
        </div>
      </div>
    </section>
  )
}
