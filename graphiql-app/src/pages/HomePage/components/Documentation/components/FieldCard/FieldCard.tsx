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
      {args?.map(({ name, type }) => (
        <QueryDetails key={name} name={name} args={args} type={type} />
      ))}
    </div>
  )
}

export default FieldCard
