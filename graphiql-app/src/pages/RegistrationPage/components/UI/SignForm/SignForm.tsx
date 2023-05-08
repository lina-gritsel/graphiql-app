import {
  Button,
  Heading,
  VStack,
  Container,
  AbsoluteCenter,
  Box,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import FormField from '../FormField'
import { Props } from './SignForm.types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  email: yup
    .string()
    .email('must be a valid email')
    .required('email is required')
    .min(8, 'email must contain at least 8 characters')
    .matches(/^(?=.*[a-z])/i, 'email must contain at least one letter')
    .matches(/^(?=.*[0-9])/, 'email must contain at least one digit')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      'email must contain at least one special character !, @, #, $, %, ^, &, *',
    ),
  password: yup
    .string()
    .required('password is required')
    .min(8, 'password must contain at least 8 characters')
    .matches(/^(?=.*[a-z])/i, 'password must contain at least one letter')
    .matches(/^(?=.*[0-9])/, 'password must contain at least one digit')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      'password must contain at least one special character !, @, #, $, %, ^, &, *',
    ),
})

type FormData = yup.InferType<typeof schema>

const SignForm = ({ heading, btnContent, onSubmit }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { email: '', password: '' },
  })

  return (
    <AbsoluteCenter w="100%">
      <Box mx={5}>
        <Container
          py={4}
          border="1px"
          borderColor="gray.300"
          borderRadius={'md'}
        >
          <Heading>{heading}</Heading>
          <VStack
            as="form"
            align="start"
            mt={5}
            spacing={5}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              type="text"
              label="Email"
              errorName={errors.email}
              errorMessage={errors.email?.message}
              {...register('email')}
            />
            <FormField
              type="password"
              label="Password"
              errorName={errors.password}
              errorMessage={errors.password?.message}
              {...register('password')}
            />
            <Button type="submit">{btnContent}</Button>
          </VStack>
        </Container>
      </Box>
    </AbsoluteCenter>
  )
}

export default SignForm
