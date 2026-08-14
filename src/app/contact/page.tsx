'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { 
  MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle,
  MessageSquare, Users, Building
} from 'lucide-react'
import Link from 'next/link'

const contactInfo = [
  { icon: MapPin, title: 'Visit Us', details: ['23 Walter Sisulu Street', 'Middelburg, Mpumalanga', 'South Africa, 1050'] },
  { icon: Phone, title: 'Call Us', details: ['071 801 0408 (WhatsApp)', '013 170 5575 (Office)'] },
  { icon: Mail, title: 'Email Us', details: ['info@newtons4th.co.za'] },
  { icon: Clock, title: 'Office Hours', details: ['Mon - Fri: 7:00 AM - 5:00 PM', 'Saturday: 8:00 AM - 12:00 PM', 'Sunday: Closed'] },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#111111]">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#111]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 blur-[150px] rounded-full" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <MessageSquare className="text-gold w-4 h-4" />
              <span className="text-gold text-sm font-semibold tracking-wide">Contact Us</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl lg:text-[80px] text-white mb-6 leading-[0.9] tracking-tight">
              GET IN
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">
                TOUCH
              </span>
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8" />
            
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Have questions about our courses? Ready to enroll? We&apos;re here to help you 
              take the next step in your career.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[#141414] rounded-2xl border border-white/5 hover:border-gold/20 transition-colors text-center"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-lg text-white mb-3">{info.title}</h3>
                {info.details.map((detail, j) => (
                  <p key={j} className="text-white/50 text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-[#111111]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <Badge variant="gold" className="mb-6">Send a Message</Badge>
              <h2 className="font-display text-4xl text-white mb-6">WE&apos;D LOVE TO HEAR FROM YOU</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 bg-gradient-to-br from-gold/20 to-gold/5 rounded-3xl border border-gold/30 text-center"
                >
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-4">MESSAGE SENT!</h3>
                  <p className="text-white/50 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                    className="px-6 py-3 bg-white/5 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-white/50 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-white/50 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-2">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="enrollment">Course Enrollment</option>
                        <option value="info">Course Information</option>
                        <option value="pricing">Pricing Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/50 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#141414] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <Badge variant="gold" className="mb-6">Find Us</Badge>
              <h2 className="font-display text-4xl text-white mb-6">OUR LOCATION</h2>
              
              <div className="rounded-2xl overflow-hidden border border-white/10 h-[400px] mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.5!2d29.45!3d-25.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ2JzEyLjAiUyAyOcKwMjcnMDAuMCJF!5e0!3m2!1sen!2sza!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-6 bg-[#141414] rounded-2xl border border-white/5">
                <h3 className="font-display text-xl text-white mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+27718010408" className="flex items-center gap-4 text-white/50 hover:text-gold transition-colors">
                    <Phone size={18} className="text-gold" />
                    <span>071 801 0408</span>
                  </a>
                  <a href="mailto:info@newtons4th.co.za" className="flex items-center gap-4 text-white/50 hover:text-gold transition-colors">
                    <Mail size={18} className="text-gold" />
                    <span>info@newtons4th.co.za</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
