import { useMemo, MouseEvent } from 'react'

import { useAppSelector } from '../../../../store/hooks/redux'
import { useActions } from '../../../../store/actions/ActionsCreator'

interface IRemove {
  event: MouseEvent<HTMLSpanElement>
  index: number
}

export const useEditorMenu = () => {
  const { idActiveEditor, editors } = useAppSelector(
    (store) => store.editorReducer,
  )
  const { addEditor, setIdActiveEditor, deleteEditor } = useActions()

  const labelArray = useMemo(
    () => Array.from({ length: editors.length }, (_, i) => `Query-${i + 1}`),
    [editors],
  )

  const addNewEditor = () => {
    addEditor()
  }

  const removeEditor = ({ event, index }: IRemove) => {
    event.stopPropagation()
    deleteEditor(index)
  }

  const isLabelList = labelArray.length > 1

  return {
    labelArray,
    isLabelList,
    idActiveEditor,
    setIdActiveEditor,
    removeEditor,
    addNewEditor,
  }
}
