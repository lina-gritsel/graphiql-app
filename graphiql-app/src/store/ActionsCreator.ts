import { bindActionCreators } from '@reduxjs/toolkit'

import { addNewDocumentation } from './reducers/DocumentationSlice'
import { useAppDispatch } from './hooks/redux'

const actions = {
  addNewDocumentation,
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(actions, dispatch)
}
