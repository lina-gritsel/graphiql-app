import styles from './Page404.module.scss'

const Page404 = () => {
  return (
    <div className={styles.container}>
      <p className={styles.errorNumber}>404</p>
      <p className={styles.errorText}>Page not found</p>
    </div>
  )
}

export default Page404
