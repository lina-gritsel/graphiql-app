import { useAppSelector } from '../../../../store/hooks/redux'
import { useActions } from '../../../../store/ActionsCreator'

export const useDocumentation = () => {
  const { history } = useAppSelector((state) => state.documentationReducer)
  const { deleteDocumentation } = useActions()

  const currentPage = history[history.length - 1]
  const prevPage = history[history.length - 2]

  return {
    currentPage,
    prevPage,
    deleteHistory: deleteDocumentation,
  }
}
