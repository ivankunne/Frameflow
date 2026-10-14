'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

type Step = 1 | 2 | 3

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  webdesign: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  'app-utvikling': <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></>,
  seo: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" /></>,
  markedsforing: <><path d="M3 10v4a1 1 0 001 1h2l5 4V5L6 9H4a1 1 0 00-1 1z" /><path d="M15 9a3 3 0 010 6M18 6a7 7 0 010 12" /></>,
  'foto-video': <><path d="M4 8h3l2-2h6l2 2h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" /><circle cx="12" cy="13" r="3.5" /></>,
  'sosiale-medier': <path d="M4 5h16a1 1 0 011 1v10a1 1 0 01-1 1h-9l-5 4v-4H4a1 1 0 01-1-1V6a1 1 0 011-1z" />,
  branding: <path d="M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5z" />,
  usikker: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 015 0c0 1.5-2.5 2-2.5 3.5M12 17h.01" /></>,
}

export default function TilbudClient() {
  const t = useTranslations('quote')
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  const [step, setStep] = useState<Step>(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState('')
  const [selectedTimeline, setSelectedTimeline] = useState('')
  const [formData, setFormData] = useState({ navn: '', epost: '', bedrift: '', beskrivelse: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const [epostError, setEpostError] = useState('')
  const [consent, setConsent] = useState(false)

  const services = [
    { id: 'webdesign', label: t('service1Label'), description: t('service1Desc') },
    { id: 'app-utvikling', label: t('serviceAppLabel'), description: t('serviceAppDesc') },
    { id: 'seo', label: t('serviceSeoLabel'), description: t('serviceSeoDesc') },
    { id: 'markedsforing', label: t('serviceMarketingLabel'), description: t('serviceMarketingDesc') },
    { id: 'foto-video', label: t('service2Label'), description: t('service2Desc') },
    { id: 'sosiale-medier', label: t('service3Label'), description: t('service3Desc') },
    { id: 'branding', label: t('service4Label'), description: t('service4Desc') },
    { id: 'usikker', label: t('serviceUnsureLabel'), description: t('serviceUnsureDesc') },
  ]

  const budgets = [
    { id: 'under-10k', label: t('budget1') },
    { id: '10-25k', label: t('budget2') },
    { id: '25-50k', label: t('budget3') },
    { id: 'over-50k', label: t('budget4') },
  ]

  const timelines = [
    { id: 'asap', label: t('timeline1') },
    { id: '1-2mnd', label: t('timeline2') },
    { id: '3-6mnd', label: t('timeline3') },
    { id: 'fleksibel', label: t('timeline4') },
  ]

  const toggleService = (id: string) => {
    setSelectedServices((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id])
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.epost)) {
      setEpostError(t('emailError'))
      return
    }
    setEpostError('')
    setServerError('')
    setLoading(true)

    try {
      const res = await fetch('/api/tilbud', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget: selectedBudget,
          timeline: selectedTimeline,
        }),
      })
      if (!res.ok) throw new Error('server')
      setSubmitted(true)
    } catch {
      setServerError(t('serverError'))
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full bg-bg border border-border text-fg placeholder-fg-muted px-4 py-3 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none transition-all text-sm min-h-[44px] shadow-card"

  const stepLabels: Record<Step, string> = {
    1: t('step1Active'),
    2: t('step2Active'),
    3: t('step3Active'),
  }

  return (
    <>
      <section ref={heroRef} className="min-h-screen pt-28 pb-16 px-6 lg:px-8 bg-bg-2 flex items-start">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

            {/* Left: intro — sticky on desktop */}
            <div className="lg:sticky lg:top-28">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent-hover text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
              >
                {t('label')}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="display-text text-4xl lg:text-5xl text-fg mb-4"
              >
                {t('title')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-fg-muted text-base leading-relaxed mb-3"
              >
                {t('desc')}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="text-fg text-sm leading-relaxed mb-4"
              >
                {t('intro')}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="text-sm text-fg-muted mb-8"
              >
                {t('contactPrompt')}{' '}
                <Link href="/kontakt" className="text-accent font-semibold hover:underline">
                  {t('contactCta')}
                </Link>
              </motion.p>

              {/* Risk-removal trio */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col gap-3"
              >
                {[t('guarantee1'), t('guarantee2'), t('guarantee3')].map((line) => (
                  <span key={line} className="flex items-center gap-2 text-sm text-fg-muted">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-green-500 shrink-0">
                      <path d="M2.5 7.5l3 3L11.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {line}
                  </span>
                ))}
              </motion.div>

              {/* What happens next */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-10 pt-8 border-t border-border"
              >
                <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-5">{t('nextTitle')}</p>
                <div className="flex flex-col gap-4">
                  {[
                    { n: '1', label: t('next1Label'), desc: t('next1Desc') },
                    { n: '2', label: t('next2Label'), desc: t('next2Desc') },
                    { n: '3', label: t('next3Label'), desc: t('next3Desc') },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-accent text-[10px] font-bold">{item.n}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-fg leading-tight">{item.label}</p>
                        <p className="text-xs text-fg-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: multi-step form */}
            <div className="bg-bg border border-border rounded-2xl p-8 shadow-card">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mx-auto mb-8 shadow-blue-md text-white text-2xl">
                    ✓
                  </div>
                  <h2 className="display-text text-4xl text-fg mb-4">{t('successTitle')}</h2>
                  <p className="text-fg-muted leading-relaxed mb-8 max-w-md mx-auto">{t('successDesc')}</p>
                  <Link
                    href="/"
                    className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] inline-flex items-center gap-2 bg-bg shadow-card"
                  >
                    {t('backHome')}
                  </Link>
                </motion.div>
              ) : (
                <>
                  {/* Step indicator */}
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-semibold text-fg-muted">{t('stepOf', { step })}</p>
                      <p className="text-xs font-semibold text-accent">{stepLabels[step]}</p>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-border rounded-full overflow-hidden mb-5">
                      <motion.div
                        className="h-full bg-accent rounded-full"
                        animate={{ width: `${((step - 1) / 2) * 100 + 33.33}%` }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                      />
                    </div>
                    {/* Step circles with labels */}
                    <div className="flex items-start justify-between">
                      {([
                        { s: 1, label: t('stepServices') },
                        { s: 2, label: t('stepBudget') },
                        { s: 3, label: t('stepContact') },
                      ] as { s: Step; label: string }[]).map(({ s, label }) => (
                        <div key={s} className="flex flex-col items-center gap-1.5">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
                            step === s ? 'bg-accent text-white shadow-blue-sm' :
                            step > s ? 'bg-accent text-white' :
                            'bg-bg text-fg-muted border border-border'
                          }`}>
                            {step > s ? (
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            ) : s}
                          </div>
                          <span className={`text-xs font-medium ${step >= s ? 'text-accent' : 'text-fg-muted'}`}>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                        <h2 className="display-text text-3xl text-fg mb-8">{t('step1Question')}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                          {services.map((service) => {
                            const selected = selectedServices.includes(service.id)
                            const unsure = service.id === 'usikker'
                            return (
                              <button
                                key={service.id}
                                type="button"
                                aria-pressed={selected}
                                onClick={() => toggleService(service.id)}
                                className={`group relative flex items-start gap-3.5 p-4 pr-10 rounded-xl border text-left transition-all duration-200 min-h-[84px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                                  selected
                                    ? 'border-accent bg-accent-light shadow-blue-sm'
                                    : unsure
                                      ? 'border-dashed border-border bg-bg-2 hover:border-accent/50'
                                      : 'border-border bg-bg shadow-card hover:border-accent/40 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0'
                                }`}
                              >
                                <span
                                  aria-hidden
                                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                                    selected ? 'bg-accent text-white' : 'bg-accent-light text-accent group-hover:bg-accent/15'
                                  }`}
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    {SERVICE_ICONS[service.id]}
                                  </svg>
                                </span>
                                <span className="flex flex-col">
                                  <span className="font-semibold text-fg text-sm mb-1">{service.label}</span>
                                  <span className="text-xs text-fg-muted leading-relaxed">{service.description}</span>
                                </span>
                                <span
                                  aria-hidden
                                  className={`absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${
                                    selected ? 'bg-accent text-white' : 'border border-border bg-bg text-transparent'
                                  }`}
                                >
                                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                              </button>
                            )
                          })}
                        </div>
                        <button
                          onClick={() => setStep(2)}
                          disabled={selectedServices.length === 0}
                          className="text-sm font-semibold bg-accent hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg transition-colors min-h-[44px] flex items-center gap-2 shadow-blue-sm"
                        >
                          {t('nextBtn')}
                        </button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                        <h2 className="display-text text-3xl text-fg mb-8">{t('step2Question')}</h2>
                        <div className="mb-8">
                          <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-4">{t('budgetLabel')}</p>
                          <div className="grid grid-cols-2 gap-3">
                            {budgets.map((b) => (
                              <button key={b.id} onClick={() => setSelectedBudget(b.id)}
                                className={`p-4 rounded-xl border text-left text-sm font-medium transition-all duration-200 min-h-[44px] ${selectedBudget === b.id ? 'border-accent bg-accent-light text-accent shadow-blue-sm' : 'border-border bg-bg text-fg-muted shadow-card hover:border-accent/40'}`}
                              >{b.label}</button>
                            ))}
                          </div>
                        </div>
                        <div className="mb-10">
                          <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-4">{t('timelineLabel')}</p>
                          <div className="grid grid-cols-2 gap-3">
                            {timelines.map((item) => (
                              <button key={item.id} onClick={() => setSelectedTimeline(item.id)}
                                className={`p-4 rounded-xl border text-left text-sm font-medium transition-all duration-200 min-h-[44px] ${selectedTimeline === item.id ? 'border-accent bg-accent-light text-accent shadow-blue-sm' : 'border-border bg-bg text-fg-muted shadow-card hover:border-accent/40'}`}
                              >{item.label}</button>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button onClick={() => setStep(1)} className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] bg-bg shadow-card">{t('backBtn')}</button>
                          <button onClick={() => setStep(3)} disabled={!selectedBudget || !selectedTimeline}
                            className="text-sm font-semibold bg-accent hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg transition-colors min-h-[44px] flex items-center gap-2 shadow-blue-sm"
                          >{t('nextBtn')}</button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                        <h2 className="display-text text-3xl text-fg mb-8">{t('step3Question')}</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="t-navn" className="text-xs font-semibold text-fg block mb-2">{t('fieldName')}</label>
                              <input id="t-navn" type="text" required value={formData.navn} onChange={(e) => setFormData({ ...formData, navn: e.target.value })} className={inputClass} placeholder={t('namePlaceholder')} />
                            </div>
                            <div>
                              <label htmlFor="t-epost" className="text-xs font-semibold text-fg block mb-2">{t('fieldEmail')}</label>
                              <input
                                id="t-epost" type="email" required
                                value={formData.epost}
                                onChange={(e) => { setFormData({ ...formData, epost: e.target.value }); if (epostError) setEpostError('') }}
                                aria-invalid={!!epostError}
                                aria-describedby={epostError ? 't-epost-error' : undefined}
                                className={epostError ? `${inputClass} border-red-400 focus:border-red-400 focus:ring-red-100` : inputClass}
                                placeholder={t('emailPlaceholder')}
                              />
                              {epostError && <p id="t-epost-error" className="text-xs text-red-600 mt-1">{epostError}</p>}
                            </div>
                          </div>
                          <div>
                            <label htmlFor="t-bedrift" className="text-xs font-semibold text-fg block mb-2">{t('fieldCompany')}</label>
                            <input id="t-bedrift" type="text" value={formData.bedrift} onChange={(e) => setFormData({ ...formData, bedrift: e.target.value })} className={inputClass} placeholder={t('companyPlaceholder')} />
                          </div>
                          <div>
                            <label htmlFor="t-beskrivelse" className="text-xs font-semibold text-fg block mb-2">{t('fieldDesc')}</label>
                            <textarea id="t-beskrivelse" value={formData.beskrivelse} onChange={(e) => setFormData({ ...formData, beskrivelse: e.target.value })} rows={4} className={`${inputClass} resize-none`} placeholder={t('descPlaceholder')} />
                          </div>
                          <div className="flex items-start gap-2.5 mt-1">
                            <input
                              type="checkbox"
                              id="t-consent"
                              required
                              checked={consent}
                              onChange={(e) => setConsent(e.target.checked)}
                              className="mt-0.5 w-4 h-4 accent-accent shrink-0 cursor-pointer"
                            />
                            <label htmlFor="t-consent" className="text-xs text-fg-muted leading-relaxed cursor-pointer">
                              {t('consentText')}{' '}
                              <Link href="/personvern" className="text-accent hover:underline">{t('consentPrivacy')}</Link>.
                            </label>
                          </div>
                          {serverError && (
                            <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">{serverError}</p>
                          )}
                          <div className="flex gap-3 mt-2">
                            <button type="button" onClick={() => setStep(2)} className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] bg-bg shadow-card">{t('backBtn')}</button>
                            <button
                              type="submit"
                              disabled={!consent || loading}
                              className="text-sm font-semibold bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg transition-colors min-h-[44px] flex items-center gap-2 shadow-blue-sm"
                            >
                              {loading ? (
                                <>
                                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  {t('submitting')}
                                </>
                              ) : t('submitBtn')}
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
