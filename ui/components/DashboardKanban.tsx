import styles from '@/styles/global.module.scss'
import RecentActivities from '@/components/RecentActivities'
import CompletedTasks from '@/components/CompletesTasks'
import DueDateTasks from '@/components/DueDateTasks'

export default function DashboardKanban() {
  return (
    <div className="">
      <div className="content">
        <div className={`${styles.titleDashboard} content`}>
          <h2>Hello</h2>
        </div>
        <br />
        <div>
          <section className="">
            <div
              className="columns is-multiline is-centered cards-container"
              id="sectioncontainer"
            >
              <div className="column">
                <article className="message is-info">
                  <div className="message-header">
                    <p className={`${styles.headerCardFont}`}>
                      {'Recent activities'}
                    </p>
                  </div>
                  <div className="message-body">
                    {/* @ts-expect-error Async Server Componen */}
                    <RecentActivities />
                  </div>
                </article>
              </div>
              <div className="column">
                <article className="message is-warning">
                  <div className="message-header">
                    <p className={`${styles.headerCardFont}`}>
                      {'Tasks soon to expire'}
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="message-body">
                      {/* @ts-expect-error Async Server Componen */}
                      <DueDateTasks />
                    </div>
                  </div>
                </article>
              </div>
              <div className="column">
                <article className="message is-primary">
                  <div className="message-header">
                    <p className={`${styles.headerCardFont}`}>
                      {'Tasks completed'}
                    </p>
                  </div>
                  <div className="message-body">
                    {/* @ts-expect-error Async Server Componen */}
                    <CompletedTasks />
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
