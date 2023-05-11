import { Outlet } from 'react-router'
import Header from '../Header'
import Footer from '../Footer'
import styles from './Layout.module.scss'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { AuthContext } from '../../constants/context'
import ProgressBar from '../../components/ProgressBar/ProgressBar'

const Layout = () => {
  const [user, loading, error] = useAuthState(auth)
  const isAuthUser = !!user

  if (loading) {
    return <ProgressBar />
  }

  return (
    <AuthContext.Provider value={isAuthUser}>
      <div className={styles.container}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default Layout
