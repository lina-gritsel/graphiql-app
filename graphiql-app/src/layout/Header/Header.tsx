import Menu from '../Menu'
import { useStickyHeader } from './hooks'

import styles from './Header.module.scss'

const Header = () => {
  const { headerRef, sticky } = useStickyHeader()
  return (
    <div
      className={sticky ? styles.containerWitchScroll : styles.container}
      ref={headerRef}
    >
      <Menu />
    </div>
  )
}

export default Header
