import classname from 'classnames'

import plus from '../../../../assets/images/plus.png'
import { ReactComponent as Close } from '../../../../assets/icons/close.svg'

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
              <Close
                className={styles.close}
                onClick={(event) => removeEditor({ event, index })}
              />
            </p>
          ))}
        </div>
      )}
      <div className={styles.rightSection}>
        <div>rickandmortyapi</div>
        <img src={plus} className={styles.plus} onClick={addNewEditor} />
      </div>
    </div>
  )
}

export default EditorMenu
