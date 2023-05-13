import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DEFAULT_REQUEST } from '../../constants/defaultRequest'
import { useEditor } from '../actions/useEditor'

interface UserState {
  response: any
  isLoading: boolean
  error: string
  valueTextarea: string
}

const initialState: UserState = {
  response: null,
  isLoading: false,
  error: '',
  valueTextarea: DEFAULT_REQUEST,
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setValueTextarea(state, action: PayloadAction<string>) {
      state.valueTextarea = action.payload
    },
  },
  extraReducers: {
    [useEditor.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = ''
      state.response = action.payload
    },
    [useEditor.pending.type]: (state) => {
      state.isLoading = true
    },
    [useEditor.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default editorSlice.reducer
export const { setValueTextarea } = editorSlice.actions
