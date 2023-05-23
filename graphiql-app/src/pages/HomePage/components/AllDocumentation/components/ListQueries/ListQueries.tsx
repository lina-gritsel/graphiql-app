import { FC, useEffect } from 'react'

import { useActions } from '../../../../../../store/ActionsCreator'
import { Schema, QueryArguments, Fields } from '../../../../../../api'

import ReturnedValue from '../ReturnedValue'
import QueryDetails from '../QueryDetails'

import styles from './ListQueries.module.scss'
import { findCurrentObject } from '../../../../../../utils/flattenObject'
import { useAppSelector } from '../../../../../../store/hooks/redux'

interface ListQueries {
  data: Schema
}

const ListQueries: FC<ListQueries> = ({ data }) => {
  const { addNewDocumentation, setCurrentDocs } = useActions()
  const { history, currentDocs } = useAppSelector(
    (state) => state.documentationReducer,
  )

  useEffect(() => {
    const currentObject = findCurrentObject(
      data.types[0].fields,
      history[history.length - 1],
    )
    const currentDocs = currentObject ? [currentObject] : data.types[0].fields
    setCurrentDocs(currentDocs as Fields[])
    console.log(currentObject)
  }, [history])

  return (
    <>
      {currentDocs.map(({ name, args, description, type }) => (
        <div key={name} className={styles.container}>
          <div>
            <span
              className={styles.queryLink}
              onClick={() => addNewDocumentation(name)}
            >
              {name}
            </span>
            {createValueWithBracket(args)}
            <ReturnedValue type={type} />
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      ))}
    </>
  )
}

export default ListQueries

const createValueWithBracket = (args: QueryArguments[]) => {
  return (
    <>
      {args.length !== 0 && <span>{'('}</span>}
      {args.map(({ name, type }) => (
        <QueryDetails key={name} args={args} name={name} type={type} />
      ))}
      {args.length > 1 && <br />}
      {args.length !== 0 && <span>{')'}</span>}
      <span>{':'}</span>
      {'\n'}
    </>
  )
}
