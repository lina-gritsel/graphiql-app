import { Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useSignOut } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'

import styles from './SignOutButton.module.scss'

const SignOutButton = ({ className }: { className: string }) => {
  const [signOut, loading, error] = useSignOut(auth)
  const { t } = useTranslation()

  return (
    <Button onClick={signOut} className={className}>
      {t('signOut')}
    </Button>
  )
}

export default SignOutButton
