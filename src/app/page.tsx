'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { BackToTop } from '@/components/ui/BackToTop'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { Target, Users, Building, Award, ArrowRight, Phone, Shield, Award as AwardIcon, Users as UsersIcon, Clock } from 'lucide-react'
import Link from 'next/link'

const HeroSection = dynamic(() => import('@/components/sections/Hero').then(m => m.Hero), { ssr: false })
const FeaturesSection = dynamic(() => import('@/components/sections/Hero').then(m => m.Features), { ssr: false })
const CoursesSection = dynamic(() => import('@/components/sections/Courses').then(m => m.Courses), { ssr: false })
const TestimonialsSection = dynamic(() => import('@/components/sections/Testimonials').then(m => m.Testimonials), { ssr: false })
const FacilitySection = dynamic(() => import('@/components/sections/Facility').then(m => m.Facility), { ssr: false })
const EnrollmentFormSection = dynamic(() => import('@/components/sections/EnrollmentForm').then(m => m.EnrollmentForm), { ssr: false })
const ContactSection = dynamic(() => import('@/components/sections/Facility').then(m => m.Contact), { ssr: false })
const HeaderComponent = dynamic(() => import('@/components/layout/Header').then(m => m.Header), { ssr: false })
const FooterComponent = dynamic(() => import('@/components/layout/Footer').then(m => m.Footer), { ssr: false })

const employers = ['Anglo American', 'BHP Billiton', 'Sibanye-Stillwater', 'Implats', 'Glencore', 'De Beers', 'Rio Tinto', 'South32']

const processSteps = [
  { number: '01', title: 'Apply Online', description: 'Complete our simple online application form to get started.', icon: Target },
  { number: '02', title: 'Consultation', description: 'Our admissions team will contact you within 24 hours.', icon: Users },
  { number: '03', title: 'Enrollment', description: 'Secure your spot and arrange payment options.', icon: Building },
  { number: '04', title: 'Training', description: 'Begin your hands-on training journey with expert instructors.', icon: Award },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <HeaderComponent />
      <HeroSection />
      <FeaturesSection />
      
      <section id="enroll-now" className="py-16 bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] border-y border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <Badge variant="gold" className="mb-4">Limited Spots Available</Badge>
              <h3 className="font-display text-3xl md:text-4xl text-white mb-2">READY TO START YOUR MINING CAREER?</h3>
              <p className="text-white/60">Enroll today and transform your future in the mining industry.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/enroll">
                <button className="px-12 py-6 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl hover:shadow-xl hover:shadow-gold/20 transition-all text-lg flex items-center gap-2">
                  Enroll Now
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </Link>
              <button className="px-10 py-6 border-2 border-gold text-gold rounded-xl hover:bg-gold hover:text-black transition-all text-lg flex items-center gap-2">
                <Phone size={18} />
                Call Us Now
              </button>
            </div>
          </div>
        </Container>
      </section>
      
      <CoursesSection />
      
      <section className="py-32 bg-gradient-to-b from-[#0d0d0d] to-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <AwardIcon size={14} className="text-gold" />
              <span className="text-gold text-sm font-medium">Simple Process</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-white mb-6">YOUR PATH TO SUCCESS</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl border border-white/10 hover:border-gold/30 transition-all duration-500">
                  <div className="font-display text-8xl text-white/5 absolute top-4 right-4">{step.number}</div>
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-gold/20 group-hover:to-gold/10 transition-all">
                    <step.icon size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">{step.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/enroll">
              <button className="px-14 py-6 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl hover:shadow-xl hover:shadow-gold/20 transition-all text-lg">
                Start Your Enrollment
              </button>
            </Link>
          </motion.div>
        </Container>
      </section>

      <section className="py-24 bg-[#111111] border-y border-white/5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-white/30 text-sm uppercase tracking-[0.3em] mb-4">Trusted By Industry Leaders</p>
            <p className="text-white/40 text-sm uppercase tracking-wider">Our graduates are employed by</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {employers.map((company) => (
              <motion.span
                key={company}
                whileHover={{ scale: 1.05 }}
                className="font-display text-xl md:text-2xl text-white/15 hover:text-gold/60 transition-colors cursor-pointer"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection />
      <FacilitySection />
      <EnrollmentFormSection />
      <ContactSection />

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=60" 
            alt="Mining machinery" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] opacity-90" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.9]">
              READY TO BUILD<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">YOUR FUTURE?</span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold mx-auto mb-10" />
            
            <p className="text-xl text-white/50 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              Join our graduates who have launched their careers in the mining and 
              construction industries with Newton&apos;s 4th Training Academy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/enroll">
                <button className="px-14 py-6 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl hover:shadow-xl hover:shadow-gold/20 transition-all text-lg">
                  Enroll Now
                </button>
              </Link>
              <button className="px-12 py-5 border-2 border-white/20 text-white rounded-xl hover:border-gold hover:text-gold transition-all">
                Schedule Campus Tour
              </button>
            </div>

            <div className="mt-16 flex items-center justify-center gap-8 text-white/30 text-sm flex-wrap">
              <span className="flex items-center gap-2"><Shield size={16} className="text-gold" /> MQA Accredited</span>
              <span className="flex items-center gap-2"><AwardIcon size={16} className="text-gold" /> Mining & Construction Courses</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-gold" /> Middelburg & Witbank</span>
              <span className="flex items-center gap-2"><UsersIcon size={16} className="text-gold" /> Practical Job-Ready Training</span>
            </div>
          </motion.div>
        </Container>
      </section>

      <FooterComponent />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </main>
  )
}