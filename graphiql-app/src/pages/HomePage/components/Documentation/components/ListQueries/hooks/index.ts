import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { useActions } from '../../../../../../../store/ActionsCreator'
import { useAppSelector } from '../../../../../../../store/hooks/redux'
import { Fields, Schema, fetchTypes } from '../../../../../../../api'
import { findCurrentObject } from '../../../../../../../utils/findObject'

export const useListQueries = (data: Schema) => {
  const { addNewDocumentation, setCurrentDocs } = useActions()
  const { history, currentDocs } = useAppSelector(
    (state) => state.documentationReducer,
  )

  const schema = data?.types[0].fields
  const currentPage = history[history.length - 1]
  const typesPages = history.filter(({ type }) => type === 'type')
  const lastTypesPage = typesPages[typesPages.length - 1]
  const notFieldClick = history.length > 1

  const { data: dataTypes, isFetching } = useQuery(
    ['fetchTypes', lastTypesPage],
    () => fetchTypes(lastTypesPage.label),
  )

  useEffect(() => {
    const currentField = findCurrentObject(schema, currentPage.label)

    const docs =
      history.length === 1
        ? schema
        : currentPage.type === 'field'
        ? [currentField]
        : dataTypes

    setCurrentDocs(docs as Fields[])
  }, [history, isFetching])

  const fieldOnclick = (label: string) => {
    if (notFieldClick) return
    addNewDocumentation({ type: 'field', label: label })
  }

  return { currentDocs, currentPage, notFieldClick, fieldOnclick }
}
