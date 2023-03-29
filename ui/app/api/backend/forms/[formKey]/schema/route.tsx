import { NextRequest } from 'next/server'
import { getBasicAuth } from '@/lib/user'

export async function GET(
  req: NextRequest,
  {
    params
  }: {
    params: {
      formKey: string
    }
  }
) {
  const { formKey } = params
  const header = await getBasicAuth(req)
  const requestInit: RequestInit = {
    credentials: 'include',
    headers: header
  }

  return fetch(
    `${process.env.BACKEND_URL}/forms/${formKey}Schema.json`,
    requestInit
  )
}
