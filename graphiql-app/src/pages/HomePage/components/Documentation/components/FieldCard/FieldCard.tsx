import { useActions } from '../../../../../../store/ActionsCreator'
import { QueryArguments, Type } from '../../../../../../api'
import QueryDetails from '../QueryDetails'

import styles from './FieldCard.module.scss'

interface FieldCardProps {
  args: QueryArguments[]
  desc: string
  type: Type
}

const FieldCard = ({ args, desc, type }: FieldCardProps) => {
  const { addNewDocumentation } = useActions()

  return (
    <div className={styles.container}>
      <div className={styles.description}>{desc}</div>
      <div className={styles.title}>Type</div>
      <div
        className={styles.type}
        onClick={() =>
          addNewDocumentation({
            label: type?.name as string,
            type: 'type',
          })
        }
      >
        {type?.name}
      </div>
      <div className={styles.title}>Arguments</div>
      <div className={styles.args}>
        {args?.map(({ name, type }) => (
          <QueryDetails key={name} name={name} args={args} type={type} />
        ))}
      </div>
    </div>
  )
}

export default FieldCard
