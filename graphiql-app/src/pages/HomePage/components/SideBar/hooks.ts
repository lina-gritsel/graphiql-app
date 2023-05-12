import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchSchema } from '../../../../api/requests'
import { useAppSelector } from '../../../../store/hooks/redux'

export const useSideBar = () => {
  const { changeStateDocs, openDocumentation } = openQueryOptions()

  const { history } = useAppSelector((state) => state.documentationReducer)
  const currentPage = history[history.length - 1]

  const { data, isLoading, isFetching } = useQuery(
    ['fetchSchema', currentPage],
    () => fetchSchema(currentPage),
    {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
    },
  )
  
  return {
    changeStateDocs,
    openDocumentation,
    data,
    loading: isLoading || isFetching,
  }
}

const openQueryOptions = () => {
  const [openDocumentation, setOpenDocumentation] = useState<boolean>(false)

  const changeStateDocs = () => {
    setOpenDocumentation((prev) => !prev)
  }

  return { changeStateDocs, openDocumentation }
}
