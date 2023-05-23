import { FC } from 'react'

import { useActions } from '../../../../../../store/ActionsCreator'

import styles from './ReturnedValue.module.scss'

const ReturnedValue: FC<{ type: any }> = ({ type }) => {
  const { addNewDocumentation } = useActions()

  return (
    <>
      {type.kind === 'OBJECT' && (
        <span
          className={styles.type}
          onClick={() => addNewDocumentation(type.name)}
        >
          {type.name}
        </span>
      )}
      {type.kind === 'LIST' && (
        <>
          <span>{'['}</span>
          <span className={styles.type}>{type.ofType.name}</span>
          <span>{']'}</span>
        </>
      )}
    </>
  )
}

export default ReturnedValue
