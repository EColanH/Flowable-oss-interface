import { backendRequestServer } from '@/lib/fetch'
import { StageModel } from '@/types'
import React from 'react'
import { getRequestCookie } from '@/lib/getRequestCookie'
import { cookies } from 'next/headers'
import { User } from '@/lib/user'

async function getStages(caseId: string, user: User): Promise<StageModel[]> {
  return backendRequestServer(
    `${process.env.BACKEND_URL}${process.env.NEXT_PUBLIC_CMMN_API}/cmmn-history/historic-case-instances/` +
      caseId +
      '/stage-overview?&sort=endTime&order=desc',
    'GET',
    user
  )
}

export default async function Stages({ caseId }: { caseId: string }) {
  const user = (await getRequestCookie(cookies())) as User
  const res = await getStages(caseId, user)
  const stageList: any[] = []

  res.forEach(function (stage: StageModel) {
    stageList.push(stage)
  })

  return (
    <p>
      Stage list:{' '}
      {stageList && stageList.length > 0
        ? stageList.map((element, i) => (
            <span
              style={{
                color: stageList[i].current ? 'green' : 'red'
              }}
              key={i}
            >
              {element.name},{' '}
            </span>
          ))
        : 'none'}
    </p>
  )
}
