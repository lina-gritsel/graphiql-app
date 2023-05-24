export interface EditorState {
    response: unknown
    isLoading: boolean
    error: string
    valueTextarea: string
  }
  

export const DEFAULT_REQUEST = `query {
    characters {
        results {
            name
        }
    }
}`

export const DEFAULT_STATE: EditorState = {
  response: null,
  isLoading: false,
  error: '',
  valueTextarea: DEFAULT_REQUEST,
}
