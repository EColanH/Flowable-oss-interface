'use client'

import React, { useEffect, useState } from 'react'
import styles from '@/styles/global.module.scss'

export default function Notification({
  message,
  closable,
  tryAgain,
  close
}: {
  message: string
  closable: boolean
  tryAgain: boolean
  close?: any
}) {
  const [newMessage, setNewMessage] = useState<string>()
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    setNewMessage(message)
  }, [message])

  const onClick = () => {
    setClosing(true)
    setTimeout(() => {
      setNewMessage('')
      setClosing(false)
    }, 1000)
  }

  const styling = close
    ? styles.notification_danger_details
    : styles.notification_danger_login

  if (newMessage?.trim() !== '' && newMessage !== undefined) {
    return (
      <div
        className={`columns is-flex is-flex-direction-column box notification
          ${styling} is-danger has-text-centered ${
          closing ? (close ? styles.fadeoutDetails : styles.fadeout) : ''
        }`}
      >
        {closable && (
          <button
            className={`column ${styles.level_close} delete`}
            type="button"
            onClick={() => {
              onClick()
              if (close) {
                close()
              }
            }}
          ></button>
        )}
        <p className="column">{message}</p>
        {tryAgain && (
          <div>
            <button
              className="button is-danger is-light"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    )
  } else {
    return <></>
  }
}
