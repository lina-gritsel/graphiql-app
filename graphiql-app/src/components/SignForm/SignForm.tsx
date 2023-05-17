import { Button, Heading, VStack, Container, Box } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { schema, type FormData } from './schema'
import { SING_FORM_KEYS, VALIDATION_KEYS } from './constants'
import { Inputs } from '../../types'
import EmailFormField from './EmailFormField'
import PasswordFormField from './PasswordFormField'

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
  const { NS: VALIDATION_NS } = VALIDATION_KEYS
  const { NS, EMAIL, PASSWORD } = SING_FORM_KEYS
  const { t } = useTranslation([NS, VALIDATION_NS])

  return (
    <Box mx={5} width="100%" maxW={500} minW={280}>
      <Container py={4} border="1px" borderColor="gray.300" borderRadius={'md'}>
        <Heading>{heading}</Heading>
        <VStack
          as="form"
          align="start"
          mt={5}
          spacing={5}
          onSubmit={handleSubmit(onSubmit)}
        >
          <EmailFormField
            type="text"
            label={t(EMAIL)}
            errorName={errors.email}
            errorMessage={
              errors.email?.message &&
              t(errors.email?.message, { ns: VALIDATION_NS })
            }
            {...register('email')}
          />
          <PasswordFormField
            label={t(PASSWORD)}
            errorName={errors.password}
            errorMessage={
              errors.password?.message &&
              t(errors.password?.message, { ns: VALIDATION_NS })
            }
            {...register('password')}
          />
          <Button type="submit">{btnContent}</Button>
        </VStack>
      </Container>
    </Box>
  )
}

export default SignForm
