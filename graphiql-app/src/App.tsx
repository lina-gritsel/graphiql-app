import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider, Progress } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import { AuthContext } from './constants/context'
import router from './router'

import './scss/styles.scss'

const client = new QueryClient()

const App = () => {
  const [user, loading, error] = useAuthState(auth)
  const isAuthUser = !!user

  if (loading) {
    return <Progress size="xs" isIndeterminate />
  }

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <AuthContext.Provider value={isAuthUser}>
          <RouterProvider router={router} />
        </AuthContext.Provider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
