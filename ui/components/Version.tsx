'use client'

import { useState } from 'react'
import { backendRequestClient } from '@/lib/fetch'

export default function Version() {
  const [isVersion, setVersion] = useState<any>([])
  const fetchData = async () => {
    const response = await backendRequestClient('/actuator/info', 'GET', true)
    setVersion(response.flowable.version)
  }
  fetchData().then()

  return <h1 className="title is-5">Flowable version - {isVersion} </h1>
}
