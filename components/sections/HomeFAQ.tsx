'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'Hvilke tjenester tilbyr dere?', a: 'Frameflow leverer webdesign, sosiale medier strategi, foto og video produksjon, branding og SEO. Vi skreddersyr tjenestene til hver enkelt bedrifts behov for å skape målbare resultater.' },
  { q: 'Kan dere håndtere alle sosiale medieplattformer?', a: 'Ja, vi jobber med Instagram, Facebook, TikTok, LinkedIn og Pinterest. Vi holder oss oppdatert på de nyeste trendene for hver plattform slik at innholdet ditt engasjerer maksimalt.' },
  { q: 'Hva gjør Frameflow annerledes enn andre byrå?', a: 'Som et lite byrå snakker du alltid direkte med personen som faktisk gjør jobben – ingen mellommenn. Vi kombinerer kreativitet med datadrevne strategier og skreddersyr alle løsninger til din bedrift.' },
  { q: 'Hvor lang tid tar det å lage en nettside?', a: 'En standard bedriftsnettside tar typisk 3–6 uker fra oppstart til lansering, avhengig av omfang og tilgang på innhold. Vi setter opp en klar tidsplan ved prosjektoppstart.' },
  { q: 'Hvordan kommer vi i gang?', a: 'Kontakt oss via kontaktskjemaet, e-post eller ring +47 99 85 37 81. Vi starter med en gratis konsultasjon for å diskutere dine mål, og lager deretter en skreddersydd strategi.' },
]

const chatMessages = [
  { from: 'client', text: 'Hei! Hva koster en nettside?' },
  { from: 'ivan', text: 'Hei! La oss ta en gratis samtale og se hva som passer for deg.' },
  { from: 'client', text: 'Perfekt, når passer det?' },
]

function ChatWidget({ visible }: { visible: boolean }) {
  return (
    <div className="mt-8 bg-white border border-border rounded-xl overflow-hidden shadow-card">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-bg-2">
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
            <span className="text-white text-[10px] font-bold display-text">FF</span>
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
        </div>
        <div>
          <p className="text-xs font-semibold text-fg leading-none">Frameflow</p>
          <p className="text-[10px] text-green-600 font-medium mt-0.5">Online nå</p>
        </div>
      </div>

      {/* Messages */}
      <div className="px-4 py-3 flex flex-col gap-2.5">
        {chatMessages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + i * 0.3 }}
            className={`flex ${msg.from === 'ivan' ? 'justify-start' : 'justify-end'}`}
          >
            <span className={`text-[11px] leading-relaxed px-3 py-2 rounded-xl max-w-[85%] ${
              msg.from === 'ivan'
                ? 'bg-accent-light text-accent rounded-tl-sm'
                : 'bg-bg-2 text-fg rounded-tr-sm'
            }`}>
              {msg.text}
            </span>
          </motion.div>
        ))}

        {/* Typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
          className="flex items-center gap-1.5 pl-0.5"
        >
          {[0, 0.15, 0.3].map((d) => (
            <motion.span
              key={d}
              animate={visible ? { y: [0, -3, 0] } : {}}
              transition={{ repeat: Infinity, duration: 0.8, delay: d, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-fg-muted/40"
            />
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
        className="px-4 pb-4"
      >
        <Link
          href="/kontakt"
          className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold bg-accent hover:bg-accent-hover text-white py-2.5 rounded-lg transition-colors"
        >
          Start samtale →
        </Link>
      </motion.div>
    </div>
  )
}

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-bg-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-6"><span className="w-4 h-px bg-accent" /> FAQ</span>
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg mb-6 leading-tight">Ofte stilte spørsmål</h2>
            <p className="text-fg-muted leading-relaxed mb-6">Ikke funnet svaret? Ta kontakt direkte – vi svarer raskt.</p>
            <Link href="/kontakt" className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 inline-flex items-center gap-2 min-h-[44px] bg-white shadow-card">
              Ta kontakt →
            </Link>
            <ChatWidget visible={isInView} />
          </motion.div>

          {/* Accordion */}
          <div className="lg:col-span-8">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }} className={`bg-white border rounded-xl mb-3 overflow-hidden transition-all duration-200 ${open === i ? 'border-accent shadow-blue-sm' : 'border-border shadow-card'}`}>
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group min-h-[56px]" aria-expanded={open === i} aria-controls={`faq-answer-${i}`}>
                  <span className={`font-semibold text-sm transition-colors duration-200 ${open === i ? 'text-accent' : 'text-fg group-hover:text-accent'}`}>{faq.q}</span>
                  <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-all duration-200 ${open === i ? 'bg-accent text-white rotate-45' : 'bg-bg-2 text-fg-muted'}`} aria-hidden>+</span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div id={`faq-answer-${i}`} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: 'easeInOut' }} className="overflow-hidden">
                      <p className="text-fg text-sm leading-relaxed px-6 pb-5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
