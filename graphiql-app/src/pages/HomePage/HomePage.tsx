import styles from './HomePage.module.scss'
import Playground from './components/Playground'
import SideBar from './components/SideBar'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <Playground />
    </div>
  )
}

export default HomePage
