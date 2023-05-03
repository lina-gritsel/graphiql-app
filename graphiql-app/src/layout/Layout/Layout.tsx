import Header from '../Header'
import Footer from '../Footer'

import styles from './Layout.module.scss'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
