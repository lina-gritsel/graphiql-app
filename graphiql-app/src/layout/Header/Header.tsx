import Menu from '../Menu'
import LanguageSwitcher from '../LanguageSwitcher'
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
      <LanguageSwitcher/>
    </div>
  )
}

export default Header
