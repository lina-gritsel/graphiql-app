
import styles from './Playground.module.scss'

const Playground = () => {
  return (
    <div className={styles.container}>
      <div className={styles.request}>query allFilms films title</div>
      <div className={styles.response}></div>
    </div>
  )
}

export default Playground
