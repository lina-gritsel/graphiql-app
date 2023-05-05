import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { PATHS } from '../../../../constants/paths'

import styles from './SideBar.module.scss'

const SideBar = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.greeting}>
      <div>
        <p>Welcome!</p>
        <p>{"Let's"} get acquainted ➪</p>
      </div>
      <div className={styles.btnWrapper}>
        <Button onClick={() => navigate(PATHS.REGISTRATION)}>Sing In</Button>
        <p>or</p>
        <Button onClick={() => navigate(PATHS.LOGIN)}>Sing Up</Button>
      </div>
    </div>
  )
}

export default SideBar
