import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: "Newton's 4th Training Academy | Mining & Construction Training Institution",
  description: "Practical, industry-focused mining and construction training in Middelburg, Mpumalanga. Expert courses in excavator, TLB, dump truck, drill rig, and heavy equipment operation.",
  keywords: 'mining training, construction courses, excavator training, TLB training, dump truck training, heavy machinery courses, Middelburg training academy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#111111] text-[#F7F7F7] font-body antialiased">
        {children}
      </body>
    </html>
  )
}