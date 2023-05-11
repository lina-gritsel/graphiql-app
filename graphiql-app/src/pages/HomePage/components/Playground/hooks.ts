import { useRef, useState, DragEvent } from 'react'

import { fetchCharacters } from '../../../../api/requests'

import { DEFAULT_REQUEST } from './constants'
import { getAlignedText } from './utils'

export const usePlayground = () => {
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
    response,
    onSubmit,
    onAlign,
    onClean,
    onCopy,
    loading,
    valueTextarea,
    setValueTextarea,
  }
}

export const useResizableDiv = () => {
  const [initialPos, setInitialPos] = useState<number>()
  const [initialSize, setInitialSize] = useState<number>()

  const divRef = useRef<HTMLDivElement>(null)

  const initial = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setDragImage(new Image(), 0, 0)
    setInitialPos(event.clientX)
    setInitialSize(divRef.current?.offsetWidth)
  }

  const resize = (event: DragEvent<HTMLDivElement>) => {
    divRef.current!.style.width = `${
      Number(initialSize) + Number(event.clientX - Number(initialPos))
    }px`
  }

  return { divRef, initial, resize }
}
