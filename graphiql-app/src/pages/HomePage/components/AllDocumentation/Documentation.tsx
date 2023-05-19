import { FC } from 'react'

import BackSection from './components/BackSection'
import ListQueries from './components/ListQueries'
import { useDocumentation } from './hooks'

import styles from './Documentation.module.scss'

interface Documentation {
  data: any
}

const Documentation: FC<Documentation> = ({ data }) => {
  const { prevPage, deleteHistory, currentPage } = useDocumentation()

  return (
    <>
      <div className={styles.container}>
        {prevPage && (
          <BackSection prevDocs={prevPage} onClick={deleteHistory} />
        )}
        <div className={styles.title}>{currentPage}</div>
        <ListQueries data={data} />
      </div>
    </>
  )
}

export default Documentation
