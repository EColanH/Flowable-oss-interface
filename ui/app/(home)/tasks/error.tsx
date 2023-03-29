'use client'

import React from 'react'
import styles from '@/styles/global.module.scss'

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log('logging error:', error)
  }, [error])

  return (
    <div className={`notification is-danger ${styles.errorContainer}`}>
      <h1 className="title is-1">Error:</h1>
      <h4 className="title is-4">{error?.message}</h4>
      <div>
        <button className="button is-danger is-light" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  )
}
