import React, { FC } from 'react'

import QueryDetails from '../QueryDetails'

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

interface QueryArguments {
  name: string
  type: any
}

const ListQueries: FC<ListQueries> = ({ data, onClick }) => {
  return (
    <>
      {data?.fields?.map(({ name, args, description, type }) => (
        <div key={name} className={styles.container}>
          <div>
            <span className={styles.queryLink}>{name}</span>
            <Bracket args={args}>
              {args.map(({ name, type }: QueryArguments) => (
                <QueryDetails key={name} args={args} name={name} type={type} />
              ))}
            </Bracket>
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

interface BracketProps {
  args: QueryArguments[]
  children: React.ReactNode
}

const Bracket: FC<BracketProps> = ({ args, children }) => {
  return (
    <>
      {args.length !== 0 && <span>{'('}</span>}
      {children}
      {args.length !== 0 && <span>{')'}</span>}
      <span>{':'}</span>
      {'\n'}
    </>
  )
}
