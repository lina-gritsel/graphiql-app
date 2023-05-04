import play from '../../../../assets/images/player.png'
import clean from '../../../../assets/images/clean.png'
import clone from '../../../../assets/images/clone.png'

import styles from './ControlArea.module.scss'

const ControlArea = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={play} alt="play" />
      <img className={styles.icon} src={clean} alt="clean" />
      <img className={styles.icon} src={clone} alt="clone" />
    </div>
  )
}

export default ControlArea
