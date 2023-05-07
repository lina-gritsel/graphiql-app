import book from '../../../../assets/images/book.png'

import styles from './SideBar.module.scss'
import { useSideBar } from './hooks'

const SideBar = () => {
  const { onClick, openDocumentation, queryOptions, loading } = useSideBar()

  return (
    <>
      <div className={styles.container}>
        <img
          onClick={onClick}
          className={styles.icon}
          src={book}
          alt="documentation"
        />
      </div>
      <div className={openDocumentation ? styles.queryOptions : styles.hidden}>
        Dock
        {loading && <div>Loading...</div>}
        {queryOptions?.map(({ name }: { name: string }) => (
          <div key={name}>{name}</div>
        ))}
      </div>
    </>
  )
}

export default SideBar
