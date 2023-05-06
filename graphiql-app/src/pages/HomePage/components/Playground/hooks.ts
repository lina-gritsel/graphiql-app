import { fetchCharacters } from '../../../../api/requests'
import { useState } from 'react'

export const useHook = () => {
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async () => {
    try {
      setLoading(true)

      const result = await fetchCharacters()
      if (!result) {
        console.log('type the query correctly')
      }

      setResponse(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    response,
    onSubmit,
    loading,
  }
}
