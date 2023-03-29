'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useUser from '@/lib/useUser'
import Image from 'next/image'
import { backendRequestClient } from '@/lib/fetch'
import styles from '@/styles/global.module.scss'

export default function LogoutTimer({
  children
}: {
  children: React.ReactNode
}) {
  const { user, mutateUser } = useUser({
    redirectTo: '/login',
    redirectIfFound: false
  })

  const router = useRouter()
  let timeout: NodeJS.Timeout | null = null

  const goBackToHome = async () => {
    await mutateUser(await backendRequestClient('/logout', 'GET', true))
    router.push('/login')
  }

  const automaticTimeout = Number(String(process.env.AUTOMATIC_LOGOUT_TIMEOUT))

  const restartAutoReset = () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      goBackToHome().then()
    }, 1000 * automaticTimeout)
  }

  const onMouseMove = () => {
    restartAutoReset()
  }

  useEffect(() => {
    restartAutoReset()

    // listen for mouse events
    window.addEventListener('mousemove', onMouseMove)

    // cleanup
    return () => {
      if (timeout) {
        clearTimeout(timeout)
        window.removeEventListener('mousemove', onMouseMove)
      }
    }
  }, [router, timeout])

  return (
    <>
      {!user || user.isLoggedIn === false ? (
        <div className={`${styles.transitionImg}`}>
          <Image
            className="menu-label is-hidden-touch logo"
            src={'/logo.png'}
            alt={'Flowable OSS'}
            width={'224'}
            height={'56'}
          />
        </div>
      ) : (
        children
      )}
    </>
  )
}
