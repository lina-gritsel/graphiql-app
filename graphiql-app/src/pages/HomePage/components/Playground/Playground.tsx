import TextareaLocal from '../Textarea'

import styles from './Playground.module.scss'

const Playground = () => {
  return (
    <div className={styles.container}>
      <div className={styles.request}>
        <TextareaLocal placeholder="Enter your request" />
      </div>
      <div className={styles.response}></div>
    </div>
  )
}

export default Playground
