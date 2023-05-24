import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'

import ProgressBar from './components/ProgressBar'
import { setupStore } from './store/store'
import '../src/i18next'
import router from './router'

import './scss/styles.scss'

const client = new QueryClient()
const store = setupStore()

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <ChakraProvider>
          <Suspense fallback={<ProgressBar />}>
            <RouterProvider router={router} />
          </Suspense>
        </ChakraProvider>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
