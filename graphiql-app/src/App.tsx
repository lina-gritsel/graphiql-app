import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import router from './router'

import './scss/styles.scss'


const App = () => {
  return (
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
  )
}

export default App
