'use client'

import { Link } from '@/i18n/navigation'
import { industryList } from '@/lib/industryContent'

export default function IndustriesShowcase({ locale }: { locale: string }) {
  const isEn = locale === 'en'

  return (
    <section className="py-14 md:py-20 px-6 lg:px-8 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-2">
          {isEn ? 'Built for your industry' : 'Bygget for din bransje'}
        </p>
        <h2 className="display-text text-2xl sm:text-3xl text-fg mb-6 max-w-2xl">
          {isEn
            ? 'We also build websites tailored to specific industries'
            : 'Vi bygger også nettsider skreddersydd for spesifikke bransjer'}
        </h2>
        <div className="flex flex-wrap gap-3">
          {industryList.map((i) => (
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
