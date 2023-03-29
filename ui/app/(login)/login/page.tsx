'use client'

import React, { useState } from 'react'
import useUser from 'lib/useUser'
import { CustomError } from '@/lib/error'
import LoginForm from '@/components/LoginForm'
import { backendRequestClientLogin } from '@/lib/fetch'
import Notification from '@/components/Notification'

export default function Login() {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true
  })

  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setErrorMsg('')
    const inputs = event.currentTarget.getElementsByTagName('input')
    const body = {
      username: inputs.namedItem('username')!.value,
      password: inputs.namedItem('password')!.value
    }
    try {
      await mutateUser(await backendRequestClientLogin(body))
    } catch (error) {
      if (error instanceof CustomError) {
        setErrorMsg(error.data.message)
      } else {
        console.error('An unexpected error happened:', error)
      }
    }
  }

  return (
    <div className="hero is-fullheight">
      <div
        className="hero-body is-justify-content-center is-align-items-center"
        style={{ flexDirection: 'column' }}
      >
        <Notification message={errorMsg} closable={true} tryAgain={false} />
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}
