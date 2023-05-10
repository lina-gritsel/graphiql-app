import { FC, useState } from 'react'

import back from '../../../../assets/images/back.png'

import { parsingSchema } from './hooks'

import styles from './AllDocumentation.module.scss'

interface AllDocumentationProps {
  data: any
}

const AllDocumentation: FC<AllDocumentationProps> = ({ data }) => {
  const { CURRENT_DOCUMENTATION } = parsingSchema({ data })
  const [currentPage, setCurrentPage] = useState('Docs')

  return (
    <>
      {CURRENT_DOCUMENTATION.map((object, index) => {
        if (object.title === currentPage) {
          return (
            <div key={index} className={styles.container}>
              {object.prevPage && (
                <div
                  className={styles.backSection}
                  onClick={() => setCurrentPage(object.prevPage)}
                >
                  <img src={back} className={styles.backArrow} />
                  <a className={styles.backLink}> {object.prevPage}</a>
                </div>
              )}
              <div className={styles.title}>{object.title}</div>
              <div>
                {object.values.map(
                  (value, index: any) => (
                    <div
                      key={index}
                      onClick={() => setCurrentPage(value)}
                      className={styles.queryLink}
                    >
                      {value}
                    </div>
                  ),
                )}
              </div>
            </div>
          )
        }
      })}
    </>
  )
}

export default AllDocumentation
