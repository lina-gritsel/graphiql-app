import { FC } from 'react'

import { useAllDocumentation } from './hooks'
import BackSection from './components'

import styles from './AllDocumentation.module.scss'
import ListQueries from './components/ListQueries'

interface AllDocumentation {
  data: any
  requestData: (value: string) => void
}

const AllDocumentation: FC<AllDocumentation> = ({ data, requestData }) => {
  const { prevDocs, setSelectedPage } = useAllDocumentation()

  const onClickNextPage = (value: string) => {
    requestData(value)
  }

  return (
    <>
      <div className={styles.container}>
        {prevDocs && (
          <BackSection prevDocs={prevDocs} onClick={setSelectedPage} />
        )}
        <div className={styles.title}>Query</div>
        <ListQueries data={data} onClick={onClickNextPage} />
      </div>
    </>
  )
}

export default AllDocumentation
