import styles from '@/styles/kanban.module.scss'
import Card from '@/components/Card'
import { Type } from '@/lib/card'

export default function List(elementList: Array<any>, isTask: boolean) {
  return (
    <div>
      <div className="card">
        <div className={`${styles.listCardContent} card-content`}>
          <div className="content">
            <div className={'column'}>
              <ul className={`${styles.listCard}`}>
                {elementList.map((element, i) => (
                  <li key={i}>
                    {Card(
                      isTask
                        ? Type.TASK
                        : element.processDefinitionId
                        ? Type.PROCESS
                        : Type.CASE,
                      element
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
