'use client'

import { Container } from '@/components/ui/Container'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CookiesPage() {
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
            Cookie Policy
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-12" />

          <div className="max-w-3xl mx-auto space-y-8 text-white/60 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-white mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our website.
                They help us understand how you use our site and improve your browsing experience.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">2. How We Use Cookies</h2>
              <p>
                We use cookies for essential site functionality, analytics, and to remember your
                preferences. This helps us provide a better user experience and improve our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">3. Types of Cookies We Use</h2>
              <p>
                <strong className="text-white/80">Essential Cookies:</strong> Necessary for core
                website functionality. <br />
                <strong className="text-white/80">Analytical Cookies:</strong> Help us understand site
                usage and performance. <br />
                <strong className="text-white/80">Preference Cookies:</strong> Remember your settings and
                preferences.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">4. Third-Party Cookies</h2>
              <p>
                We may use third-party services (e.g., Google Analytics) that set their own cookies.
                These services have their own privacy and cookie policies.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">5. Managing Cookies</h2>
              <p>
                You can control and/or delete cookies through your browser settings. Most browsers
                allow you to refuse cookies, but this may affect your ability to use certain features
                of our website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">6. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this
                page with an updated effective date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">7. Contact Us</h2>
              <p>
                Questions about our use of cookies? Contact us at: info@newtons4th.co.za
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
