import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DEFAULT_STATE, EditorState } from '../../constants/editor'
import { useEditor } from '../actions/useEditor'

interface InitialState {
  editors: EditorState[]
  idActiveEditor: number
}

const initialState: InitialState = {
  editors: [{ ...DEFAULT_STATE }],
  idActiveEditor: 0,
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setValueTextarea(state, action: PayloadAction<string>) {
      const currentEditor = state.editors[state.idActiveEditor]
      currentEditor.valueTextarea = action.payload
    },
    setIdActiveEditor(state, action: PayloadAction<number>) {
      state.idActiveEditor = action.payload
    },
    addEditor(state) {
      state.idActiveEditor += 1
      state.editors.push({ ...DEFAULT_STATE })
    },
  },
  extraReducers: {
    [useEditor.fulfilled.type]: (state, action: PayloadAction<any>) => {
      const currentEditor = state.editors[state.idActiveEditor]

      currentEditor.isLoading = false
      currentEditor.error = ''
      currentEditor.response = action.payload
    },
    [useEditor.pending.type]: (state) => {
      const currentEditor = state.editors[state.idActiveEditor]

      currentEditor.isLoading = true
    },
    [useEditor.rejected.type]: (state, action: PayloadAction<string>) => {
      const currentEditor = state.editors[state.idActiveEditor]

      currentEditor.isLoading = false
      currentEditor.error = action.payload
    },
  },
})

export default editorSlice.reducer
export const { setValueTextarea, setIdActiveEditor, addEditor } = editorSlice.actions
