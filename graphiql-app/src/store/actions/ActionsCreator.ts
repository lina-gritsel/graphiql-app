import { bindActionCreators } from '@reduxjs/toolkit'

import {
  addNewDocumentation,
  deleteDocumentation,
} from '../reducers/DocumentationSlice'
import {
  addEditor,
  deleteEditor,
  setIdActiveEditor,
  setValueTextarea,
} from '../reducers/EditorSlice'
import { useAppDispatch } from '../hooks/redux'
import { useEditor } from './editorActions'

const actions = {
  addNewDocumentation,
  deleteDocumentation,
  useEditor,
  setValueTextarea,
  addEditor,
  setIdActiveEditor,
  deleteEditor
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(actions, dispatch)
}