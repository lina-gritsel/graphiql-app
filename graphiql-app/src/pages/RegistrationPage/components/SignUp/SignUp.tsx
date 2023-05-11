import { Center, Spinner, useToast } from '@chakra-ui/react'
import { SubmitHandler } from 'react-hook-form'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useTranslation } from 'react-i18next'
import type { Inputs } from '../index.types'
import { auth } from '../../../../firebase'
import SignForm from '../UI/SignForm'
import { SIGNUP_KEYS } from './constants'
import { TOAST_KEYS } from '../../../../constants/translationKeys'


const SignUp = () => {
  const [createUserWithEmailAndPassword, _, loading] =
    useCreateUserWithEmailAndPassword(auth)
  const toast = useToast()
  const {NS:TOAST_NS, SIGNUP_SUCCESS, SIGNUP_ERROR} = TOAST_KEYS;
  const {NS, HEADING, BTN_CONTENT} = SIGNUP_KEYS;
  const {t} = useTranslation([NS, TOAST_NS]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data
    const user = await createUserWithEmailAndPassword(email, password)
    if (user) {
      toast({
        title: t(SIGNUP_SUCCESS.TITLE, {ns: TOAST_NS}),
        description: t(SIGNUP_SUCCESS.DESCRIPTION, {ns: TOAST_NS}),
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: t(SIGNUP_ERROR.TITLE, {ns: TOAST_NS}),
        description: t(SIGNUP_ERROR.DESCRIPTION, {ns: TOAST_NS}),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const content = loading ? (
    <Spinner />
  ) : (
    <SignForm heading={t(HEADING)} btnContent={t(BTN_CONTENT)} onSubmit={onSubmit} />
  )

  return (
    <Center w="100%" h="calc(100vh - 134px)">
      {content}
    </Center>
  )
}

export default SignUp
