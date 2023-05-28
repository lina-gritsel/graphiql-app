import { NavLink } from 'react-router-dom'
import { PATHS } from '../../constants/paths'

import styles from './Page404.module.scss'

const Page404 = () => {
  return (
    <div className={styles.container}>
      <p className={styles.errorNumber}>404</p>
      <p className={styles.errorText}>Page not found</p>
      <div className={styles.backLink}>
        <p>Go to</p>
        <NavLink to={PATHS.WELCOME} className={styles.welcome}>
          Welcome page
        </NavLink>
      </div>
    </div>
  )
}

export default Page404
