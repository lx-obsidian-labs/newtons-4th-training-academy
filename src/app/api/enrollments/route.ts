import { NextResponse } from 'next/server'

interface Enrollment {
  id: string
  applicationId: string
  personal: {
    firstName: string
    lastName: string
    idNumber: string
    dateOfBirth: string
  }
  contact: {
    email: string
    phone: string
    altPhone: string
    address: string
    suburb: string
    city: string
    province: string
  }
  course: {
    selected: string
    educationLevel: string
    priorTraining: string
    motivation: string
  }
  additional: {
    employmentStatus: string
    howDidYouHear: string
    agreeTerms: boolean
  }
  status: 'pending' | 'reviewing' | 'approved' | 'rejected' | 'enrolled' | 'completed' | 'certified'
  enrollmentDate: string
  completionDate: string | null
  amount: number
  paymentStatus: 'pending' | 'partial' | 'paid'
  createdAt: string
  updatedAt: string
}

let enrollments: Enrollment[] = []

function generateApplicationId(): string {
  const year = new Date().getFullYear()
  const seq = String(enrollments.length + 1).padStart(4, '0')
  return `MMS-${year}-${seq}`
}

function calculateCourseAmount(course: string): number {
  const amounts: Record<string, number> = {
    'excavator': 12500,
    'dump-truck': 9800,
    'bulldozer': 11200,
    'loader': 10500,
    'drill-rig': 14500,
    'forklift': 7500,
    'safety': 8500,
  }
  return amounts[course] || 0
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')
  const course = searchParams.get('course')

  let filteredEnrollments = enrollments

  if (status) {
    filteredEnrollments = filteredEnrollments.filter(e => e.status === status)
  }
  if (course) {
    filteredEnrollments = filteredEnrollments.filter(e => e.course.selected === course)
  }

  return NextResponse.json({
    success: true,
    data: filteredEnrollments,
    total: enrollments.length,
    stats: {
      pending: enrollments.filter(e => e.status === 'pending').length,
      approved: enrollments.filter(e => e.status === 'approved').length,
      enrolled: enrollments.filter(e => e.status === 'enrolled').length,
      completed: enrollments.filter(e => e.status === 'completed').length,
    }
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { 
      personal, 
      contact, 
      course, 
      additional 
    } = body

    if (!personal?.firstName || !personal?.lastName || !contact?.email || !contact?.phone || !course?.selected) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(contact.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/
    if (!phoneRegex.test(contact.phone)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    const existingEnrollment = enrollments.find(
      e => e.contact.email === contact.email && e.course.selected === course.selected
    )

    if (existingEnrollment && ['pending', 'reviewing'].includes(existingEnrollment.status)) {
      return NextResponse.json({
        success: false,
        error: 'Application already exists for this course',
        existingId: existingEnrollment.id
      }, { status: 409 })
    }

    const amount = calculateCourseAmount(course.selected)

    const newEnrollment: Enrollment = {
      id: `ENR-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      applicationId: generateApplicationId(),
      personal: {
        firstName: personal.firstName,
        lastName: personal.lastName,
        idNumber: personal.idNumber || '',
        dateOfBirth: personal.dateOfBirth || ''
      },
      contact: {
        email: contact.email,
        phone: contact.phone,
        altPhone: contact.altPhone || '',
        address: contact.address || '',
        suburb: contact.suburb || '',
        city: contact.city || '',
        province: contact.province || ''
      },
      course: {
        selected: course.selected,
        educationLevel: course.educationLevel || '',
        priorTraining: course.priorTraining || 'no',
        motivation: course.motivation || ''
      },
      additional: {
        employmentStatus: additional?.employmentStatus || '',
        howDidYouHear: additional?.howDidYouHear || 'website',
        agreeTerms: additional?.agreeTerms || false
      },
      status: 'pending',
      enrollmentDate: new Date().toISOString(),
      completionDate: null,
      amount,
      paymentStatus: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    enrollments.push(newEnrollment)

    return NextResponse.json({
      success: true,
      data: {
        id: newEnrollment.id,
        applicationId: newEnrollment.applicationId,
        status: newEnrollment.status,
        amount: newEnrollment.amount,
        course: newEnrollment.course.selected
      },
      message: 'Enrollment application submitted successfully'
    }, { status: 201 })

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    )
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { id, status, notes, paymentStatus } = body

    const enrollmentIndex = enrollments.findIndex(e => e.id === id)
    if (enrollmentIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Enrollment not found' },
        { status: 404 }
      )
    }

    const validStatuses = ['pending', 'reviewing', 'approved', 'rejected', 'enrolled', 'completed', 'certified']
    const validPaymentStatuses = ['pending', 'partial', 'paid']

    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Invalid status' },
        { status: 400 }
      )
    }

    if (paymentStatus && !validPaymentStatuses.includes(paymentStatus)) {
      return NextResponse.json(
        { success: false, error: 'Invalid payment status' },
        { status: 400 }
      )
    }

    enrollments[enrollmentIndex] = {
      ...enrollments[enrollmentIndex],
      status: status || enrollments[enrollmentIndex].status,
      paymentStatus: paymentStatus || enrollments[enrollmentIndex].paymentStatus,
      completionDate: status === 'completed' || status === 'certified' ? new Date().toISOString() : enrollments[enrollmentIndex].completionDate,
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: enrollments[enrollmentIndex],
      message: 'Enrollment updated successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    )
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json(
      { success: false, error: 'Enrollment ID required' },
      { status: 400 }
    )
  }

  const enrollmentIndex = enrollments.findIndex(e => e.id === id)
  if (enrollmentIndex === -1) {
    return NextResponse.json(
      { success: false, error: 'Enrollment not found' },
      { status: 404 }
    )
  }

  enrollments.splice(enrollmentIndex, 1)

  return NextResponse.json({
    success: true,
    message: 'Enrollment deleted successfully'
  })
}