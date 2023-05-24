import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchSchema } from '../../../../api/requests'

export const useFetchSchema = () => {

  const { data, isLoading, isFetching } = useQuery(
    ['fetchSchema', history],
    () => fetchSchema(),
    {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
    },
  )

  return {
    data,
    loading: isLoading || isFetching,
  }
}

export const useSideBarVisible = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return { onToggleVisible: () => setVisible((prev) => !prev), visible }
}
