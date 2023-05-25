import { useEffect } from 'react'

import { useActions } from '../../../../../../../store/ActionsCreator'
import { useAppSelector } from '../../../../../../../store/hooks/redux'
import { Fields, Schema, Types } from '../../../../../../../api'
import { findCurrentObject } from '../../../../../../../utils/findObject'

export const useListQueries = (data: Schema) => {
  const { addNewDocumentation, setCurrentDocs } = useActions()
  const { history, currentDocs } = useAppSelector(
    (state) => state.documentationReducer,
  )

  const schema = data?.types[0].fields
  const allTypes = data?.types
  const currentPage = history[history.length - 1]
  const notFieldClick = history.length > 1

  useEffect(() => {
    const currentField = findCurrentObject(
      currentPage.type === 'type' ? allTypes : schema,
      currentPage.label,
    ) as Types

    const docs =
      history.length === 1 ? schema : currentField?.fields || [currentField]

    setCurrentDocs(docs as Fields[])
  }, [history])

  const fieldOnclick = (label: string) => {
    if (notFieldClick) return
    addNewDocumentation({ type: 'field', label: label })
  }

  return { currentDocs, currentPage, notFieldClick, fieldOnclick }
}
