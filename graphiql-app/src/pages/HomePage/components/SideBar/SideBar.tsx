import { useTranslation } from 'react-i18next'

import book from '../../../../assets/images/book.png'

import { useSideBar } from './hooks'

import styles from './SideBar.module.scss'

const SideBar = () => {
  const { changeStateDocs, openDocumentation, queryOptions, loading } = useSideBar()
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <img
          onClick={changeStateDocs}
          className={styles.icon}
          src={book}
          alt="documentation"
        />
      </div>
      <div className={openDocumentation ? styles.queryOptions : styles.hidden}>
        <p className={styles.title}>{t('docs')}</p>
        <p className={styles.subtitle}>{t('schema')}</p>
        {loading && <div>Loading...</div>}
        {queryOptions?.map(({ name }: { name: string }) => (
          <div key={name}>{name}</div>
        ))}
      </div>
    </>
  )
}

export default SideBar
