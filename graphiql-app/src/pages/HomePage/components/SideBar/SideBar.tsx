import book from '../../../../assets/images/book.png'

import { useSideBar } from './hooks'

import styles from './SideBar.module.scss'

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
        <p className={styles.title}>Docs</p>
        <p className={styles.subtitle}>A GraphQL schema provides a root type for each kind of operation</p>
        {loading && <div>Loading...</div>}
        {queryOptions?.map(({ name }: { name: string }) => (
          <div key={name}>{name}</div>
        ))}
      </div>
    </>
  )
}

export default SideBar
