'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Lang = 'no' | 'en'

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'no',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('no')

  useEffect(() => {
    const saved = localStorage.getItem('ff_lang') as Lang | null
    if (saved === 'en' || saved === 'no') setLang(saved)
  }, [])

  const toggle = () =>
    setLang((l) => {
      const next = l === 'no' ? 'en' : 'no'
      localStorage.setItem('ff_lang', next)
      return next
    })

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
