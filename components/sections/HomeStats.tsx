'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  {
    value: 20,
    suffix: '+',
    label: 'Prosjekter levert',
    note: 'For bedrifter i Bergen og Vestland',
  },
  {
    value: 4,
    suffix: '',
    label: 'Tjenester under ett tak',
    note: 'Web, foto, sosiale medier og branding',
  },
  {
    value: 300,
    suffix: '%',
    label: 'Mer engasjement',
    note: 'Gjennomsnitt på tvers av kanaler',
  },
  {
    value: 24,
    suffix: 't',
    label: 'Svartid',
    note: 'Svar garantert innen 24 timer',
  },
]

function Counter({
  target,
  suffix,
  trigger,
}: {
  target: number
  suffix: string
  trigger: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let frame = 0
    const totalFrames = 80
    const id = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (frame >= totalFrames) clearInterval(id)
    }, 16)
    return () => clearInterval(id)
  }, [trigger, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function HomeStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-14 px-6 lg:px-8 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="text-center lg:px-8"
            >
              <p className="text-4xl lg:text-5xl font-bold tabular-nums text-accent">
                <Counter target={stat.value} suffix={stat.suffix} trigger={isInView} />
              </p>
              <p className="text-fg font-semibold mt-2 text-sm">{stat.label}</p>
              <p className="text-fg-muted text-xs mt-1 leading-relaxed">{stat.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
