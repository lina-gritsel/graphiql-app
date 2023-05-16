import DraggableDiv from '../../components/DraggableDiv/'
import { useResizableDiv } from '../../hooks/useResizableDiv'
import AboutUs from './components/AboutUs'
import SideBar from './components/SideBar'

import styles from './WelcomePage.module.scss'

const WelcomePage = () => {
  const { divRef, neighborRef, initial, resize } = useResizableDiv()

  return (
    <div className={styles.container}>
      <SideBar ref={divRef} />
      <DraggableDiv
        initial={initial}
        resize={resize}
        className={styles.draggable}
      />
      <AboutUs ref={neighborRef} />
    </div>
  )
}

export default WelcomePage
