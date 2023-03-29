import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import styles from 'styles/global.module.scss'
import {
  fetchCompletedTasks,
  fetchDueDateTasks,
  fetchProcess,
  fetchRecentTasks
} from '@/lib/processFetch'
import List from '@/components/List'
import ParentsButton from '@/components/ParentsButton'

export default async function ProcessPage({
  params
}: {
  params: {
    processId: string
  }
}) {
  const selectedProcess: any = await fetchProcess(params.processId)
  const pendingTasks = (await fetchRecentTasks(params.processId)).data
  const terminated = !!selectedProcess.endTime
  const dueDateTasks = (await fetchDueDateTasks(params.processId)).data
  const completedTasks = (await fetchCompletedTasks(params.processId)).data

  return (
    <div className="column">
      <div className="card">
        <div className={`${styles.cardHeaderPadding} card-header`}>
          {selectedProcess ? (
            <div className={'rows container'}>
              <div className={'row'}>
                <div className={`${styles.titleRow}`}>
                  <span className="icon is-medium">
                    <FontAwesomeIcon
                      icon={faGears}
                      className="fas fa-2x fa-gears"
                      aria-hidden={'true'}
                    ></FontAwesomeIcon>
                  </span>
                  <span className={`${styles.title}`}>
                    {selectedProcess.processDefinitionName}
                  </span>
                </div>
                <p>Initiated: {selectedProcess.startTime}</p>
                <p>
                  <Link href={'#'}> By: {selectedProcess.startUserId}</Link>
                </p>
                <p>Pending tasks: {pendingTasks.length}</p>
              </div>
              <div className={`${styles.alignButtons} row`}>
                <ParentsButton
                  selection={selectedProcess}
                  terminated={terminated}
                  root={false}
                />
                <div
                  style={{
                    display: terminated ? 'inline-flex' : 'none'
                  }}
                >
                  <div>
                    <span className={'has-text-info-dark'}>
                      Process is terminated!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            'No process selected'
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
