import { Center, Spinner, useToast } from '@chakra-ui/react'
import { SubmitHandler } from 'react-hook-form'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import type { Inputs } from '../index.types'
import { auth } from '../../../../firebase'
import SignForm from '../UI/SignForm'

const SignUp = () => {
  const [createUserWithEmailAndPassword, _, loading] =
    useCreateUserWithEmailAndPassword(auth)
  const toast = useToast()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data
    const user = await createUserWithEmailAndPassword(email, password)
    if (user) {
      toast({
        title: 'Account created',
        description: 'You now have access to the application',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'An error has occurred.',
        description: 'A user with the same email or password already exists',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const content = loading ? (
    <Spinner />
  ) : (
    <SignForm heading="Sign up" btnContent="Sign up" onSubmit={onSubmit} />
  )

  return (
    <Center w="100%" h="calc(100vh - 134px)">
      {content}
    </Center>
  )
}

export default SignUp
