import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'

import router from './router'

import './scss/styles.scss'

const client = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
