'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ArrowRight, Clock, Award, Users, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'

const courses = [
  { 
    title: 'Excavator Operator', 
    description: 'Master the art of excavator operation with comprehensive hands-on training covering digging, loading, and material handling.', 
    duration: '4-6 weeks', 
    price: 'R12,500', 
    students: '450+', 
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
    featured: true 
  },
  { 
    title: 'Dump Truck Operator', 
    description: 'Learn heavy-duty haul truck operations, site safety, and efficient material transport for mining operations.', 
    duration: '3-4 weeks', 
    price: 'R9,800', 
    students: '520+', 
    image: 'https://images.unsplash.com/photo-1578645392373-5215d1ba4d32?w=600&h=400&fit=crop',
    featured: false 
  },
  { 
    title: 'Bulldozer Training', 
    description: 'Develop skills in earthmoving, grading, and site preparation using modern bulldozer equipment.', 
    duration: '4-5 weeks', 
    price: 'R11,200', 
    students: '380+', 
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop',
    featured: false 
  },
  { 
    title: 'Front-End Loader', 
    description: 'Gain proficiency in loading operations, material handling, and efficient loader management.', 
    duration: '3-4 weeks', 
    price: 'R10,500', 
    students: '290+', 
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
    featured: false 
  },
  { 
    title: 'Drill Rig Operator', 
    description: 'Comprehensive drilling techniques for mining exploration and production drilling operations.', 
    duration: '5-6 weeks', 
    price: 'R14,500', 
    students: '180+', 
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
    featured: false 
  },
  { 
    title: 'Safety Officer Course', 
    description: 'Occupational health and safety certification for mining and industrial environments.', 
    duration: '2-3 weeks', 
    price: 'R8,500', 
    students: '350+', 
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
    featured: false 
  },
]

export function Courses() {
  return (
    <section id="courses" className="py-32 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <Star size={14} className="text-gold" />
            <span className="text-gold text-sm font-medium">Training Programs</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-6">INDUSTRY-LEADING COURSES</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold mx-auto mb-8" />
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            Comprehensive training programs designed to launch your career in the mining industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                course.featured 
                  ? 'bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border-2 border-gold/30' 
                  : 'bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-gold/30'
              }`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                  {course.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold text-black text-xs font-bold uppercase tracking-wider rounded-full">
                        <Star size={12} className="fill-current" /> Most Popular
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className="font-display text-2xl text-white drop-shadow-lg">{course.title.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="font-display text-2xl text-white mb-4 tracking-wide group-hover:text-gold transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-white/50 mb-6 leading-relaxed font-light line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="inline-flex items-center gap-2 text-sm text-white/40">
                      <Clock size={14} className="text-gold" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm text-white/40">
                      <Users size={14} className="text-gold" />
                      {course.students} Students
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <span className="font-display text-3xl text-gold">{course.price}</span>
                    </div>
                    <Link href={`/courses/${course.title.toLowerCase().replace(' ', '-')}`} className="group/btn flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all">
                      <span>Learn More</span>
                      <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
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
          <Link href="/courses" className="inline-flex items-center gap-2 px-12 py-5 border-2 border-gold text-gold font-semibold rounded-xl hover:bg-gold hover:text-black transition-all text-lg">
            View All Courses
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}