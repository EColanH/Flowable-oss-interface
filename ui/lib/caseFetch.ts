import { backendRequestServer } from '@/lib/fetch'
import { CaseModel, TaskModelResponse } from '@/types'
import { getRequestCookie } from '@/lib/getRequestCookie'
import { cookies } from 'next/headers'
import { User } from '@/lib/user'

const CASE_HISTORY_URL = `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_CMMN_API}/cmmn-history/historic-case-instances`

async function getUser() {
  return (await getRequestCookie(cookies())) as User
}

export async function fetchCase(caseId: string): Promise<CaseModel> {
  return backendRequestServer(
    `${CASE_HISTORY_URL}/` + caseId,
    'GET',
    await getUser()
  )
}

export async function fetchPendingTasks(
  caseId: string
): Promise<TaskModelResponse> {
  return backendRequestServer(
    `${CASE_HISTORY_URL}?caseInstanceId=` +
      caseId +
      '&finished=false&sort=startTime&order=desc',
    'GET',
    await getUser()
  )
}

export async function fetchDueDateTasks(
  caseId: string
): Promise<TaskModelResponse> {
  return backendRequestServer(
    `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_CMMN_API}/cmmn-history/historic-task-instances?caseInstanceId=` +
      caseId +
      '&finished=false&sort=dueDate&order=desc',
    'GET',
    await getUser()
  )
}

export async function fetchCompletedTasks(
  caseId: string
): Promise<TaskModelResponse> {
  return backendRequestServer(
    `${CASE_HISTORY_URL}?caseInstanceId=` +
      caseId +
      '&finished=true&sort=endTime&order=desc',
    'GET',
    await getUser()
  )
}
