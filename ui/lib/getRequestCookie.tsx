import { User } from '@/lib/user'
import { unsealData } from 'iron-session'
import { ReadonlyRequestCookies } from 'next/dist/server/app-render'
import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies'

export async function getRequestCookie(
  cookies: RequestCookies | ReadonlyRequestCookies
): Promise<User | null> {
  const cookieName = 'iron-session/flowable'
  const found = cookies.get(cookieName)

  if (!found) return null

  const { user } = await unsealData(found.value, {
    password: process.env.SECRET_COOKIE_PASSWORD as string
  })

  return user as unknown as User
}
