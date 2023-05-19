import classname from 'classnames'

import { useResizableElement } from '../../../../hooks/useResizableElement'
import DraggableElement from '../../../../components/DraggableDiv'
import Loader from '../../../../components/Loader'

import ControlArea from '../ControlArea'
import Textarea from '../Textarea'
import EditorMenu from '../EditorMenu'

import { usePlayground } from './hooks'
import { TWO_SPACE } from './utils'

import styles from './Playground.module.scss'

const Playground = () => {
  const {
    error,
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
          className={classname(
            styles.requestSection,
            isFullHeight && styles.fullHeight,
          )}
          ref={divRef}
        >
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
        <DraggableElement initial={initial} resize={resize} />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.responseSection} ref={neighborRef}>
            <Textarea
              value={
                error ||
                (response ? JSON.stringify(response, null, TWO_SPACE) : '')
              }
              className={styles.responseTextarea}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Playground
