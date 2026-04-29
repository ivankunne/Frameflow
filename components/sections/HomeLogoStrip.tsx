const logos: { name: string; weight: string }[] = [
  { name: 'Artadent',      weight: 'font-semibold' },
  { name: 'Bergen Bakeri', weight: 'font-light tracking-wider' },
  { name: 'GV Rentals',    weight: 'font-bold' },
  { name: 'Nordic Fit',    weight: 'font-semibold tracking-widest uppercase text-xs' },
  { name: 'VisitBergen',   weight: 'font-medium' },
  { name: 'Marbesa',       weight: 'font-extrabold tracking-tight' },
]

export default function HomeLogoStrip() {
  return (
    <section className="py-12 bg-bg border-y border-border overflow-hidden">
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-fg-muted mb-8 px-6">
        Bedrifter vi har hjulpet å vokse
      </p>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        {/* 4 copies — animation moves exactly 25% (one set), always seamless */}
        <div
          className="flex items-center gap-16 w-max"
          style={{ animation: 'marquee-quarter 40s linear infinite' }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className={`shrink-0 text-fg-muted/40 hover:text-fg-muted/70 transition-colors duration-300 text-base select-none ${logo.weight}`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
