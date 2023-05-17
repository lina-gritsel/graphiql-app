import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import router from './router'
import ProgressBar from './components/ProgressBar'
import '../src/i18next'
import './scss/styles.scss'

const client = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <Suspense fallback={<ProgressBar />}>
          <RouterProvider router={router} />
        </Suspense>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
