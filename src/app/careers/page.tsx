'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Briefcase, MapPin, Clock, Building, ArrowRight, Search, Filter, DollarSign } from 'lucide-react'
import Link from 'next/link'

const jobListings = [
  {
    id: 1,
    title: 'Excavator Operator',
    company: 'Anglo American',
    location: 'Mpumalanga',
    type: 'Full-time',
    salary: 'R25,000 - R35,000',
    posted: '2 days ago',
    description: 'Looking for experienced excavator operators for open-pit mining operations. Must have MQA certification.',
    requirements: ['MQA Excavator Certification', '3+ years experience', 'Valid medical certificate'],
    companyLogo: 'AA'
  },
  {
    id: 2,
    title: 'TLB Operator',
    company: 'BHP Billiton',
    location: 'Limpopo',
    type: 'Full-time',
    salary: 'R22,000 - R30,000',
    posted: '3 days ago',
    description: 'Seeking skilled TLB operators for construction and mining support operations.',
    requirements: ['MQA TLB Certification', '2+ years experience', 'Code 08 license'],
    companyLogo: 'BH'
  },
  {
    id: 3,
    title: 'Dump Truck Driver',
    company: 'Sibanye-Stillwater',
    location: 'North West',
    type: 'Full-time',
    salary: 'R20,000 - R28,000',
    posted: '5 days ago',
    description: 'Heavy-duty haul truck operators needed for platinum mining operations.',
    requirements: ['MQA Dump Truck Certification', '1+ year experience', 'PrDP'],
    companyLogo: 'SS'
  },
  {
    id: 4,
    title: 'Safety Officer',
    company: 'Glencore',
    location: 'Mpumalanga',
    type: 'Full-time',
    salary: 'R30,000 - R45,000',
    posted: '1 week ago',
    description: 'Qualified safety officers needed for underground and surface mining operations.',
    requirements: ['Safety Officer Certification', 'SAMTRAC', '5+ years experience'],
    companyLogo: 'GL'
  },
  {
    id: 5,
    title: 'Drill Rig Operator',
    company: 'Implats',
    location: 'Limpopo',
    type: 'Contract',
    salary: 'R35,000 - R50,000',
    posted: '1 week ago',
    description: 'Experienced drill rig operators for exploration and production drilling.',
    requirements: ['MQA Drill Rig Certification', '5+ years experience', 'Underground medical'],
    companyLogo: 'IM'
  },
  {
    id: 6,
    title: 'Crane Operator',
    company: 'De Beers',
    location: 'Northern Cape',
    type: 'Full-time',
    salary: 'R32,000 - R42,000',
    posted: '2 weeks ago',
    description: 'Mobile crane operators for diamond mining operations.',
    requirements: ['Crane Operator License', 'Lifting Equipment experience', 'Code 08'],
    companyLogo: 'DB'
  },
]

const companies = ['All', 'Anglo American', 'BHP Billiton', 'Sibanye-Stillwater', 'Glencore', 'Implats', 'De Beers']

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('All')

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCompany = selectedCompany === 'All' || job.company === selectedCompany
    return matchesSearch && matchesCompany
  })

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
              <Briefcase className="text-gold w-4 h-4" />
              <span className="text-gold text-sm font-semibold tracking-wide">Careers</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl lg:text-[80px] text-white mb-6 leading-[0.9] tracking-tight">
              JOB
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">
                OPPORTUNITIES
              </span>
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8" />
            
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Access exclusive job opportunities from our partner mining and construction companies.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0a0a0a] border-y border-white/5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '78%', label: 'Job Placement Rate' },
              { value: '15+', label: 'Partner Companies' },
              { value: '500+', label: 'Jobs Filled' },
              { value: '95%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-3xl text-gold mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-[#111111]">
        <Container>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#141414] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {companies.map((company) => (
                <button
                  key={company}
                  onClick={() => setSelectedCompany(company)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCompany === company 
                      ? 'bg-gold text-black' 
                      : 'bg-white/5 text-white/60 hover:text-white'
                  }`}
                >
                  {company}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-[#111111]">
        <Container>
          <div className="space-y-6">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 bg-[#141414] rounded-2xl border border-white/5 hover:border-gold/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg text-gold">{job.companyLogo}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl text-white">{job.title}</h3>
                      <Badge variant="gold">{job.type}</Badge>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 mb-3">
                      <span className="flex items-center gap-1"><Building size={14} className="text-gold" /> {job.company}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} className="text-gold" /> {job.location}</span>
                      <span className="flex items-center gap-1"><DollarSign size={14} className="text-gold" /> {job.salary}</span>
                      <span className="flex items-center gap-1"><Clock size={14} className="text-gold" /> {job.posted}</span>
                    </div>
                    
                    <p className="text-white/50 text-sm mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, j) => (
                        <span key={j} className="px-3 py-1 bg-white/5 text-white/60 rounded-full text-xs">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <button className="px-6 py-3 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center gap-2">
                      Apply
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <Briefcase size={48} className="text-white/20 mx-auto mb-4" />
              <p className="text-white/50">No jobs found matching your search.</p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-white mb-4">DON&apos;T SEE YOUR ROLE?</h2>
            <p className="text-white/50 mb-8">
              Register your interest and we&apos;ll notify you when relevant positions become available.
            </p>
            <Link href="/enroll">
              <button className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all">
                Start Training Today
              </button>
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
