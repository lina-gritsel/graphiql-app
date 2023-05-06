import book from '../../../../assets/images/book.png'

import styles from './SideBar.module.scss'

const SideBar = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={book} alt="documentation" />
    </div>
  )
}

export default SideBar
