import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchCharacters } from '../../api/requests'

export const useEditor = createAsyncThunk(
  'editor/fetchResponse',
  async (request: string, thunkAPI) => {
    try {
      const response = await fetchCharacters(request) as unknown
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const fulfilled = createAction<unknown>(useEditor.fulfilled.type)
export const pending = createAction(useEditor.pending.type)
export const rejected = createAction<Error>(useEditor.rejected.type)
