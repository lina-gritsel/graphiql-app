import classnames from 'classnames'

import { useResizableElement } from '../../../../hooks/useResizableElement'
import DraggableElement from '../../../../components/DraggableElement'
import Loader from '../../../../components/Loader'

import ControlArea from '../ControlArea'
import Textarea from '../Textarea'
import EditorMenu from '../EditorMenu'
import Tools from '../Tools'

import { usePlayground } from './hooks'
import { TWO_SPACE } from './utils'

import styles from './Playground.module.scss'

const Playground = () => {
  const {
    response,
    onSubmit,
    isLoading,
    isFullHeight,
    valueTextarea,
    setValueTextarea,
    onClean,
    onAlign,
    onCopy,
  } = usePlayground()

  const { divRef, neighborRef, initial, resize } = useResizableElement()

  return (
    <div className={styles.container}>
      <EditorMenu />
      <div className={styles.playgroundWrapper}>
        <div
          className={classnames(
            styles.requestSection,
            isFullHeight && styles.fullHeight,
          )}
          ref={divRef}
        >
          <div className={styles.editor}>
            <Textarea
              placeholder="Enter your request"
              value={valueTextarea}
              onChange={setValueTextarea}
              numOfLines={7}
            />
            <ControlArea
              onPlay={onSubmit}
              onClean={onClean}
              onAlign={onAlign}
              onCopy={onCopy}
            />
          </div>
          <Tools />
        </div>
        <DraggableElement initial={initial} resize={resize} />
        <div className={styles.responseSection} ref={neighborRef}>
          {isLoading ? (
            <div className={styles.loaderWrapper}>
              <Loader />
            </div>
          ) : (
            <Textarea
              value={response ? JSON.stringify(response, null, TWO_SPACE) : ''}
              className={styles.responseTextarea}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Playground
