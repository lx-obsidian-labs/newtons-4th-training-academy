'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'
import { 
  BookOpen, Clock, Award, FileText, Calendar, MessageSquare,
  Settings, Bell, LogOut, ChevronRight, CheckCircle, Play,
  User, Download, Send, Search, Filter, Video, File,
  Image, Link as LinkIcon, Star, TrendingUp, CreditCard,
  CheckSquare, AlertCircle, Info, Trash2, Archive, Reply,
  Forward, MoreHorizontal, Phone, Mail, MapPin, Edit2, Save,
  X, Plus, ChevronDown, ExternalLink
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
    status: 'in-progress',
    nextClass: 'Tomorrow, 8:00 AM',
    grade: 'A',
    certificate: null
  },
  {
    id: 2,
    title: 'Safety Officer Course',
    slug: 'safety',
    progress: 100,
    currentModule: 'Completed',
    nextLesson: 'N/A',
    completedLessons: 9,
    totalLessons: 9,
    duration: '2-3 weeks',
    startDate: '2023-11-01',
    instructor: 'Sarah Johnson',
    status: 'completed',
    nextClass: null,
    grade: 'A+',
    certificate: 'Certificate of Completion'
  }
]

const schedule = [
  { id: 1, title: 'Excavator Practical Session', date: '2024-01-22', time: '08:00 - 12:00', type: 'practical', location: 'Training Yard A', instructor: 'John Sithole' },
  { id: 2, title: 'Safety Theory Class', date: '2024-01-22', time: '14:00 - 16:00', type: 'theory', location: 'Classroom 2', instructor: 'Sarah Johnson' },
  { id: 3, title: 'Excavator Assessment', date: '2024-01-25', time: '09:00 - 11:00', type: 'assessment', location: 'Training Yard A', instructor: 'John Sithole' },
  { id: 4, title: 'Site Visit - Mine Operations', date: '2024-01-28', time: '07:00 - 15:00', type: 'field', location: 'Mpumalanga Mine Site', instructor: 'Team' },
  { id: 5, title: 'Theory Revision Session', date: '2024-01-30', time: '10:00 - 12:00', type: 'theory', location: 'Online', instructor: 'John Sithole' },
]

const messages = [
  { id: 1, from: 'John Sithole', role: 'Instructor', subject: 'Great progress on Module 3!', preview: 'Hi Thabo, I wanted to congratulate you on your excellent progress...', time: '2 hours ago', unread: true, avatar: 'JS' },
  { id: 2, from: 'Admin Office', role: 'Support', subject: 'Certificate Available for Download', preview: 'Your Safety Officer Course certificate is now available...', time: '1 day ago', unread: true, avatar: 'AO' },
  { id: 3, from: 'Sarah Johnson', role: 'Instructor', subject: 'Course Materials Updated', preview: 'New safety guidelines have been added to the course portal...', time: '3 days ago', unread: false, avatar: 'SJ' },
  { id: 4, from: 'System', role: 'Notification', subject: 'Assignment Reminder', preview: 'Your practical assessment is scheduled for January 25th...', time: '5 days ago', unread: false, avatar: 'SY' },
]

const resources = [
  { id: 1, title: 'Excavator Safety Manual', type: 'PDF', size: '2.4 MB', category: 'Safety', icon: FileText, downloadCount: 156 },
  { id: 2, title: 'Equipment Operation Guide', type: 'PDF', size: '4.1 MB', category: 'Operations', icon: BookOpen, downloadCount: 89 },
  { id: 3, title: 'Quick Reference Card', type: 'PDF', size: '1.2 MB', category: 'Reference', icon: File, downloadCount: 234 },
  { id: 4, title: 'Safety Video Tutorial', type: 'MP4', size: '125 MB', category: 'Video', icon: Video, downloadCount: 67 },
  { id: 5, title: 'Site Inspection Checklist', type: 'PDF', size: '0.8 MB', category: 'Checklist', icon: CheckSquare, downloadCount: 178 },
  { id: 6, title: 'Emergency Procedures', type: 'PDF', size: '1.5 MB', category: 'Safety', icon: AlertCircle, downloadCount: 312 },
  { id: 7, title: 'Operator Certification Guide', type: 'PDF', size: '3.2 MB', category: 'Certification', icon: Award, downloadCount: 145 },
  { id: 8, title: 'Training Schedule Template', type: 'XLSX', size: '0.5 MB', category: 'Template', icon: Calendar, downloadCount: 56 },
]

const notifications = [
  { id: 1, title: 'New course material available', time: '2 hours ago', unread: true },
  { id: 2, title: 'Assignment deadline approaching', time: '1 day ago', unread: true },
  { id: 3, title: 'Instructor feedback received', time: '2 days ago', unread: false },
]

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedMessage, setSelectedMessage] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: 'Thabo',
    lastName: 'Mkhize',
    email: 'thabo.mkhize@email.com',
    phone: '+27 71 123 4567',
    address: '123 Main St, Middelburg',
    emergencyContact: '+27 82 987 6543'
  })

  const categories = Array.from(new Set(resources.map(r => r.category)))
  const filteredResources = resources.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory ? r.category === filterCategory : true
    return matchesSearch && matchesCategory
  })

  const upcomingSchedule = schedule.filter(s => new Date(s.date) >= new Date()).slice(0, 3)

  const renderDashboard = () => (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Welcome Card */}
        <Card className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gold/20 rounded-2xl flex items-center justify-center">
              <User size={32} className="text-gold" />
            </div>
            <div>
              <h2 className="font-display text-2xl text-white mb-1">Welcome back, Thabo!</h2>
              <p className="text-white/50">You have 2 courses enrolled</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm text-gold">72% overall progress</span>
                <span className="text-sm text-white/30">•</span>
                <span className="text-sm text-white/40">1 certificate earned</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Continue Learning */}
        <div>
          <h2 className="font-display text-xl text-white mb-4">Continue Learning</h2>
          {enrolledCourses.filter(c => c.status === 'in-progress').map((course) => (
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

        {/* Quick Schedule */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl text-white">Upcoming Schedule</h2>
            <button onClick={() => setActiveTab('schedule')} className="text-gold text-sm hover:text-yellow-400 transition-colors">View All</button>
          </div>
          <div className="space-y-3">
            {upcomingSchedule.map((item) => (
              <div key={item.id} className="p-4 bg-[#141414] rounded-xl border border-white/5 hover:border-gold/20 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      item.type === 'practical' ? 'bg-gold/20' : 
                      item.type === 'theory' ? 'bg-blue-500/20' : 
                      item.type === 'assessment' ? 'bg-purple-500/20' : 'bg-green-500/20'
                    }`}>
                      <Calendar size={20} className={
                        item.type === 'practical' ? 'text-gold' : 
                        item.type === 'theory' ? 'text-blue-400' : 
                        item.type === 'assessment' ? 'text-purple-400' : 'text-green-400'
                      } />
                    </div>
                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-white/40 text-sm">{item.date} • {item.time}</p>
                    </div>
                  </div>
                  <Badge variant={item.type === 'practical' ? 'gold' : 'outline'}>{item.type}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Stats */}
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

        {/* Notifications */}
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

        {/* Help Card */}
        <Card className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20">
          <div className="text-center">
            <Award className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="font-display text-xl text-white mb-2">Need Help?</h3>
            <p className="text-white/50 text-sm mb-4">Contact your instructor or support team</p>
            <a href="tel:+27718010408" className="block w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all">
              Contact Support
            </a>
          </div>
        </Card>
      </div>
    </div>
  )

  const renderMyCourses = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-white">My Courses</h2>
        <Link href="/courses">
          <button className="px-4 py-2 bg-gold/10 text-gold rounded-lg hover:bg-gold/20 transition-colors text-sm font-medium">
            Browse More Courses
          </button>
        </Link>
      </div>

      <div className="grid gap-6">
        {enrolledCourses.map((course) => (
          <Card key={course.id} className="bg-gradient-to-br from-[#141414] to-[#0a0a0a]">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-full md:w-48 h-32 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-5xl">🚜</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={course.status === 'completed' ? 'default' : 'gold'}>{course.status}</Badge>
                  <span className="text-white/40 text-sm">{course.duration}</span>
                  {course.grade && (
                    <span className="px-2 py-1 bg-gold/20 text-gold text-xs rounded-full">Grade: {course.grade}</span>
                  )}
                </div>
                <h3 className="font-display text-xl text-white mb-2">{course.title}</h3>
                <p className="text-white/50 text-sm mb-3">Instructor: {course.instructor} • Started: {course.startDate}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Progress</span>
                    <span className="text-gold">{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-[#0a0a0a] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      className="h-full bg-gradient-to-r from-gold to-yellow-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {course.status === 'in-progress' && (
                    <>
                      <Link href={`/courses/${course.slug}`}>
                        <button className="px-4 py-2 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center gap-2 text-sm">
                          <Play size={16} />
                          Continue
                        </button>
                      </Link>
                      {course.nextClass && (
                        <span className="px-4 py-2 bg-white/5 text-white/60 rounded-lg text-sm flex items-center gap-2">
                          <Calendar size={14} />
                          Next: {course.nextClass}
                        </span>
                      )}
                    </>
                  )}
                  {course.status === 'completed' && course.certificate && (
                    <button className="px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 transition-colors flex items-center gap-2 text-sm">
                      <Download size={16} />
                      Download Certificate
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderSchedule = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-white">Schedule</h2>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-gold text-black font-semibold rounded-lg text-sm">This Week</button>
          <button className="px-4 py-2 bg-white/5 text-white/60 rounded-lg hover:bg-white/10 transition-colors text-sm">Next Week</button>
        </div>
      </div>

      <div className="grid gap-4">
        {schedule.map((item) => (
          <Card key={item.id} className="bg-[#141414] hover:border-gold/20 transition-colors">
            <div className="flex items-center gap-6">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                item.type === 'practical' ? 'bg-gold/20' : 
                item.type === 'theory' ? 'bg-blue-500/20' : 
                item.type === 'assessment' ? 'bg-purple-500/20' : 'bg-green-500/20'
              }`}>
                <Calendar size={24} className={
                  item.type === 'practical' ? 'text-gold' : 
                  item.type === 'theory' ? 'text-blue-400' : 
                  item.type === 'assessment' ? 'text-purple-400' : 'text-green-400'
                } />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <Badge variant={item.type === 'practical' ? 'gold' : 'outline'}>{item.type}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/50">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {item.time}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                </div>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-white/60 text-sm">{item.instructor}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderMessages = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-white">Messages</h2>
        <button className="px-4 py-2 bg-gold text-black font-semibold rounded-lg text-sm flex items-center gap-2">
          <Plus size={16} />
          New Message
        </button>
      </div>

      {selectedMessage ? (
        <Card className="bg-[#141414]">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
            <button onClick={() => setSelectedMessage(null)} className="text-gold hover:text-yellow-400 transition-colors text-sm flex items-center gap-2">
              ← Back to messages
            </button>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><Reply size={16} className="text-white/60" /></button>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><Forward size={16} className="text-white/60" /></button>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><Archive size={16} className="text-white/60" /></button>
              <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"><Trash2 size={16} className="text-red-400/60" /></button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <span className="text-gold font-medium">{selectedMessage.avatar}</span>
            </div>
            <div>
              <h3 className="text-white font-medium">{selectedMessage.from}</h3>
              <p className="text-white/40 text-sm">{selectedMessage.role} • {selectedMessage.time}</p>
            </div>
          </div>

          <h2 className="text-xl text-white font-medium mb-4">{selectedMessage.subject}</h2>
          
          <div className="text-white/60 leading-relaxed space-y-4">
            <p>Dear Thabo,</p>
            <p>{selectedMessage.preview}</p>
            <p>Please keep up the excellent work. Your dedication to learning is commendable.</p>
            <p>Best regards,<br/>{selectedMessage.from}</p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type your reply..."
                className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center gap-2">
                <Send size={16} />
                Send
              </button>
            </div>
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              onClick={() => setSelectedMessage(message)}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                message.unread 
                  ? 'bg-gold/5 border-gold/20 hover:border-gold/40' 
                  : 'bg-[#141414] border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-medium">{message.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-medium ${message.unread ? 'text-white' : 'text-white/80'}`}>{message.from}</h3>
                      <span className="text-xs text-white/30">{message.role}</span>
                    </div>
                    <span className="text-xs text-white/30">{message.time}</span>
                  </div>
                  <p className={`text-sm mb-1 ${message.unread ? 'text-white' : 'text-white/70'}`}>{message.subject}</p>
                  <p className="text-sm text-white/40 truncate">{message.preview}</p>
                </div>
                {message.unread && <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0 mt-2" />}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  const renderResources = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-white">Resources</h2>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#141414] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilterCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filterCategory === null ? 'bg-gold text-black' : 'bg-white/5 text-white/60 hover:text-white'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filterCategory === cat ? 'bg-gold text-black' : 'bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredResources.map((resource) => {
          const Icon = resource.icon
          return (
            <Card key={resource.id} className="bg-[#141414] hover:border-gold/20 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Icon size={24} className="text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium group-hover:text-gold transition-colors truncate">{resource.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <span>{resource.type}</span>
                    <span>•</span>
                    <span>{resource.size}</span>
                    <span>•</span>
                    <span>{resource.downloadCount} downloads</span>
                  </div>
                </div>
                <button className="p-3 bg-white/5 rounded-xl hover:bg-gold/20 transition-colors group-hover:bg-gold/20">
                  <Download size={18} className="text-white/40 group-hover:text-gold transition-colors" />
                </button>
              </div>
            </Card>
          )
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <FileText size={48} className="text-white/20 mx-auto mb-4" />
          <p className="text-white/50">No resources found matching your search.</p>
        </div>
      )}
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-8 max-w-2xl">
      <h2 className="font-display text-2xl text-white">Settings</h2>

      {/* Profile Section */}
      <Card className="bg-[#141414]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl text-white">Profile Information</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-gold/10 text-gold rounded-lg hover:bg-gold/20 transition-colors text-sm flex items-center gap-2"
          >
            {isEditing ? <><X size={16} /> Cancel</> : <><Edit2 size={16} /> Edit</>}
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/50 mb-2">First Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                />
              ) : (
                <p className="text-white py-3">{profileData.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm text-white/50 mb-2">Last Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.lastName}
                  onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                />
              ) : (
                <p className="text-white py-3">{profileData.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/50 mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
              />
            ) : (
              <p className="text-white py-3 flex items-center gap-2"><Mail size={16} className="text-white/40" /> {profileData.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-white/50 mb-2">Phone</label>
            {isEditing ? (
              <input
                type="tel"
                value={profileData.phone}
                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
              />
            ) : (
              <p className="text-white py-3 flex items-center gap-2"><Phone size={16} className="text-white/40" /> {profileData.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-white/50 mb-2">Address</label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.address}
                onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
              />
            ) : (
              <p className="text-white py-3 flex items-center gap-2"><MapPin size={16} className="text-white/40" /> {profileData.address}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-white/50 mb-2">Emergency Contact</label>
            {isEditing ? (
              <input
                type="tel"
                value={profileData.emergencyContact}
                onChange={(e) => setProfileData({ ...profileData, emergencyContact: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
              />
            ) : (
              <p className="text-white py-3 flex items-center gap-2"><Phone size={16} className="text-white/40" /> {profileData.emergencyContact}</p>
            )}
          </div>

          {isEditing && (
            <button className="px-6 py-3 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center gap-2">
              <Save size={16} />
              Save Changes
            </button>
          )}
        </div>
      </Card>

      {/* Notification Preferences */}
      <Card className="bg-[#141414]">
        <h3 className="font-display text-xl text-white mb-6">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            { label: 'Email notifications for new messages', enabled: true },
            { label: 'Email notifications for schedule changes', enabled: true },
            { label: 'Email notifications for course updates', enabled: false },
            { label: 'Push notifications', enabled: true },
          ].map((pref, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
              <span className="text-white/70">{pref.label}</span>
              <button className={`w-12 h-6 rounded-full transition-colors ${pref.enabled ? 'bg-gold' : 'bg-white/10'}`}>
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${pref.enabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* Account Actions */}
      <Card className="bg-[#141414]">
        <h3 className="font-display text-xl text-white mb-6">Account</h3>
        <div className="space-y-4">
          <button className="w-full text-left px-4 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-white/70 flex items-center gap-3">
            <CreditCard size={18} />
            Payment History
          </button>
          <button className="w-full text-left px-4 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-white/70 flex items-center gap-3">
            <Download size={18} />
            Download My Data
          </button>
          <button className="w-full text-left px-4 py-3 bg-red-500/10 rounded-xl hover:bg-red-500/20 transition-colors text-red-400 flex items-center gap-3">
            <Trash2 size={18} />
            Delete Account
          </button>
        </div>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard()
      case 'courses': return renderMyCourses()
      case 'schedule': return renderSchedule()
      case 'messages': return renderMessages()
      case 'resources': return renderResources()
      case 'settings': return renderSettings()
      default: return renderDashboard()
    }
  }

  const getTabTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard'
      case 'courses': return 'My Courses'
      case 'schedule': return 'Schedule'
      case 'messages': return 'Messages'
      case 'resources': return 'Resources'
      case 'settings': return 'Settings'
      default: return 'Dashboard'
    }
  }

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
                onClick={() => { setActiveTab(item.id); setSelectedMessage(null); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id 
                    ? 'bg-gold/10 text-gold' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={18} />
                <span className="text-sm">{item.label}</span>
                {item.id === 'messages' && messages.some(m => m.unread) && (
                  <span className="ml-auto w-5 h-5 bg-gold text-black text-xs font-bold rounded-full flex items-center justify-center">
                    {messages.filter(m => m.unread).length}
                  </span>
                )}
              </button>
            ))}
            <Link href="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400/60 hover:text-red-400 hover:bg-red-400/5 transition-colors mt-8">
              <LogOut size={18} />
              <span className="text-sm">Logout</span>
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="font-display text-3xl text-white mb-2">{getTabTitle()}</h1>
            <p className="text-white/40">
              {activeTab === 'dashboard' && 'Welcome back, Thabo! Continue your learning journey.'}
              {activeTab === 'courses' && 'View and manage your enrolled courses.'}
              {activeTab === 'schedule' && 'View your upcoming classes and sessions.'}
              {activeTab === 'messages' && 'Communicate with instructors and support.'}
              {activeTab === 'resources' && 'Access course materials and documents.'}
              {activeTab === 'settings' && 'Manage your profile and preferences.'}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
