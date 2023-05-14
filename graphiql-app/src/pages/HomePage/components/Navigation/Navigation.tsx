import { useMemo } from 'react'
import { useAppSelector } from '../../../../store/hooks/redux'
import { useActions } from '../../../../store/actions/ActionsCreator'

import plus from '../../../../assets/images/plus.png'

import styles from './Navigation.module.scss'

const Navigation = () => {
  const { idActiveEditor, editors } = useAppSelector((store) => store.editorReducer)
  const { addEditor, setIdActiveEditor } = useActions()

  const labelArray = useMemo(
    () =>
      Array.from({ length: editors.length }, (_, i) => `Query-${i + 1}`),
    [idActiveEditor],
  )

  const addNewEditor = () => {
    addEditor()
  }

  return (
    <div className={styles.container}>
      <div className={styles.labelList}>
        {labelArray.map((label, index) => (
          <div
            key={index}
            className={styles.label}
            onClick={() => setIdActiveEditor(index)}
          >
            {label}
          </div>
        ))}
      </div>
      <img src={plus} className={styles.plus} onClick={addNewEditor}/>
      
    </div>
  )
}

export default Navigation
