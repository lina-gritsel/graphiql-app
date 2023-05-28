import { bindActionCreators } from '@reduxjs/toolkit'

import {
  addNewDocumentation,
  deleteDocumentation,
  setCurrentDocs,
} from './reducers/DocumentationSlice'
import {
  addEditor,
  deleteEditor,
  setHeaders,
  setIdActiveEditor,
  setValueTextarea,
  setVariables,
} from './reducers/EditorSlice'
import { useAppDispatch } from './hooks/redux'
import { useEditor } from './actions/editorActions'

const actions = {
  addNewDocumentation,
  deleteDocumentation,
  useEditor,
  setValueTextarea,
  addEditor,
  setIdActiveEditor,
  deleteEditor,
  setVariables,
  setHeaders,
  setCurrentDocs
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(actions, dispatch)
}
