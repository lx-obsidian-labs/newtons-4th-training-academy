'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Star, Quote, ChevronLeft, ChevronRight, Award, Play } from 'lucide-react'

const testimonials = [
  { name: 'Thabo Mkhize', role: 'Excavator Operator', company: 'Anglo American', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', rating: 5, quote: 'MMS transformed my life. From being unemployed to operating heavy machinery at one of South Africa\'s largest mining companies. The hands-on training was exceptional.', course: 'Excavator Operator Course', yearsEmployed: 'Employed for 2 years' },
  { name: 'Nokuthula Dlamini', role: 'Safety Officer', company: 'BHP Billiton', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face', rating: 5, quote: 'The safety officer course opened doors I never knew existed. The instructors are industry veterans who genuinely care about your success.', course: 'Safety Officer Certification', yearsEmployed: 'Employed for 3 years' },
  { name: 'Sipho Ngcobo', role: 'Dump Truck Operator', company: 'Sibanye-Stillwater', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face', rating: 5, quote: 'I was skeptical at first, but the practical training exceeded my expectations. Within weeks of completing my course, I had job offers from major mining companies.', course: 'Dump Truck Operator Training', yearsEmployed: 'Employed for 1.5 years' },
  { name: 'Lindile Zwane', role: 'Front-End Loader Operator', company: 'Implats', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face', rating: 5, quote: 'The equipment is modern and the training is comprehensive. MMS doesn\'t just teach you to operate machinery - they teach you to be a professional.', course: 'Front-End Loader Training', yearsEmployed: 'Employed for 1 year' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-[#0d0d0d] to-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <Award size={14} className="text-gold" />
            <span className="text-gold text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-6">GRADUATE SUCCESS</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold mx-auto mb-8" />
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            Hear from our graduates who have built successful careers in the mining industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-gold/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />
                <Quote className="absolute top-6 right-6 w-16 h-16 text-gold/10" />
                
                <div className="relative flex items-center gap-5 mb-8">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-gold/30 group-hover:border-gold transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                      <Star size={12} className="text-black fill-current" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl text-white mb-1">{testimonial.name}</h4>
                    <p className="text-gold font-medium">{testimonial.role}</p>
                    <p className="text-white/40 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold fill-gold" />
                  ))}
                </div>

                <p className="text-lg text-white/70 leading-relaxed font-light mb-8">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white/40">Completed:</span>
                    <span className="text-sm text-gold font-medium">{testimonial.course}</span>
                  </div>
                  <span className="text-xs text-white/30">{testimonial.yearsEmployed}</span>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 rounded-3xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center">
                <Play size={32} className="text-gold ml-1" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-white mb-2">Watch Student Testimonials</h3>
                <p className="text-white/50">See how MMS changed the lives of our graduates</p>
              </div>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all">
              Watch Videos
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}