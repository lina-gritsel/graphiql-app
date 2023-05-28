import { useState } from 'react'
import classname from 'classnames'

import down from '../../../../assets/images/back.png'
import Textarea from '../Textarea'

import styles from './Tools.module.scss'
import { useAppSelector } from '../../../../store/hooks/redux'
import { useActions } from '../../../../store/ActionsCreator'

const MENU = [
  { label: 'Variables', value: 'variables' },
  { label: 'Headers', value: 'Headers' },
]

const Tools = () => {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(MENU[0].value)
  const toggleHeight = () => setOpen((prev) => !prev)

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
  const value = activeTab === MENU[0].value ? variables : headers
  const setValue = activeTab === MENU[0].value ? setVariables : setHeaders

  return (
    <div className={classname(styles.tools, open && styles.openTools)}>
      <div className={styles.header}>
        <div className={styles.menu}>
          {MENU.map(({ label, value }) => (
            <div
              key={label}
              className={classname(
                styles.menuItem,
                activeTab === value && open && styles.active,
              )}
              onClick={() => menuItemOnclick(value)}
            >
              {label}
            </div>
          ))}
        </div>
        <img
          src={down}
          alt="down"
          onClick={toggleHeight}
          className={classname(styles.upArrow, open && styles.downArrow)}
        />
      </div>
      {open && <Textarea numOfLines={1} value={value} onChange={setValue} />}
    </div>
  )
}

export default Tools
