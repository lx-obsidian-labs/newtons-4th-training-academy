import { NextResponse } from 'next/server'

interface Lead {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  courseInterest: string
  source: string
  status: 'new' | 'contacted' | 'qualified' | 'enrolled' | 'lost'
  createdAt: string
  notes: string[]
}

let leads: Lead[] = []

export async function GET() {
  return NextResponse.json({
    success: true,
    data: leads,
    total: leads.length
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      courseInterest, 
      source = 'website',
      message
    } = body

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: firstName, lastName, email, phone' },
        { status: 400 }
      )
    }

    const existingLead = leads.find(l => l.email === email)
    if (existingLead) {
      return NextResponse.json({
        success: true,
        message: 'Lead already exists',
        data: existingLead,
        isExisting: true
      })
    }

    const newLead: Lead = {
      id: `LEAD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      firstName,
      lastName,
      email,
      phone,
      courseInterest: courseInterest || 'Not specified',
      source,
      status: 'new',
      createdAt: new Date().toISOString(),
      notes: message ? [`Initial inquiry: ${message}`] : []
    }

    leads.push(newLead)

    return NextResponse.json({
      success: true,
      data: newLead,
      message: 'Lead captured successfully'
    })
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
    const { id, status, note } = body

    const leadIndex = leads.findIndex(l => l.id === id)
    if (leadIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Lead not found' },
        { status: 404 }
      )
    }

    if (status) {
      leads[leadIndex].status = status
    }

    if (note) {
      leads[leadIndex].notes.push(note)
    }

    return NextResponse.json({
      success: true,
      data: leads[leadIndex],
      message: 'Lead updated successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    )
  }
}