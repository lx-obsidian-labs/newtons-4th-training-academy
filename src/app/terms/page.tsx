'use client'

import { Container } from '@/components/ui/Container'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-12" />

          <div className="max-w-3xl mx-auto space-y-8 text-white/60 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the                 Newton&apos;s 4th Training Academy website and services, you agree
                to be bound by these Terms of Service. If you do not agree to all terms, you may not
                access our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">2. Course Enrollment</h2>
              <p>
                All course enrollments are subject to availability and our approval. You must provide
                accurate and complete information during the application process. We reserve the right
                to refuse enrollment for any reason.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">3. Payment Terms</h2>
              <p>
                Course fees must be paid in full prior to commencement of training, unless otherwise
                agreed in writing. We reserve the right to cancel enrollment for non-payment. Refunds are
                subject to our stated refund policy.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">4. Student Conduct</h2>
              <p>
                Students are expected to conduct themselves professionally and safely at all times.
                Unsafe behavior or violation of facility rules may result in dismissal from a course
                without refund.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">5. Intellectual Property</h2>
              <p>
                All content, trademarks, and materials on this website are the property of                 Newton&apos;s 4th
                Training Academy. You may not reproduce or distribute content without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law,                 Newton&apos;s 4th Training Academy shall not be
                liable for any indirect, incidental, or consequential damages arising from your use of
                our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">7. Governing Law</h2>
              <p>
                These terms are governed by the laws of South Africa. Any disputes shall be subject to
                the exclusive jurisdiction of the courts of South Africa.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white mb-4">8. Contact Us</h2>
              <p>
                For questions regarding these terms, contact us at: info@newtons4th.co.za
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
