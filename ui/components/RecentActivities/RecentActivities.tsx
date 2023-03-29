import { backendRequestServer } from '@/lib/fetch'
import List from '@/components/List'
import { getRequestCookie } from '@/lib/getRequestCookie'
import { cookies } from 'next/headers'
import { User } from '@/lib/user'

async function fetchProcess(user: User) {
  return backendRequestServer(
    `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_PROCESS_API}/runtime/process-instances?sort=startTime&order=desc`,
    'GET',
    user
  )
}

async function fetchCases(user: User) {
  return backendRequestServer(
    `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_CMMN_API}/cmmn-runtime/case-instances?sort=startTime&order=desc`,
    'GET',
    user
  )
}

export default async function RecentActivities() {
  const user = (await getRequestCookie(cookies())) as User
  const promises = [await fetchProcess(user), await fetchCases(user)]
  const [bpmnData, cmmnData] = (await Promise.all(promises)).map(
    res => res.data
  )

  let data: any = []
  data = data.concat(bpmnData).concat(cmmnData)

  data = data.sort((a: any, b: any) => {
    const date1: any = new Date(a.startTime)
    const date2: any = new Date(b.startTime)
    return date2 - date1
  })

  return List(data, false)
}
