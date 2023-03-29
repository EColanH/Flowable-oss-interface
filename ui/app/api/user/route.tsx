import { getSession } from '@/lib/session'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const [session] = await getSession(req)
  if (session.user) {
    const userInfo = session.user
    return NextResponse.json({
      isLoggedIn: true,
      id: userInfo.id,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      displayName: userInfo.displayName,
      email: userInfo.email
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
