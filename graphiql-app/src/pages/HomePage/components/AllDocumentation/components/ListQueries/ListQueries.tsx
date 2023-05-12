import { FC } from 'react'

import styles from './ListQueries.module.scss'

interface IData {
  name: string
  description: string
  fields: any[]
}

interface ListQueries {
  data: IData
}

interface Arguments {
  name: string
  type: any
}

const ListQueries: FC<ListQueries> = ({ data }) => {
  return (
    <>
      {data.fields.map(({ name, args, description, type }, index) => (
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
            <span>{'):'}</span>
            {'\n'}
            <span className={styles.type}>{type.name}</span>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      ))}
    </>
  )
}

export default ListQueries
