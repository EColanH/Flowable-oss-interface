'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faClipboardCheck,
  faGears,
  faSuitcase
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import JsonForm from '@/components/JsonForm'
import useUser from '@/lib/useUser'
import Ajv from 'ajv'
import styles from '@/styles/global.module.scss'
import ActionButton from '@/components/ActionButton'
import { ActionButtonType } from '@/lib/actionButton'
import { backendRequestClient } from '@/lib/fetch'
import { TaskModel, TaskModelResponse, VariablesModel } from '@/types'

function getUrl(type: string, selectedTask: any) {
  let url
  if (type === 'cmmn') {
    url = `/activities/cases/${selectedTask.scopeId}`
  } else {
    url = `/activities/processes/${selectedTask.processInstanceId}`
  }
  return url
}

export default function Task({
  params
}: {
  params: {
    taskId: string
  }
}) {
  const { user } = useUser()
  const [selectedTask, setSelectedTask] = useState<any>()
  const [isCompleted, setIsCompleted] = useState(false)
  const [taskVariables, setTaskVariables] = useState<VariablesModel[]>([])
  const [formUi, setFormUi] = useState()
  const [formSchema, setFormSchema] = useState()
  const [data, setData] = useState<any>({})
  const [isClaim, setIsClaim] = useState(false)
  const [isCandidate, setIsCandidate] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [parentElement, setParentElement] = useState<any>()

  function userIsCandidate(taskId: string) {
    backendRequestClient(`/task/${taskId}`, 'POST', true, user).then(res =>
      setIsCandidate(res)
    )
  }

  async function fetchTask(taskId: string): Promise<TaskModelResponse> {
    const query = encodeURIComponent(
      `?taskId=${taskId}&includeProcessVariables=true&includeTaskLocalVariables=true`
    )
    return backendRequestClient(
      `${process.env.NEXT_PUBLIC_PROCESS_API}/history/historic-task-instances${query}`,
      'GET',
      true
    )
  }

  async function fetchParent(task: TaskModel) {
    let url

    if (task.scopeType === 'cmmn') {
      url = `${process.env.NEXT_PUBLIC_CMMN_API}/cmmn-history/historic-case-instances/${task.scopeId}`
    } else {
      url = `${process.env.NEXT_PUBLIC_PROCESS_API}/history/historic-process-instances/${task.processInstanceId}`
    }
    return backendRequestClient(url, 'GET', true).then(res =>
      setParentElement(JSON.parse(JSON.stringify(res)))
    )
  }

  async function completeTask(taskId: string) {
    const url =
      selectedTask.processInstanceId !== null
        ? `${process.env.NEXT_PUBLIC_PROCESS_API}/runtime`
        : `${process.env.NEXT_PUBLIC_CMMN_API}/cmmn-runtime`
    const variablesToSend = transformVariablesOnComplete(data)
    console.log('SEND_VARIABLES:', variablesToSend)
    return backendRequestClient(`/${url}/tasks/${taskId}`, 'POST', false, {
      action: 'complete',
      variables: variablesToSend
    }).then(res => {
      if (res.ok) {
        setIsCompleted(true)
        document.getElementsByName('refresh')[0].click()
      }
    })
  }

  async function claim(taskId: string) {
    return backendRequestClient(
      `${process.env.NEXT_PUBLIC_PROCESS_API}/runtime/tasks/${taskId}`,
      'POST',
      false,
      {
        action: 'claim',
        assignee: user.id
      }
    ).then(() => setIsClaim(true))
  }

  async function unClaim(taskId: string) {
    return backendRequestClient(
      `${process.env.NEXT_PUBLIC_PROCESS_API}/runtime/tasks/${taskId}`,
      'PUT',
      false,
      {
        assignee: null,
        userDisplayName: null
      }
    ).then(() => setIsClaim(false))
  }

  function transformVariablesOnComplete(variables: any) {
    console.log('TASK_VARIABLES:', taskVariables)
    console.log('DATA_VARIABLES:', variables)
    const keyVariables = Object.keys(variables)
    const variablesToSend = keyVariables.map(key => {
      return {
        name: key,
        value: variables[key],
        scope: 'global'
      }
    })

    return variablesToSend
  }

  useEffect(() => {
    const fetchData = async (
      urlJSON: string,
      type: string,
      variables: any = []
    ) => {
      try {
        const response = await fetch(urlJSON)
        if (!response.ok) {
          throw new Error(`Http status ${response.status}`)
        }
        const data = await response.json()
        if (type === 'ui') {
          setFormUi(data)
        } else {
          setFormSchema(data)
          const keys = Object.keys(data.properties)
          let initialData = {}
          keys.forEach(key => {
            const filterVariables: any = variables.filter(
              (variable: any) => variable.name === key
            )
            initialData = {
              ...initialData,
              [key]: filterVariables.length > 0 ? filterVariables[0].value : ''
            }
          })

          setData(initialData)
        }
      } catch (error: any) {
        console.error(error.message)
      }
    }

    const setTask = async () => {
      const res = await fetchTask(params.taskId)
      const task: TaskModel = res.data[0]
      setSelectedTask(task)
      setTaskVariables(task?.variables)
      setIsClaim(!!task?.assignee)
      setIsCompleted(!!task?.endTime)

      const formKey = task?.formKey

      await fetchData(
        `/api/backend/forms/${formKey}/schema`,
        'schema',
        task?.variables
      )
      await fetchData(`/api/backend/forms/${formKey}/ui`, 'ui')
      await fetchParent(task)
    }

    setTask().then()
  }, [isCompleted, isClaim])

  useEffect(() => {
    selectedTask && userIsCandidate(selectedTask.id)
  }, [selectedTask])

  useEffect(() => {
    if (selectedTask && selectedTask.formKey) {
      const ajv = new Ajv()
      const key = selectedTask?.formKey
      const schemaForm = async () => {
        await fetch(`/api/backend/forms/${key}/schema`).then(async res => {
          const resJSON = await res.json()
          const schema = JSON.stringify(resJSON)
          const valid = ajv.validate(JSON.parse(schema), data)
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setIsValid(valid)
        })
      }
      schemaForm().then()
    }
  }, [selectedTask, data])

  return (
    <div className="column">
      {
        <div className="card">
          <div className={`${styles.cardHeaderPadding} card-header`}>
            {selectedTask ? (
              <div className={'rows container'}>
                <div
                  className={'row'}
                  style={{
                    display:
                      (selectedTask.scopeId ||
                        selectedTask.processInstanceId) &&
                      parentElement
                        ? 'inline-flex'
                        : 'none'
                  }}
                >
                  <Link href={getUrl(selectedTask.scopeType, selectedTask)}>
                    {selectedTask.scopeType ? (
                      <div>
                        <span className="icon is-small">
                          <FontAwesomeIcon
                            icon={faSuitcase}
                            className="fas fa-1x fa-suitcase"
                            aria-hidden={'true'}
                          ></FontAwesomeIcon>
                        </span>{' '}
                        {parentElement?.caseDefinitionName}
                      </div>
                    ) : (
                      <div>
                        <span className="icon is-small">
                          <FontAwesomeIcon
                            icon={faGears}
                            className="fas fa-1x fa-gears"
                            aria-hidden={'true'}
                          ></FontAwesomeIcon>
                        </span>{' '}
                        {parentElement?.processDefinitionName}
                      </div>
                    )}
                  </Link>
                </div>
                <div className={'row'}>
                  <div className={`${styles.titleRow}`}>
                    <span className="icon is-medium">
                      <FontAwesomeIcon
                        icon={faClipboardCheck}
                        className="fas fa-2x fa-clipboardcheck"
                        aria-hidden={'true'}
                      ></FontAwesomeIcon>
                    </span>
                    <span className={`${styles.title}`}>
                      {selectedTask.name}
                    </span>
                  </div>
                  <p>Created on: {selectedTask.startTime}</p>
                  <p>
                    <Link href={'#'}>Assignee: {selectedTask.assignee}</Link>
                  </p>
                  <p>Due date: {selectedTask.dueDate}</p>
                </div>

                <div className={`${styles.alignButtons} row`}>
                  <ActionButton
                    type={ActionButtonType.CLAIM}
                    selectedItem={selectedTask}
                    user={user}
                    isCandidate={isCandidate}
                    claim={() => claim(selectedTask?.id)}
                    unClaim={() => unClaim(selectedTask?.id)}
                  />

                  <ActionButton
                    type={ActionButtonType.COMPLETE}
                    selectedItem={selectedTask}
                    user={user}
                    isCandidate={isCandidate}
                    isClaim={isClaim}
                    isValid={isValid}
                    completeTask={() => completeTask(selectedTask?.id)}
                  />

                  <div
                    style={{
                      display:
                        selectedTask.endTime != null ? 'inline-flex' : 'none'
                    }}
                  >
                    <span className={'has-text-info-dark'}>COMPLETED!</span>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="fas fa-check"
                      aria-hidden={'true'}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            ) : (
              'No task selected'
            )}
          </div>
          <div className="card-content">
            <div className="content">
              {selectedTask?.formKey && formSchema && formUi && data ? (
                <JsonForm
                  data={data}
                  setData={setData}
                  formSchema={formSchema}
                  formUi={formUi}
                  readonly={!(isCandidate && isClaim && !isCompleted)}
                />
              ) : (
                'No form found'
              )}
            </div>
          </div>
        </div>
      }
    </div>
  )
}
