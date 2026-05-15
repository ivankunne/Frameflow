'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function HomeProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const t = useTranslations('home.process')

  const icons = [
    <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ]

  const steps = [
    { number: '01', title: t('step1Title'), description: t('step1Desc'), timing: t('step1Tag'), icon: icons[0] },
    { number: '02', title: t('step2Title'), description: t('step2Desc'), timing: t('step2Tag'), icon: icons[1] },
    { number: '03', title: t('step3Title'), description: t('step3Desc'), timing: t('step3Tag'), icon: icons[2] },
    { number: '04', title: t('step4Title'), description: t('step4Desc'), timing: t('step4Tag'), icon: icons[3] },
  ]

  return (
    <section ref={ref} className="py-20 px-6 lg:px-8 bg-bg-2">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="label-text text-accent">{t('label')}</span>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-fg mt-3">{t('title')}</h2>
          <p className="text-fg-muted mt-4 max-w-xl mx-auto text-base">{t('subtitle')}</p>
        </motion.div>

        <div className="relative">
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
                <div className="flex lg:justify-center mb-5">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-white border border-border shadow-card flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center shadow-blue-sm">
                      <span className="text-[9px] font-bold text-white leading-none">{step.number}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:text-center">
                  <span className="inline-block text-xs font-semibold text-accent bg-accent-light px-2.5 py-1 rounded-full mb-3">{step.timing}</span>
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
