import { useState } from 'react'

import { useAppSelector } from '../../../../../store/hooks/redux'
import { useActions } from '../../../../../store/ActionsCreator'

const MENU = [
  { label: 'Variables', value: 'variables' },
  { label: 'Headers', value: 'Headers' },
]

export const useTools = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(MENU[0].value)
  const toggleHeight = () => setIsOpen((prev) => !prev)

  const { editors, idActiveEditor } = useAppSelector(
    (state) => state.editorReducer,
  )
  const { setVariables, setHeaders } = useActions()
  const { headers, variables } = editors[idActiveEditor] || editors[0]

  const menuItemOnclick = (label: string) => {
    setActiveTab(label)
    if (!open) {
      toggleHeight()
    }
  }

  const isVariables = activeTab === MENU[0].value

  return {
    isOpen,
    MENU,
    activeTab,
    toggleHeight,
    menuItemOnclick,
    setValue: isVariables ? setVariables : setHeaders,
    value: isVariables ? variables : headers,
  }
}
