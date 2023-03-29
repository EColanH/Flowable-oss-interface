import React from 'react'
import styles from '@/styles/global.module.scss'
import Image from 'next/image'
import Menu from '@/components/Menu'
import Create from '@/components/Create'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <nav
      className={`${styles.layoutHomeNavMaxWidth} column is-fullheight section hero`}
    >
      <Link className={'logo-section'} href={'/'}>
        <Image
          className="menu-label is-hidden-touch logo"
          src={'/logo.png'}
          alt={'Flowable OSS'}
          width={'300'}
          height={'20'}
        />
      </Link>
      <Menu />
      <br />
      {/* @ts-expect-error Async Server Component */}
      <Create />
      <Footer />
    </nav>
  )
}
