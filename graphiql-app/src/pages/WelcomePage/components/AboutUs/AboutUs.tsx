import { RefObject, forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import styles from './AboutUs.module.scss'

const AboutUs = forwardRef(function AboutUs(_, ref) {
  const { t } = useTranslation()
  return (
    <div className={styles.about} ref={ref as RefObject<HTMLDivElement>}>
      <div className={styles.infoCard}>
        <div className={styles.title}>{t('about')}</div>
        <div className={styles.text}>
          <p>{t('aboutUs')}</p>
        </div>
      </div>
      <div className={styles.infoCard}>
        <p className={styles.text}>{t('aboutFrontend')}</p>
      </div>
      <div className={styles.infoCard}>
        <div className={styles.title}>{t('project')}</div>
        <div className={styles.text}>
          <p>
            {t('aboutProjectFirstPart')}{' '}
            <Link
              to="https://www.npmjs.com/package/@graphiql/react"
              target="_blank"
              rel="noreferrer"
            >
              GraphiQL.
            </Link>
          </p>
          <p>{t('aboutProjectTwoPart')}</p>
        </div>
      </div>
      <div className={styles.infoCard}>
        <p className={styles.text}>{t('aboutProjectLastPart')}</p>
      </div>

      <div className={styles.infoCard}>
        <div className={styles.title}>{t('course')}</div>
        <div className={styles.text}>
          <p>
            {t('aboutCourseFirstPart')}{' '}
            <Link
              to="https://www.npmjs.com/package/@graphiql/react"
              target="_blank"
              rel="noreferrer"
            >
              The Rolling Scopes.
            </Link>{' '}
            {t('aboutCourseLastPart')}
          </p>
        </div>
      </div>
    </div>
  )
})

export default AboutUs
