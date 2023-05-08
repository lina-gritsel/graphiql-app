import { RouterProvider } from 'react-router-dom'

import router from './router'

import './scss/styles.scss'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import { AuthContext } from './constants/context'

const App = () => {
  const [user, loading, error] = useAuthState(auth)
  const isAuthUser = !!user

  if (loading) {
    return <div>Checking authorization...</div>
  }

  return (
    <AuthContext.Provider value={isAuthUser}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}

export default App
