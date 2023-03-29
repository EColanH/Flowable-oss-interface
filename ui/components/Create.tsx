import React from 'react'
import { backendRequestServer } from '@/lib/fetch'
import { cookies } from 'next/headers'
import { getRequestCookie } from '@/lib/getRequestCookie'
import CreateModal from '@/components/CreateModal'
import { User } from '@/lib/user'

async function getProcess(user: User) {
  return backendRequestServer(
    `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_PROCESS_API}/repository/process-definitions`,
    'GET',
    user
  )
}

async function getCases(user: User) {
  return backendRequestServer(
    `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_CMMN_API}/cmmn-repository/case-definitions`,
    'GET',
    user
  )
}

export default async function Create() {
  const user = (await getRequestCookie(cookies())) as User
  const processDefinitions = await getProcess(user)
  const caseDefinitions = await getCases(user)
  return (
    <CreateModal
      processDefinitions={processDefinitions.data}
      caseDefinitions={caseDefinitions.data}
    />
  )
}
