import { bindActionCreators } from '@reduxjs/toolkit'

import {
  addNewDocumentation,
  deleteDocumentation,
  setCurrentDocs,
} from './reducers/DocumentationSlice'
import { useAppDispatch } from './hooks/redux'

const actions = {
  addNewDocumentation,
  deleteDocumentation,
  setCurrentDocs,
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(actions, dispatch)
}
