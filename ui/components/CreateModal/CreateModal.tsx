'use client'

import React, { SetStateAction, useState } from 'react'
import styles from '@/styles/global.module.scss'
import { backendRequestClient } from '@/lib/fetch'
import { useRouter } from 'next/navigation'

export default function CreateModal({
  processDefinitions,
  caseDefinitions
}: {
  processDefinitions: Array<any>
  caseDefinitions: Array<any>
}) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleModal = () => {
    setIsModalVisible(!isModalVisible)
  }
  const active = isModalVisible ? 'is-active' : ''

  const [flowableCase, setFlowableCase] = useState('')
  const [flowableProcess, setFlowableProcess] = useState('')
  const onOptionChangeProcess = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setFlowableCase('')
    setFlowableProcess(e.target.value)
  }
  const onOptionChangeCase = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setFlowableProcess('')
    setFlowableCase(e.target.value)
  }

  const router = useRouter()
  const submit = async () => {
    if (flowableProcess !== '') {
      try {
        const data = await backendRequestClient(
          `${process.env.NEXT_PUBLIC_PROCESS_API}/runtime/process-instances`,
          'POST',
          true,
          { processDefinitionKey: flowableProcess }
        )
        handleModal()
        router.push(`/activities/processes/${data.id}`)
      } catch (err) {
        console.log(err)
      }
    } else if (flowableCase !== '') {
      try {
        const data = await backendRequestClient(
          `${process.env.NEXT_PUBLIC_CMMN_API}/cmmn-runtime/case-instances`,
          'POST',
          true,
          { caseDefinitionKey: flowableCase }
        )
        router.push(`/activities/cases/${data.id}`)
        handleModal()
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className="App">
      <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Create</p>
            {/* <button
            onClick={handleClick}
            className="delete"
            aria-label="close"
          /> */}
          </header>
          <section className="modal-card-body">
            <div className="content">
              <h3>Processes</h3>
              {processDefinitions.map((element, i) => {
                return (
                  <div className="cell" key={i}>
                    <input
                      type="radio"
                      id={processDefinitions[i].key}
                      name="flowableProcess"
                      value={processDefinitions[i].key}
                      onChange={onOptionChangeProcess}
                      checked={flowableProcess === processDefinitions[i].key}
                    ></input>
                    <label
                      htmlFor={processDefinitions[i].key}
                      className={`${styles.homeLayoutModalStyles}`}
                    >
                      {processDefinitions[i].name}
                    </label>
                  </div>
                )
              })}
              <br></br>
              <br></br>
              <h3>Cases</h3>
              {caseDefinitions.map((element, i) => {
                return (
                  <div className="cell" key={i}>
                    <input
                      type="radio"
                      id={caseDefinitions[i].key}
                      name="flowableProcess"
                      value={caseDefinitions[i].key}
                      onChange={onOptionChangeCase}
                      checked={flowableCase === caseDefinitions[i].key}
                    ></input>
                    <label
                      htmlFor={caseDefinitions[i].key}
                      className={`${styles.homeLayoutModalStyles}`}
                    >
                      {caseDefinitions[i].name}
                    </label>
                  </div>
                )
              })}
            </div>
          </section>
          <footer className="modal-card-foot">
            {
              <button
                className="button is-success"
                type={'submit'}
                onClick={submit}
              >
                Submit
              </button>
            }
            <button onClick={handleModal} className="button">
              Cancel
            </button>
          </footer>
        </div>
      </div>
      <button
        className={'button is-primary is-fullwidth'}
        onClick={handleModal}
      >
        Create
      </button>
    </div>
  )
}
