import { FC } from 'react'

import { useActions } from '../../../../../../store/ActionsCreator'
import { Type } from '../../../../../../api'

import styles from './ReturnedValue.module.scss'

const ReturnedValue: FC<{ type: Type }> = ({ type }) => {
  const { addNewDocumentation } = useActions()

  return (
    <>
      {(type?.kind === 'OBJECT' ||'SCALAR') && (
        <span
          className={styles.type}
          onClick={() =>
            addNewDocumentation({ label: type?.name as string, type: 'type' })
          }
        >
          {type?.name}
        </span>
      )}
      {type?.kind === 'LIST' && (
        <>
          <span>{'['}</span>
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
          <span>{']'}</span>
        </>
      )}
    </>
  )
}

export default ReturnedValue
