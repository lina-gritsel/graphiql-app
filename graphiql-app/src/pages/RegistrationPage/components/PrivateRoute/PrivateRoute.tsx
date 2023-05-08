import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebase'
import { Navigate, Outlet } from 'react-router'
import { PATHS } from '../../../../constants/paths'

const PrivateRoute = ({ isAuth }: { isAuth: boolean }) => {
  const [user, loading, error] = useAuthState(auth)

  const isUser = isAuth ? user : !user

  let content

  if (loading) {
    content = <div>Loading...</div>
  } else if (isUser) {
    content = <Outlet />
  } else {
    content = <Navigate to={PATHS.WELCOME} replace />
  }

  return <>{content}</>
}

export default PrivateRoute
