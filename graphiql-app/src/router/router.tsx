import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '../layout/Layout'

import { routes } from './routes'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
