import { FC } from 'react'

import back from '../../../../../../assets/images/back.png'

import styles from './BackSection.module.scss'

interface BackSectionProps {
  prevDocs: string
  deleteHistory: () => void
}

const BackSection: FC<BackSectionProps> = ({ prevDocs, deleteHistory }) => {
  return (
    <div className={styles.backSection} onClick={deleteHistory}>
      <img src={back} className={styles.backArrow} />
      <a className={styles.backLink}>{prevDocs}</a>
    </div>
  )
}

export default BackSection
