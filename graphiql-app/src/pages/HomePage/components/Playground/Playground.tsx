import ControlArea from '../ControlArea'
import Textarea from '../Textarea'

import { useHook } from './hooks'

import styles from './Playground.module.scss'

const Playground = () => {
  const { response, onSubmit, loading, valueTextarea, setValueTextarea } =
    useHook()

  return (
    <div className={styles.container}>
      <div className={styles.requestSection}>
        <Textarea
          placeholder="Enter your request"
          value={valueTextarea}
          onChange={setValueTextarea}
        />
        <ControlArea onClick={onSubmit} />
      </div>
      {loading && <div>Loading...</div>}
      {!!response && (
        <div className={styles.responseSection}>
          <Textarea
            value={JSON.stringify(response)}
          />
        </div>
      )}
    </div>
  )
}

export default Playground
