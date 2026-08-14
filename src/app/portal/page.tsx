'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { 
  BookOpen, Clock, Award, FileText, Calendar, MessageSquare,
  Settings, Bell, LogOut, ChevronRight, CheckCircle, Play,
  User, Download, Shield, TrendingUp, Video
} from 'lucide-react'
import Link from 'next/link'

const enrolledCourses = [
  {
    id: 1,
    title: 'ADT (Articulated Dump Truck) Training',
    slug: 'adt',
    progress: 45,
    currentModule: 'Module 2: Vehicle Operations',
    nextLesson: 'Articulation and Steering Techniques',
    completedLessons: 4,
    totalLessons: 12,
    duration: '3-4 weeks',
    startDate: '2024-01-15',
    instructor: 'Pieter van der Merwe',
    status: 'in-progress',
    videos: [
      { title: 'ADT Operation Basics', url: 'https://www.youtube.com/watch?v=_fRHjJHEioA' },
      { title: 'ADT Training Series', url: 'https://www.youtube.com/playlist?list=PLJ93Sr2jvwvtx_BcwgtvdzjjTS0eZznYD' },
    ]
  }
]

const notifications = [
  { id: 1, title: 'New video available: ADT Steering Techniques', time: '2 hours ago', unread: true },
  { id: 2, title: 'Assignment deadline approaching', time: '1 day ago', unread: true },
  { id: 3, title: 'Instructor feedback received', time: '2 days ago', unread: false },
]

const resources = [
  { title: 'ADT Safety Manual', type: 'PDF', size: '2.4 MB' },
  { title: 'Equipment Handbook', type: 'PDF', size: '4.1 MB' },
  { title: 'Quick Reference Guide', type: 'PDF', size: '1.2 MB' },
]

export default function PortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('portal_auth')
    if (auth) {
      const parsed = JSON.parse(auth)
      if (parsed.loggedIn) {
        setIsAuthenticated(true)
        setUserEmail(parsed.email)
      }
    }
    setIsLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('portal_auth')
    window.location.href = '/portal/login'
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#080808]">
        <Header />
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#111]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/10 blur-[150px] rounded-full" />
          
          <Container className="relative z-10">
            <div className="max-w-md mx-auto text-center">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield size={40} className="text-white/30" />
              </div>
              <h1 className="font-display text-4xl text-white mb-4">ACCESS RESTRICTED</h1>
              <p className="text-white/50 mb-8">
                Please sign in to access the student portal
              </p>
              <Link href="/portal/login">
                <button className="px-10 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all">
                  Sign In to Portal
                </button>
              </Link>
            </div>
          </Container>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#080808]">
      <header className="bg-[#111] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center">
                <span className="font-display text-base text-black font-bold">N4</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-white text-sm tracking-wide">NEWTON&apos;S 4TH</span>
                <span className="font-display text-gold text-xs block tracking-wide">STUDENT PORTAL</span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-white/5 rounded-lg transition-colors">
              <Bell size={18} className="text-white/60" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                <User size={16} className="text-gold" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm text-white">{userEmail || 'Student'}</p>
                <p className="text-xs text-white/40">Student</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="p-2 hover:bg-red-500/10 rounded-lg transition-colors text-white/40 hover:text-red-400"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-[#111] border-r border-white/5 min-h-[calc(100vh-73px)] p-4 hidden lg:block">
          <nav className="space-y-1">
            {[
              { icon: BookOpen, label: 'Dashboard', id: 'dashboard' },
              { icon: Video, label: 'My Videos', id: 'videos' },
              { icon: FileText, label: 'My Courses', id: 'courses' },
              { icon: Calendar, label: 'Schedule', id: 'schedule' },
              { icon: MessageSquare, label: 'Messages', id: 'messages' },
              { icon: Download, label: 'Resources', id: 'resources' },
              { icon: Settings, label: 'Settings', id: 'settings' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id 
                    ? 'bg-gold/10 text-gold' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={18} />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400/60 hover:text-red-400 hover:bg-red-400/5 transition-colors mt-8"
            >
              <LogOut size={18} />
              <span className="text-sm">Logout</span>
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="font-display text-3xl text-white mb-2">Welcome back!</h1>
            <p className="text-white/40">Continue your learning journey</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Clock, label: 'Study Time', value: '24h', color: 'text-blue-400' },
              { icon: CheckCircle, label: 'Lessons Done', value: '4/12', color: 'text-green-400' },
              { icon: TrendingUp, label: 'Progress', value: '45%', color: 'text-gold' },
              { icon: Award, label: 'Certificate', value: 'In Progress', color: 'text-purple-400' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 bg-[#141414] rounded-2xl border border-white/10"
              >
                <stat.icon size={20} className={`${stat.color} mb-3`} />
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="font-display text-xl text-white">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Course Progress */}
          <div className="mb-8">
            <h2 className="font-display text-xl text-white mb-4">Continue Learning</h2>
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-gradient-to-br from-[#141414] to-[#0f0f0f] rounded-3xl border border-white/10 p-6 md:p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🚛</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">In Progress</span>
                      <span className="text-white/40 text-sm">{course.duration}</span>
                    </div>
                    <h3 className="font-display text-xl text-white mb-1">{course.title}</h3>
                    <p className="text-white/50 text-sm">Instructor: {course.instructor}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Progress</span>
                    <span className="text-gold">{course.progress}%</span>
                  </div>
                  <div className="h-3 bg-[#0a0a0a] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      className="h-full bg-gradient-to-r from-gold to-yellow-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="p-4 bg-[#0a0a0a] rounded-xl mb-6">
                  <p className="text-xs text-white/40 mb-1">Current Module</p>
                  <p className="text-white font-medium mb-2">{course.currentModule}</p>
                  <p className="text-sm text-gold">Next: {course.nextLesson}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center justify-center gap-2">
                    <Play size={18} />
                    Continue Course
                  </button>
                  <Link href={`/courses/${course.slug}`}>
                    <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-white/70">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Training Videos */}
          <div className="mb-8">
            <h2 className="font-display text-xl text-white mb-4">Training Videos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {enrolledCourses[0].videos.map((video, i) => (
                <a
                  key={i}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 bg-[#141414] rounded-2xl border border-white/10 hover:border-gold/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
                      <Play size={24} className="text-red-400 ml-1" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium group-hover:text-gold transition-colors">{video.title}</h3>
                      <p className="text-white/40 text-sm mt-1">YouTube • Click to watch</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-8">
            <h2 className="font-display text-xl text-white mb-4">Learning Resources</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {resources.map((resource, i) => (
                <div key={i} className="p-5 bg-[#141414] rounded-2xl border border-white/10 hover:border-gold/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                      <FileText size={20} className="text-gold" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">{resource.title}</p>
                      <p className="text-white/40 text-xs">{resource.type} • {resource.size}</p>
                    </div>
                    <Download size={16} className="text-white/40 group-hover:text-gold transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div>
            <h2 className="font-display text-xl text-white mb-4">Notifications</h2>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-xl transition-colors cursor-pointer ${
                    notification.unread ? 'bg-gold/10 border border-gold/20' : 'bg-[#141414] border border-white/10 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Bell size={16} className={`mt-0.5 ${notification.unread ? 'text-gold' : 'text-white/40'}`} />
                    <div>
                      <p className={`text-sm ${notification.unread ? 'text-white' : 'text-white/60'}`}>
                        {notification.title}
                      </p>
                      <p className="text-xs text-white/30 mt-1">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </main>
  )
}
