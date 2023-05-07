import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchSchema } from '../../../../api/requests'

export const useSideBar = () => {
  const { onClick, openDocumentation } = openQueryOptions()

  const { data, isLoading, isFetching } = useQuery(
    ['fetchSchema'],
    () => fetchSchema(),
    {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
    },
  )

  return {
    onClick,
    openDocumentation,
    queryOptions: data,
    loading: isLoading || isFetching,
  }
}

const openQueryOptions = () => {
  const [openDocumentation, setOpenDocumentation] = useState<boolean>(false)

  const onClick = () => {
    setOpenDocumentation((prev) => !prev)
  }

  return { onClick, openDocumentation }
}
