import { Suspense, lazy } from 'react'

import book from '../../../../assets/images/book.png'
import { useSideBarVisible } from './hooks'

import styles from './SideBar.module.scss'

const Documentation = lazy(() => import('../Documentation'))

const SideBar = () => {
  const { visible: sideBarVisible, onToggleVisible } = useSideBarVisible()

  return (
    <>
      <div className={styles.container}>
        <img
          onClick={onToggleVisible}
          className={styles.icon}
          src={book}
          alt="documentation"
        />
      </div>
      {sideBarVisible && (
        <Suspense>
          <Documentation />
        </Suspense>
      )}
    </>
  )
}

export default SideBar
