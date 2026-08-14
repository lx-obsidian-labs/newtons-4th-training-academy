'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import Link from 'next/link'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-[#141414] border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie size={24} className="text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium mb-2">Cookie Notice</h3>
                <p className="text-white/50 text-sm mb-4">
                  We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies. 
                  Read our <Link href="/cookies" className="text-gold hover:text-yellow-400">Cookie Policy</Link> for more information.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={acceptCookies}
                    className="px-6 py-2 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-gold/20 transition-all"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={declineCookies}
                    className="px-6 py-2 bg-white/5 border border-white/10 text-white/70 rounded-lg text-sm hover:bg-white/10 transition-all"
                  >
                    Decline
                  </button>
                </div>
              </div>
              <button
                onClick={declineCookies}
                className="text-white/30 hover:text-white/60 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
