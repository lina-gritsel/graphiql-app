import { useMemo, MouseEvent } from 'react'
import classname from 'classnames'

import { useAppSelector } from '../../../../store/hooks/redux'
import { useActions } from '../../../../store/actions/ActionsCreator'
import plus from '../../../../assets/images/plus.png'

import styles from './Navigation.module.scss'
import Close from '../../../../assets/icons/Close'

interface IRemove {
  event: MouseEvent<HTMLSpanElement>
  index: number
}

const Navigation = () => {
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

  return (
    <div className={styles.container}>
      {labelArray.length > 1 && (
        <div className={styles.labelList}>
          {labelArray.map((label, index) => (
            <div
              key={index}
              className={classname(
                styles.label,
                index === idActiveEditor ? styles.active : null,
              )}
              onClick={() => setIdActiveEditor(index)}
            >
              {label}
              <span onClick={(event) => removeEditor({ event, index })}>
                <Close className={styles.close} />
              </span>
            </div>
          ))}
        </div>
      )}

      <img src={plus} className={styles.plus} onClick={addNewEditor} />
    </div>
  )
}

export default Navigation
