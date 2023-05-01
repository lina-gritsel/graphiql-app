import { FC, PropsWithChildren } from 'react'

import Header from '../Header'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Layout
