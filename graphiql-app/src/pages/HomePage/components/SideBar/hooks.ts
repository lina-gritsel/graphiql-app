import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchSchema } from '../../../../api/requests'

export const useSideBar = () => {
  const { changeStateDocs, openDocumentation } = openQueryOptions()
  const [requestData, setRequestData] = useState('Query')

  const { data, isLoading, isFetching } = useQuery(
    ['fetchSchema', requestData],
    () => fetchSchema(requestData),
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
    setRequestData
  }
}

const openQueryOptions = () => {
  const [openDocumentation, setOpenDocumentation] = useState<boolean>(false)

  const changeStateDocs = () => {
    setOpenDocumentation((prev) => !prev)
  }

  return { changeStateDocs, openDocumentation }
}
