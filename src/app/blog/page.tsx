'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'Why Heavy Equipment Operators Are in High Demand',
    excerpt: 'South Africa\'s mining and construction boom is creating unprecedented demand for skilled heavy equipment operators. Here\'s why now is the perfect time to start your training.',
    category: 'Industry',
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'Johan van der Merwe',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: '5 Safety Tips Every Excavator Operator Should Know',
    excerpt: 'Safety is paramount when operating heavy machinery. Learn the essential safety practices that will keep you and your colleagues safe on site.',
    category: 'Safety',
    date: '2024-01-10',
    readTime: '4 min read',
    author: 'Sarah Nkosi',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop',
    featured: false
  },
  {
    id: 3,
    title: 'From Student to Site Supervisor: Thabo\'s Success Story',
    excerpt: 'How one graduate went from unemployed to site supervisor in just 18 months after completing his excavator training at Newton\'s 4th.',
    category: 'Success Stories',
    date: '2024-01-05',
    readTime: '6 min read',
    author: 'Thandi Mokoena',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
    featured: false
  },
  {
    id: 4,
    title: 'Understanding MQA Accreditation: What It Means for Your Career',
    excerpt: 'MQA accreditation is the gold standard for mining training in South Africa. Learn why it matters and how it benefits your career prospects.',
    category: 'Education',
    date: '2023-12-28',
    readTime: '4 min read',
    author: 'Pieter Botha',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=800&h=500&fit=crop',
    featured: false
  },
  {
    id: 5,
    title: 'New 777 Simulator Training Now Available',
    excerpt: 'We\'re excited to announce the addition of our state-of-the-art 777 rigid dump truck simulator to our training facilities.',
    category: 'News',
    date: '2023-12-20',
    readTime: '3 min read',
    author: 'Johan van der Merwe',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=500&fit=crop',
    featured: false
  },
  {
    id: 6,
    title: 'Top 10 Questions to Ask Before Choosing a Training Provider',
    excerpt: 'Not all training providers are equal. Here are the key questions you should ask before enrolling in any heavy equipment training program.',
    category: 'Guides',
    date: '2023-12-15',
    readTime: '5 min read',
    author: 'Sarah Nkosi',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
    featured: false
  }
]

const categories = ['All', 'Industry', 'Safety', 'Success Stories', 'Education', 'News', 'Guides']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find(p => p.featured)
  const regularPosts = filteredPosts.filter(p => !p.featured || selectedCategory !== 'All')

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
              <Tag className="text-gold w-4 h-4" />
              <span className="text-gold text-sm font-semibold tracking-wide">Blog & News</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl lg:text-[80px] text-white mb-6 leading-[0.9] tracking-tight">
              LATEST
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">
                NEWS & INSIGHTS
              </span>
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8" />
            
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Stay updated with the latest news, training tips, and success stories from Newton&apos;s 4th Training Academy.
            </p>
          </div>
        </Container>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-[#0a0a0a] border-y border-white/5">
        <Container>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#141414] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
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
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'All' && featuredPost && (
        <section className="py-16 bg-[#111111]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="gold">Featured</Badge>
                </div>
              </div>
              <div>
                <Badge variant="outline" className="mb-4">{featuredPost.category}</Badge>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">{featuredPost.title}</h2>
                <p className="text-white/50 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-white/40 mb-6">
                  <span className="flex items-center gap-1"><User size={14} /> {featuredPost.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {featuredPost.readTime}</span>
                </div>
                <button className="flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all">
                  Read Article <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-[#111111]">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(p => selectedCategory !== 'All' || !p.featured).map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#141414] rounded-2xl border border-white/5 hover:border-gold/20 overflow-hidden transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold">{post.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/40 flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                    <button className="flex items-center gap-1 text-gold text-sm font-medium hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/50">No articles found matching your search.</p>
            </div>
          )}
        </Container>
      </section>

      <Footer />
    </main>
  )
}
