import { Schema } from '../../../../../../api'

import { createValueWithBracket } from '../Bracket'
import ReturnedValue from '../ReturnedValue'
import FieldCard from '../FieldCard'
import { useListQueries } from './hooks'

import styles from './ListQueries.module.scss'

const ListQueries = ({ data }: { data: Schema }) => {
  const { currentDocs, currentPage, notFieldClick, fieldOnclick } =
    useListQueries(data)

  return (
    <>
      {currentDocs?.map(({ name, args, description, type }) =>
        currentPage?.type === 'type' ? (
          <div key={name} className={styles.container}>
            {type && (
              <div>
                <span
                  className={
                    notFieldClick ? styles.fieldLink : styles.queryLink
                  }
                  onClick={() => fieldOnclick(name)}
                >
                  {name}
                </span>
                {args?.length ? createValueWithBracket(args) : ': '}
                <ReturnedValue type={type} />
              </div>
            )}
            <div className={styles.description}>{description}</div>
          </div>
        ) : (
          <FieldCard key={name} desc={description} args={args} type={type} />
        ),
      )}
    </>
  )
}

export default ListQueries