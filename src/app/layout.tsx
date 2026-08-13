import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mining Machinery Solutions | Premier Mining Training Institution',
  description: 'South Africa\'s leading mining and heavy machinery training institution. Expert courses in excavator, dump truck, bulldozer, and heavy equipment operation.',
  keywords: 'mining training, heavy machinery courses, excavator training, dump truck license, mining certification South Africa',
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