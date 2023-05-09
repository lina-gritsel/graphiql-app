import AboutUs from './components/AboutUs'
import SideBar from './components/SideBar'

import styles from './WelcomePage.module.scss'

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <AboutUs />
    </div>
  )
}

export default WelcomePage
