import { FC } from 'react'

import { useDocumentation } from './hooks'
import { Schema } from '../../../../api'

import BackSection from './components/BackSection'
import ListQueries from './components/ListQueries'

import styles from './Documentation.module.scss'

interface Documentation {
  data: Schema
}

const Documentation: FC<Documentation> = ({ data }) => {
  const { prevPage, deleteHistory, currentPage } = useDocumentation()

  return (
    <>
      <div className={styles.container}>
        {prevPage && (
          <BackSection prevDocs={prevPage} deleteHistory={deleteHistory} />
        )}
        <div className={styles.title}>{currentPage}</div>
        <ListQueries data={data} />
      </div>
    </>
  )
}

export default Documentation
