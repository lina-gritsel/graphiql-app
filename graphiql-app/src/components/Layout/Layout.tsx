import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router'
import Header from '../Header'
import Footer from '../Footer'
import { TOAST_KEYS } from '../../constants/translationKeys'
import { auth } from '../../firebase'
import ProgressBar from '../ProgressBar'
import { AuthContext } from '../../constants/context'
import styles from './Layout.module.scss'

const Layout = () => {
  const [user, loading, error] = useAuthState(auth)
  const toast = useToast()
  const { NS, AUTH_ERROR } = TOAST_KEYS
  const { t } = useTranslation(NS)
  const isAuthUser = !!user

  useEffect(() => {
    if (error) {
      toast({
        title: t(AUTH_ERROR.TITLE),
        description: t(AUTH_ERROR.DESCRIPTION),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [AUTH_ERROR.DESCRIPTION, AUTH_ERROR.TITLE, error, t, toast])

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
