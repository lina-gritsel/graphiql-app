import ControlArea from '../ControlArea'
import Textarea from '../Textarea'

import { useHook } from './hooks'

import styles from './Playground.module.scss'

const Playground = () => {
  const { response, onSubmit, loading } = useHook()

  return (
    <div className={styles.container}>
      <div className={styles.requestSection}>
        <Textarea placeholder="Enter your request" />
        <ControlArea onClick={onSubmit} />
      </div>
      {loading && <div>Loading...</div>}
      {!!response && (
        <div className={styles.responseSection}>
          <Textarea data={JSON.stringify(response)} />
        </div>
      )}
    </div>
  )
}

export default Playground
