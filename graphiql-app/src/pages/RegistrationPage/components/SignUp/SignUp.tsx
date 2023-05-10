import { SubmitHandler } from 'react-hook-form'
import { Inputs } from '../index.types'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../../constants/paths'
import { auth } from '../../../../firebase'
import SignForm from '../UI/SignForm'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

const SignUp = () => {
  const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data
    await createUserWithEmailAndPassword(email, password)
    navigate(PATHS.HOME, {replace: true})
  }

  return <SignForm heading="Sign up" btnContent="Sign up" onSubmit={onSubmit} />
}

export default SignUp
