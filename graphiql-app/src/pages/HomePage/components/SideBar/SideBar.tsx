import book from '../../../../assets/images/book.png'
import Documentation from '../AllDocumentation'
import { useAppSelector } from '../../../../store/hooks/redux'


import { useFetchSchema, useSideBarVisible } from './hooks'

import styles from './SideBar.module.scss'

const SideBar = () => {
  const { data } = useFetchSchema()
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
      {sideBarVisible && <Documentation data={data} />}
    </>
  )
}

export default SideBar
