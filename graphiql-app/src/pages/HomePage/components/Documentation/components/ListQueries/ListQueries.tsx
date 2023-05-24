import { FC } from 'react'

import { useActions } from '../../../../../../store/ActionsCreator'
import { Schema, QueryArguments } from '../../../../../../api'

import ReturnedValue from '../ReturnedValue'
import QueryDetails from '../QueryDetails'

import styles from './ListQueries.module.scss'
import { flattenObject } from '../../../../../../utils/flattenObject'

interface ListQueries {
  data: Schema
}

const ListQueries: FC<ListQueries> = ({ data }) => {
  const { addNewDocumentation } = useActions()
  // flattenObject(data.types[0].fields)

  return (
    <>
      {data.types[0].fields.map(({ name, args, description, type }) => (
        <div key={name} className={styles.container}>
          <div>
            <span
              className={styles.queryLink}
              // onClick={() => addNewDocumentation(name)}
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
