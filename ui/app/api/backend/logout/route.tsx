import { getSession } from '@/lib/session'
import { createResponse } from '@/lib/createResponse'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const [session, res] = await getSession(req)
  session.destroy()
  const userInfo = {
    isLoggedIn: false,
    id: '',
    firstName: '',
    lastName: '',
    displayName: '',
    email: ''
  }
  return createResponse(res, JSON.stringify(userInfo), {
    headers: { 'Content-Type': 'application/json' }
  })
}
