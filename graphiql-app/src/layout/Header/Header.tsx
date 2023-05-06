import styles from './Header.module.scss'

import Menu from '../Menu'
import { Button } from '@chakra-ui/react'
import { logout } from '../../firebase'

const Header = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Button onClick={logout}>Sign out</Button>
    </div>
  )
}

export default Header
