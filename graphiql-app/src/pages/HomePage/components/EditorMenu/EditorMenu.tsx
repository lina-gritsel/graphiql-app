import classnames from 'classnames'

import plus from '../../../../assets/images/plus.png'
import { ReactComponent as Close } from '../../../../assets/icons/close.svg'

import { useEditorMenu } from './hooks'

import styles from './EditorMenu.module.scss'

const EditorMenu = () => {
  const {
    editorLabelArray,
    isLabelList,
    idActiveEditor,
    setIdActiveEditor,
    removeEditor,
    addEditor,
  } = useEditorMenu()

  return (
    <div className={styles.container}>
      {isLabelList && (
        <div className={styles.labelList}>
          {editorLabelArray.map((label, index) => (
            <p
              key={index}
              className={classnames(
                styles.label,
                index === idActiveEditor ? styles.active : null,
              )}
              onClick={() => setIdActiveEditor(index)}
            >
              {label}
              <Close
                className={styles.close}
                onClick={(event) => removeEditor({ event, index })}
              />
            </p>
          ))}
        </div>
      )}
      <div className={styles.rightSection}>
        <div>rick&mortyapi</div>
        <img src={plus} className={styles.plus} onClick={() => addEditor()} />
      </div>
    </div>
  )
}

export default EditorMenu
