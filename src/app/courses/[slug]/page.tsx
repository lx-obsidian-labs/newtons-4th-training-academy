import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { courses, getCourseBySlug } from '@/lib/courses'
import { notFound } from 'next/navigation'
import { CheckCircle, Clock, Award, Users, ArrowRight, Calendar, FileText, Target } from 'lucide-react'
import Link from 'next/link'

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug)
  
  if (!course) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-industrial-charcoal to-industrial-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="gold">{course.category}</Badge>
                {course.featured && <Badge variant="outline">Popular</Badge>}
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                {course.title}
              </h1>
              
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                {course.shortDescription}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-white/50">
                  <Clock size={18} className="text-gold" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <Award size={18} className="text-gold" />
                  <span>{course.certification}</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <Users size={18} className="text-gold" />
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-display text-4xl text-gold">R{course.price.toLocaleString()}</span>
                <span className="text-white/40">per course</span>
              </div>

              <div className="flex gap-4">
                <Button variant="primary" size="lg" className="group">
                  Enroll Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button variant="secondary" size="lg">
                  Download Syllabus
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/50 to-transparent rounded-xl" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-industrial-charcoal">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl text-white mb-6">Course Overview</h2>
              <p className="text-white/60 leading-relaxed mb-12">
                {course.description}
              </p>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-white mb-6">Curriculum</h2>
                <div className="space-y-6">
                  {course.curriculum.map((section, index) => (
                    <div key={index} className="bg-industrial-steel rounded-lg p-6 border border-white/5">
                      <h3 className="font-display text-xl text-gold mb-4">Module {index + 1}: {section.title}</h3>
                      <ul className="space-y-3">
                        {section.lessons.map((lesson, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                            <span className="text-white/70">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-industrial-steel rounded-xl p-6 border border-white/5 sticky top-32">
                <h3 className="font-display text-xl text-white mb-6">What You Get</h3>
                
                <div className="space-y-4 mb-8">
                  {course.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-gold flex-shrink-0" />
                      <span className="text-white/70 text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={18} className="text-gold" />
                    <span className="text-white/70">Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <FileText size={18} className="text-gold" />
                    <span className="text-white/70">Certification: {course.certification}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target size={18} className="text-gold" />
                    <span className="text-white/70">Level: {course.level}</span>
                  </div>
                </div>

                <div className="text-3xl font-display text-gold mb-4">R{course.price.toLocaleString()}</div>
                
                <Button variant="primary" className="w-full">
                  Enroll in This Course
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-industrial-black border-t border-white/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-2xl text-white mb-6">Entry Requirements</h3>
              <ul className="space-y-3">
                {course.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl text-white mb-6">Career Paths</h3>
              <div className="flex flex-wrap gap-2">
                {course.careerPaths.map((path, i) => (
                  <span key={i} className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm">
                    {path}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gold">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl text-industrial-black mb-6">
              READY TO START YOUR TRAINING?
            </h2>
            <p className="text-xl text-industrial-black/70 mb-10 max-w-2xl mx-auto">
              Join hundreds of successful graduates who have built careers in the mining industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-industrial-black text-gold border-none hover:bg-industrial-charcoal"
              >
                Enroll Now
                <ArrowRight size={20} />
              </Button>
              <Link href="/">
                <button className="bg-transparent text-industrial-black font-semibold px-10 py-5 rounded hover:bg-industrial-black/10 transition-colors border-2 border-industrial-black/20">
                  View All Courses
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