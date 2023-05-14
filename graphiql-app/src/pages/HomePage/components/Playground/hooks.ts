import { useRef, useState, DragEvent } from 'react'

import { useActions } from '../../../../store/actions/ActionsCreator'
import { useAppSelector } from '../../../../store/hooks/redux'

import { getAlignedText } from './utils'

export const usePlayground = () => {
  const { editors, idActiveEditor } = useAppSelector(
    (store) => store.editorReducer,
  )
  const { valueTextarea, isLoading, response } = editors[idActiveEditor]
  const { useEditor, setValueTextarea } = useActions()

  const onSubmit = () => {
    useEditor(valueTextarea)
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
    isLoading,
    onSubmit,
    onAlign,
    onClean,
    onCopy,
    valueTextarea,
    setValueTextarea,
  }
}

export const useResizableDiv = () => {
  const [initialPos, setInitialPos] = useState<number>()
  const [initialSize, setInitialSize] = useState<number>()

  const divRef = useRef<HTMLDivElement>(null)
  const neighborRef = useRef<HTMLDivElement>(null)

  const initial = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setDragImage(new Image(), 0, 0)
    setInitialPos(event.clientX)
    setInitialSize(divRef.current?.offsetWidth)
  }

  const resize = (event: DragEvent<HTMLDivElement>) => {
    const width =
      Number(initialSize) + Number(event.clientX - Number(initialPos))

    divRef.current!.style.width = `${width}px`

    const actualWidth = Number(divRef.current?.getBoundingClientRect().width)

    if (neighborRef.current) {
      neighborRef.current.style.width = `calc(100% - ${actualWidth + 26}px)`
    }
  }

  return { divRef, neighborRef, initial, resize }
}
