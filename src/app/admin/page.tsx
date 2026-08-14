'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { 
  Users, DollarSign, TrendingUp, BookOpen, Award, Clock, 
  BarChart3, Settings, FileText, Bell, Search,
  ArrowUpRight, ArrowDownRight, PieChart, Activity
} from 'lucide-react'

const stats = [
  { label: 'Total Students', value: '2,547', change: '+12%', trend: 'up', icon: Users },
  { label: 'Monthly Revenue', value: 'R485,000', change: '+8%', trend: 'up', icon: DollarSign },
  { label: 'Active Courses', value: '6', change: '0', trend: 'neutral', icon: BookOpen },
  { label: 'Completion Rate', value: '94%', change: '+3%', trend: 'up', icon: Award },
]

const recentEnrollments = [
  { name: 'Thabo Mkhize', course: 'Excavator Operator', date: '2 hours ago', status: 'pending' },
  { name: 'Nokuthula Dlamini', course: 'Safety Officer', date: '5 hours ago', status: 'approved' },
  { name: 'Sipho Ngcobo', course: 'Dump Truck', date: '1 day ago', status: 'in-training' },
  { name: 'Lindile Zwane', course: 'Bulldozer', date: '1 day ago', status: 'completed' },
  { name: 'Ayanda Mthembu', course: 'Front-End Loader', date: '2 days ago', status: 'pending' },
]

const courseStats = [
  { name: 'Excavator', enrollments: 450, revenue: 'R5,625,000' },
  { name: 'TLB', enrollments: 310, revenue: 'R3,410,000' },
  { name: 'Dump Truck', enrollments: 520, revenue: 'R5,096,000' },
  { name: 'Bulldozer', enrollments: 380, revenue: 'R4,256,000' },
  { name: 'Front-End Loader', enrollments: 290, revenue: 'R3,045,000' },
  { name: 'Drill Rig', enrollments: 180, revenue: 'R2,610,000' },
  { name: 'ADT', enrollments: 240, revenue: 'R3,072,000' },
  { name: 'Rigid Dump Truck (777)', enrollments: 210, revenue: 'R2,835,000' },
  { name: 'Grader', enrollments: 190, revenue: 'R2,242,000' },
  { name: 'Bobcat', enrollments: 260, revenue: 'R2,470,000' },
  { name: 'LHD Scoop', enrollments: 150, revenue: 'R2,220,000' },
  { name: 'Forklift', enrollments: 400, revenue: 'R3,000,000' },
  { name: 'Mobile Crane', enrollments: 120, revenue: 'R1,860,000' },
  { name: 'Tower Crane', enrollments: 100, revenue: 'R1,650,000' },
  { name: 'Overhead Crane', enrollments: 160, revenue: 'R2,240,000' },
  { name: 'Safety Officer', enrollments: 350, revenue: 'R2,975,000' },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-industrial-black">
      <div className="flex">
        <aside className="w-64 bg-industrial-charcoal border-r border-white/5 min-h-screen fixed">
          <div className="p-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold rounded flex items-center justify-center">
                <span className="font-display text-base text-industrial-black">N4</span>
              </div>
              <div>
                <span className="font-display text-sm text-white block">N4</span>
                <span className="text-xs text-white/40">Admin Portal</span>
              </div>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            {[
              { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
              { icon: Users, label: 'Students', id: 'students' },
              { icon: BookOpen, label: 'Courses', id: 'courses' },
              { icon: FileText, label: 'Enrollments', id: 'enrollments' },
              { icon: DollarSign, label: 'Payments', id: 'payments' },
              { icon: Bell, label: 'Notifications', id: 'notifications' },
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
          </nav>
        </aside>

        <main className="flex-1 ml-64">
          <header className="bg-industrial-charcoal border-b border-white/5 px-8 py-4 sticky top-0 z-40">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-display text-2xl text-white">Dashboard</h1>
                <p className="text-sm text-white/40">Welcome back, Admin</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-industrial-steel border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-gold w-64"
                  />
                </div>
                <button className="relative p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Bell size={18} className="text-white/60" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full" />
                </button>
              </div>
            </div>
          </header>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                        <stat.icon size={20} className="text-gold" />
                      </div>
                      <div className={`flex items-center gap-1 text-sm ${
                        stat.trend === 'up' ? 'text-green-400' : 
                        stat.trend === 'down' ? 'text-red-400' : 'text-white/40'
                      }`}>
                        {stat.trend === 'up' ? <ArrowUpRight size={14} /> : null}
                        <span>{stat.change}</span>
                      </div>
                    </div>
                    <div className="font-display text-3xl text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/40">{stat.label}</div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/5 rounded-full" />
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Monthly revenue for the past 6 months</CardDescription>
                  </CardHeader>
                  <div className="h-64 flex items-end gap-2">
                    {[65, 45, 78, 52, 90, 85].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-gold to-gold/50 rounded-t-lg"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-xs text-white/40">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </Card>
              </div>

              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Course Distribution</CardTitle>
                    <CardDescription>Enrollment by course type</CardDescription>
                  </CardHeader>
                  <div className="space-y-4">
                    {courseStats.slice(0, 4).map((course) => (
                      <div key={course.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white/70">{course.name}</span>
                          <span className="text-gold">{course.enrollments}</span>
                        </div>
                        <div className="h-2 bg-industrial-steel rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(course.enrollments / 520) * 100}%` }}
                            className="h-full bg-gold rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Enrollments</CardTitle>
                  <CardDescription>Latest student applications</CardDescription>
                </CardHeader>
                <div className="space-y-4">
                  {recentEnrollments.map((enrollment, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                          <span className="font-display text-sm text-gold">
                            {enrollment.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-medium">{enrollment.name}</p>
                          <p className="text-white/40 text-sm">{enrollment.course}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={enrollment.status === 'pending' ? 'outline' : 
                          enrollment.status === 'approved' ? 'gold' : 'default'}>
                          {enrollment.status}
                        </Badge>
                        <p className="text-white/30 text-xs mt-1">{enrollment.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-industrial-steel rounded-lg p-4">
                    <Activity className="w-8 h-8 text-gold mb-2" />
                    <div className="font-display text-2xl text-white">94%</div>
                    <div className="text-sm text-white/40">Completion Rate</div>
                  </div>
                  <div className="bg-industrial-steel rounded-lg p-4">
                    <Clock className="w-8 h-8 text-gold mb-2" />
                    <div className="font-display text-2xl text-white">4.2 wks</div>
                    <div className="text-sm text-white/40">Avg Duration</div>
                  </div>
                  <div className="bg-industrial-steel rounded-lg p-4">
                    <PieChart className="w-8 h-8 text-gold mb-2" />
                    <div className="font-display text-2xl text-white">78%</div>
                    <div className="text-sm text-white/40">Job Placement</div>
                  </div>
                  <div className="bg-industrial-steel rounded-lg p-4">
                    <TrendingUp className="w-8 h-8 text-gold mb-2" />
                    <div className="font-display text-2xl text-white">98%</div>
                    <div className="text-sm text-white/40">Success Rate</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}