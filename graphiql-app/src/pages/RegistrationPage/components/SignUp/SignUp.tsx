import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  Container,
  AbsoluteCenter,
  Box,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Inputs {
  login: string
  password: string
}

const checkError = (
  isError: boolean,
  errElem: ReactNode,
  labelElem: ReactNode,
) => {
  return isError ? errElem : labelElem
}

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
            align="flex-start"
            mt={5}
            spacing={5}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl isInvalid={!!errors.login}>
              {checkError(
                !!errors.login,
                <FormLabel as={FormErrorMessage} mt={0}>
                  {!!errors.login && errors.login.message}
                </FormLabel>,
                <FormLabel htmlFor="login">Login</FormLabel>,
              )}
              <Input
                type="email"
                variant="filled"
                {...register('login', {
                  required: { value: true, message: 'Enter your login' },
                })}
              />
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              {checkError(
                !!errors.password,
                <FormLabel as={FormErrorMessage} mt={0}>
                  {!!errors.password && errors.password.message}
                </FormLabel>,
                <FormLabel htmlFor="password">Password</FormLabel>,
              )}
              <Input
                type="password"
                variant="filled"
                {...register('password', {
                  required: { value: true, message: 'Enter your password' },
                })}
              />
            </FormControl>
            <Button type="submit">Sign up</Button>
          </VStack>
        </Container>
      </Box>
    </AbsoluteCenter>
  )
}

export default SignUp
