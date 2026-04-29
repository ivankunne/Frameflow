'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'Hva koster en nettside i Bergen?', a: 'En bedriftsnettside starter fra 12 000 kr. Prisen avhenger av omfang, funksjonalitet og design. Vi gir alltid fast pris – ingen overraskelser etterpå. Be om et uforpliktende tilbud, så får du et konkret tall innen 24 timer.' },
  { q: 'Hvilke tjenester tilbyr dere?', a: 'Frameflow leverer webdesign, app utvikling, foto og video produksjon, branding og sosiale medier – alt under ett tak. Vi skreddersyr tjenestene til din bedrift og leverer målbare resultater.' },
  { q: 'Hva gjør Frameflow annerledes enn andre byrå?', a: 'Du snakker alltid direkte med Ivan – personen som faktisk gjør jobben. Ingen mellommenn, ingen junior-leveranser. Vi kjenner Bergen-markedet og jobber med fast pris og fornøyd garanti.' },
  { q: 'Hvor lang tid tar det å lage en nettside?', a: 'En standard bedriftsnettside tar typisk 3–6 uker fra oppstart til lansering, avhengig av omfang og tilgang på innhold. Vi setter opp en klar tidsplan fra dag én.' },
  { q: 'Jobber dere kun med bedrifter i Bergen?', a: 'Vi har base i Bergen og kjenner det lokale markedet godt, men jobber like gjerne med bedrifter i resten av Norge og internasjonalt – som med Marbesa Project 94 i Marbella.' },
  { q: 'Hvordan kommer vi i gang?', a: 'Book en gratis 30-minutters samtale via kontaktskjemaet, e-post eller ring +47 99 85 37 81. Ingen forpliktelser – vi hører om prosjektet ditt og forteller deg ærlig hva vi kan gjøre.' },
]

const chatMessages = [
  { from: 'client', text: 'Hei! Hva koster en nettside?' },
  { from: 'ivan', text: 'Nettsider starter fra 12 000 kr. Book en gratis samtale, så gir vi deg fast pris!' },
  { from: 'client', text: 'Perfekt, når passer det?' },
]

function ChatWidget({ visible }: { visible: boolean }) {
  return (
    <div className="mt-8 bg-white border border-border rounded-xl overflow-hidden shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-2">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
              <span className="text-white text-[10px] font-bold display-text">FF</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-fg leading-none">Ivan · Frameflow</p>
            <p className="text-[10px] text-fg-muted mt-0.5">Svarer innen 24 timer</p>
          </div>
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-widest text-fg-muted bg-bg border border-border px-2 py-0.5 rounded-full">
          Eksempel
        </span>
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
