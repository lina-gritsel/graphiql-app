import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { PATHS } from '../../../../constants/paths'

import styles from './SideBar.module.scss'

const SideBar = () => {
  const navigate = useNavigate()

  const { t } = useTranslation()

  return (
    <div className={styles.greeting}>
      <div>
        <p>{t('welcome')}</p>
        <p>{t('acquaintance')}</p>
      </div>
      <div className={styles.btnWrapper}>
        <Button onClick={() => navigate(PATHS.REGISTRATION)}>{t('singUp')}</Button>
        <p>{t('or')}</p>
        <Button onClick={() => navigate(PATHS.LOGIN)}>{t('logIn')}</Button>
      </div>
    </div>
  )
}

export default SideBar
