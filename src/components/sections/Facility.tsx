'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Play, Building, Users, Award, ExternalLink } from 'lucide-react'

const facilities = [
  { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop', title: 'Heavy Equipment Yard', description: 'Dedicated practical training yard with real mining machinery' },
  { image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop', title: 'Modern Classrooms', description: 'Air-conditioned learning spaces with latest technology' },
  { image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop', title: 'Service Workshop', description: 'Full maintenance and repair facilities for training' },
  { image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop', title: 'Training Simulators', description: '777 rigid dump truck simulator training for practice' },
]

const certifications = [
  'MQA Accredited Training Provider',
  'Accredited Operator Training Courses',
  'Mining & Construction Short Courses',
  'Practical Hands-On Training',
  'Witbank & Middelburg Locations',
]

const stats = [
  { value: '2', label: 'Training Locations', icon: Building },
  { value: '777', label: 'Simulator Training', icon: Users },
  { value: '3-Month', label: 'Extended Training Options', icon: Award },
]

export function Facility() {
  return (
    <section id="facility" className="py-32 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <Play size={14} className="text-gold" />
            <span className="text-gold text-sm font-medium">Our Training Center</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-6">WORLD-CLASS FACILITIES</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold mx-auto mb-8" />
          <p className="text-xl text-white/50 max-w-3xl mx-auto font-light">
            Located in the heart of the Mpumalanga mining region, our training center 
            features state-of-the-art equipment and world-class facilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl text-white mb-2">{facility.title}</h3>
                  <p className="text-white/50 text-sm">{facility.description}</p>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink size={16} className="text-gold" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon size={28} className="text-gold" />
              </div>
              <div className="font-display text-4xl text-white mb-2">{stat.value}</div>
              <div className="text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/20 rounded-3xl p-10 md:p-16"
        >
          <h3 className="font-display text-3xl text-white mb-10 text-center">Accreditations & Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-gold/30 transition-colors">
                <CheckCircle size={16} className="text-gold" />
                <span className="text-white/70 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-[#111111] to-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-gold via-gold/50 to-transparent rounded-full" />
            
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-8">
              <MapPin size={14} className="text-gold" />
              <span className="text-gold text-sm font-medium">Get In Touch</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
              VISIT OUR<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">CAMPUS</span>
            </h2>
            
            <div className="relative rounded-3xl overflow-hidden mb-10 h-64">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop" 
                alt="Newton's 4th Training Center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111]/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Newton&apos;s 4th Training Center</p>
                    <p className="text-white/60 text-sm">Middelburg, Mpumalanga</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-white mb-2">Phone</h4>
                  <a href="tel:+27718010408" className="text-white/50 hover:text-gold transition-colors font-light">071 801 0408</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-white mb-2">Email</h4>
                  <a href="mailto:info@newtons4th.co.za" className="text-white/50 hover:text-gold transition-colors font-light">info@newtons4th.co.za</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Clock size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-white mb-2">Office Hours</h4>
                  <p className="text-white/50 font-light">
                    Monday - Friday: 7:00 AM - 5:00 PM<br />
                    Saturday: 8:00 AM - 12:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="p-8 md:p-10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl border border-white/10">
              <h3 className="font-display text-2xl text-white mb-8">Send us a message</h3>
              
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                />
                
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                />
                
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                />
                
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-bold px-8 py-5 rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}