import { createAsyncThunk } from '@reduxjs/toolkit'

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
