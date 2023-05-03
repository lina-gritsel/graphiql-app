import ControlArea from '../ControlArea'
import Textarea from '../Textarea'

import styles from './Playground.module.scss'

const Playground = () => {
  return (
    <div className={styles.container}>
      <div className={styles.requestSection}>
        <Textarea placeholder="Enter your request" />
        <ControlArea />
      </div>
      <div className={styles.responseSection}></div>
    </div>
  )
}

export default Playground
