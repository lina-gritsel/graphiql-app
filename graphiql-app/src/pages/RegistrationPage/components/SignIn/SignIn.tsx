import { Center, Spinner, useToast } from '@chakra-ui/react'
import { SubmitHandler } from 'react-hook-form'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useTranslation } from 'react-i18next'
import type { Inputs } from '../index.types'
import { auth } from '../../../../firebase'
import SignForm from '../UI/SignForm'
import { SIGNIN_KEYS } from './constants'
import { TOAST_KEYS } from '../../../../constants/translationKeys'

const SignIn = () => {
  const [signInWithEmailAndPassword, _, loading] =
    useSignInWithEmailAndPassword(auth)
  const toast = useToast()
  const { NS, HEADING, BTN_CONTENT } = SIGNIN_KEYS
  const { NS: TOAST_NS, SIGNIN_SUCCESS, SIGNIN_ERROR } = TOAST_KEYS
  const { t } = useTranslation([NS, TOAST_NS])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data
    const user = await signInWithEmailAndPassword(email, password)
    if (user) {
      toast({
        title: t(SIGNIN_SUCCESS.TITLE, { ns: TOAST_NS }),
        description: t(SIGNIN_SUCCESS.DESCRIPTION, { ns: TOAST_NS }),
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: t(SIGNIN_ERROR.TITLE, { ns: TOAST_NS }),
        description: t(SIGNIN_ERROR.DESCRIPTION, { ns: TOAST_NS }),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const content = loading ? (
    <Spinner />
  ) : (
    <SignForm
      heading={t(HEADING)}
      btnContent={t(BTN_CONTENT)}
      onSubmit={onSubmit}
    />
  )

  return (
    <Center w="100%" h="calc(100vh - 134px)">
      {content}
    </Center>
  )
}

export default SignIn
