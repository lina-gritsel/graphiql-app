import { useEffect } from 'react'
import { useToast } from '@chakra-ui/react'

import { useActions } from '../../../../store/ActionsCreator'
import { useAppSelector } from '../../../../store/hooks/redux'

import { getAlignedText } from './utils'

export const usePlayground = () => {
  const { editors, idActiveEditor } = useAppSelector(
    (store) => store.editorReducer,
  )
  const { valueTextarea, isLoading, response, error } =
    editors[idActiveEditor] || editors[0]
  const { useEditor, setValueTextarea } = useActions()

  const toast = useToast()

  useEffect(() => {
    if (error) {
      toast({
        title: error,
        status: 'error',
        position: 'top',
        duration: 2000,
        isClosable: true,
      })
    }
  }, [error, toast])

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

  const isFullHeight = editors.length <= 1

  return {
    response,
    isLoading,
    onSubmit,
    onAlign,
    onClean,
    onCopy,
    isFullHeight,
    valueTextarea,
    setValueTextarea,
  }
}
