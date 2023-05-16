import { DragEvent } from 'react'
import classname from 'classnames'

import styles from './DraggableDiv.module.scss'

interface DraggableDivProps {
  initial: (event: DragEvent<HTMLDivElement>) => void
  resize: (event: DragEvent<HTMLDivElement>) => void
  className?: string
}

const DraggableDiv = ({ initial, resize, className }: DraggableDivProps) => {
  return (
    <div
      className={classname(styles.draggable, className)}
      onDragStart={initial}
      onDrag={resize}
      draggable
    >
      <div className={styles.slider}></div>
    </div>
  )
}

export default DraggableDiv
