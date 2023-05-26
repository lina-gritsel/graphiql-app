import { FC } from 'react'

import back from '../../../../../../assets/images/back.png'

import styles from './BackSection.module.scss'

interface BackSectionProps {
  prevDocs: string
  onClick: () => void
}

const BackSection: FC<BackSectionProps> = ({ prevDocs, onClick }) => {
  return (
    <div className={styles.backSection} onClick={() => onClick()}>
      <img src={back} className={styles.backArrow} />
      <a className={styles.backLink}>{prevDocs}</a>
    </div>
  )
}

export default BackSection
