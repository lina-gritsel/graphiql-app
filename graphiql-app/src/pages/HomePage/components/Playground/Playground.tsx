import { useResizableDiv } from '../../../../hooks/useResizableDiv'
import DraggableDiv from '../../../../components/DraggableDiv'

import ControlArea from '../ControlArea'
import Textarea from '../Textarea'
import EditorMenu from '../EditorMenu'

import { usePlayground } from './hooks'
import { TWO_SPACE } from './utils'

import styles from './Playground.module.scss'

const Playground = () => {
  const {
    response,
    onSubmit,
    isLoading,
    valueTextarea,
    setValueTextarea,
    onClean,
    onAlign,
    onCopy,
  } = usePlayground()

  const { divRef, neighborRef, initial, resize } = useResizableDiv()

  return (
    <div className={styles.container}>
      <EditorMenu />
      <div className={styles.playgroundWrapper}>
        <div className={styles.requestSection} ref={divRef}>
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
        <DraggableDiv initial={initial} resize={resize} />
        {/* <div
          className={styles.draggable}
          onDragStart={initial}
          onDrag={resize}
          draggable
        >
          <div className={styles.slider}></div>
        </div> */}

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div
            className={!response ? styles.hidden : styles.responseSection}
            ref={neighborRef}
          >
            <Textarea
              value={JSON.stringify(response, null, TWO_SPACE)}
              className={styles.responseTextarea}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Playground
