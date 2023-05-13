import { FC } from 'react'

import { useAllDocumentation } from './hooks'
import BackSection from './components'

import styles from './AllDocumentation.module.scss'
import ListQueries from './components/ListQueries'

interface AllDocumentation {
  data: any
}

const AllDocumentation: FC<AllDocumentation> = ({ data }) => {
  const { prevPage, addHistory, deleteHistory } =
    useAllDocumentation()

  const onClickNextPage = (value: string) => {
    addHistory(value)
  }

  const onClickPrevPage = (value: string) => {
    deleteHistory(value)
  }

  return (
    <>
      <div className={styles.container}>
        {prevPage && (
          <BackSection prevDocs={prevPage} onClick={onClickPrevPage} />
        )}
        <div className={styles.title}>Query</div>
        <ListQueries data={data} onClick={onClickNextPage} />
      </div>
    </>
  )
}

export default AllDocumentation
