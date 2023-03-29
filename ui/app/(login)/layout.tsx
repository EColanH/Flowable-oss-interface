import '@/styles/global.sass'
import '@fortawesome/fontawesome-svg-core'
import React from 'react'

export const metadata = {
  title: 'Flowable Quick Starter',
  viewport: 'width=device-width, initial-scale=1',
  description: 'Flowable Quick Starter'
}

export default function LoginLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
