import { useMemo, MouseEvent } from 'react'

import { useAppSelector } from '../../../../store/hooks/redux'
import { useActions } from '../../../../store/actions/ActionsCreator'

interface IRemove {
  event: MouseEvent<SVGSVGElement>
  index: number
}

export const useEditorMenu = () => {
  const { idActiveEditor, editors } = useAppSelector(
    (store) => store.editorReducer,
  )
  const { addEditor, setIdActiveEditor, deleteEditor } = useActions()

  const editorLabelArray = useMemo(
    () => Array.from({ length: editors.length }, (_, i) => `Query-${i + 1}`),
    [editors],
  )

  const removeEditor = ({ event, index }: IRemove) => {
    event.stopPropagation()
    deleteEditor(index)
  }

  const isLabelList = editorLabelArray.length > 1

  return {
    editorLabelArray,
    isLabelList,
    idActiveEditor,
    setIdActiveEditor,
    removeEditor,
    addEditor,
  }
}
