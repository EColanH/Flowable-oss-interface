import { getSession } from '@/lib/session'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const [session] = await getSession(req)
  if (session.user) {
    return NextResponse.json({
      ...session.user,
      isLoggedIn: true
    })
  } else {
    return NextResponse.json({
      isLoggedIn: false,
      id: '',
      firstName: '',
      lastName: '',
      displayName: '',
      email: ''
    })
  }
}
