import { RouterProvider } from 'react-router-dom'
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
=======
>>>>>>> 2b7fe9aa8835761bd28221e6f2bd6f6def6037ba
import { ChakraProvider } from '@chakra-ui/react'

import router from './router'

import './scss/styles.scss'

const queryClient = new QueryClient()

const App = () => {
  return (
<<<<<<< HEAD
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
=======
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
>>>>>>> 2b7fe9aa8835761bd28221e6f2bd6f6def6037ba
  )
}

export default App
