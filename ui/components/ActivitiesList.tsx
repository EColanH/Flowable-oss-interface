'use client'

import React, { useEffect, useState } from 'react'
import styles from '@/styles/global.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import List from '@/components/List'
import Card from '@/components/Card'
import { Type } from '@/lib/card'
import { backendRequestClient } from '@/lib/fetch'
import Notification from '@/components/Notification'

export default function ActivitiesList() {
  const [activitiesCardList, setActivitiesCardList] = useState([])
  const [query, setQuery] = useState('')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [error, setError] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function fetchActivities() {
    const nameLikeQuery =
      query.trim().length > 0 ? 'nameLikeIgnoreCase=%25' + query + '%25&' : ''
    const queryUrl = encodeURIComponent(
      `?${nameLikeQuery}sort=startTime&order=desc`
    )
    const promises = [
      backendRequestClient(
        `${process.env.NEXT_PUBLIC_PROCESS_API}/runtime/process-instances${queryUrl}`,
        'GET',
        true
      ).catch(errorState),
      backendRequestClient(
        `${process.env.NEXT_PUBLIC_CMMN_API}/cmmn-runtime/case-instances?${queryUrl}`,
        'GET',
        true
      ).catch(errorState)
    ]

    const [bpmnData, cmmnData] = (await Promise.all(promises)).map(p => p.data)
    return { props: { bpmnData, cmmnData } }
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
    fetchActivities().then(res => {
      let data: any = []
      const items: any = []
      data = data.concat(res.props.bpmnData).concat(res.props.cmmnData)

      data = data.sort((a: any, b: any) => {
        const date1: any = new Date(a.startTime)
        const date2: any = new Date(b.startTime)
        return date2 - date1
      })

      data.forEach((elem: any) => {
        items.push(
          Card(elem.processDefinitionId ? Type.PROCESS : Type.CASE, elem)
        )
      })

      setActivitiesCardList(data)
    })
  }, [query, isRefreshing])

  const onCloseError = () => {
    setError(false)
    setErrorMsg('')
  }

  return (
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
      {!activitiesCardList ? <p>No data</p> : List(activitiesCardList, false)}
      <Notification
        message={errorMsg}
        closable={false}
        tryAgain={true}
        close={onCloseError}
      />
    </div>
  )
}
