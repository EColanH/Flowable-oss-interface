import { ActionButtonType } from '@/lib/actionButton'
import React from 'react'

export interface ActionButtonsProps {
  type: ActionButtonType
  selectedItem?: any
  user?: any
  isCandidate?: boolean
  isClaim?: boolean
  isValid?: boolean
  isTerminatedState?: boolean
  claim?: any
  unClaim?: any
  completeTask?: any
  terminate?: any
  showPreview?: any
}

function renderButton(
  type: ActionButtonType,
  selectedItem?: any,
  user?: any,
  isCandidate?: boolean,
  isClaim?: boolean,
  isValid?: boolean,
  isTerminatedState?: boolean,
  claim?: any,
  unClaim?: any,
  completeTask?: any,
  terminate?: any,
  showPreview?: any
) {
  switch (type) {
    case ActionButtonType.CLAIM:
      return (
        <>
          <button
            onClick={
              selectedItem.assignee != null
                ? () => unClaim(selectedItem.id)
                : () => claim(selectedItem.id)
            }
            className={'button is-primary'}
            style={{
              display: selectedItem.endTime != null ? 'none' : 'inline-flex'
            }}
            disabled={!isCandidate}
          >
            {selectedItem.assignee != null ? 'Unclaim' : 'Claim'}
          </button>
        </>
      )
    case ActionButtonType.COMPLETE:
      return (
        <>
          <button
            onClick={() => completeTask(selectedItem.id)}
            className={'button is-primary'}
            style={{
              display: selectedItem.endTime != null ? 'none' : 'inline-flex'
            }}
            disabled={
              !isCandidate ||
              !isClaim ||
              selectedItem.assignee !== user.id ||
              !isValid
            }
          >
            Complete
          </button>
        </>
      )
    case ActionButtonType.TERMINATE:
      return (
        <>
          <button
            onClick={() => terminate(selectedItem.id)}
            style={{ display: isTerminatedState ? 'none' : 'inline-flex' }}
            className={'button is-primary'}
          >
            Cancel
          </button>
        </>
      )
    case ActionButtonType.SHOW_PREVIEW:
      return (
        <>
          <button onClick={() => showPreview()} className={'button is-info'}>
            {' '}
            See Diagram
          </button>
        </>
      )
    default:
      return <></>
  }
}

const ActionButton = ({
  type,
  selectedItem,
  user,
  isCandidate = false,
  isClaim = false,
  isValid = false,
  isTerminatedState = false,
  claim,
  unClaim,
  completeTask,
  terminate,
  showPreview
}: ActionButtonsProps) => {
  return (
    <>
      {renderButton(
        type,
        selectedItem,
        user,
        isCandidate,
        isClaim,
        isValid,
        isTerminatedState,
        claim,
        unClaim,
        completeTask,
        terminate,
        showPreview
      )}
    </>
  )
}

export default ActionButton
