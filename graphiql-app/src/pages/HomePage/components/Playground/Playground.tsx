import ControlArea from '../ControlArea'
import Textarea from '../Textarea'

import styles from './Playground.module.scss'
import { usePlayground } from './hooks'

const Playground = () => {
  const { data, loading } = usePlayground()
  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.requestSection}>
        <Textarea placeholder="Enter your request" />
        <ControlArea />
      </div>
      {loading && <div>Loading...</div>}
      {data && (
        <div className={styles.responseSection}>
          <Textarea data={JSON.stringify(data)} />
          {/* {data.map(({ name }: { name: string }, index: any) => (
            <div key={index}>{name}</div>
          ))} */}
        </div>
      )}
    </div>
  )
}

export default Playground
