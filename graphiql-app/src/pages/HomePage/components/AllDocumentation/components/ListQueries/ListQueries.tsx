import React, { FC } from 'react'

import { useActions } from '../../../../../../store/ActionsCreator'
import QueryDetails from '../QueryDetails'

import styles from './ListQueries.module.scss'

interface IData {
  name?: string
  description?: string
  fields?: any[]
}

interface ListQueries {
  data: IData
}

interface QueryArguments {
  name: string
  type: any
}

const ListQueries: FC<ListQueries> = ({ data }) => {
  const { addNewDocumentation } = useActions()

  return (
    <>
      {data?.fields?.map(({ name, args, description, type }) => (
        <div key={name} className={styles.container}>
          <div>
            <span className={styles.queryLink} onClick={() => addNewDocumentation(name)}>{name}</span>
            <Bracket args={args}>
              {args.map(({ name, type }: QueryArguments) => (
                <QueryDetails key={name} args={args} name={name} type={type} />
              ))}
            </Bracket>
            <span className={styles.type} onClick={() => addNewDocumentation(type.name)}>
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
