import React from 'react'
import ReactDOM from 'react-dom/client'

import '../src/i18next'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
