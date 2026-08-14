'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { ChevronDown, HelpCircle, MessageSquare, Phone } from 'lucide-react'
import Link from 'next/link'

const faqCategories = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Newton\'s 4th Training Academy?',
        a: 'Newton\'s 4th Training Academy is a MQA-accredited heavy equipment training institution located in Middelburg, Mpumalanga. We offer practical, industry-focused training for mining and construction equipment operators.'
      },
      {
        q: 'Is the academy accredited?',
        a: 'Yes, we are fully accredited by the Mining Qualifications Authority (MQA). All our courses meet industry standards and our certifications are recognized by major mining and construction companies across South Africa.'
      },
      {
        q: 'Where are you located?',
        a: 'We are located at 23 Walter Sisulu Street, Middelburg 1050, Mpumalanga, South Africa. We also have training facilities in Witbank (eMalahleni).'
      },
      {
        q: 'What are your operating hours?',
        a: 'Our office is open Monday to Friday from 7:00 AM to 5:00 PM, and Saturday from 8:00 AM to 12:00 PM. Training sessions may run outside these hours depending on the course schedule.'
      }
    ]
  },
  {
    category: 'Courses',
    questions: [
      {
        q: 'How many courses do you offer?',
        a: 'We offer over 15 different courses covering heavy equipment operation (excavators, TLBs, dump trucks, bulldozers, loaders), specialized equipment (drill rigs, cranes, forklifts), and safety officer certification.'
      },
      {
        q: 'How long do courses take?',
        a: 'Course durations vary from 2 to 6 weeks depending on the equipment type and level of training. Most operator courses run 3-4 weeks, while specialized courses like drill rig and crane operation can take 4-6 weeks.'
      },
      {
        q: 'Do I need prior experience?',
        a: 'No prior experience is required for most of our beginner courses. We start from the basics and build up to advanced techniques. Some intermediate and advanced courses may require basic equipment knowledge.'
      },
      {
        q: 'What will I learn?',
        a: 'Each course covers safety fundamentals, machine operations, practical skills, and site operations. You\'ll get hands-on training with real equipment under the guidance of experienced instructors.'
      },
      {
        q: 'Do you offer online courses?',
        a: 'We offer a blended learning approach with online theory modules that you can complete before your practical training sessions. This allows you to learn at your own pace before hands-on training.'
      }
    ]
  },
  {
    category: 'Enrollment & Fees',
    questions: [
      {
        q: 'How do I enroll?',
        a: 'You can enroll online through our website, call us at 071 801 0408, or visit our offices in Middelburg. The enrollment process takes about 5 minutes and our team will contact you within 24 hours.'
      },
      {
        q: 'What are the course fees?',
        a: 'Course fees range from R7,500 to R16,500 depending on the course. You can view specific pricing on each course page. We also offer flexible payment options.'
      },
      {
        q: 'Do you offer payment plans?',
        a: 'Yes, we offer flexible payment options including installment plans. Contact our admissions team to discuss payment arrangements that work for you.'
      },
      {
        q: 'What are the entry requirements?',
        a: 'Basic requirements include: minimum age of 18 years, valid ID document, Grade 10 or equivalent, basic English literacy, and a physical fitness certification. Some advanced courses may have additional requirements.'
      },
      {
        q: 'Can I get a refund if I cancel?',
        a: 'Refund policies depend on when you cancel before the course starts. Please contact our admissions team for details on our refund policy.'
      }
    ]
  },
  {
    category: 'Training & Certification',
    questions: [
      {
        q: 'What certification will I receive?',
        a: 'Upon successful completion, you\'ll receive an MQA-accredited certification and an industry-recognized competency certificate. These are accepted by all major mining and construction companies.'
      },
      {
        q: 'Do you help with job placement?',
        a: 'Yes, we offer job placement assistance to all our graduates. We have partnerships with major mining companies like Anglo American, BHP Billiton, Sibanye-Stillwater, and others.'
      },
      {
        q: 'What is the pass rate?',
        a: 'We have a 94% pass rate and a 98% success rate for graduates finding employment in the industry within 3 months of completing their training.'
      },
      {
        q: 'How many students per class?',
        a: 'We maintain small class sizes to ensure personalized attention. Most practical courses have a maximum of 8-10 students per instructor.'
      },
      {
        q: 'What equipment do you train on?',
        a: 'We have modern, industry-standard equipment including excavators, TLBs, dump trucks, bulldozers, loaders, drill rigs, cranes, and forklifts. We also have a 777 rigid dump truck simulator.'
      }
    ]
  }
]

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

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
              <HelpCircle className="text-gold w-4 h-4" />
              <span className="text-gold text-sm font-semibold tracking-wide">FAQ</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl lg:text-[80px] text-white mb-6 leading-[0.9] tracking-tight">
              FREQUENTLY
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">
                ASKED QUESTIONS
              </span>
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8" />
            
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Everything you need to know about our courses, enrollment, and training programs.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-[#111111]">
        <Container>
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <div key={category.category} className="mb-16 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <Badge variant="gold" className="mb-4">{category.category}</Badge>
                  <h2 className="font-display text-3xl text-white">{category.category}</h2>
                </motion.div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const questionId = `${catIndex}-${qIndex}`
                    const isOpen = openQuestion === questionId
                    
                    return (
                      <motion.div
                        key={questionId}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: qIndex * 0.05 }}
                        className={`bg-[#141414] rounded-2xl border transition-colors ${
                          isOpen ? 'border-gold/30' : 'border-white/5 hover:border-white/10'
                        }`}
                      >
                        <button
                          onClick={() => setOpenQuestion(isOpen ? null : questionId)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-medium text-white pr-4">{faq.q}</span>
                          <ChevronDown
                            size={20}
                            className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 text-white/50 leading-relaxed border-t border-white/5 pt-4">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-white mb-4">STILL HAVE QUESTIONS?</h2>
            <p className="text-white/50 mb-8">
              Can&apos;t find what you&apos;re looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center gap-2">
                  <MessageSquare size={18} />
                  Contact Us
                </button>
              </Link>
              <a href="tel:+27718010408">
                <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
                  <Phone size={18} />
                  Call 071 801 0408
                </button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
