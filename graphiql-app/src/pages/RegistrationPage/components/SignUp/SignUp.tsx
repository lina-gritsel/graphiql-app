import { SubmitHandler } from 'react-hook-form'
import { Inputs } from '../index.types'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../../constants/paths'
import { registerWithEmailAndPassword } from '../../../../firebase'
import SignForm from '../UI/SignForm'

const SignUp = () => {
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data
    await registerWithEmailAndPassword(email, password)
    navigate(PATHS.HOME, {replace: true})
  }

  return <SignForm heading="Sign up" btnContent="Sign up" onSubmit={onSubmit} />
}

export default SignUp
