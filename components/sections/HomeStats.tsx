'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'

// Starts at the final value so the server-rendered HTML carries the real number;
// the count-up runs while the card is still fading in from opacity 0.
function Counter({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(target)
  const reduceMotion = useReducedMotion()
  useEffect(() => {
    if (!trigger || reduceMotion) return
    let frame = 0
    setCount(0)
    const totalFrames = 80
    const id = setInterval(() => {
      frame++
      const eased = 1 - Math.pow(1 - frame / totalFrames, 3)
      setCount(Math.round(eased * target))
      if (frame >= totalFrames) clearInterval(id)
    }, 16)
    return () => clearInterval(id)
  }, [trigger, target, reduceMotion])
  return <span>{count}{suffix}</span>
}

export default function HomeStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const t = useTranslations('home.stats')

  const stats = [
    { value: 5, suffix: '+', label: t('experience'), note: t('experienceSub') },
    { value: 7, suffix: '', label: t('services'), note: t('servicesSub') },
    { value: 140, suffix: '%', label: t('traffic'), note: t('trafficSub') },
    { value: 24, suffix: 't', label: t('response'), note: t('responseSub') },
  ]

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
