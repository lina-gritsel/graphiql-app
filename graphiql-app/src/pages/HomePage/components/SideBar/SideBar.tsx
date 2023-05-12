import book from '../../../../assets/images/book.png'
import AllDocumentation from '../AllDocumentation'

import { useSideBar } from './hooks'

import styles from './SideBar.module.scss'

const SideBar = () => {
  const { changeStateDocs, openDocumentation, data,setRequestData } = useSideBar()

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
      {openDocumentation && <AllDocumentation data={data} requestData={setRequestData}/>}
    </>
  )
}

export default SideBar
