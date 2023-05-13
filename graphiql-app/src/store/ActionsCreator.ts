import { bindActionCreators } from '@reduxjs/toolkit'

import { addNewDocumentation, deleteDocumentation } from './reducers/DocumentationSlice'
import { useAppDispatch } from './hooks/redux'

const actions = {
  addNewDocumentation,
  deleteDocumentation,
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(actions, dispatch)
}
