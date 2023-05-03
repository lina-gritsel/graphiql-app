import { FC, PropsWithChildren } from 'react'
import { Outlet } from 'react-router'

import Header from '../Header'
import Footer from '../Footer'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren> = () => {
  return (
    <div className={styles.container}>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
