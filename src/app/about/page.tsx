'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { 
  Award, Users, Target, Heart, Shield, CheckCircle, 
  ChevronRight, MapPin, Phone, Mail, Clock, Star,
  Building, BookOpen, TrendingUp
} from 'lucide-react'
import Link from 'next/link'

const stats = [
  { value: '2,500+', label: 'Students Trained', icon: Users },
  { value: '15+', label: 'Courses Offered', icon: BookOpen },
  { value: '10+', label: 'Years Experience', icon: Award },
  { value: '94%', label: 'Success Rate', icon: TrendingUp },
]

const values = [
  { icon: Shield, title: 'Safety First', description: 'Every course begins and ends with safety. We instill best practices that protect you and your colleagues on every job site.' },
  { icon: Heart, title: 'Student-Centered', description: 'Small class sizes, dedicated instructors, and personalized support ensure every student gets the attention they deserve.' },
  { icon: Target, title: 'Industry Focused', description: 'Our curriculum is designed with input from mining and construction companies to ensure graduates are job-ready.' },
  { icon: Award, title: 'Excellence', description: 'MQA accredited training that meets the highest industry standards. We don\'t just train operators — we build careers.' },
]

const team = [
  { name: 'Johan van der Merwe', role: 'Founder & Director', bio: 'Over 20 years in mining operations and training. Former operations manager at Anglo American.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
  { name: 'Sarah Nkosi', role: 'Head of Training', bio: 'Certified trainer with 15 years of experience in heavy equipment operation and safety.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face' },
  { name: 'Pieter Botha', role: 'Lead Instructor', bio: 'Specializes in excavator and TLB training. Former operator at BHP Billiton.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
  { name: 'Thandi Mokoena', role: 'Student Success Manager', bio: 'Dedicated to helping students transition from training to employment.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face' },
]

const timeline = [
  { year: '2014', title: 'Founded', description: 'Newton\'s 4th Training Academy established in Middelburg, Mpumalanga.' },
  { year: '2016', title: 'MQA Accreditation', description: 'Received full accreditation from the Mining Qualifications Authority.' },
  { year: '2018', title: 'Expansion', description: 'Expanded facilities and added 8 new courses including crane and underground training.' },
  { year: '2020', title: 'Digital Learning', description: 'Introduced online theory modules and simulator training.' },
  { year: '2023', title: '2000th Graduate', description: 'Celebrated training our 2000th graduate with a 94% job placement rate.' },
  { year: '2024', title: 'Innovation', description: 'Launched advanced simulator program and partnerships with major mining companies.' },
]

export default function AboutPage() {
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
              <Star className="text-gold w-4 h-4" />
              <span className="text-gold text-sm font-semibold tracking-wide">About Us</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl lg:text-[80px] text-white mb-6 leading-[0.9] tracking-tight">
              BUILDING FUTURES
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">
                SINCE 2014
              </span>
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8" />
            
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Newton&apos;s 4th Training Academy is Mpumalanga&apos;s premier heavy equipment training institution, 
              producing job-ready operators for the mining and construction industries.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-gold" />
                </div>
                <div className="font-display text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#111111]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="gold" className="mb-6">Our Mission</Badge>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                TRANSFORMING LIVES THROUGH SKILLS DEVELOPMENT
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We believe that quality skills training is the key to unlocking opportunities in South Africa&apos;s 
                mining and construction sectors. Our mission is to provide accessible, industry-relevant training 
                that empowers individuals to build successful careers.
              </p>
              <p className="text-white/60 leading-relaxed">
                Through hands-on training with modern equipment, experienced instructors, and strong industry 
                partnerships, we prepare our graduates to be productive from day one on the job.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                alt="Training facility"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0a0a0a]">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="gold" className="mb-6">Our Values</Badge>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">WHAT WE STAND FOR</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#141414] rounded-2xl border border-white/5 hover:border-gold/20 transition-colors"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl text-white mb-3">{value.title}</h3>
                <p className="text-white/50 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#111111]">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="gold" className="mb-6">Our Journey</Badge>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">MILESTONES</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto" />
          </div>
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg text-gold">{item.year}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 h-full bg-gold/20 mt-4" />}
                </div>
                <div className="pt-4">
                  <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-white/50">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#0a0a0a]">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="gold" className="mb-6">Our Team</Badge>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">MEET THE EXPERTS</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <h3 className="font-display text-xl text-white mb-1">{member.name}</h3>
                <p className="text-gold text-sm mb-3">{member.role}</p>
                <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl text-[#111111] mb-6">
              READY TO START YOUR JOURNEY?
            </h2>
            <p className="text-xl text-[#111111]/70 mb-10 max-w-2xl mx-auto">
              Join thousands of successful graduates who have built careers with Newton&apos;s 4th Training Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enroll">
                <button className="px-10 py-5 bg-[#111111] text-gold font-semibold rounded-xl hover:bg-[#1a1a1a] transition-colors">
                  Enroll Now
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-transparent text-[#111111] font-semibold px-10 py-5 rounded-xl hover:bg-[#111111]/10 transition-colors border-2 border-[#111111]/20">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
