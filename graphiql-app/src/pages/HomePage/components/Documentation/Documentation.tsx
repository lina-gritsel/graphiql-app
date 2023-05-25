import { useDocumentation } from './hooks'
import { Schema } from '../../../../api'
import Loader from '../../../../components/Loader'

import BackSection from './components/BackSection'
import ListQueries from './components/ListQueries'

import styles from './Documentation.module.scss'

const Documentation = () => {
  const { prevPage, deleteHistory, currentPage, data, isLoading } =
    useDocumentation()

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {prevPage && (
            <BackSection prevDocs={prevPage} deleteHistory={deleteHistory} />
          )}
          <div className={styles.title}>{currentPage}</div>
          <ListQueries data={data as Schema} />
        </>
      )}
    </div>
  )
}

export default Documentation
