import styles from './Header.module.scss'

import Menu from '../Menu'

const Header = () => {
  return (
    <div className={styles.container}>
      <Menu />
    </div>
  )
}

export default Header
