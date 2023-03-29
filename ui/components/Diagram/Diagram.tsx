import React, { useCallback, useEffect, useState } from 'react'
import styles from './diagram.module.scss'

export interface DiagramProps {
  param: string
  showDiagram: boolean
  onCloseModal: () => void
  forCase: boolean
}

function Diagram({ param, onCloseModal, showDiagram, forCase }: DiagramProps) {
  const [hasDiagram, setHasDiagram] = useState(true)
  const [image, setImage] = useState<string>()

  const showError = useCallback(() => {
    setHasDiagram(false)
  }, [])

  const fetchImage = async () => {
    const dynamicPath = forCase ? 'case' : 'process'
    const res = await fetch(`/api/backend/diagram/${dynamicPath}/${param}`)
    const imageBlob = await res.blob()
    const imageObjectURL = URL.createObjectURL(imageBlob)
    setImage(imageObjectURL)
  }

  useEffect(() => {
    fetchImage()
  }, [])

  return (
    <div className={showDiagram ? 'modal is-active' : 'modal'}>
      <div onClick={onCloseModal} className="modal-background"></div>
      <div className={styles.modalCard}>
        <header className="modal-card-head">
          <p className="modal-card-title">Diagram</p>
          <button
            onClick={onCloseModal}
            className={`delete is-large ${styles.positionRight}`}
            aria-label="close"
          ></button>
        </header>
        <section className={`${styles.bringToFront} modal-card-body`}>
          <div className="modal-content">
            <div className={styles.diagramContainer}>
              {hasDiagram ? (
                <p>
                  <img onError={showError} src={image} alt="Diagram" />
                </p>
              ) : (
                <div className={styles.noDiagramContainer}>
                  No diagram available
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Diagram
