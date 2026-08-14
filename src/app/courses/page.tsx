'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { courses } from '@/lib/courses'
import { Clock, Award, Users, ArrowRight, ChevronRight, Star, Search, Filter } from 'lucide-react'
import Link from 'next/link'

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(courses.map((c) => c.category)))

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? course.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  const featuredCourses = filteredCourses.filter((c) => c.featured)
  const otherCourses = filteredCourses.filter((c) => !c.featured)

  return (
    <main className="min-h-screen bg-[#111111]">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#111]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 blur-[150px] rounded-full" />

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <Star className="text-gold w-4 h-4" />
              <span className="text-gold text-sm font-semibold tracking-wide">Training Programs</span>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <Link href="/" className="text-white/40 hover:text-gold transition-colors text-sm">
                Home
              </Link>
              <ChevronRight className="text-white/20 w-4 h-4" />
              <span className="text-gold font-medium">All Courses</span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-[80px] text-white mb-6 leading-[0.9] tracking-tight">
              INDUSTRY-LEADING
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">
                COURSES
              </span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8" />

            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Comprehensive training programs designed to launch your career in the mining industry.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#111111] border-y border-white/5">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#0d0d0d] to-[#111111]">
        <Container>
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-gold text-industrial-black'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              All Courses
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gold text-industrial-black'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-white/50 text-lg">No courses found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...featuredCourses, ...otherCourses].map((course, index) => (
                <motion.div
                  key={course.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div
                    className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                      course.featured
                        ? 'bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border-2 border-gold/30'
                        : 'bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-gold/30'
                    }`}
                  >
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
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="gold">{course.category}</Badge>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>

                      <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold transition-colors">
                        {course.title}
                      </h3>

                      <p className="text-white/50 text-sm mb-4 line-clamp-2 leading-relaxed font-light">
                        {course.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-4 mb-6 text-sm">
                        <span className="flex items-center gap-2 text-white/40">
                          <Clock size={14} className="text-gold" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-2 text-white/40">
                          <Award size={14} className="text-gold" />
                          {course.certification}
                        </span>
                        <span className="flex items-center gap-2 text-white/40">
                          <Users size={14} className="text-gold" />
                          {course.level}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div>
                          <span className="font-display text-2xl text-gold">R{course.price.toLocaleString()}</span>
                        </div>
                        <Link
                          href={`/courses/${course.slug}`}
                          className="group/btn flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all"
                        >
                          <span>Learn More</span>
                          <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="py-24 bg-[#111111]">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <Award className="text-gold w-4 h-4" />
              <span className="text-gold text-sm font-semibold tracking-wide">Ready to Begin</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
              START YOUR MINING CAREER
            </h2>
            <p className="text-xl text-white/50 font-light mb-10 max-w-2xl mx-auto">
              Join hundreds of graduates who have built successful careers with Newton&apos;s 4th Training Academy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enroll">
                <Button variant="primary" size="lg">
                  Enroll Now
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="secondary" size="lg">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
