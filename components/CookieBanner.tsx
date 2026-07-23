'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { COOKIE_CONSENT_KEY, CONSENT_ACCEPTED_EVENT } from '@/lib/constants'

export default function CookieBanner() {
  const t = useTranslations('cookies')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    window.dispatchEvent(new Event(CONSENT_ACCEPTED_EVENT))
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Informasjonskapsler"
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto bg-bg border border-border rounded-2xl shadow-card-hover px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-fg-muted flex-1 leading-relaxed">
          {t('description')}{' '}
          <Link href="/personvern" className="text-accent hover:underline font-medium">
            {t('readMore')}
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={reject}
            className="text-sm font-medium text-fg-muted hover:text-fg border border-border px-4 py-2.5 rounded-lg transition-colors min-h-[44px] bg-bg-2"
          >
            {t('decline')}
          </button>
          <button
            onClick={accept}
            className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg transition-colors min-h-[44px] shadow-blue-sm"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  )
}
