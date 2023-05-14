import { bindActionCreators } from '@reduxjs/toolkit'

import {
  addNewDocumentation,
  deleteDocumentation,
} from '../reducers/DocumentationSlice'
import {
  addEditor,
  setIdActiveEditor,
  setValueTextarea,
} from '../reducers/EditorSlice'
import { useAppDispatch } from '../hooks/redux'
import { useEditor } from './useEditor'

const actions = {
  addNewDocumentation,
  deleteDocumentation,
  useEditor,
  setValueTextarea,
  addEditor,
  setIdActiveEditor,
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(actions, dispatch)
}
