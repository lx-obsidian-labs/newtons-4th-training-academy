import { NextResponse } from 'next/server'
import { courses } from '@/lib/courses'

export async function GET() {
  return NextResponse.json({
    success: true,
    data: courses
  })
}