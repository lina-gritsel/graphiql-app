import { FC } from 'react'

import { useAllDocumentation } from './hooks'
import BackSection from './components'

import styles from './AllDocumentation.module.scss'
import ListQueries from './components/ListQueries'

interface AllDocumentation {
  data: any
}

const AllDocumentation: FC<AllDocumentation> = ({ data}) => {
  const {
    prevDocs,
    setSelectedPage,
  } = useAllDocumentation()

  return (
    <>
      <div className={styles.container}>
        {prevDocs && (
          <BackSection prevDocs={prevDocs} onClick={setSelectedPage} />
        )}
        <div className={styles.title}>Query</div>
        <div className={styles.queryLink}>
          <ListQueries data={data} />
        </div>
      </div>
    </>
  )
}

export default AllDocumentation
