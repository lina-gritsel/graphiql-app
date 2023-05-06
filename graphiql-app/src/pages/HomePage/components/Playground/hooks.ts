import { useQuery } from '@tanstack/react-query'
import { fetchCharacters } from '../../../../api/requests'

export const usePlayground = () => {
  const { data, isLoading, isFetching } = useQuery(
    ['fetchAllCharacters'],
    () => fetchCharacters(),
    {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
    },
  )

  return { data, loading: isLoading || isFetching }
}
