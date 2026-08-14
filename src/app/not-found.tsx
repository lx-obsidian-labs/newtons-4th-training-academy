'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Home, Search, Frown } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#111111] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#111]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 blur-[120px] rounded-full" />

      <Container className="relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-32 h-32 bg-gold/10 rounded-full border-2 border-gold/20 mb-12"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Frown size={48} className="text-gold" />
            </motion.div>
          </motion.div>

          <h1 className="font-display text-9xl md:text-[120px] text-white mb-4 leading-[0.8]">
            404
          </h1>

          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Page Not Found
          </h2>

          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. It might have been removed,
            renamed, or you may have typed the wrong URL.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" size="lg">
                <Home size={18} />
                Return to Homepage
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="secondary" size="lg">
                <Search size={18} />
                Browse Courses
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </main>
  )
}
