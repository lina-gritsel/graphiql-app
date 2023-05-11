import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface DocsState {
    history: any[]
}
const initialState: DocsState = {
    history: [],
}

export const documentationSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    addNewDocumentation(state, action: PayloadAction<string>) {
      state.history.push(action.payload)
    },
  },
})

export default documentationSlice.reducer
export const { addNewDocumentation } = documentationSlice.actions
