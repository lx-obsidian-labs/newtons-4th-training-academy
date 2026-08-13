'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { CheckCircle, ArrowRight, Upload, User, Phone, Mail, Calendar, BookOpen, Award, Shield, Loader2, FileText, Clock, Users, AlertCircle, MapPin, Send, ChevronRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const courses = [
  { value: 'excavator', label: 'Excavator Operator Training', price: 'R12,500' },
  { value: 'dump-truck', label: 'Dump Truck Operator Training', price: 'R9,800' },
  { value: 'bulldozer', label: 'Bulldozer Training', price: 'R11,200' },
  { value: 'loader', label: 'Front-End Loader Training', price: 'R10,500' },
  { value: 'drill-rig', label: 'Drill Rig Operator Training', price: 'R14,500' },
  { value: 'forklift', label: 'Forklift Training', price: 'R7,500' },
  { value: 'safety', label: 'Safety Officer Course', price: 'R8,500' },
]

const educationOptions = [
  { value: 'grade-10', label: 'Grade 10' },
  { value: 'grade-11', label: 'Grade 11' },
  { value: 'grade-12', label: 'Grade 12 / Matric' },
  { value: 'certificate', label: 'Certificate' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'degree', label: 'Degree' },
]

const provinceOptions = [
  { value: 'gp', label: 'Gauteng' },
  { value: 'lp', label: 'Limpopo' },
  { value: 'mp', label: 'Mpumalanga' },
  { value: 'nw', label: 'North West' },
  { value: 'fs', label: 'Free State' },
  { value: 'kz', label: 'KwaZulu-Natal' },
  { value: 'wc', label: 'Western Cape' },
  { value: 'ec', label: 'Eastern Cape' },
  { value: 'nc', label: 'Northern Cape' },
]

const courseDetails: Record<string, { duration: string; certification: string; modules: string[]; icon: string }> = {
  excavator: { duration: '4-6 weeks', certification: 'SAQA Accredited', modules: ['Safety Fundamentals', 'Machine Operations', 'Digging Techniques', 'Material Handling'], icon: '🚜' },
  'dump-truck': { duration: '3-4 weeks', certification: 'SAQA Accredited', modules: ['Site Safety', 'Vehicle Operations', 'Haul Road Navigation', 'Load Management'], icon: '🚛' },
  bulldozer: { duration: '4-5 weeks', certification: 'SAQA Accredited', modules: ['Earthmoving Basics', 'Blade Control', 'Grading Techniques', 'Site Preparation'], icon: '🏗️' },
  loader: { duration: '3-4 weeks', certification: 'SAQA Accredited', modules: ['Loader Fundamentals', 'Loading Operations', 'Stockpile Management', 'Cycle Optimization'], icon: '⚙️' },
  'drill-rig': { duration: '5-6 weeks', certification: 'SAQA Accredited', modules: ['Drilling Principles', 'Rig Operations', 'Sample Collection', 'Maintenance'], icon: '🔧' },
  forklift: { duration: '2-3 weeks', certification: 'NOSA Certified', modules: ['Safety Protocols', 'Lift Operations', 'Warehouse Procedures', 'Equipment Checks'], icon: '🏪' },
  safety: { duration: '2-3 weeks', certification: 'NOSA Certified', modules: ['Risk Assessment', 'Safety Auditing', 'Emergency Response', 'Compliance'], icon: '🛡️' },
}

export default function EnrollmentPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [applicationData, setApplicationData] = useState<any>(null)

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', idNumber: '', dateOfBirth: '',
    email: '', phone: '', altPhone: '',
    address: '', suburb: '', city: '', province: '',
    course: '', educationLevel: '', priorTraining: 'no', motivation: '',
    employmentStatus: '', howDidYouHear: '', agreeTerms: false
  })

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!formData.idNumber.trim()) newErrors.idNumber = 'ID number is required'
      else if (formData.idNumber.length !== 13) newErrors.idNumber = 'ID must be 13 digits'
    }
    if (step === 2) {
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    }
    if (step === 3) {
      if (!formData.course) newErrors.course = 'Please select a course'
    }
    if (step === 4) {
      if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to terms'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const nextStep = () => { if (validateStep(currentStep)) setCurrentStep(prev => Math.min(prev + 1, 4)) }
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(4)) return
    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personal: { firstName: formData.firstName, lastName: formData.lastName, idNumber: formData.idNumber, dateOfBirth: formData.dateOfBirth },
          contact: { email: formData.email, phone: formData.phone, altPhone: formData.altPhone, address: formData.address, suburb: formData.suburb, city: formData.city, province: formData.province },
          course: { selected: formData.course, educationLevel: formData.educationLevel, priorTraining: formData.priorTraining, motivation: formData.motivation },
          additional: { employmentStatus: formData.employmentStatus, howDidYouHear: formData.howDidYouHear, agreeTerms: formData.agreeTerms }
        })
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Submission failed')
      setApplicationData(result.data)
      setIsSubmitted(true)
    } catch (error: any) {
      setErrors({ submit: error.message || 'Failed to submit. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedCourseDetails = formData.course ? courseDetails[formData.course] : null

  return (
    <main className="min-h-screen bg-[#080808]">
      <Header />
      
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#111]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 blur-[150px] rounded-full" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-[80px]" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gold/5 rounded-full blur-[60px]" />
        
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <Sparkles className="text-gold w-4 h-4" />
              <span className="text-gold text-sm font-semibold tracking-wide">ENROLLMENT OPEN</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <Link href="/" className="text-white/40 hover:text-gold transition-colors text-sm">Home</Link>
              <ChevronRight className="text-white/20 w-4 h-4" />
              <span className="text-gold font-medium">Enroll Now</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-[90px] text-white mb-6 leading-[0.9] tracking-tight">
              START YOUR
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold">MINING CAREER</span>
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8" />
            
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Complete your enrollment in just 5 minutes. Our team will contact you within 24 hours.
            </p>

            <div className="flex items-center justify-center gap-8 mt-12">
              {[
                { icon: Shield, text: 'SAQA Accredited' },
                { icon: Award, text: 'Industry Certified' },
                { icon: Users, text: '98% Placement' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/40">
                  <item.icon size={18} className="text-gold" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="pb-24 -mt-8 relative z-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {isSubmitted && applicationData ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative p-10 md:p-14 bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-3xl border border-gold/30 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-[80px]" />
                    
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="w-24 h-24 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/30">
                      <CheckCircle size={48} className="text-gold" />
                    </motion.div>
                    
                    <div className="text-center mb-10">
                      <h2 className="font-display text-4xl md:text-5xl text-white mb-4">APPLICATION RECEIVED</h2>
                      <p className="text-white/50 text-lg max-w-lg mx-auto leading-relaxed">
                        Your enrollment application has been submitted successfully. Our admissions team will review your information and contact you within <span className="text-gold font-semibold">24-48 hours</span>.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-10">
                      {[
                        { label: 'Application ID', value: applicationData.applicationId, highlight: true },
                        { label: 'Status', value: 'Under Review', highlight: false },
                        { label: 'Course Fee', value: `R${applicationData.amount?.toLocaleString()}`, highlight: true },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className={`p-5 rounded-2xl ${item.highlight ? 'bg-gold/10 border border-gold/20' : 'bg-white/5 border border-white/10'}`}
                        >
                          <p className="text-white/40 text-xs uppercase tracking-wider mb-2">{item.label}</p>
                          <p className={`font-display text-lg ${item.highlight ? 'text-gold' : 'text-yellow-400'}`}>{item.value}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="p-6 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl border border-gold/20 mb-8">
                      <h4 className="font-display text-lg text-white mb-6 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center">
                          <Sparkles className="text-gold w-4 h-4" />
                        </div>
                        What Happens Next?
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        {[
                          { num: '01', title: 'Review', desc: 'Our team reviews your application' },
                          { num: '02', title: 'Contact', desc: 'We call you within 24-48 hours' },
                          { num: '03', title: 'Start', desc: 'Begin your training journey' },
                        ].map((step, i) => (
                          <div key={i} className="relative">
                            <div className="font-display text-4xl text-white/10 absolute -top-2 -left-2">{step.num}</div>
                            <h5 className="font-semibold text-white mb-1">{step.title}</h5>
                            <p className="text-white/40 text-sm">{step.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/">
                        <button className="px-8 py-4 bg-white/5 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all font-medium">
                          Return to Homepage
                        </button>
                      </Link>
                      <button onClick={() => { setIsSubmitted(false); setCurrentStep(1); setFormData({ firstName: '', lastName: '', idNumber: '', dateOfBirth: '', email: '', phone: '', altPhone: '', address: '', suburb: '', city: '', province: '', course: '', educationLevel: '', priorTraining: 'no', motivation: '', employmentStatus: '', howDidYouHear: '', agreeTerms: false }) }} className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all">
                        Submit Another Application
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="relative bg-gradient-to-br from-[#141414] to-[#0f0f0f] rounded-3xl border border-white/10 p-8 md:p-12 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                    <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />

                    <div className="relative">
                      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                        {[1, 2, 3, 4].map((step) => (
                          <div key={step} className="flex items-center">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                              currentStep >= step
                                ? 'bg-gradient-to-br from-gold/20 to-gold/10 border-2 border-gold text-gold'
                                : 'bg-white/5 border border-white/10 text-white/30'
                            }`}>
                              {currentStep > step ? (
                                <CheckCircle size={20} />
                              ) : (
                                <span className="font-display text-lg">{String(step).padStart(2, '0')}</span>
                              )}
                            </div>
                            {step < 4 && (
                              <div className={`hidden md:block w-16 lg:w-24 h-0.5 mx-3 transition-colors duration-300 ${currentStep > step ? 'bg-gold' : 'bg-white/10'}`} />
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="mb-6">
                        <h3 className="font-display text-3xl text-white mb-2">
                          {currentStep === 1 && 'Personal Information'}
                          {currentStep === 2 && 'Contact Details'}
                          {currentStep === 3 && 'Course Selection'}
                          {currentStep === 4 && 'Review & Submit'}
                        </h3>
                        <p className="text-white/40">
                          Step {currentStep} of 4 - 
                          {currentStep === 1 && ' Tell us about yourself'}
                          {currentStep === 2 && ' How can we reach you?'}
                          {currentStep === 3 && ' Choose your training program'}
                          {currentStep === 4 && ' Confirm and submit'}
                        </p>
                      </div>

                      {errors.submit && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3">
                          <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                          <p className="text-red-400 text-sm">{errors.submit}</p>
                        </div>
                      )}

                      {currentStep === 1 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">First Name *</label>
                              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name"
                                className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500' : 'border-white/10 focus:border-gold/50'} rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none transition-colors text-lg`} />
                              {errors.firstName && <p className="text-red-400 text-xs mt-2">{errors.firstName}</p>}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Last Name *</label>
                              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name"
                                className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-500' : 'border-white/10 focus:border-gold/50'} rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none transition-colors text-lg`} />
                              {errors.lastName && <p className="text-red-400 text-xs mt-2">{errors.lastName}</p>}
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">South African ID *</label>
                              <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="13 digit ID number"
                                className={`w-full bg-white/5 border ${errors.idNumber ? 'border-red-500' : 'border-white/10 focus:border-gold/50'} rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none transition-colors text-lg`} maxLength={13} />
                              {errors.idNumber && <p className="text-red-400 text-xs mt-2">{errors.idNumber}</p>}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Date of Birth</label>
                              <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors text-lg" />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 2 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Email Address *</label>
                              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com"
                                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-gold/50'} rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none transition-colors text-lg`} />
                              {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Phone Number *</label>
                              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+27 XX XXX XXXX"
                                className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-gold/50'} rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none transition-colors text-lg`} />
                              {errors.phone && <p className="text-red-400 text-xs mt-2">{errors.phone}</p>}
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Alternative Phone</label>
                            <input type="tel" name="altPhone" value={formData.altPhone} onChange={handleChange} placeholder="+27 XX XXX XXXX"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors text-lg" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Street Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your street address"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors text-lg" />
                          </div>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Suburb</label>
                              <input type="text" name="suburb" value={formData.suburb} onChange={handleChange} placeholder="Suburb"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors text-lg" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">City</label>
                              <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors text-lg" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Province</label>
                              <select name="province" value={formData.province} onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors text-lg">
                                <option value="">Select</option>
                                {provinceOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 3 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Select Your Course *</label>
                            <select name="course" value={formData.course} onChange={handleChange}
                              className={`w-full bg-white/5 border ${errors.course ? 'border-red-500' : 'border-white/10 focus:border-gold/50'} rounded-xl px-5 py-4 text-white focus:outline-none transition-colors text-lg`}>
                              <option value="">Choose a training program...</option>
                              {courses.map(opt => <option key={opt.value} value={opt.value}>{opt.label} - {opt.price}</option>)}
                            </select>
                            {errors.course && <p className="text-red-400 text-xs mt-2">{errors.course}</p>}
                          </div>

                          {selectedCourseDetails && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl border border-gold/20">
                              <div className="flex items-center gap-5 mb-5">
                                <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center text-3xl">
                                  {selectedCourseDetails.icon}
                                </div>
                                <div>
                                  <h4 className="font-display text-2xl text-white mb-1">{courses.find(c => c.value === formData.course)?.label}</h4>
                                  <div className="flex gap-6 text-sm">
                                    <span className="flex items-center gap-2 text-white/50"><Clock size={16} className="text-gold" /> {selectedCourseDetails.duration}</span>
                                    <span className="flex items-center gap-2 text-white/50"><Award size={16} className="text-gold" /> {selectedCourseDetails.certification}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="border-t border-gold/20 pt-4">
                                <p className="text-white/40 text-sm mb-3 uppercase tracking-wider">Training Modules</p>
                                <div className="grid grid-cols-2 gap-2">
                                  {selectedCourseDetails.modules.map((mod, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/5 rounded-lg text-sm text-white/60">{mod}</span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}

                          <div>
                            <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Education Level</label>
                            <select name="educationLevel" value={formData.educationLevel} onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors text-lg">
                              <option value="">Select education level</option>
                              {educationOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Prior Machinery Training?</label>
                            <div className="grid grid-cols-2 gap-4">
                              {['yes', 'no'].map(opt => (
                                <label key={opt} className={`flex items-center justify-center p-4 rounded-xl cursor-pointer transition-all border ${
                                  formData.priorTraining === opt ? 'bg-gold/20 border-gold text-gold' : 'bg-white/5 border-white/10 text-white/60 hover:border-gold/30'
                                }`}>
                                  <input type="radio" name="priorTraining" value={opt} checked={formData.priorTraining === opt} onChange={handleChange} className="sr-only" />
                                  <span className="font-medium">{opt === 'yes' ? 'Yes' : 'No, I am a beginner'}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Your Motivation (Optional)</label>
                            <textarea name="motivation" value={formData.motivation} onChange={handleChange} rows={3}
                              placeholder="Tell us why you want to join MMS and your career goals..."
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors text-lg resize-none" />
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 4 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                          <div className="p-6 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl border border-gold/20 mb-6">
                            <h4 className="font-display text-xl text-white mb-6">Application Summary</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Applicant</p>
                                <p className="text-white text-lg font-medium">{formData.firstName} {formData.lastName}</p>
                              </div>
                              <div>
                                <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Contact</p>
                                <p className="text-white text-lg font-medium">{formData.email}</p>
                              </div>
                              <div>
                                <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Phone</p>
                                <p className="text-white text-lg font-medium">{formData.phone}</p>
                              </div>
                              <div>
                                <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Selected Course</p>
                                <p className="text-gold text-lg font-medium">{courses.find(c => c.value === formData.course)?.label || 'Not selected'}</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Employment Status</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {['Unemployed', 'Employed', 'Self-Employed', 'Student'].map(status => (
                                <label key={status} className={`flex items-center justify-center p-4 rounded-xl cursor-pointer transition-all border ${
                                  formData.employmentStatus === status.toLowerCase() ? 'bg-gold/20 border-gold text-gold' : 'bg-white/5 border-white/10 text-white/60 hover:border-gold/30'
                                }`}>
                                  <input type="radio" name="employmentStatus" value={status.toLowerCase()} checked={formData.employmentStatus === status.toLowerCase()} onChange={handleChange} className="sr-only" />
                                  <span className="text-sm font-medium">{status}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">How did you hear about MMS?</label>
                            <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors text-lg">
                              <option value="">Select option</option>
                              {['Google Search', 'Facebook', 'LinkedIn', 'Friend/Referral', 'Radio', 'Newspaper', 'Other'].map(opt => (
                                <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                              ))}
                            </select>
                          </div>

                          <label className={`flex items-start gap-4 p-6 rounded-2xl cursor-pointer transition-all border ${
                            errors.agreeTerms ? 'bg-red-500/10 border-red-500/30' : formData.agreeTerms ? 'bg-gold/10 border-gold/30' : 'bg-white/5 border-white/10 hover:border-gold/20'
                          }`}>
                            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="w-6 h-6 mt-0.5 accent-gold" required />
                            <div>
                              <span className="text-white font-semibold text-lg">I agree to the Terms and Conditions *</span>
                              <p className="text-white/40 text-sm mt-2 leading-relaxed">
                                By submitting, I confirm all information is accurate and consent to MMS contacting me about my enrollment and training programs.
                              </p>
                            </div>
                          </label>
                          {errors.agreeTerms && <p className="text-red-400 text-sm">{errors.agreeTerms}</p>}
                        </motion.div>
                      )}

                      <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
                        <button type="button" onClick={prevStep} className="px-6 py-3 text-white/50 hover:text-white transition-colors font-medium flex items-center gap-2">
                          <ArrowRight className="rotate-180" size={18} />
                          {currentStep === 1 ? 'Back to Home' : 'Previous'}
                        </button>
                        
                        {currentStep < 4 ? (
                          <button type="button" onClick={nextStep} className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center gap-2">
                            Continue
                            <ArrowRight size={18} />
                          </button>
                        ) : (
                          <button type="submit" disabled={isSubmitting}
                            className="px-10 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                            {isSubmitting ? (
                              <>
                                <Loader2 className="animate-spin" size={18} />
                                Submitting...
                              </>
                            ) : (
                              <>
                                Submit Application
                                <Send size={18} />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-6">
              <div className="relative p-8 bg-gradient-to-br from-[#141414] to-[#0f0f0f] rounded-3xl border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-[60px]" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl flex items-center justify-center border border-gold/20">
                      <Award size={28} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-white">Why MMS?</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Shield, text: 'SAQA Accredited Training' },
                      { icon: Award, text: 'Industry-Recognized' },
                      { icon: Users, text: '98% Job Placement' },
                      { icon: Clock, text: 'Flexible Schedules' },
                      { icon: BookOpen, text: 'Modern Equipment' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-gold/10">
                          <item.icon size={18} className="text-gold" />
                        </div>
                        <span className="text-white/70">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative p-6 bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-2xl border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-[50px]" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle size={20} className="text-green-400" />
                    <span className="font-semibold text-white">Quick Response</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    We review applications daily and respond within 24-48 hours.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-gold" />
                  <span className="font-semibold text-white">Office Hours</span>
                </div>
                <div className="space-y-2 text-sm text-white/50">
                  <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                  <p>Saturday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl border border-gold/20">
                <div className="flex items-center gap-4 mb-4">
                  <Phone size={20} className="text-gold" />
                  <span className="font-semibold text-white">Need Help?</span>
                </div>
                <p className="text-white/50 text-sm mb-4">Call us for immediate assistance</p>
                <a href="tel:+27130000000" className="text-gold font-display text-2xl hover:text-yellow-400 transition-colors">+27 13 000 0000</a>
                <div className="flex items-center gap-3 mt-4">
                  <Mail size={16} className="text-white/40" />
                  <a href="mailto:enroll@mmsolutions.co.za" className="text-white/50 text-sm hover:text-gold transition-colors">enroll@mmsolutions.co.za</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}