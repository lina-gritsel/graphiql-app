import { RouterProvider } from 'react-router-dom'

import router from './router'

import './scss/styles.scss'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import { AuthContext } from './constants/context'
import { Progress } from '@chakra-ui/react'

const App = () => {
  const [user, loading, error] = useAuthState(auth)
  const isAuthUser = !!user

  if (loading) {
    return <Progress size='xs' isIndeterminate />
  }

  return (
    <AuthContext.Provider value={isAuthUser}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}

export default App
