import '@/styles/global.sass'
import LogoutTimer from '@/components/LogoutTimer'
import React from 'react'
import styles from '@/styles/global.module.scss'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'Flowable Quick Starter',
  viewport: 'width=device-width, initial-scale=1',
  description: 'Flowable Quick Starter'
}

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LogoutTimer>
          <section
            className={`${styles.layoutHomeSectionHeight} main-content is-fullheight columns`}
          >
            <Sidebar />
            <div className={`${styles.layoutHomePadding} column is-fullwidth`}>
              <main>{children}</main>
            </div>
          </section>
        </LogoutTimer>
      </body>
    </html>
  )
}
