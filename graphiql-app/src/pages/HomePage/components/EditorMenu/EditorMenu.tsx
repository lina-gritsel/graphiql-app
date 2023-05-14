import classname from 'classnames'

import plus from '../../../../assets/images/plus.png'
import Close from '../../../../assets/icons/Close'

import { useEditorMenu } from './hooks'

import styles from './EditorMenu.module.scss'

const EditorMenu = () => {
  const {
    labelArray,
    isLabelList,
    idActiveEditor,
    setIdActiveEditor,
    removeEditor,
    addNewEditor,
  } = useEditorMenu()

  return (
    <div className={styles.container}>
      {isLabelList && (
        <div className={styles.labelList}>
          {labelArray.map((label, index) => (
            <p
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
            </p>
          ))}
        </div>
      )}

      <img src={plus} className={styles.plus} onClick={addNewEditor} />
    </div>
  )
}

export default EditorMenu
