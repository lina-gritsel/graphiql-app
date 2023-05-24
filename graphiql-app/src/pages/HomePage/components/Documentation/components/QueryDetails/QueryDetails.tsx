import { FC } from 'react'

import { useActions } from '../../../../../../store/ActionsCreator'

import styles from './QueryDetails.module.scss'

interface QueryDetailsProps {
  args: any[]
  name?: string
  type: any
}

const QueryDetails: FC<QueryDetailsProps> = ({ args, name, type }) => {
  const { addNewDocumentation } = useActions()
// console.log(type)
  return (
    <span>
      {args?.length !== 1 && <br />}
      <span className={styles.argument}>{name}</span>
      <span>:</span>
      {'\n'}
      {type?.ofType?.name && (
        <>
          <span
            className={styles.type}
            onClick={() =>
              addNewDocumentation({
                label: type?.ofType?.name as string,
                type: 'type',
              })
            }
          >
            {type?.ofType?.name}
          </span>
          {type.ofType?.kind === 'SCALAR' ? <span>!</span> : ''}
        </>
      )}
      {type?.ofType?.kind === 'LIST' && (
        <>
          <span>{'['}</span>
          <span
            className={styles.type}
            onClick={() =>
              addNewDocumentation({
                label: type?.ofType?.ofType?.ofType?.name as string,
                type: 'type',
              })
            }
          >
            {type?.ofType?.ofType?.ofType?.name}
          </span>
          <span>{'!]!'}</span>
        </>
      )}
      <span  onClick={() =>
              addNewDocumentation({
                label: type?.name as string,
                type: 'type',
              })
            } className={styles.type}>{type?.name}</span>
    </span>
  )
}

export default QueryDetails
