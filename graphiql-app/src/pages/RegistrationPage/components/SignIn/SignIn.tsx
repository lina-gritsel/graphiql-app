import { SubmitHandler } from 'react-hook-form'
import { Inputs } from '../index.types'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../../constants/paths'
import { auth } from '../../../../firebase'
import SignForm from '../UI/SignForm'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

const SignIn = () => {
  const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data
    await signInWithEmailAndPassword(email, password)
    navigate(PATHS.HOME, {replace: true})
  }

  return <SignForm heading="Sign in" btnContent="Sign in" onSubmit={onSubmit} />
}

export default SignIn;
