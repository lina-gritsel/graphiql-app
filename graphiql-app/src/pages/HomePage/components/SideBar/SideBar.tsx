import book from '../../../../assets/images/book.png'
import AllDocumentation from '../AllDocumentation'

import { useSideBar } from './hooks'

import styles from './SideBar.module.scss'

const SideBar = () => {
  const { changeStateDocs, openDocumentation, data, loading } = useSideBar()

  return (
    <>
      <div className={styles.container}>
        <img
          onClick={changeStateDocs}
          className={styles.icon}
          src={book}
          alt="documentation"
        />
      </div>
      {loading && <div>Loading...</div>}
      {openDocumentation && <AllDocumentation data={data}/>}
    </>
  )
}

export default SideBar
