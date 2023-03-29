import { backendRequestServer } from '@/lib/fetch'
import List from '@/components/List'
import { TaskModelResponse } from '@/types'
import { getRequestCookie } from '@/lib/getRequestCookie'
import { cookies } from 'next/headers'
import { User } from '@/lib/user'

async function fetchCompletedTasks(user: User): Promise<TaskModelResponse> {
  return backendRequestServer(
    `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_PROCESS_API}/history/historic-task-instances?sort=endTime&order=desc`,
    'GET',
    user
  )
}

export default async function CompletedTasks() {
  const user = (await getRequestCookie(cookies())) as User
  const res = await fetchCompletedTasks(user)
  const taskList: any = res.data
  return List(taskList, true)
}
