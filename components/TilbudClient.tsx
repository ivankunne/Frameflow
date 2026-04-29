'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const services = [
  { id: 'webdesign', label: 'Web design', description: 'Ny nettside eller redesign' },
  { id: 'foto-video', label: 'Foto og video', description: 'Produkt-, team- eller innholdsfoto/-video' },
  { id: 'sosiale-medier', label: 'Sosiale medier', description: 'Strategi, innhold og håndtering' },
  { id: 'branding', label: 'Branding', description: 'Logo, identitet og brand guidelines' },
]

const budgets = [
  { id: 'under-10k', label: 'Under 10 000 kr' },
  { id: '10-25k', label: '10 000 – 25 000 kr' },
  { id: '25-50k', label: '25 000 – 50 000 kr' },
  { id: 'over-50k', label: 'Over 50 000 kr' },
]

const timelines = [
  { id: 'asap', label: 'Så raskt som mulig' },
  { id: '1-2mnd', label: '1–2 måneder' },
  { id: '3-6mnd', label: '3–6 måneder' },
  { id: 'fleksibel', label: 'Fleksibel' },
]

type Step = 1 | 2 | 3

export default function TilbudClient() {
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

  const toggleService = (id: string) => {
    setSelectedServices((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id])
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.epost)) {
      setEpostError('Oppgi en gyldig e-postadresse')
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
      setServerError('Noe gikk galt. Prøv igjen eller ring oss direkte.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full bg-bg border border-border text-fg placeholder-fg-muted px-4 py-3 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none transition-all text-sm min-h-[44px] shadow-card"

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-8 bg-bg border-b border-border">
        <div className="max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
          >
            Start her
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-text text-5xl lg:text-6xl text-fg mb-4"
          >
            Be om tilbud
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-fg-muted text-lg leading-relaxed mb-3"
          >
            Fortell oss om prosjektet ditt. Svar innen 24 timer – ingen forpliktelser.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="text-sm text-fg-muted mb-8"
          >
            Vil du bare ta en prat først?{' '}
            <Link href="/kontakt" className="text-accent font-semibold hover:underline">
              Book en gratis samtale →
            </Link>
          </motion.p>

          {/* Risk-removal trio */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {[
              'Fast pris – ingen overraskelser',
              'Fornøyd garanti',
              'Oppstart innen 48 timer',
            ].map((line) => (
              <span key={line} className="flex items-center gap-1.5 text-sm text-fg-muted">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-green-500 shrink-0">
                  <path d="M2.5 7.5l3 3L11.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {line}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Multi-step form */}
      <section className="py-24 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mx-auto mb-8 shadow-blue-md text-white text-2xl">
                ✓
              </div>
              <h2 className="display-text text-4xl text-fg mb-4">Forespørselen er mottatt!</h2>
              <p className="text-fg-muted leading-relaxed mb-8 max-w-md mx-auto">
                Takk! Vi gjennomgår detaljene og sender deg et skreddersydd tilbud innen 24 timer.
              </p>
              <Link
                href="/"
                className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] inline-flex items-center gap-2 bg-bg shadow-card"
              >
                ← Tilbake til forsiden
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Step indicator */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-fg-muted">Steg {step} av 3</p>
                  <p className="text-xs font-semibold text-accent">
                    {step === 1 && 'Velg tjenester'}
                    {step === 2 && 'Budsjett og tidsplan'}
                    {step === 3 && 'Kontaktdetaljer'}
                  </p>
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
                    { s: 1, label: 'Tjenester' },
                    { s: 2, label: 'Budsjett' },
                    { s: 3, label: 'Kontakt' },
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
                    <h2 className="display-text text-3xl text-fg mb-8">Hvilke tjenester trenger du?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                      {services.map((service) => {
                        const selected = selectedServices.includes(service.id)
                        return (
                          <button
                            key={service.id}
                            onClick={() => toggleService(service.id)}
                            className={`p-5 rounded-xl border text-left transition-all duration-200 min-h-[80px] ${
                              selected ? 'border-accent bg-accent-light shadow-blue-sm' : 'border-border bg-bg shadow-card hover:border-accent/40'
                            }`}
                          >
                            <p className="font-semibold text-fg text-sm mb-1">{service.label}</p>
                            <p className="text-xs text-fg-muted">{service.description}</p>
                          </button>
                        )
                      })}
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      disabled={selectedServices.length === 0}
                      className="text-sm font-semibold bg-accent hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg transition-colors min-h-[44px] flex items-center gap-2 shadow-blue-sm"
                    >
                      Neste →
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <h2 className="display-text text-3xl text-fg mb-8">Budsjett og tidsplan</h2>
                    <div className="mb-8">
                      <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-4">Budsjett (ca.)</p>
                      <div className="grid grid-cols-2 gap-3">
                        {budgets.map((b) => (
                          <button key={b.id} onClick={() => setSelectedBudget(b.id)}
                            className={`p-4 rounded-xl border text-left text-sm font-medium transition-all duration-200 min-h-[44px] ${selectedBudget === b.id ? 'border-accent bg-accent-light text-accent shadow-blue-sm' : 'border-border bg-bg text-fg-muted shadow-card hover:border-accent/40'}`}
                          >{b.label}</button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-10">
                      <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-4">Når vil du starte?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {timelines.map((t) => (
                          <button key={t.id} onClick={() => setSelectedTimeline(t.id)}
                            className={`p-4 rounded-xl border text-left text-sm font-medium transition-all duration-200 min-h-[44px] ${selectedTimeline === t.id ? 'border-accent bg-accent-light text-accent shadow-blue-sm' : 'border-border bg-bg text-fg-muted shadow-card hover:border-accent/40'}`}
                          >{t.label}</button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(1)} className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] bg-bg shadow-card">← Tilbake</button>
                      <button onClick={() => setStep(3)} disabled={!selectedBudget || !selectedTimeline}
                        className="text-sm font-semibold bg-accent hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg transition-colors min-h-[44px] flex items-center gap-2 shadow-blue-sm"
                      >Neste →</button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <h2 className="display-text text-3xl text-fg mb-8">Dine kontaktdetaljer</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="t-navn" className="text-xs font-semibold text-fg block mb-2">Navn *</label>
                          <input id="t-navn" type="text" required value={formData.navn} onChange={(e) => setFormData({ ...formData, navn: e.target.value })} className={inputClass} placeholder="Ditt navn" />
                        </div>
                        <div>
                          <label htmlFor="t-epost" className="text-xs font-semibold text-fg block mb-2">E-post *</label>
                          <input
                            id="t-epost" type="email" required
                            value={formData.epost}
                            onChange={(e) => { setFormData({ ...formData, epost: e.target.value }); if (epostError) setEpostError('') }}
                            aria-invalid={!!epostError}
                            aria-describedby={epostError ? 't-epost-error' : undefined}
                            className={epostError ? `${inputClass} border-red-400 focus:border-red-400 focus:ring-red-100` : inputClass}
                            placeholder="din@epost.no"
                          />
                          {epostError && <p id="t-epost-error" className="text-xs text-red-600 mt-1">{epostError}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="t-bedrift" className="text-xs font-semibold text-fg block mb-2">Bedrift</label>
                        <input id="t-bedrift" type="text" value={formData.bedrift} onChange={(e) => setFormData({ ...formData, bedrift: e.target.value })} className={inputClass} placeholder="Bedriftsnavn" />
                      </div>
                      <div>
                        <label htmlFor="t-beskrivelse" className="text-xs font-semibold text-fg block mb-2">Beskriv prosjektet</label>
                        <textarea id="t-beskrivelse" value={formData.beskrivelse} onChange={(e) => setFormData({ ...formData, beskrivelse: e.target.value })} rows={4} className={`${inputClass} resize-none`} placeholder="Hva har du i tankene?" />
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
                          Jeg godtar at Frameflow behandler mine kontaktopplysninger i henhold til{' '}
                          <Link href="/personvern" className="text-accent hover:underline">personvernerklæringen</Link>.
                        </label>
                      </div>
                      {serverError && (
                        <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">{serverError}</p>
                      )}
                      <div className="flex gap-3 mt-2">
                        <button type="button" onClick={() => setStep(2)} className="text-sm font-semibold text-fg border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px] bg-bg shadow-card">← Tilbake</button>
                        <button
                          type="submit"
                          disabled={!consent || loading}
                          className="text-sm font-semibold bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg transition-colors min-h-[44px] flex items-center gap-2 shadow-blue-sm"
                        >
                          {loading ? (
                            <>
                              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sender…
                            </>
                          ) : 'Send forespørsel →'}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </section>

      {/* Pricing signals — shown after form for context */}
      <section className="py-12 px-6 lg:px-8 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-5">Hva koster det?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-bg-2 border border-border rounded-2xl p-6 shadow-card">
              <span className="text-xs font-semibold text-fg-muted uppercase tracking-widest">Enkeltprosjekt</span>
              <p className="display-text text-3xl text-fg mt-2 mb-1">Fra 15 000 kr</p>
              <p className="text-sm text-fg-muted mb-4">Én leveranse, fast pris – nettside, branding eller foto/video.</p>
              <ul className="flex flex-col gap-1.5">
                {['Webdesign & SEO', 'Branding & logo', 'Foto og video', 'Ferdig på 2–4 uker'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-fg-muted">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent-light border border-accent/20 rounded-2xl p-6 shadow-blue-sm relative overflow-hidden">
              <span className="absolute top-4 right-4 text-[10px] font-bold text-accent bg-white border border-accent/20 px-2 py-0.5 rounded-full">Populær</span>
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">Månedlig avtale</span>
              <p className="display-text text-3xl text-fg mt-2 mb-1">Fra 9 900 kr/mnd</p>
              <p className="text-sm text-fg-muted mb-4">Løpende digital støtte – pauserbar, ingen bindingstid.</p>
              <ul className="flex flex-col gap-1.5">
                {['Sosiale medier & innhold', 'Nettside-vedlikehold', 'SEO & rapportering', 'Pause når som helst'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-fg-muted">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-fg-muted mt-4 text-center">Prisene er veiledende – tilbudet tilpasses ditt prosjekt.</p>
        </div>
      </section>
    </>
  )
}
