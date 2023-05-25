import { FC, useEffect } from 'react'

import { useActions } from '../../../../../../store/ActionsCreator'
import {
  Schema,
  QueryArguments,
  Fields,
  fetchTypes,
} from '../../../../../../api'

import ReturnedValue from '../ReturnedValue'
import QueryDetails from '../QueryDetails'

import styles from './ListQueries.module.scss'
import { useAppSelector } from '../../../../../../store/hooks/redux'
import { findCurrentObject } from '../../../../../../utils/flattenObject'
import { useQuery } from '@tanstack/react-query'
import FieldCard from '../FieldCard'

interface ListQueries {
  data: Schema
}

const ListQueries: FC<ListQueries> = ({ data }) => {
  const { addNewDocumentation, setCurrentDocs } = useActions()
  const { history, currentDocs } = useAppSelector(
    (state) => state.documentationReducer,
  )
  const currentPage = history[history.length - 1]
  const typesPages = history.filter(({ type }) => type === 'type')
  const lastTypesPage = typesPages[typesPages.length - 1]
  const notFieldClick = history.length > 1

  const { data: dataTypes, isFetching } = useQuery(
    ['fetchTypes', lastTypesPage],
    () => fetchTypes(lastTypesPage.label),
  )

  useEffect(() => {
    const currentField = findCurrentObject(
      data?.types[0].fields as Fields[],
      currentPage.label,
    )

    const docs =
      history.length === 1
        ? data?.types[0].fields
        : currentPage.type === 'field'
        ? [currentField]
        : dataTypes

    // console.log(currentPage)

    setCurrentDocs(docs as Fields[])
  }, [history, isFetching])

  const fieldOnclick = (label: string) => {
    if (notFieldClick) return
    addNewDocumentation({ type: 'field', label: label })
  }

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
          <FieldCard
            key={name}
            desc={description}
            isFetching={isFetching}
            args={args}
            type={type}
          />
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
