import { useActions } from '../../../../store/actions/ActionsCreator'
import { useAppSelector } from '../../../../store/hooks/redux'

import { getAlignedText } from './utils'

export const usePlayground = () => {
  const { editors, idActiveEditor } = useAppSelector(
    (store) => store.editorReducer,
  )
  const { valueTextarea, isLoading, response } =
    editors[idActiveEditor] || editors[0]
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
