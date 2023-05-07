import { FC } from 'react'

import play from '../../../../assets/images/player.png'
import clean from '../../../../assets/images/clean.png'
import clone from '../../../../assets/images/clone.png'

import styles from './ControlArea.module.scss'

interface ControlAreaProps {
  onClick: () => void
  onClean: () => void
}

const ControlArea: FC<ControlAreaProps> = ({ onClick, onClean }) => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={play} alt="play" onClick={onClick} />
      <img className={styles.icon} src={clean} alt="clean" onClick={onClean}/>
      <img className={styles.icon} src={clone} alt="clone" />
    </div>
  )
}

export default ControlArea
