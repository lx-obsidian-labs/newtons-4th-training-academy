'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ChevronRight, Play, Award, Users, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react'

const stats = [
  { value: '2,500+', label: 'Students Trained', icon: Users },
  { value: '98%', label: 'Success Rate', icon: TrendingUp },
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '100%', label: 'Industry Certified', icon: Shield },
]

const features = [
  { icon: Zap, title: 'Hands-On Training', description: 'Real machinery, real experience. No simulations, just practical excellence.' },
  { icon: Award, title: 'Nationally Accredited', description: 'SAQA accredited courses recognized across the mining industry.' },
  { icon: Shield, title: 'Safety First', description: 'Comprehensive safety protocols and industry-leading standards.' }
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" 
          alt="Mining machinery operation" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a]/95 to-[#111111]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent" />
      </div>

      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-gold/40 rounded-full" />
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-gold/30 rounded-full" />
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-gold/20 rounded-full" />

      <Container className="relative z-10 pt-40 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gold/10 border border-gold/20 rounded-full">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="font-display text-sm tracking-[0.3em] text-gold uppercase">MMS - Mining Machinery Solutions</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold text-lg md:text-xl tracking-[0.4em] uppercase mb-6 font-light">South Africa's Premier</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-6xl md:text-8xl lg:text-[100px] text-white mb-4 leading-[0.85]"
          >
            HEAVY MACHINERY
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">TRAINING</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/50 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Transform your future with industry-leading training programs. 
            <span className="text-gold"> Master excavators, dump trucks, bulldozers</span> and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="/enroll" className="px-12 py-5 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl hover:shadow-xl hover:shadow-gold/20 transition-all text-lg flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-2 transition-transform ml-2" size={20} />
            </a>
            <a href="#courses" className="px-12 py-5 border-2 border-gold text-gold rounded-xl hover:bg-gold hover:text-black transition-all text-lg flex items-center gap-2">
              <Play size={20} />
              View Courses
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl mb-6 group-hover:from-gold/30 group-hover:to-gold/10 transition-all border border-gold/10 group-hover:border-gold/30">
                <stat.icon size={32} className="text-gold" />
              </div>
              <div className="font-display text-4xl md:text-5xl text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#111111] to-transparent" />
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-full">
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold/10 rounded-full blur-[80px]" />
      </div>
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2">
        <div className="absolute bottom-0 right-10 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#111111] to-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Why Choose MMS</p>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">EXCELLENCE IN TRAINING</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative p-8 md:p-10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-3xl border border-white/5 group-hover:border-gold/20 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mb-8 group-hover:from-gold/30 group-hover:to-gold/10 transition-all border border-gold/10 group-hover:border-gold/30">
                  <feature.icon size={32} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl text-white mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed font-light">{feature.description}</p>
                
                <div className="mt-6 pt-6 border-t border-white/5">
                  <span className="text-gold text-sm uppercase tracking-wider group-hover:tracking-[0.2em] transition-all duration-300">Learn More →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}