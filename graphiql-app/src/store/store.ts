import { combineReducers, configureStore } from '@reduxjs/toolkit'
import documentationReducer from './reducers/DocumentationSlice'
import editorReducer from './reducers/EditorSlice'

const rootReducer = combineReducers({
  documentationReducer,
  editorReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
