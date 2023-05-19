import DraggableElement from '../../components/DraggableElement'
import { useResizableElement } from '../../hooks/useResizableElement'
import AboutUs from './components/AboutUs'
import SideBar from './components/SideBar'

import styles from './WelcomePage.module.scss'

const WelcomePage = () => {
  const { divRef, neighborRef, initial, resize } = useResizableElement()

  return (
    <div className={styles.container}>
      <SideBar ref={divRef} />
      <DraggableElement
        initial={initial}
        resize={resize}
        className={styles.draggable}
      />
      <AboutUs ref={neighborRef} />
    </div>
  )
}

export default WelcomePage
