import { useState } from 'react'

import { fetchCharacters } from '../../../../api/requests'

import { DEFAULT_REQUEST } from './constants'
import { getAlignedText } from './utils'

export const usePlayground = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [valueTextarea, setValueTextarea] = useState<string>(DEFAULT_REQUEST)

  const onSubmit = async () => {
    try {
      setLoading(true)

      const result = await fetchCharacters(valueTextarea)
      if (!result) {
        console.log('type the query correctly')
      }
      setData(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const onAlign = () => {
    const alignedText = getAlignedText(valueTextarea)
    setValueTextarea(alignedText)
  }

  const onClean = () => {
    setValueTextarea('')
  }

  const onCopy = () => {
    navigator.clipboard.writeText(valueTextarea)
  }

  return {
    data,
    onSubmit,
    onAlign,
    onClean,
    onCopy,
    loading,
    valueTextarea,
    setValueTextarea,
  }
}
