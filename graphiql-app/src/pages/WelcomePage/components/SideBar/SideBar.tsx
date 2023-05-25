import { RefObject, forwardRef, useContext } from 'react'
import { Button, useMediaQuery } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { PATHS } from '../../../../constants/paths'
import { AuthContext } from '../../../../constants/context'

import styles from './SideBar.module.scss'
import { MEDIA_QUERIES } from '../../../../constants/mediaQueries'

const SideBar = forwardRef(function SideBar(_, ref) {
  const isAuthUser = useContext(AuthContext)
  const [isTablet] = useMediaQuery(MEDIA_QUERIES.TABLET)

  const navigate = useNavigate()

  const { t } = useTranslation()

  const acquaintanceKey = isTablet ? 'acquaintanceTablet' : 'acquaintance'

  return (
    <div className={styles.greeting} ref={ref as RefObject<HTMLDivElement>}>
      <div>
        <p>{t('welcome')}</p>
        <p>{t(acquaintanceKey)}</p>
      </div>
      <div className={styles.btnWrapper}>
        {!isAuthUser ? (
          <>
            <Button onClick={() => navigate(PATHS.REGISTRATION)}>
              {t('singUp')}
            </Button>
            <p>{t('or')}</p>
            <Button onClick={() => navigate(PATHS.LOGIN)}>
              {t('logIn')}
            </Button>
          </>
        ) : (
          <Button onClick={() => navigate(PATHS.HOME)}>
            {t('goToMain')}
          </Button>
        )}
      </div>
    </div>
  )
})

export default SideBar
