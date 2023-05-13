import { ReactElement, useContext } from 'react'
import { AuthContext } from '../../constants/context'

interface Props {
  authUserEl: ReactElement
  unauthUserEl: ReactElement
}

const PrivateRoute = ({ authUserEl, unauthUserEl }: Props) => {
  const isAuthUser = useContext(AuthContext)

  const content = isAuthUser ? authUserEl : unauthUserEl

  return content
}

export default PrivateRoute
