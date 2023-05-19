import { DragEvent } from 'react'
import classname from 'classnames'

import styles from './DraggableElement.module.scss'

interface DraggableElemProps {
  initial: (event: DragEvent<HTMLDivElement>) => void
  resize: (event: DragEvent<HTMLDivElement>) => void
  className?: string
}

const DraggableElement = ({ initial, resize, className }: DraggableElemProps) => {
  return (
    <div
      className={classname(styles.container, className)}
      onDragStart={initial}
      onDrag={resize}
      draggable
    >
      <div className={styles.slider}></div>
    </div>
  )
}

export default DraggableElement
