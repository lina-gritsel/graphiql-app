import Playground from './components/Playground'
import SideBar from './components/SideBar'

import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <Playground />
    </div>
  )
}

export default HomePage
