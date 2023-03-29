import React from 'react'
import ActivitiesList from '@/components/ActivitiesList'

export default function ActivitiesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="columns">
        <ActivitiesList />
        {children}
      </div>
    </section>
  )
}
