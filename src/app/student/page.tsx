'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'
import { 
  BookOpen, Clock, Award, FileText, Calendar, MessageSquare,
  Settings, Bell, LogOut, ChevronRight, CheckCircle, Play,
  User, Download
} from 'lucide-react'
import Link from 'next/link'

const enrolledCourses = [
  {
    id: 1,
    title: 'Excavator Operator Training',
    slug: 'excavator',
    progress: 72,
    currentModule: 'Module 3: Operational Techniques',
    nextLesson: 'Loading and Material Handling',
    completedLessons: 8,
    totalLessons: 12,
    duration: '4-6 weeks',
    startDate: '2024-01-15',
    instructor: 'John Sithole',
    status: 'in-progress'
  }
]

const notifications = [
  { id: 1, title: 'New course material available', time: '2 hours ago', unread: true },
  { id: 2, title: 'Assignment deadline approaching', time: '1 day ago', unread: true },
  { id: 3, title: 'Instructor feedback received', time: '2 days ago', unread: false },
]

const resources = [
  { title: 'Safety Manual', type: 'PDF', size: '2.4 MB' },
  { title: 'Equipment Handbook', type: 'PDF', size: '4.1 MB' },
  { title: 'Quick Reference Guide', type: 'PDF', size: '1.2 MB' },
]

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-[#111111]">
      <header className="bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center">
              <span className="font-display text-base text-black font-bold">N4</span>
            </div>
            <div>
              <span className="font-display text-white">Student Portal</span>
              <span className="block text-xs text-white/40">Newton&apos;s 4th Training Academy</span>
            </div>
          </Link>

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
                <p className="text-sm text-white">Thabo Mkhize</p>
                <p className="text-xs text-white/40">Student</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-[#0a0a0a] border-r border-white/5 min-h-[calc(100vh-73px)] p-4 hidden lg:block">
          <nav className="space-y-1">
            {[
              { icon: BookOpen, label: 'Dashboard', id: 'dashboard' },
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
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400/60 hover:text-red-400 hover:bg-red-400/5 transition-colors mt-8">
              <LogOut size={18} />
              <span className="text-sm">Logout</span>
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="font-display text-3xl text-white mb-2">Welcome back, Thabo!</h1>
            <p className="text-white/40">Continue your learning journey</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-xl text-white mb-4">Continue Learning</h2>
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="bg-gradient-to-br from-[#141414] to-[#0a0a0a]">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">🚜</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="gold">{course.status}</Badge>
                          <span className="text-white/40 text-sm">{course.duration}</span>
                        </div>
                        <h3 className="font-display text-xl text-white mb-1">{course.title}</h3>
                        <p className="text-white/50 text-sm">Instructor: {course.instructor}</p>
                      </div>
                    </div>

                    <div className="mb-4">
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

                    <div className="p-4 bg-[#0a0a0a] rounded-lg mb-4">
                      <p className="text-xs text-white/40 mb-1">Current Module</p>
                      <p className="text-white font-medium mb-2">{course.currentModule}</p>
                      <p className="text-sm text-gold">Next: {course.nextLesson}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <Link href={`/courses/${course.slug}`} className="flex-1">
                        <button className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center justify-center gap-2">
                          <Play size={18} />
                          Continue Course
                        </button>
                      </Link>
                      <Link href={`/courses/${course.slug}`}>
                        <button className="px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                          <ChevronRight size={18} className="text-white/60" />
                        </button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>

              <div>
                <h2 className="font-display text-xl text-white mb-4">Learning Resources</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {resources.map((resource, i) => (
                    <Card key={i} className="hover:border-gold/30 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                          <FileText size={20} className="text-gold" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">{resource.title}</p>
                          <p className="text-white/40 text-xs">{resource.type} • {resource.size}</p>
                        </div>
                        <Download size={16} className="text-white/40 group-hover:text-gold transition-colors" />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Stats</CardTitle>
                </CardHeader>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg">
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-gold" />
                      <span className="text-white/70 text-sm">Study Time</span>
                    </div>
                    <span className="font-display text-xl text-white">24h</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-gold" />
                      <span className="text-white/70 text-sm">Lessons Done</span>
                    </div>
                    <span className="font-display text-xl text-white">8/12</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg">
                    <div className="flex items-center gap-3">
                      <Award size={18} className="text-gold" />
                      <span className="text-white/70 text-sm">Cert Progress</span>
                    </div>
                    <span className="font-display text-xl text-white">72%</span>
                  </div>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg transition-colors cursor-pointer ${
                        notification.unread ? 'bg-gold/10 border border-gold/20' : 'bg-[#0a0a0a] hover:bg-white/5'
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
              </Card>

              <Card className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20">
                <div className="text-center">
                  <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-xl text-white mb-2">Need Help?</h3>
                  <p className="text-white/50 text-sm mb-4">
                    Contact your instructor or support team
                  </p>
                  <a href="tel:+27718010408" className="block w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all">
                    Contact Support
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
