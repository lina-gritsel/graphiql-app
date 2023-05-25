import { useQuery } from '@tanstack/react-query'

import { useAppSelector } from '../../../../store/hooks/redux'
import { useActions } from '../../../../store/ActionsCreator'
import { fetchSchema } from '../../../../api'

export const useDocumentation = () => {
  const { history } = useAppSelector((state) => state.documentationReducer)
  const { deleteDocumentation } = useActions()

  const { data, isLoading } = useQuery(
    ['fetchSchema'],
    () => fetchSchema(),
    {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
    },
  )

  const currentPage = history[history.length - 1].label
  const prevPage = history[history.length - 2]?.label

  return {
    data,
    isLoading,
    currentPage,
    prevPage,
    deleteHistory: deleteDocumentation,
  }
}
