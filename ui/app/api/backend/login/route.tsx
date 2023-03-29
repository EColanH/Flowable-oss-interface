import { encode, User } from '@/lib/user'
import { getSession } from '@/lib/session'
import { NextRequest, NextResponse } from 'next/server'
import { createResponse } from '@/lib/createResponse'

export async function POST(req: NextRequest) {
  const [session, res] = await getSession(req)
  const { username, password } = await req.json()
  const auth = encode(username, password)
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/idm-api/users/${username}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: auth as string
        }
      }
    )
    if (response.status === 401) {
      return NextResponse.json(
        {
          message: 'Bad credentials. Please try again'
        },
        {
          status: 401
        }
      )
    } else {
      const { id, firstName, lastName, displayName, email } =
        await response.json()
      const userInfo = new User(
        true,
        id,
        firstName,
        lastName,
        displayName,
        email,
        password
      )
      session.user = userInfo
      await session.save()
      return createResponse(res, JSON.stringify(userInfo), {
        headers: { 'Content-Type': 'application/json' }
      })
    }
  } catch (error) {
    return NextResponse.json(
      {
        message:
          'Internal error. Please contact an administrator or try again later'
      },
      {
        status: 500
      }
    )
  }
}
