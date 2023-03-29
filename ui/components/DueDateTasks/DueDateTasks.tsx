import { backendRequestServer } from '@/lib/fetch'
import List from '@/components/List'
import { TaskModelResponse } from '@/types'
import { getRequestCookie } from '@/lib/getRequestCookie'
import { cookies } from 'next/headers'
import { User } from '@/lib/user'

async function fetchDueDateTasks(user: User): Promise<TaskModelResponse> {
  return backendRequestServer(
    `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_PROCESS_API}/runtime/tasks?sort=dueDate&order=desc`,
    'GET',
    user
  )
}

export default async function DueDateTasks() {
  const user = (await getRequestCookie(cookies())) as User
  const res = await fetchDueDateTasks(user)
  const taskList: any = res.data
  return List(taskList, true)
}
