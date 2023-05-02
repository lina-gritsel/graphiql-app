import { PATHS } from '../constants/paths'

import RegistrationPage from '../pages/RegistrationPage'
import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import Page404 from '../pages/404Page'

export const routes = [
  { path: PATHS.WELCOME, component: WelcomePage },
  { path: PATHS.REGISTRATION, component: RegistrationPage },
  { path: PATHS.LOGIN, component: LoginPage },
  { path: PATHS.HOME, component: HomePage },
  { path: PATHS.PAGE_404, component: Page404 },
]
