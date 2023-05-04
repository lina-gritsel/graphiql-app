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

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { login: '', password: '' } })

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

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
              label="Login"
              errorName={errors.login}
              errorMessage={errors.login?.message}
              {...register('login', {
                required: { value: true, message: 'Enter your login' },
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
