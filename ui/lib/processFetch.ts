import { backendRequestServer } from '@/lib/fetch'
import { ProcessModel, TaskModelResponse } from '@/types'
import { getRequestCookie } from '@/lib/getRequestCookie'
import { cookies } from 'next/headers'
import { User } from '@/lib/user'

const PROCESS_HISTORY_URL = `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_PROCESS_API}/history/historic-task-instances?processInstanceId=`

async function getUser() {
  return (await getRequestCookie(cookies())) as User
}

export async function fetchDueDateTasks(
  processId: string
): Promise<TaskModelResponse> {
  return backendRequestServer(
    `${PROCESS_HISTORY_URL}${processId}&finished=false&sort=dueDate&order=desc`,
    'GET',
    await getUser()
  )
}

export async function fetchRecentTasks(
  processId: string
): Promise<TaskModelResponse> {
  return backendRequestServer(
    `${PROCESS_HISTORY_URL}${processId}&finished=false&sort=startTime&order=desc`,
    'GET',
    await getUser()
  )
}

export async function fetchCompletedTasks(
  processId: string
): Promise<TaskModelResponse> {
  return backendRequestServer(
    `${PROCESS_HISTORY_URL}${processId}&finished=true&sort=endTime&order=desc`,
    'GET',
    await getUser()
  )
}

export async function fetchProcess(processId: string): Promise<ProcessModel> {
  return backendRequestServer(
    `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_PROCESS_API}/history/historic-process-instances/` +
      processId,
    'GET',
    await getUser()
  )
}
