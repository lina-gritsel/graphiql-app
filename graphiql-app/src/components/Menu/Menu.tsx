import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { AuthContext } from '../../constants/context'
import { PATHS } from '../../constants/paths'
import SignOutButton from '../SignOutButton'

import styles from './Menu.module.scss'

const Menu = () => {
  const isAuthUser = useContext(AuthContext)

  const { t } = useTranslation()

  const menu = isAuthUser ? (
    <div className={styles.authContainer}>
      <div>
        <NavLink className={styles.menuItem} to={PATHS.WELCOME}>
          {t('welcomeMenu')}
        </NavLink>
        <NavLink className={styles.menuItem} to={PATHS.HOME}>
          {t('main')}
        </NavLink>
      </div>
      <SignOutButton className={styles.signOut} />
    </div>
  ) : (
    <div className={styles.unauthContainer}>
      <NavLink className={styles.menuItem} to={PATHS.WELCOME}>
        Welcome
      </NavLink>
      <NavLink className={styles.menuItem} to={PATHS.REGISTRATION}>
        Registration
      </NavLink>
      <NavLink className={styles.menuItem} to={PATHS.LOGIN}>
        Login
      </NavLink>
    </div>
  )

  return <div className={styles.container}>{menu}</div>
}

export default Menu
