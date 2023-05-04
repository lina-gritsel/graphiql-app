import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { PATHS } from '../../../../constants/paths'

import styles from './SideBar.module.scss'

const SideBar = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.greeting}>
      <h1>
        Welcome! <br />
        Let&apos;s get acquainted ➪
      </h1>
      <div className={styles.btnWrapper}>
        <Button onClick={() => navigate(PATHS.REGISTRATION)}>Sing In</Button>
        <div>or</div>
        <Button onClick={() => navigate(PATHS.LOGIN)}>Sing Up</Button>
      </div>
    </div>
  )
}

export default SideBar
