'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, ADDRESS, ADDRESS_MAPS_HREF, INSTAGRAM_URL } from '@/lib/constants'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function KontaktClient() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState({ navn: '', epost: '', melding: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const [epostError, setEpostError] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!EMAIL_RE.test(formData.epost)) {
      setEpostError('Oppgi en gyldig e-postadresse')
      return
    }
    setEpostError('')
    setServerError('')
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('server')
      setSubmitted(true)
    } catch {
      setServerError('Noe gikk galt. Prøv igjen eller ring oss direkte.')
    } finally {
      setLoading(false)
    }
  }

  const contactItems = [
    { label: 'Telefon', value: PHONE, href: PHONE_HREF },
    { label: 'E-post', value: EMAIL, href: EMAIL_HREF },
    { label: 'Adresse', value: ADDRESS, href: ADDRESS_MAPS_HREF },
    { label: 'Instagram', value: '@frameflow.no', href: INSTAGRAM_URL },
    { label: 'Åpningstider', value: 'Man–fre, 09:00–17:00', href: undefined },
  ]

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-28 md:pt-32 pb-14 md:pb-20 px-6 lg:px-8 bg-bg border-b border-border overflow-hidden">
<div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(33,114,181,0.06) 0%, transparent 65%)' }}
        />

        <div className="max-w-7xl mx-auto relative">
          {/* Direct contact card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="inline-flex items-center gap-4 bg-white border border-border rounded-2xl px-5 py-4 shadow-card mb-10"
          >
            <div className="w-10 h-10 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center shrink-0">
              <span className="display-text text-sm text-accent">IK</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-fg">Ivan Kunne</p>
              <p className="text-xs text-fg-muted">Daglig leder · <a href="tel:+4799853781" className="hover:text-accent transition-colors">+47 99 85 37 81</a> · <a href="mailto:ivan@frameflow.no" className="hover:text-accent transition-colors">ivan@frameflow.no</a></p>
            </div>
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-green-600 font-medium bg-green-50 border border-green-100 px-2.5 py-1 rounded-full ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Svar innen 24t
            </span>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Kom i gang
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-text text-4xl sm:text-5xl lg:text-7xl text-fg max-w-2xl mb-6"
          >
            La oss ta en prat.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-fg-muted text-lg max-w-xl leading-relaxed"
          >
            Klar til å starte et prosjekt, eller vil du bare utforske mulighetene? Vi svarer alltid raskt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={heroInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.55 }}
            className="mt-8 inline-flex items-center gap-2.5 bg-bg border border-border rounded-xl px-4 py-2.5 shadow-card"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
            <span className="text-sm font-semibold text-fg">Svar innen 24 timer</span>
            <span className="text-fg-muted text-sm">· Gratis konsultasjon</span>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section ref={formRef} className="py-14 md:py-20 lg:py-24 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 rounded-xl bg-accent text-white flex items-center justify-center text-2xl mb-6 shadow-blue-sm">
                  ✓
                </div>
                <h2 className="display-text text-3xl text-fg mb-3">Takk for din melding!</h2>
                <p className="text-fg-muted leading-relaxed">
                  Vi svarer deg innen 1 virkedag. I mellomtiden er du velkommen til å ringe oss direkte.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="navn" className="text-xs font-semibold text-fg block mb-2">Navn *</label>
                    <input
                      id="navn" type="text" required
                      value={formData.navn}
                      onChange={(e) => setFormData({ ...formData, navn: e.target.value })}
                      className="w-full bg-bg border border-border text-fg placeholder-fg-muted px-4 py-3 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none transition-all text-sm min-h-[44px] shadow-card"
                      placeholder="Ditt navn"
                    />
                  </div>
                  <div>
                    <label htmlFor="epost" className="text-xs font-semibold text-fg block mb-2">E-post *</label>
                    <input
                      id="epost" type="email" required
                      value={formData.epost}
                      onChange={(e) => { setFormData({ ...formData, epost: e.target.value }); if (epostError) setEpostError('') }}
                      aria-invalid={!!epostError}
                      aria-describedby={epostError ? 'epost-error' : undefined}
                      className={`w-full bg-bg border text-fg placeholder-fg-muted px-4 py-3 rounded-lg focus:ring-2 focus:outline-none transition-all text-sm min-h-[44px] shadow-card ${epostError ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-border focus:border-accent focus:ring-accent/10'}`}
                      placeholder="din@epost.no"
                    />
                    {epostError && <p id="epost-error" className="text-xs text-red-600 mt-1">{epostError}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="melding" className="text-xs font-semibold text-fg block mb-2">Melding</label>
                  <textarea
                    id="melding" rows={5}
                    value={formData.melding}
                    onChange={(e) => setFormData({ ...formData, melding: e.target.value })}
                    className="w-full bg-bg border border-border text-fg placeholder-fg-muted px-4 py-3 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none transition-all text-sm resize-none shadow-card"
                    placeholder="Fortell oss gjerne om prosjektet ditt... (valgfritt)"
                  />
                </div>
                <div className="flex items-start gap-2.5 mt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-accent shrink-0 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-fg-muted leading-relaxed cursor-pointer">
                    Jeg godtar at Frameflow behandler mine kontaktopplysninger i henhold til{' '}
                    <Link href="/personvern" className="text-accent hover:underline">personvernerklæringen</Link>.
                  </label>
                </div>
                {serverError && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">{serverError}</p>
                )}
                <button
                  type="submit"
                  disabled={!consent || loading}
                  className="text-sm font-semibold bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg transition-colors min-h-[44px] w-full flex items-center justify-center gap-2 shadow-blue-sm mt-1"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sender…
                    </>
                  ) : 'Book gratis samtale →'}
                </button>
                <p className="text-xs text-fg-muted text-center mt-2">Gratis · Uforpliktende · Svar innen 24 timer</p>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-8">Kontaktinfo</p>
            <div className="flex flex-col gap-6 mb-10">
              {contactItems.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold text-fg-muted mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-semibold text-fg hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-semibold text-fg">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div className="p-6 bg-bg border border-border rounded-xl shadow-card mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs font-semibold text-fg">Tilgjengelig for nye prosjekter</p>
              </div>
              <p className="text-fg-muted text-sm leading-relaxed">
                Vi tar vanligvis på oss 2–3 nye prosjekter per måned. Kontakt oss tidlig for å sikre din plass.
              </p>
            </div>

            {/* What happens next */}
            <div className="flex flex-col gap-0">
              <p className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-4">Hva skjer videre?</p>
              {[
                { n: '01', title: 'Vi svarer', desc: 'Du hører fra oss innen 24 timer.' },
                { n: '02', title: 'Gratis samtale', desc: 'En kort prat om mål og behov.' },
                { n: '03', title: 'Skreddersydd tilbud', desc: 'Vi sender et konkret, uforpliktende tilbud.' },
              ].map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: 12 }}
                  animate={formInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.32, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 items-start py-3.5 border-b border-border/50 last:border-0"
                >
                  <span className="text-xs font-mono font-semibold text-accent shrink-0 mt-0.5">{step.n}</span>
                  <div>
                    <p className="text-sm font-semibold text-fg mb-0.5">{step.title}</p>
                    <p className="text-xs text-fg-muted">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
