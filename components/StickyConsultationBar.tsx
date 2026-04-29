'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyConsultationBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.5)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onOpen = () => setMenuOpen(true)
    const onClose = () => setMenuOpen(false)
    window.addEventListener('navmenuopen', onOpen)
    window.addEventListener('navmenuclose', onClose)
    return () => {
      window.removeEventListener('navmenuopen', onOpen)
      window.removeEventListener('navmenuclose', onClose)
    }
  }, [])

  const visible = scrolled && !menuOpen

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-bg border-t border-border shadow-lg px-4 py-3 flex items-center justify-between"
        >
          <p className="text-sm font-semibold text-fg">Klar for å starte?</p>
          <Link
            href="/kontakt"
            className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg transition-colors min-h-[44px] flex items-center shadow-blue-sm"
          >
            Book gratis samtale →
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
