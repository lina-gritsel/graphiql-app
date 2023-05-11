import { Button, useToast } from '@chakra-ui/react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { useTranslation } from 'react-i18next'
import { auth } from '../../../../firebase'
import { SIGNOUT_KEYS } from './constants'
import { TOAST_KEYS } from '../../../../constants/translationKeys'

const SignOutButton = () => {
  const [signOut, loading] = useSignOut(auth)
  const toast = useToast()
  const { NS: TOAST_NS, SIGNOUT_SUCCESS, SIGNOUT_ERROR } = TOAST_KEYS
  const { NS, CONTENT } = SIGNOUT_KEYS
  const { t } = useTranslation([NS, TOAST_NS])

  const onClick = async () => {
    const isSuccess = await signOut()
    if (isSuccess) {
      toast({
        title: t(SIGNOUT_SUCCESS.TITLE, { ns: TOAST_NS }),
        description: t(SIGNOUT_SUCCESS.DESCRIPTION, { ns: TOAST_NS }),
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: t(SIGNOUT_ERROR.TITLE, { ns: TOAST_NS }),
        description: t(SIGNOUT_ERROR.DESCRIPTION, { ns: TOAST_NS }),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Button isLoading={loading} onClick={onClick}>
      {t(CONTENT)}
    </Button>
  )
}

export default SignOutButton
