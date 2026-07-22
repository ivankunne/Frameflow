import { getTranslations } from 'next-intl/server'

const logos: { name: string; weight: string }[] = [
  { name: 'Sportsbytte', weight: 'font-semibold' },
  { name: 'h-orbit',    weight: 'font-bold tracking-tight' },
]

export default async function HomeLogoStrip() {
  const t = await getTranslations('home.logos')

  return (
    <section className="py-12 bg-bg border-y border-border">
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-fg-muted mb-6 px-6">
        {t('label')}
      </p>

      <div className="flex items-center justify-center gap-x-10 sm:gap-x-16 gap-y-3 flex-wrap px-6">
        {logos.map((logo) => (
          <span
            key={logo.name}
            className={`shrink-0 text-fg-muted/70 hover:text-fg transition-colors duration-300 text-lg sm:text-xl select-none ${logo.weight}`}
          >
            {logo.name}
          </span>
        ))}
      </div>
    </section>
  )
}
