import ControlArea from '../ControlArea'
import Textarea from '../Textarea'

import { usePlayground, useResizableDiv } from './hooks'
import { TWO_SPACE } from './utils'

import styles from './Playground.module.scss'

const Playground = () => {
  const {
    response,
    onSubmit,
    loading,
    valueTextarea,
    setValueTextarea,
    onClean,
    onAlign,
    onCopy,
  } = usePlayground()

  const { divRef, neighborRef, initial, resize } = useResizableDiv()

  return (
    <div className={styles.container}>
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
      <div
        className={styles.draggable}
        onDragStart={initial}
        onDrag={resize}
        draggable
      >
        <div className={styles.slider}></div>
      </div>

      {loading ? (
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
  )
}

export default Playground
