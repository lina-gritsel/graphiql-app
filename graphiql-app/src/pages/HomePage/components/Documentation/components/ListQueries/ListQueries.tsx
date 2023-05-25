import { FC } from 'react'

import { Schema, QueryArguments } from '../../../../../../api'

import ReturnedValue from '../ReturnedValue'
import QueryDetails from '../QueryDetails'
import FieldCard from '../FieldCard'
import { useListQueries } from './hooks'

import styles from './ListQueries.module.scss'

interface ListQueries {
  data: Schema
}

const ListQueries: FC<ListQueries> = ({ data }) => {
  const { currentDocs, currentPage, notFieldClick, fieldOnclick } =
    useListQueries(data)

  return (
    <>
      {currentDocs?.map(({ name, args, description, type }) =>
        currentPage?.type === 'type' ? (
          <div key={name} className={styles.container}>
            {type && (
              <div>
                <span
                  className={
                    notFieldClick ? styles.fieldLink : styles.queryLink
                  }
                  onClick={() => fieldOnclick(name)}
                >
                  {name}
                </span>
                {args?.length ? createValueWithBracket(args) : ': '}
                <ReturnedValue type={type} />
              </div>
            )}
            <div className={styles.description}>{description}</div>
          </div>
        ) : (
          <FieldCard key={name} desc={description} args={args} type={type} />
        ),
      )}
    </>
  )
}

export default ListQueries

const createValueWithBracket = (args: QueryArguments[]) => {
  return (
    <>
      {args?.length !== 0 && <span>{'('}</span>}
      {args?.map(({ name, type }) => (
        <QueryDetails key={name} args={args} name={name} type={type} />
      ))}
      {args?.length > 1 && <br />}
      {args?.length !== 0 && <span>{')'}</span>}
      <span>{':'}</span>
      {'\n'}
    </>
  )
}
