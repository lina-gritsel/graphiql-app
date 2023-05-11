import { Outlet } from 'react-router'
import Header from '../Header'
import Footer from '../Footer'
import styles from './Layout.module.scss'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { AuthContext } from '../../constants/context'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'

const Layout = () => {
  const [user, loading, error] = useAuthState(auth)
  const toast = useToast()
  const isAuthUser = !!user

  useEffect(() => {
    if (error) {
      toast({
        title: 'An error has occurred.',
        description: 'Authorization is unavailable. Please try again later',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [error, toast])

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
