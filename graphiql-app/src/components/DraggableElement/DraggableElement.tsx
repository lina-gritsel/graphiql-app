import { DragEvent } from 'react'
import classname from 'classnames'

import styles from './DraggableElement.module.scss'
import { useMediaQuery } from '@chakra-ui/react'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

interface DraggableElemProps {
  initial: (event: DragEvent<HTMLDivElement>) => void
  resize: (event: DragEvent<HTMLDivElement>) => void
  className?: string
}

const DraggableElement = ({ initial, resize, className }: DraggableElemProps) => {
  const [isTablet] = useMediaQuery(MEDIA_QUERIES.TABLET);

  if (isTablet) {
    return null;
  }

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
