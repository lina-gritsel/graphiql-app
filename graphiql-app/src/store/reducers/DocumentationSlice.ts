import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Fields } from '../../api'

interface DocsState {
  history: string[]
  currentDocs: Fields[]
}
const initialState: DocsState = {
  history: ['Query'],
  currentDocs: []
}

export const documentationSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    addNewDocumentation(state, action: PayloadAction<string>) {
      state.history.push(action.payload)
    },
    setCurrentDocs(state, action: PayloadAction<Fields[]>) {
      state.currentDocs = action.payload
    },
    deleteDocumentation(state, action: PayloadAction<string>) {
      state.history.pop()
    },
  },
})

export default documentationSlice.reducer
export const { addNewDocumentation, deleteDocumentation, setCurrentDocs } =
  documentationSlice.actions
