'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Eye, EyeOff, Lock, Mail, AlertCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function PortalLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }

    setIsLoading(true)
    
    // Simulate login - in production, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Placeholder credentials check
    const validEmail = email === 'student@newtons4th.co.za' && password === 'student123'
    
    if (!validEmail) {
      setError('Invalid email or password. Try: student@newtons4th.co.za / student123')
      setIsLoading(false)
      return
    }
    
    // Store auth state
    localStorage.setItem('portal_auth', JSON.stringify({
      email,
      loggedIn: true,
      loginTime: new Date().toISOString()
    }))
    
    // Redirect to portal
    window.location.href = '/portal'
  }

  return (
    <main className="min-h-screen bg-[#080808]">
      <Header />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#111]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/10 blur-[150px] rounded-full" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold/20">
                <span className="font-display text-3xl text-black font-bold">N4</span>
              </div>
              <h1 className="font-display text-4xl text-white mb-3">STUDENT PORTAL</h1>
              <p className="text-white/50">Sign in to access your courses and materials</p>
              <p className="text-gold/60 text-sm mt-3">Demo: student@newtons4th.co.za / student123</p>
            </div>

            <div className="bg-gradient-to-br from-[#141414] to-[#0f0f0f] rounded-3xl border border-white/10 p-8 md:p-10">
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3">
                  <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-gold" />
                    <span className="text-sm text-white/50">Remember me</span>
                  </label>
                  <button type="button" className="text-sm text-gold hover:text-yellow-400 transition-colors">
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-white/40 text-sm">
                  Don&apos;t have an account?{' '}
                  <Link href="/enroll" className="text-gold hover:text-yellow-400 transition-colors">
                    Enroll now
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/" className="text-white/30 hover:text-white/60 transition-colors text-sm">
                ← Back to homepage
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
