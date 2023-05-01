import { FC } from 'react'

import styles from './Header.module.scss'

import Menu from '../Menu'

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <Menu />
    </div>
  )
}

export default Header
