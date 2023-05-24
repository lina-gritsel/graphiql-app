import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface DocsState {
  history: any[]
}
const initialState: DocsState = {
  history: ['Query'],
}

export const documentationSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    addNewDocumentation(state, action: PayloadAction<string>) {
      state.history.push(action.payload)
    },
    deleteDocumentation(state) {
      state.history.pop()
    },
  },
})

export default documentationSlice.reducer
export const { addNewDocumentation, deleteDocumentation } =
  documentationSlice.actions
