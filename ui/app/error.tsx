'use client'

import React from 'react'
import styles from '@/styles/global.module.scss'
import Image from 'next/image'

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log('logging error:', error)
  }, [error])

  return (
    <html>
      <head></head>
      <body>
        <div
          className={`columns notification is-danger is-light ${styles.errorContainer}`}
        >
          <div className={'column is-8'}>
            <h1 className="title is-1">Error:</h1>
            <h4 className="title is-4">
              An unexpected error happened. Try again later or contact with an
              administrator
            </h4>
            <div>
              <button
                className="button is-danger"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </div>
          </div>
          <div className={'column is-4'}>
            <Image
              src={'/error.jpg'}
              alt={'ERROR'}
              width={'400'}
              height={'200'}
            />
          </div>
        </div>
      </body>
    </html>
  )
}
