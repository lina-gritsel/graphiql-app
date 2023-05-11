import { FC } from 'react'

import { parsingSchema } from './hooks'
import BackSection from './components'

import styles from './AllDocumentation.module.scss'

interface AllDocumentationProps {
  data: any
}

const AllDocumentation: FC<AllDocumentationProps> = ({ data }) => {
  const { history, prevDocs, currentDocs, selectedPage, setSelectedPage } =
    parsingSchema({
      data,
    })

  return (
    <>
      {history.map((docs) => {
        if (selectedPage === docs.toLowerCase()) {
          return (
            <div key={currentDocs} className={styles.container}>
              {prevDocs && (
                <BackSection prevDocs={prevDocs} onClick={setSelectedPage} />
              )}
              <div className={styles.title}>{selectedPage}</div>
              <div
                className={styles.queryLink}
                onClick={() => setSelectedPage(currentDocs)}
              >
                {currentDocs}
              </div>
            </div>
          )
        }
      })}
    </>
  )
}

export default AllDocumentation
