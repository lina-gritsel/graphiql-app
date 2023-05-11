import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import '../src/i18next'

import App from './App'
import { setupStore } from './store/store'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <Provider store={store}>
        <App />
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
)
