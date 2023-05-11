import { FC } from 'react'

import styles from './ListQueries.module.scss'

interface Fields {
  name: string
  description: string
  fields: any[]
}

interface ListQueries {
  data: Fields
}

interface Arguments {
  name: string
  type: any
}

const ListQueries: FC<ListQueries> = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.fields.map(({ name, args, description }, index) => (
        <div key={name} className={styles.container}>
          <div key={index}>
            <span className={styles.queryLink}>{name}</span>
            <span>{'('}</span>
            {args.map(({ name, type }: Arguments) => (
              <span key={name}>
                {args.length !== 1 && <br />}

                <span className={styles.argument}>{name}</span>
                <span>:</span>
                <span className={styles.type}>{type.name}</span>
              </span>
            ))}
            <span>{')'}</span>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      ))}
    </>
  )
}

export default ListQueries
