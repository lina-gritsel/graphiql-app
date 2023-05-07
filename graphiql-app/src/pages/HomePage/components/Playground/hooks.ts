import { useState } from 'react'

import { fetchCharacters } from '../../../../api/requests'

import { DEFAULT_REQUEST } from './constants'

export const useHook = () => {
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [valueTextarea, setValueTextarea] = useState<string>(DEFAULT_REQUEST)

  const onSubmit = async () => {
    try {
      setLoading(true)

      const result = await fetchCharacters(valueTextarea)
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

  const onClean = () => {
    const value = valueTextarea
      .replaceAll('\n', '')
      .replaceAll(' ', '')
      .replaceAll('{', ' {\n')
      .replaceAll('}', '\n}')
      .split('{\n')
      .map((str, index) => '  '.repeat(index * 2) + str)
      .join('{\n')
      .split('\n}')
      .map((str, index, arr) => {
        if (index === 0) {
          return str
        } else {
          return '  '.repeat((arr.length - index - 1) * 2) + '}'
        }
      })
      .join('\n')
    setValueTextarea(value)
  }

  return {
    response,
    onSubmit,
    onClean,
    loading,
    valueTextarea,
    setValueTextarea,
  }
}
