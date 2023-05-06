import {
  Button,
  Heading,
  VStack,
  Container,
  AbsoluteCenter,
  Box,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Inputs } from '../index.types'
import FormField from '../UI/FormField'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../../constants/paths'
import { auth, registerWithEmailAndPassword } from '../../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { email: '', password: '' } })

  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (loading) return
    if (user) {
      navigate(PATHS.HOME)
    }
  }, [user, loading, navigate])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const {email, password} = data;
    await registerWithEmailAndPassword(email, password);
  }

  return (
    <AbsoluteCenter w="100%">
      <Box mx={5}>
        <Container
          py={4}
          border="1px"
          borderColor="gray.300"
          borderRadius={'md'}
        >
          <Heading>Sign up</Heading>
          <VStack
            as="form"
            align="start"
            mt={5}
            spacing={5}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              type="email"
              label="Email"
              errorName={errors.email}
              errorMessage={errors.email?.message}
              {...register('email', {
                required: { value: true, message: 'Enter your email' },
              })}
            />
            <FormField
              type="password"
              label="Password"
              errorName={errors.password}
              errorMessage={errors.password?.message}
              {...register('password', {
                required: { value: true, message: 'Enter your password' },
              })}
            />
            <Button type="submit">Sign up</Button>
          </VStack>
        </Container>
      </Box>
    </AbsoluteCenter>
  )
}

export default SignUp
