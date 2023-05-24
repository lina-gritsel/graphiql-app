import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Fields } from '../../api'

interface HistoryItem {
  type: 'type' | 'field'
  label: string
}
interface DocsState {
  history: HistoryItem[]
  currentDocs: Fields[]
  schema: Fields[]
}
const initialState: DocsState = {
  history: [{ type: 'type', label: 'Query' }],
  currentDocs: [],
  schema: [],
}

export const documentationSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    addNewDocumentation(state, action: PayloadAction<HistoryItem>) {
      state.history.push(action.payload)
    },
    setCurrentDocs(state, action: PayloadAction<Fields[]>) {
      state.currentDocs = action.payload
    },
    setSchema(state, action: PayloadAction<Fields[]>) {
      state.currentDocs = action.payload
    },
    deleteDocumentation(state, action: PayloadAction<string>) {
      state.history.pop()
    },
  },
})

export default documentationSlice.reducer
export const { addNewDocumentation, deleteDocumentation, setCurrentDocs, setSchema } =
  documentationSlice.actions
