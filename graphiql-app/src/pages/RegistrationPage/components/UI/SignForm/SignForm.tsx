import {
  Button,
  Heading,
  VStack,
  Container,
  Center,
  Box,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import FormField from '../FormField'
import { yupResolver } from '@hookform/resolvers/yup'
import { Inputs } from '../../index.types'
import { schema, type FormData } from './schema'

interface Props {
  heading: string
  btnContent: string
  onSubmit: SubmitHandler<Inputs>
}

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
    <Center w="100%" h='calc(100vh - 134px)'>
      <Box mx={5} width="100%" maxW={500} minW={280}>
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
    </Center>
  )
}

export default SignForm
