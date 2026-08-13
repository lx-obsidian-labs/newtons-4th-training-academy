'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { CheckCircle, ArrowRight, Loader2, Shield, Award, Users, Clock } from 'lucide-react'

const courseOptions = [
  { value: '', label: 'Select a course' },
  { value: 'excavator', label: 'Excavator Operator Training' },
  { value: 'dump-truck', label: 'Dump Truck Operator Training' },
  { value: 'bulldozer', label: 'Bulldozer Training' },
  { value: 'loader', label: 'Front-End Loader Training' },
  { value: 'drill-rig', label: 'Drill Rig Operator Training' },
  { value: 'forklift', label: 'Forklift Training' },
  { value: 'safety', label: 'Safety Officer Course' },
]

const educationOptions = [
  { value: '', label: 'Highest education level' },
  { value: 'grade-10', label: 'Grade 10' },
  { value: 'grade-11', label: 'Grade 11' },
  { value: 'grade-12', label: 'Grade 12 / Matric' },
  { value: 'tertiary', label: 'Tertiary Education' },
]

const benefits = [
  { icon: Shield, text: 'SAQA accredited training programs' },
  { icon: Award, text: 'Industry-recognized certifications' },
  { icon: Users, text: 'Job placement assistance' },
  { icon: Clock, text: 'Flexible payment options' },
]

export function EnrollmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="enroll" className="py-32 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-gold via-gold/50 to-transparent rounded-full" />
            
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-8">
              <CheckCircle size={14} className="text-gold" />
              <span className="text-gold text-sm font-medium">Enroll Today</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
              START YOUR<br />
              <span className="text-gradient-gold">MINING CAREER</span><br />
              NOW
            </h2>
            
            <p className="text-xl text-white/50 mb-10 leading-relaxed font-light">
              Take the first step toward a rewarding career in the mining industry. 
              Our team will contact you within 24 hours to discuss your training options.
            </p>

            <div className="space-y-4">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <span className="text-white/70 text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="relative p-10 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-3xl border-2 border-gold/30 text-center">
                <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle size={48} className="text-gold" />
                </div>
                <h3 className="font-display text-3xl text-white mb-4">ENROLLMENT RECEIVED</h3>
                <p className="text-white/50 mb-8 leading-relaxed">
                  Thank you for your interest! Our admissions team will contact you within 24 hours 
                  to discuss your training options and next steps.
                </p>
                <Button variant="secondary" onClick={() => setIsSubmitted(false)} className="px-8">
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative p-8 md:p-10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl border border-white/10">
                <h3 className="font-display text-2xl text-white mb-8">REQUEST INFORMATION</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="First Name" placeholder="Enter your first name" required />
                    <Input label="Last Name" placeholder="Enter your last name" required />
                  </div>
                  
                  <Input label="Email Address" type="email" placeholder="your.email@example.com" required />
                  
                  <Input label="Phone Number" type="tel" placeholder="+27 XX XXX XXXX" required />
                  
                  <Select label="Course Interest" options={courseOptions} required />
                  
                  <Select label="Education Level" options={educationOptions} />
                  
                  <div className="pt-4">
                    <Button type="submit" variant="primary" size="lg" className="w-full px-8 py-5" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={20} />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight className="ml-2" size={20} />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <p className="text-xs text-white/30 text-center">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}