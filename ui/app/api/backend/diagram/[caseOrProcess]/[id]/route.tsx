import { NextRequest } from 'next/server'
import { getBasicAuth } from '@/lib/user'

export async function GET(
  req: NextRequest,
  {
    params
  }: {
    params: {
      caseOrProcess: string
      id: string
    }
  }
) {
  const { caseOrProcess, id } = params
  const header = await getBasicAuth(req)
  const requestInit: RequestInit = {
    credentials: 'include',
    headers: header
  }

  if (caseOrProcess === 'process') {
    return fetch(
      `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_PROCESS_API}/runtime/process-instances/${id}/diagram`,
      requestInit
    )
  } else {
    return fetch(
      `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_CMMN_API}/cmmn-runtime/case-instances/${id}/diagram`,
      requestInit
    )
  }
}
