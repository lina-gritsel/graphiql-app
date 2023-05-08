import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchSchema } from '../../../../api/requests'

export const useSideBar = () => {
  const { changeStateDocs, openDocumentation } = openQueryOptions()

  const { data, isLoading, isFetching } = useQuery(
    ['fetchSchema'],
    () => fetchSchema(),
    {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
    },
  )

  return {
    changeStateDocs,
    openDocumentation,
    queryOptions: data,
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
