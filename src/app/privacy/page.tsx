'use client'

import { Container } from '@/components/ui/Container'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <section className="pt-32 pb-20">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <h1 className="font-display text-5xl md:text-6xl text-white mb-6">
            Privacy Policy
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-12" />

          <div className="max-w-3xl mx-auto space-y-8 text-white/60 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-white mb-4">1. Introduction</h2>
              <p>
                Newton&apos;s 4th Training Academy (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed
                to protecting your personal information. This Privacy Policy explains how we collect, use,
                and safeguard your data when you visit our website or interact with our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">2. Information We Collect</h2>
              <p>
                We may collect personal information that you provide directly to us, including your name,
                email address, phone number, and other contact details. We also automatically collect
                certain information about your device and usage patterns.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to
                communicate with you, and to personalize your experience. We may also use your information
                to send you updates and marketing communications.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">4. Cookies and Tracking</h2>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your experience
                and analyze usage. You may disable cookies through your browser settings, though this
                may affect functionality.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also
                opt out of marketing communications at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
                info@newtons4th.co.za or call 071 801 0408.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
