export interface Course {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  price: number
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  certification: string
  category: string
  featured: boolean
  image: string
  curriculum: CurriculumSection[]
  requirements: string[]
  careerPaths: string[]
  outcomes: string[]
}

export interface CurriculumSection {
  title: string
  lessons: string[]
}

export interface Student {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  courseId: string
  enrollmentDate: string
  status: 'pending' | 'approved' | 'in-training' | 'completed' | 'certified'
  progress: number
  idNumber: string
  educationLevel: string
}

export interface Enrollment {
  id: string
  studentId: string
  courseId: string
  enrollmentDate: string
  completionDate: string | null
  status: EnrollmentStatus
  paymentStatus: 'pending' | 'partial' | 'paid'
  amount: number
}

export type EnrollmentStatus = 'pending' | 'approved' | 'in-training' | 'completed' | 'certified'

export interface AdminStats {
  totalStudents: number
  activeStudents: number
  completedStudents: number
  totalRevenue: number
  monthlyRevenue: number[]
  enrollmentTrends: { month: string; count: number }[]
  courseEnrollments: { course: string; count: number }[]
}