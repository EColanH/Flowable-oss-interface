'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useUser from '@/lib/useUser'
import { backendRequestClient } from '@/lib/fetch'

export default function Footer() {
  const { user, mutateUser } = useUser()
  const router = useRouter()
  const onClickLogout = async (event: React.FormEvent) => {
    event.preventDefault()
    await mutateUser(await backendRequestClient('/logout', 'GET', true))
    router.push('/login')
  }
  return (
    <footer
      className={'has-text-centered is-flex-align-items-flex-end mt-auto'}
    >
      <Image
        className="menu-label is-hidden-touch center"
        src={'/profilepicture.png'}
        alt={'Profile image'}
        width={'40'}
        height={'40'}
      />
      <div
        className="navbar-menu is-fullwidth0
                    "
        id="navMenu"
      >
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">{user?.displayName}</a>
            <div className="navbar-dropdown">
              <a className="navbar-item" onClick={onClickLogout}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
