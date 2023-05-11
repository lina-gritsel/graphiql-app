import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from 'react-router-dom'
import Layout from '../components/Layout'
import Page404 from '../pages/404Page/Page404'
import { PATHS } from '../constants/paths'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import WelcomePage from '../pages/WelcomePage'
import PrivateRoute from '../pages/RegistrationPage/components/PrivateRoute'

const PrivateRouteForAuthUser = <PrivateRoute authUserEl={<Outlet />} unauthUserEl={<Navigate to={PATHS.WELCOME} replace/>} />

const PrivateRouteForUnauthUser = <PrivateRoute authUserEl={<Navigate to={PATHS.HOME} replace/>} unauthUserEl={<Outlet/>} />

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATHS.WELCOME} element={<Layout />} errorElement={<Page404 />}>
      <Route index path={PATHS.WELCOME} element={<WelcomePage />} />
      <Route element={PrivateRouteForAuthUser}>
        <Route path={PATHS.HOME} element={<HomePage />} />
      </Route>
      <Route element={PrivateRouteForUnauthUser}>
        <Route path={PATHS.LOGIN} element={<LoginPage />} />
        <Route path={PATHS.REGISTRATION} element={<RegistrationPage />} />
      </Route>
    </Route>,
  ),
)

export default router
