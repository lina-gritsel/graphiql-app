import { useState } from 'react'

import { useAppSelector } from '../../../../store/hooks/redux'
import { useActions } from '../../../../store/ActionsCreator'

export const useAllDocumentation = () => {
  const { history } = useAppSelector((state) => state.documentationReducer)
  const { addNewDocumentation } = useActions()

  const [selectedPage, setSelectedPage] = useState('Query')

  const prevDocs = history[history.length - 2]
  const currentDocs = history[history.length - 1]

  const getDocs = (docs: any) => {
    addNewDocumentation(docs)
  }

  return {
    prevDocs,
    setSelectedPage,
  }
}
