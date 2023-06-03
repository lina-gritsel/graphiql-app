import LanguageSwitcher from '../LanguageSwitcher'
import { useStickyHeader } from './hooks'

import styles from './Header.module.scss'
import AdaptiveMenu from '../AdaptiveMenu'

const Header = () => {
  const { headerRef, sticky } = useStickyHeader()
  return (
    <div
      className={sticky ? styles.containerWitchScroll : styles.container}
      ref={headerRef}
    >
      <LanguageSwitcher />
      <AdaptiveMenu />
    </div>
  )
}

export default Header
