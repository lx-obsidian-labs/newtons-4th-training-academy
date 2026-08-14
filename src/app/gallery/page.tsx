'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  { id: 1, title: 'Excavator Training Session', category: 'Training', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop' },
  { id: 2, title: 'Safety Briefing', category: 'Safety', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop' },
  { id: 3, title: 'TLB Practical Training', category: 'Training', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop' },
  { id: 4, title: 'Training Facility Yard', category: 'Facility', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop' },
  { id: 5, title: 'Graduation Ceremony', category: 'Events', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=800&h=600&fit=crop' },
  { id: 6, title: 'Simulator Training', category: 'Technology', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop' },
  { id: 7, title: 'Dump Truck Operations', category: 'Training', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop' },
  { id: 8, title: 'Classroom Theory', category: 'Education', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop' },
  { id: 9, title: 'Bulldozer Training', category: 'Training', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop' },
  { id: 10, title: 'Student Practical', category: 'Training', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop' },
  { id: 11, title: 'Safety Equipment', category: 'Safety', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop' },
  { id: 12, title: 'Completion Certificates', category: 'Events', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=800&h=600&fit=crop' },
]

const categories = ['All', 'Training', 'Safety', 'Facility', 'Events', 'Technology', 'Education']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
    }
  }
  
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length)
    }
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
              <ZoomIn className="text-gold w-4 h-4" />
              <span className="text-gold text-sm font-semibold tracking-wide">Gallery</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl lg:text-[80px] text-white mb-6 leading-[0.9] tracking-tight">
              OUR
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">
                GALLERY
              </span>
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8" />
            
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Take a look at our training facilities, equipment, and student activities.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter */}
      <section className="py-8 bg-[#0a0a0a] border-y border-white/5">
        <Container>
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-gold text-black' 
                    : 'bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#111111]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => openLightbox(i)}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge variant="gold" className="mb-2 text-xs">{item.category}</Badge>
                  <h3 className="text-white font-medium text-sm">{item.title}</h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn size={16} className="text-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <Badge variant="gold" className="mb-2">{filteredItems[lightboxIndex].category}</Badge>
                <h3 className="text-white text-xl">{filteredItems[lightboxIndex].title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
