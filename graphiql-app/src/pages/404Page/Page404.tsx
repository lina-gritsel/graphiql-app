import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { PATHS } from '../../constants/paths'
import Footer from '../../components/Footer'

import styles from './Page404.module.scss'

const Page404 = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <p className={styles.errorNumber}>404</p>
        <p className={styles.errorText}>{t('404')}</p>
        <div className={styles.backLink}>
          <p>{t('goBack')}</p>
          <NavLink to={PATHS.WELCOME} className={styles.welcome}>
            {t('startPage')}
          </NavLink>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Page404
