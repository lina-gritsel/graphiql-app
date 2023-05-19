import { useAppSelector } from '../../../../store/hooks/redux'
import book from '../../../../assets/images/book.png'
import AllDocumentation from '../AllDocumentation'

import { useFetchSchema, useSideBarVisible } from './hooks'

import styles from './SideBar.module.scss'

const SideBar = () => {
  const { history } = useAppSelector((state) => state.documentationReducer)
  const currentPage = history[history.length - 1]

  const { data } = useFetchSchema(currentPage)
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
      {sideBarVisible && <AllDocumentation data={data} />}
    </>
  )
}

export default SideBar
