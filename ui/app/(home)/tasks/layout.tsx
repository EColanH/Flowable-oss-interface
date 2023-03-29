'use client'

import React, { useEffect, useState } from 'react'
import List from '@/components/List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import styles from '@/styles/global.module.scss'
import { backendRequestClient } from '@/lib/fetch'
import { TaskModelResponse } from '@/types'
import Notification from '@/components/Notification'

export default function TasksLayout({
  children
}: {
  children: React.ReactNode
  params: {
    taskId: string
  }
}) {
  const [taskCardList, setTaskCardList] = useState<any>([])
  const [query, setQuery] = useState('')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [error, setError] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function fetchTasks(): Promise<TaskModelResponse> {
    const nameLikeQuery =
      query.trim().length > 0 ? 'nameLikeIgnoreCase=%25' + query + '%25&' : ''
    const queryUrl = encodeURIComponent(
      `?${nameLikeQuery}sort=createTime&order=desc`
    )
    return backendRequestClient(
      `${process.env.NEXT_PUBLIC_PROCESS_API}/runtime/tasks${queryUrl}`,
      'GET',
      true
    ).catch(errorState)
  }

  const errorState = () => {
    setError(true)
    setErrorMsg(
      'An unexpected error happened. Try again later or contact with an administrator'
    )
  }

  function onInputChange(event: any) {
    const value = event.target.value
    if (value) setQuery(String.prototype.trim.call(value))
    else setQuery('')
  }

  useEffect(() => {
    const setTasks = async () => {
      const res = await fetchTasks()

      setTaskCardList(res.data)
    }

    setTasks()
  }, [query, isRefreshing])

  const onCloseError = () => {
    setError(false)
    setErrorMsg('')
  }

  return (
    <section className="">
      <div className="columns">
        <div className={`${styles.layoutColumnMaxWidth} column`}>
          <div>
            <div className="has-addons">
              <div className="control field-body">
                <input
                  type="text"
                  defaultValue={query}
                  onChange={e => onInputChange(e)}
                  className="input is-info is-large is-narrow field"
                  placeholder="Search..."
                />
                <button
                  name={'refresh'}
                  type={'button'}
                  className={'is-info button'}
                  onClick={() => setIsRefreshing(!isRefreshing)}
                >
                  <span className={'icon is-large field'}>
                    <FontAwesomeIcon
                      icon={faArrowsRotate}
                      className="fas fa-2x fa-arrowrotate"
                      aria-hidden={'true'}
                    ></FontAwesomeIcon>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {!taskCardList ? <p>No data</p> : List(taskCardList, true)}
        </div>
        {children}
      </div>
      <Notification
        message={errorMsg}
        closable={false}
        tryAgain={true}
        close={onCloseError}
      />
    </section>
  )
}
