'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDashboard, faHome, faTasks } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function Version() {
  return (
    <ul className="menu-list">
      <li>
        <Link href={'/'} className={usePathname() === '/' ? 'is-active' : ''}>
          <span className="icon is-medium">
            <FontAwesomeIcon
              icon={faDashboard}
              className="fas fa-dashboard"
              aria-hidden={'true'}
            ></FontAwesomeIcon>
          </span>{' '}
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          href={'/activities'}
          className={usePathname().includes('/activities') ? 'is-active' : ''}
        >
          <span className="icon is-medium">
            <FontAwesomeIcon
              icon={faHome}
              className="fas fa-dashboard"
              aria-hidden={'true'}
            ></FontAwesomeIcon>
          </span>{' '}
          Activities
        </Link>
      </li>
      <li>
        <Link
          href={'/tasks'}
          className={usePathname().includes('/tasks') ? 'is-active' : ''}
        >
          <span className="icon is-medium">
            <FontAwesomeIcon
              icon={faTasks}
              className="fas fa-dashboard"
              aria-hidden={'true'}
            ></FontAwesomeIcon>
          </span>{' '}
          Tasks
        </Link>
      </li>
    </ul>
  )
}
