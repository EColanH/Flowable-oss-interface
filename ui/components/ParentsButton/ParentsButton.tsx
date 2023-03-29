'use client'

import ActionButton from '@/components/ActionButton'
import { ActionButtonType } from '@/lib/actionButton'
import React, { useState } from 'react'
import { backendRequestClient } from '@/lib/fetch'
import Diagram, { DiagramProps } from '@/components/Diagram'
import Notification from '@/components/Notification'

export default function ParentsButton({
  selection,
  terminated,
  root
}: {
  selection: any
  terminated: boolean
  root: boolean
}) {
  const [showDiagram, setShowDiagram] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function terminate(id: string) {
    if (root) {
      return backendRequestClient(
        `${process.env.NEXT_PUBLIC_CMMN_API}/cmmn-runtime/case-instances/` + id,
        'DELETE',
        false
      )
        .then(() => {
          window.location.reload()
        })
        .catch(errorState)
    } else {
      return backendRequestClient(
        `${process.env.NEXT_PUBLIC_PROCESS_API}/runtime/process-instances/` +
          id,
        'DELETE',
        false
      )
        .then(() => {
          window.location.reload()
        })
        .catch(errorState)
    }
  }

  const errorState = () => {
    setError(true)
    setErrorMsg(
      'An unexpected error happened. Try again later or contact with an administrator'
    )
  }

  const onShowDiagram = () => {
    setShowDiagram(true)
  }
  const onCloseModal = () => {
    setShowDiagram(false)
  }

  const onCloseError = () => {
    setError(false)
    setErrorMsg('')
  }

  const diagramProps: DiagramProps = {
    param: `${selection.id}`,
    onCloseModal,
    showDiagram,
    forCase: root
  }

  return (
    <>
      <ActionButton
        type={ActionButtonType.SHOW_PREVIEW}
        showPreview={() => onShowDiagram()}
      />
      <ActionButton
        type={ActionButtonType.TERMINATE}
        selectedItem={selection}
        isTerminatedState={terminated}
        terminate={() => terminate(selection.id)}
      />
      <Diagram {...diagramProps} />
      <Notification
        message={errorMsg}
        closable={true}
        tryAgain={false}
        close={onCloseError}
      />
    </>
  )
}
