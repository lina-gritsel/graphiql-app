import ControlArea from '../ControlArea'
import Textarea from '../Textarea'

import { usePlayground, useResizableDiv } from './hooks'

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

  const { divRef, initial, resize } = useResizableDiv()

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
        draggable
        
        onDragStart={initial}
        onDrag={resize}
      >
        <div className={styles.slider}></div>
      </div>
      {loading && <div>Loading...</div>}
      {!!response && (
        <div className={loading ? styles.hidden : styles.responseSection}>
          <Textarea value={JSON.stringify(response, null, '\t')} />
        </div>
      )}
    </div>
  )
}

export default Playground
