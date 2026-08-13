'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram, ArrowRight, MapPinIcon } from 'lucide-react'
import Link from 'next/link'

const quickLinks = [
  { title: 'Excavator Training', href: '/courses/excavator' },
  { title: 'Dump Truck Training', href: '/courses/dump-truck' },
  { title: 'Bulldozer Training', href: '/courses/bulldozer' },
  { title: 'Front-End Loader', href: '/courses/loader' },
  { title: 'Drill Rig Training', href: '/courses/drill-rig' },
  { title: 'Safety Officer Course', href: '/courses/safety' },
]

const companyLinks = [
  { title: 'About Us', href: '#about' },
  { title: 'Training Facility', href: '#facility' },
  { title: 'Our Team', href: '#team' },
  { title: 'Testimonials', href: '#testimonials' },
]

const legalLinks = [
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms of Service', href: '/terms' },
  { title: 'Cookie Policy', href: '/cookies' },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center">
                  <span className="font-display text-3xl text-industrial-black font-bold">M</span>
                </div>
                <div>
                  <span className="font-display text-base tracking-[0.15em] text-white block">MINING MACHINERY</span>
                  <span className="font-display text-base tracking-[0.15em] text-gold block">SOLUTIONS</span>
                </div>
              </div>
              <p className="text-white/50 mb-8 leading-relaxed font-light">
                Building the future of mining through world-class training and professional development. 
                South Africa's premier heavy machinery training institution.
              </p>
              <div className="flex gap-3">
                {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 bg-white/5 hover:bg-gold flex items-center justify-center rounded-xl transition-all duration-300 group"
                  >
                    <Icon size={18} className="text-white/60 group-hover:text-industrial-black transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display text-base tracking-[0.2em] text-gold mb-8">TRAINING COURSES</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-white/50 hover:text-gold transition-colors inline-flex items-center gap-2 group">
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base tracking-[0.2em] text-gold mb-8">COMPANY</h4>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-white/50 hover:text-gold transition-colors inline-flex items-center gap-2 group">
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base tracking-[0.2em] text-gold mb-8">CONTACT US</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPinIcon size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 font-light">
                      Industrial Area<br />
                      Middelburg, Mpumalanga<br />
                      South Africa, 1050
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <a href="tel:+27130000000" className="text-white/50 hover:text-gold transition-colors">+27 13 000 0000</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <a href="mailto:info@mmsolutions.co.za" className="text-white/50 hover:text-gold transition-colors">info@mmsolutions.co.za</a>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div className="text-white/50 font-light">
                    <p>Mon - Fri: 7:00 AM - 5:00 PM</p>
                    <p>Sat: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-t border-white/5 py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/30 text-sm font-light">
              © 2024 Mining Machinery Solutions. All rights reserved.
            </p>
            <div className="flex gap-8">
              {legalLinks.map((link) => (
                <a key={link.title} href={link.href} className="text-white/30 text-sm hover:text-gold transition-colors">
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}