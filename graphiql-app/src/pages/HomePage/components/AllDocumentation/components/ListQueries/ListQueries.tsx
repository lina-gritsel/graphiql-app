import { FC } from 'react'

import styles from './ListQueries.module.scss'

interface IData {
  name?: string
  description?: string
  fields?: any[]
}

interface ListQueries {
  data: IData
  onClick: (value: string) => void
}

interface Arguments {
  name: string
  type: any
}

const ListQueries: FC<ListQueries> = ({ data, onClick }) => {
  return (
    <>
      {data?.fields?.map(({ name, args, description, type }, index) => (
          <div key={name} className={styles.container}>
            <div key={index}>
              <span className={styles.queryLink}>{name}</span>
              {args.length !== 0 && <span>{'('}</span>}
              {args.map(({ name, type }: Arguments) => (
                <span key={name}>
                  {args.length !== 1 && <br />}
                  <span className={styles.argument}>{name}</span>
                  <span>:</span>
                  <span className={styles.type}>{type.name}</span>
                </span>
              ))}
              {args.length !== 0 && <span>{')'}</span>}
              <span>{':'}</span>
              {'\n'}
              <span className={styles.type} onClick={() => onClick(type.name)}>
                {type.name}
              </span>
            </div>
            <div className={styles.description}>{description}</div>
          </div>
        ))}
    </>
  )
}

export default ListQueries
