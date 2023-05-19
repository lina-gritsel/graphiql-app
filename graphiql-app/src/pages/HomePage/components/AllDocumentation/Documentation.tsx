import { FC } from 'react'

import { useAllDocumentation } from './hooks'
import BackSection from './components/BackSection'

import styles from './Documentation.module.scss'
import ListQueries from './components/ListQueries'

interface Documentation {
  data: any
}

const Documentation: FC<Documentation> = ({ data }) => {
  const { prevPage, deleteHistory, currentPage } = useAllDocumentation()


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
