'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

function ChatWidget({ visible, chatResponds, chatExample, chatStart, msg1Client, msg1Ivan, msg2Client }: {
  visible: boolean
  chatResponds: string
  chatExample: string
  chatStart: string
  msg1Client: string
  msg1Ivan: string
  msg2Client: string
}) {
  const chatMessages = [
    { from: 'client', text: msg1Client },
    { from: 'ivan', text: msg1Ivan },
    { from: 'client', text: msg2Client },
  ]

  return (
    <div className="mt-8 bg-white border border-border rounded-xl overflow-hidden shadow-card">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-2">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
            <span className="text-white text-[10px] font-bold display-text">FF</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-fg leading-none">Ivan · Frameflow</p>
            <p className="text-[10px] text-fg-muted mt-0.5">{chatResponds}</p>
          </div>
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-widest text-fg-muted bg-bg border border-border px-2 py-0.5 rounded-full">
          {chatExample}
        </span>
      </div>

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
          {chatStart}
        </Link>
      </motion.div>
    </div>
  )
}

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const t = useTranslations('home.faq')

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
    { q: t('q6'), a: t('a6') },
    { q: t('q7'), a: t('a7') },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-bg-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-6"><span className="w-4 h-px bg-accent" /> {t('label')}</span>
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg mb-6 leading-tight">{t('title')}</h2>
            <p className="text-fg-muted leading-relaxed mb-6">{t('subtitle')}</p>
            <Link href="/kontakt" className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 inline-flex items-center gap-2 min-h-[44px] bg-white shadow-card">
              {t('contact')}
            </Link>
            <ChatWidget
              visible={isInView}
              chatResponds={t('chatResponds')}
              chatExample={t('chatExample')}
              chatStart={t('chatStart')}
              msg1Client={t('msg1Client')}
              msg1Ivan={t('msg1Ivan')}
              msg2Client={t('msg2Client')}
            />
          </motion.div>

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
