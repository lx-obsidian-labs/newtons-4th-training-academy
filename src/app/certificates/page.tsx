'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Award, Search, CheckCircle, XCircle, Shield, Download } from 'lucide-react'

export default function CertificatesPage() {
  const [certificateId, setCertificateId] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [result, setResult] = useState<'found' | 'not-found' | null>(null)

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!certificateId.trim()) return
    
    setIsSearching(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Demo validation - accepts N4-2024-0001 to N4-2024-0010
    const isValid = /^N4-2024-00(0[1-9]|10)$/.test(certificateId.toUpperCase())
    setResult(isValid ? 'found' : 'not-found')
    setIsSearching(false)
  }

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
              <Award className="text-gold w-4 h-4" />
              <span className="text-gold text-sm font-semibold tracking-wide">Certificates</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl lg:text-[80px] text-white mb-6 leading-[0.9] tracking-tight">
              CERTIFICATE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">
                VERIFICATION
              </span>
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8" />
            
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Verify the authenticity of a Newton&apos;s 4th Training Academy certificate.
            </p>
          </div>
        </Container>
      </section>

      {/* Verification Form */}
      <section className="py-16 bg-[#111111]">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="p-8 md:p-12 bg-[#141414] rounded-3xl border border-white/10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-gold" />
                </div>
                <h2 className="font-display text-2xl text-white mb-2">Verify Certificate</h2>
                <p className="text-white/50 text-sm">Enter the certificate ID to verify its authenticity</p>
              </div>

              <form onSubmit={handleVerify} className="space-y-6">
                <div>
                  <label className="block text-sm text-white/50 mb-2">Certificate ID</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      value={certificateId}
                      onChange={(e) => { setCertificateId(e.target.value); setResult(null) }}
                      placeholder="e.g., N4-2024-0001"
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors text-center text-lg tracking-wider"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSearching || !certificateId.trim()}
                  className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSearching ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Search size={18} />
                      Verify Certificate
                    </>
                  )}
                </button>
              </form>

              {/* Result */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-8 p-6 rounded-2xl ${
                    result === 'found' 
                      ? 'bg-green-500/10 border border-green-500/30' 
                      : 'bg-red-500/10 border border-red-500/30'
                  }`}
                >
                  {result === 'found' ? (
                    <div className="text-center">
                      <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                      <h3 className="font-display text-xl text-white mb-2">Certificate Verified!</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-white/60"><span className="text-white/40">Holder:</span> <span className="text-white">Thabo Mkhize</span></p>
                        <p className="text-white/60"><span className="text-white/40">Course:</span> <span className="text-white">Excavator Operator Training</span></p>
                        <p className="text-white/60"><span className="text-white/40">Completed:</span> <span className="text-white">15 March 2024</span></p>
                        <p className="text-white/60"><span className="text-white/40">Grade:</span> <span className="text-green-400 font-semibold">A</span></p>
                      </div>
                      <button className="mt-6 px-6 py-3 bg-green-500/20 text-green-400 rounded-xl hover:bg-green-500/30 transition-colors flex items-center gap-2 mx-auto">
                        <Download size={16} />
                        Download Certificate
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <XCircle size={48} className="text-red-400 mx-auto mb-4" />
                      <h3 className="font-display text-xl text-white mb-2">Certificate Not Found</h3>
                      <p className="text-white/50 text-sm">
                        No certificate was found with ID: <span className="text-white">{certificateId}</span>
                      </p>
                      <p className="text-white/40 text-xs mt-2">
                        Please check the ID and try again. Contact us if you need assistance.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Help */}
            <div className="mt-8 text-center">
              <p className="text-white/40 text-sm">
                Need help? Contact us at{' '}
                <a href="tel:+27718010408" className="text-gold hover:text-yellow-400">071 801 0408</a>
                {' '}or{' '}
                <a href="mailto:info@newtons4th.co.za" className="text-gold hover:text-yellow-400">info@newtons4th.co.za</a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
