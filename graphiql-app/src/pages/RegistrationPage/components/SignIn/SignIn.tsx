import { SubmitHandler } from 'react-hook-form'
import { Inputs } from '../index.types'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../../constants/paths'
import { logInWithEmailAndPassword } from '../../../../firebase'
import SignForm from '../UI/SignForm'

const SignIn = () => {
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data
    await logInWithEmailAndPassword(email, password)
    navigate(PATHS.HOME, {replace: true})
  }

  return <SignForm heading="Sign in" btnContent="Sign in" onSubmit={onSubmit} />
}

export default SignIn;
