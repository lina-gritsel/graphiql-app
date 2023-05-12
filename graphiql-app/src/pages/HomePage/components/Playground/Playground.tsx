import ControlArea from '../ControlArea'
import Textarea from '../Textarea'

import { usePlayground } from './hooks'
import { TWO_SPACE } from './utils'

import styles from './Playground.module.scss'

const Playground = () => {
  const {
    data,
    onSubmit,
    loading,
    valueTextarea,
    setValueTextarea,
    onClean,
    onAlign,
    onCopy,
  } = usePlayground()

  return (
    <div className={styles.container}>
      <div className={styles.requestSection}>
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
      {loading && <div>Loading...</div>}
      {!!data && (
        <div className={loading ? styles.hidden : styles.responseSection}>
          <Textarea value={JSON.stringify(data, null, TWO_SPACE)} />
        </div>
      )}
    </div>
  )
}

export default Playground
