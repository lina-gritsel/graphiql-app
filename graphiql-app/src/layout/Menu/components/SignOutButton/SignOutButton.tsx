import { Button, useToast } from '@chakra-ui/react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebase'

const SignOutButton = () => {
  const [signOut, loading] = useSignOut(auth)
  const toast = useToast()

  const onClick = async () => {
    const isSuccess = await signOut()
    if (isSuccess) {
      toast({
        title: 'Logout successful',
        description: 'See you later',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'An error has occurred.',
        description: 'Please try again later',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Button isLoading={loading} onClick={onClick}>
      Sign out
    </Button>
  )
}

export default SignOutButton
