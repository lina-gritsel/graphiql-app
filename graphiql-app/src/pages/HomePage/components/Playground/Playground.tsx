import ControlArea from '../ControlArea'
import Textarea from '../Textarea'

import { useHook } from './hooks'

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
  } = useHook()

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
      {!!response && (
        <div className={styles.responseSection}>
          <Textarea value={JSON.stringify(response, null, '\t')} />
        </div>
      )}
    </div>
  )
}

export default Playground
