import { Center, Spinner, useToast } from '@chakra-ui/react'
import { SubmitHandler } from 'react-hook-form'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import type { Inputs } from '../index.types'
import { auth } from '../../../../firebase'
import SignForm from '../UI/SignForm'

const SignIn = () => {
  const [signInWithEmailAndPassword, _, loading] =
    useSignInWithEmailAndPassword(auth)
  const toast = useToast()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data
    const user = await signInWithEmailAndPassword(email, password)
    if (user) {
      toast({
        title: 'Login successful',
        description: 'You now have access to the application',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'An error has occurred.',
        description: 'Invalid login or password',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const content = loading ? (
    <Spinner />
  ) : (
    <SignForm heading="Sign in" btnContent="Sign in" onSubmit={onSubmit} />
  )

  return (
    <Center w="100%" h="calc(100vh - 134px)">
      {content}
    </Center>
  )
}

export default SignIn
