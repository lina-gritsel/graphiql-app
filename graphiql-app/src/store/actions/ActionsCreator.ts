import { bindActionCreators } from '@reduxjs/toolkit'

import { addNewDocumentation, deleteDocumentation } from '../reducers/DocumentationSlice'
import { setValueTextarea } from '../reducers/EditorSlice'
import { useAppDispatch } from '../hooks/redux'
import { useEditor } from './useEditor'

const actions = {
  addNewDocumentation,
  deleteDocumentation,
  useEditor,
  setValueTextarea
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(actions, dispatch)
}
