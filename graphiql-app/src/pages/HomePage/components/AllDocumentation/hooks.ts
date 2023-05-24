import { useAppSelector } from '../../../../store/hooks/redux'
import { useActions } from '../../../../store/actions/ActionsCreator'

export const useAllDocumentation = () => {
  const { history } = useAppSelector((state) => state.documentationReducer)
  const { addNewDocumentation, deleteDocumentation } = useActions()

  const prevPage = history[history.length - 2]

  return {
    prevPage,
    addHistory: addNewDocumentation,
    deleteHistory: deleteDocumentation,
  }
}
