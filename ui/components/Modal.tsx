/* eslint-disable react/display-name */

import { Modal } from 'antd'
import React from 'react'
import { ModalProps } from '@/types/modal_props'
import { Modal as ModalUtil } from '@/lib/modal/model_utils'

export const ModalComponent = React.forwardRef(
  (propsValues: ModalProps, ref) => {
    const {
      component: RenderInner,
      props,
      closable = true,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClose = () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      closeModal = () => {},
      isVisible,
      width = 500,
      title,
      className = '',
      modalFooter,
      closeable = true,
      closeIcon = false,
      centered = true
    } = propsValues

    const onModalClose = (isClose: any) => {
      if (!closable) return
      if (isClose) {
        closeModal()
        onClose()
      }
      ModalUtil.close()
    }

    return (
      <Modal
        visible={isVisible}
        title={title}
        onCancel={onModalClose}
        footer={modalFooter || null}
        width={width}
        className={className}
        closeIcon={closeIcon}
        closable={closeable}
        centered={centered}
      >
        <div
          style={{
            position: 'relative'
          }}
        >
          {RenderInner && <RenderInner inModal={true} {...props} />}
        </div>
      </Modal>
    )
  }
)
