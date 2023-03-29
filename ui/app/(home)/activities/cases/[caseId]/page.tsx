import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import styles from 'styles/global.module.scss'
import Stages from '@/components/Stages'
import ParentsButton from '@/components/ParentsButton'
import List from '@/components/List'
import {
  fetchCompletedTasks,
  fetchDueDateTasks,
  fetchCase,
  fetchPendingTasks
} from '@/lib/caseFetch'

export default async function CasePage({
  params
}: {
  params: {
    caseId: string
  }
}) {
  const selectedCase: any = await fetchCase(params.caseId)
  const pendingTasks = (await fetchPendingTasks(params.caseId)).data
  const terminated = selectedCase.state === 'terminated'
  const dueDateTasks = (await fetchDueDateTasks(params.caseId)).data
  const completedTasks = (await fetchCompletedTasks(params.caseId)).data

  return (
    <div className="column">
      <div className="card">
        <div className={`${styles.cardHeaderPadding} card-header`}>
          {selectedCase ? (
            <div className={'rows container'}>
              <div className={'row'}>
                <div className={`${styles.titleRow}`}>
                  <span className="icon is-medium">
                    <FontAwesomeIcon
                      icon={faSuitcase}
                      className="fas fa-2x fa-suitcase"
                      aria-hidden={'true'}
                    ></FontAwesomeIcon>
                  </span>
                  <span className={`${styles.title}`}>
                    {selectedCase.caseDefinitionName}
                  </span>
                </div>
                <p>Initiated:{selectedCase.startTime}</p>
                <p>
                  <Link href={'#'}> By: {selectedCase.startUserId}</Link>
                </p>
                <p>Pending tasks: {pendingTasks.length}</p>
                {/* @ts-expect-error Async Server Componen */}
                <Stages caseId={params.caseId} />
              </div>
              <div className={`${styles.alignButtons} row`}>
                <ParentsButton
                  selection={selectedCase}
                  terminated={terminated}
                  root={true}
                />
                <div
                  style={{
                    display: terminated ? 'inline-flex' : 'none'
                  }}
                >
                  <div>
                    <span className={'has-text-info-dark'}>
                      Case is terminated!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            'No case selected'
          )}
        </div>
        <div className="card-content">
          <div className="content">
            <div>
              <section className="">
                <div
                  className="columns is-multiline is-centered cards-container"
                  id="sectioncontainer"
                >
                  <div className="column">
                    <article className="message is-info">
                      <div className="message-header">
                        <p className={`${styles.headerCardFont}`}>
                          {'Recent activities'}
                        </p>
                      </div>
                      <div className="message-body">
                        {List(pendingTasks, true)}
                      </div>
                    </article>
                  </div>
                  <div className="column">
                    <article className="message is-warning">
                      <div className="message-header">
                        <p className={`${styles.headerCardFont}`}>
                          {'Tasks soon to expire'}
                        </p>
                      </div>
                      <div className="message-body">
                        {List(dueDateTasks, true)}
                      </div>
                    </article>
                  </div>
                  <div className="column">
                    <article className="message is-primary">
                      <div className="message-header">
                        <p className={`${styles.headerCardFont}`}>
                          {'Tasks completed'}
                        </p>
                      </div>
                      <div className="message-body">
                        {List(completedTasks, true)}
                      </div>
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
