import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Newton's 4th Training Academy | Mining & Construction Training",
    template: "%s | Newton's 4th Training Academy"
  },
  description: "Practical mining and construction training in Mpumalanga. Courses in excavator, TLB, dump truck, bulldozer, and heavy equipment operation. Located in Middelburg, Mpumalanga.",
  keywords: [
    'mining training South Africa',
    'construction courses Mpumalanga',
    'excavator training',
    'TLB training',
    'dump truck training',
    'heavy machinery courses',
    'mining operator certification',
    'Middelburg training academy',
    'heavy equipment operator course',
    'bulldozer training',
    'crane operator training',
    'safety officer course',
    'forklift training',
    'mining jobs South Africa'
  ],
  authors: [{ name: "Newton's 4th Training Academy" }],
  creator: "Newton's 4th Training Academy",
  publisher: "Newton's 4th Training Academy",
  metadataBase: new URL('https://newtons4th.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://newtons4th.co.za',
    siteName: "Newton's 4th Training Academy",
    title: "Newton's 4th Training Academy | Mining & Construction Training",
    description: "Practical mining and construction training in Mpumalanga. Courses in excavator, TLB, dump truck, and heavy equipment operation.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Newton's 4th Training Academy",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Newton's 4th Training Academy | Mining & Construction Training",
    description: "Practical mining and construction training in Mpumalanga. Courses.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Newton's 4th Training Academy",
    "description": "Vocational and occupational training in Middelburg, Mpumalanga.",
    "url": "https://newtons4th.co.za",
    "logo": "https://newtons4th.co.za/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "23 Walter Sisulu Street",
      "addressLocality": "Middelburg",
      "addressRegion": "Mpumalanga",
      "postalCode": "1050",
      "addressCountry": "ZA"
    },
    "telephone": "+27718010408",
    "email": "info@newtons4th.co.za",
    "sameAs": [
      "https://www.facebook.com/p/Newtons-4th-Training-Academy-100063517542931/",
      "https://www.linkedin.com/company/newtons-4th-training-academy/",
      "https://x.com/4thNewton"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mining and Construction Training Courses",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Excavator Operator Training",
          "description": "Master excavator operation with comprehensive hands-on training.",
          "provider": {
            "@type": "Organization",
            "name": "Newton's 4th Training Academy"
          }
        },
        {
          "@type": "Course",
          "name": "TLB Training",
          "description": "Master TLB operation for digging, loading, and site work.",
          "provider": {
            "@type": "Organization",
            "name": "Newton's 4th Training Academy"
          }
        },
        {
          "@type": "Course",
          "name": "Dump Truck Operator Training",
          "description": "Learn heavy-duty haul truck operations for mining.",
          "provider": {
            "@type": "Organization",
            "name": "Newton's 4th Training Academy"
          }
        }
      ]
    }
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#D9A400" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-[#111111] text-[#F7F7F7] font-body antialiased">
        {children}
      </body>
    </html>
  )
}
