import {
  faSuitcase,
  faGears,
  faThumbtack
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Type } from '@/lib/card'
import Link from 'next/link'
import styles from '@/styles/kanban.module.scss'

export default function Card(type: Type, element: any) {
  const cardColor = (type: Type) => {
    let color
    switch (type) {
      case Type.CASE:
        color = '#8ED6FF'
        break
      case Type.PROCESS:
        color = '#8EFF9A'
        break
      default:
        color = '#FAB058'
        break
    }
    return color
  }

  const getIcon = (type: Type) => {
    switch (type) {
      case Type.CASE:
        return (
          <span className="icon">
            <FontAwesomeIcon
              icon={faSuitcase}
              className="fas fa-suitcase"
              aria-hidden={'true'}
            ></FontAwesomeIcon>
          </span>
        )
      case Type.PROCESS:
        return (
          <span className="icon">
            <FontAwesomeIcon
              icon={faGears}
              className="fas fa-gears"
              aria-hidden={'true'}
            ></FontAwesomeIcon>
          </span>
        )
      default:
        return (
          <span className="icon">
            <FontAwesomeIcon
              icon={faThumbtack}
              className="fas fa-thumbtack"
              aria-hidden={'true'}
            ></FontAwesomeIcon>
          </span>
        )
    }
  }

  function getUrl(id: string) {
    let url

    switch (type) {
      case Type.CASE:
        url = `/activities/cases/${id}`
        break
      case Type.PROCESS:
        url = `/activities/processes/${id}`
        break
      default:
        url = `/tasks/${id}`
    }
    return url
  }

  return (
    <div>
      <Link href={getUrl(element.id)} className={`${styles.cardLinkStyle}`}>
        <div
          className="card"
          style={{ borderLeft: `4px solid ${cardColor(type)}` }}
        >
          <div className={`${styles.cardHeaderPadding} card-header icon-text`}>
            {getIcon(type)}
            <h3 className={`${styles.titleCard}`}>
              {element.caseDefinitionName ||
                element.processDefinitionName ||
                element.name}
            </h3>
          </div>
          <div className="card-content">
            <div className={`${styles.contentCardFont} content`}>
              <p>Created by: {element.owner ?? element.startUserId}</p>
              <p>Created: {element.createTime ?? element.startTime}</p>
              {element.dueDate != null ? (
                <p>Due date: {element.dueDate}</p>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
