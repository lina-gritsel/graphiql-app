import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'
import { useContext } from 'react'
import { AuthContext } from '../../constants/context'
import { PATHS } from '../../constants/paths'
import { Button } from '@chakra-ui/react'
import { logout } from '../../firebase'

const Menu = () => {
  const isAuthUser = useContext(AuthContext)

  const menu = isAuthUser ? (
    <>
      <NavLink className={styles.menuItem} to={PATHS.HOME}>
        Go to Main Page
      </NavLink>
      <Button onClick={logout}>Sign out</Button>
    </>
  ) : (
    <>
      <NavLink className={styles.menuItem} to={PATHS.REGISTRATION}>
        Registration
      </NavLink>
      <NavLink className={styles.menuItem} to={PATHS.LOGIN}>
        Login
      </NavLink>
    </>
  )

  return (
    <div className={styles.container}>
      <NavLink className={styles.menuItem} to={PATHS.WELCOME}>
        Welcome
      </NavLink>
      {menu}
    </div>
  )
}

export default Menu
