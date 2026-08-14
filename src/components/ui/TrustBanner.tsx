'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react'

const trustSignals = [
  { icon: Shield, text: 'MQA Accredited', subtext: 'Official Certification' },
  { icon: Award, text: '94% Pass Rate', subtext: 'Industry Leading' },
  { icon: Users, text: '2,500+ Graduates', subtext: 'Successful Careers' },
  { icon: Clock, text: '10+ Years', subtext: 'Training Excellence' },
  { icon: CheckCircle, text: 'Job Placement', subtext: '78% Employment Rate' },
  { icon: Star, text: '4.9/5 Rating', subtext: 'Student Reviews' },
]

export function TrustBanner() {
  return (
    <section className="py-8 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      <div className="flex items-center gap-12 animate-scroll">
        {[...trustSignals, ...trustSignals].map((signal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <signal.icon size={18} className="text-gold" />
            <div>
              <span className="text-white/80 text-sm font-medium">{signal.text}</span>
              <span className="text-white/30 text-xs block">{signal.subtext}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
