import { NextRequest } from 'next/server'
import { getBasicAuth } from '@/lib/user'

export async function POST(
  req: NextRequest,
  {
    params
  }: {
    params: {
      taskId: string
    }
  }
) {
  const { taskId } = params
  const header = await getBasicAuth(req)
  const requestInit: RequestInit = {
    method: 'POST',
    credentials: 'include',
    headers: header
  }
  const { action, assignee } = await req.json()
  const bodyReq = {
    action: action,
    assignee: assignee
  }

  requestInit.body = JSON.stringify(bodyReq)

  return await fetch(
    `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_PROCESS_API}/runtime/tasks/${taskId}`,
    requestInit
  )
}
