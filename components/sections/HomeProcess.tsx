'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Møte & Konsultasjon',
    description:
      'Vi starter med en gratis 30-minutters samtale. Vi lærer din bedrift, mål og kunder å kjenne – ingen forpliktelser, bare verdi.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    timing: 'Dag 1',
  },
  {
    number: '02',
    title: 'Brief & Strategi',
    description:
      'Vi setter opp en konkret plan med mål, designkrav og tekniske spesifikasjoner. Du godkjenner alt før vi begynner å bygge.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    timing: 'Dag 2–3',
  },
  {
    number: '03',
    title: 'Produksjon & Levering',
    description:
      'Vi produserer og bygger løsningen – enten det er nettsider, innhold, bilder eller kampanjer. Tett dialog hele veien, og du godkjenner underveis.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    timing: 'Uke 1–3',
  },
  {
    number: '04',
    title: 'Lansering & Oppfølging',
    description:
      'Vi lanserer, tester grundig på alle enheter og sikrer at alt fungerer. Og er tilgjengelige for support etter at du er live.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    timing: 'Uke 2–4',
  },
]

export default function HomeProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 px-6 lg:px-8 bg-bg-2">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="label-text text-accent">Prosessen</span>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg mt-3">
            Slik jobber vi
          </h2>
          <p className="text-fg-muted mt-4 max-w-xl mx-auto text-base">
            En enkel, transparent prosess fra første samtale til ferdig leveranse – uansett om du trenger en nettside, innhold eller hele pakken.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgb(var(--color-border)), rgb(var(--color-border)), transparent)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="relative flex flex-col"
              >
                {/* Icon circle with step badge */}
                <div className="flex lg:justify-center mb-5">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-white border border-border shadow-card flex items-center justify-center">
                      {step.icon}
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center shadow-blue-sm">
                      <span className="text-[9px] font-bold text-white leading-none">{step.number}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:text-center">
                  <span className="inline-block text-xs font-semibold text-accent bg-accent-light px-2.5 py-1 rounded-full mb-3">
                    {step.timing}
                  </span>
                  <h3 className="font-semibold text-fg text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-fg leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
