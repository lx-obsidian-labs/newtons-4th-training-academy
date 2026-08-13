'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const navLinks = [
  {
    title: 'Courses',
    href: '#courses',
    children: [
      { title: 'Excavator Training', href: '/courses/excavator' },
      { title: 'Dump Truck Training', href: '/courses/dump-truck' },
      { title: 'Bulldozer Training', href: '/courses/bulldozer' },
      { title: 'Front-End Loader', href: '/courses/loader' },
      { title: 'Drill Rig Training', href: '/courses/drill-rig' },
      { title: 'Forklift Training', href: '/courses/forklift' },
      { title: 'Safety Officer Courses', href: '/courses/safety' },
    ]
  },
  { title: 'About', href: '#about' },
  { title: 'Facility', href: '#facility' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Contact', href: '#contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-blur-xl bg-black/90 border-b border-gold/10' : 'bg-transparent'
    }`}>
      <div className="hidden md:block bg-gradient-to-r from-[#0a0a0a] via-[#111111] to-[#0a0a0a] border-b border-white/5">
        <Container>
          <div className="flex justify-between items-center py-2.5 text-sm">
            <div className="flex items-center gap-8">
              <a href="tel:+27130000000" className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors">
                <Phone size={14} />
                <span>+27 13 000 0000</span>
              </a>
              <a href="mailto:info@mmsolutions.co.za" className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors">
                <Mail size={14} />
                <span>info@mmsolutions.co.za</span>
              </a>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-white/30">Middelburg, Mpumalanga</span>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-white/30">Mon - Fri: 7:00 AM - 5:00 PM</span>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <nav className="flex items-center justify-between py-5">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-gold/20 group-hover:shadow-gold/40 transition-shadow">
              <span className="font-display text-3xl text-black font-bold">M</span>
            </div>
            <div className="hidden lg:block">
              <span className="font-display text-sm tracking-[0.25em] text-white">MINING MACHINERY</span>
              <span className="font-display text-sm tracking-[0.25em] text-gold block">SOLUTIONS</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 hover:text-gold transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.title}
                  {link.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>
                {link.children && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 pt-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                  >
                    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-white/10 rounded-2xl p-5 min-w-[240px] shadow-2xl shadow-black/50">
                      {link.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block py-3 px-4 text-sm text-white/50 hover:text-gold hover:bg-gold/5 rounded-xl transition-colors"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm" className="hidden md:inline-flex shadow-lg shadow-gold/20">
              Enroll Now
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 bg-white/5 hover:bg-gold/20 rounded-xl transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} className="text-gold" /> : <Menu size={20} className="text-white" />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gradient-to-b from-[#111111] to-[#0a0a0a] border-t border-gold/10"
          >
            <Container className="py-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.title}>
                    <Link
                      href={link.href}
                      className="block py-4 text-lg font-medium text-white/70 hover:text-gold transition-colors border-b border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    {link.children && (
                      <div className="pl-6 flex flex-col gap-1 mt-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="py-2 text-white/40 hover:text-gold transition-colors text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button variant="primary" className="mt-6 w-full py-5">
                  Enroll Now
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}