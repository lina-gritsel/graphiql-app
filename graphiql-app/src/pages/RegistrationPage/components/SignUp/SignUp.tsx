import { SubmitHandler } from 'react-hook-form'
import { Inputs } from '../index.types'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../../constants/paths'
import { auth, registerWithEmailAndPassword } from '../../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignForm from '../UI/SignForm'

const SignUp = () => {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (loading) return
    if (user) {
      navigate(PATHS.HOME)
    }
  }, [user, loading, navigate])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data
    await registerWithEmailAndPassword(email, password)
  }

  return <SignForm heading="Sign up" btnContent="Sign up" onSubmit={onSubmit} />
}

export default SignUp
