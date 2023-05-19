import { FC } from 'react'

import styles from './QueryDetails.module.scss'

interface QueryDetailsProps {
  args: any[]
  name: string
  type: any
}

const QueryDetails: FC<QueryDetailsProps> = ({ args, name, type }) => {
  return (
    <span>
      {args.length !== 1 && <br />}
      <span className={styles.argument}>{name}</span>
      <span>:</span>
      {'\n'}
      {type.ofType?.name && (
        <>
          <span className={styles.type}>{type.ofType?.name}</span>
          {type.ofType.kind === 'SCALAR' ? <span>!</span> : ''}
        </>
      )}
      {type.ofType?.kind === 'LIST' && (
        <>
          <span>{'['}</span>
          <span className={styles.type}>
            {type.ofType?.ofType?.ofType?.name}
          </span>
          <span>{'!]!'}</span>
        </>
      )}
      <span className={styles.type}>{type.name}</span>
    </span>
  )
}

export default QueryDetails
