import React from 'react'
import _ from 'lodash'

import { QueryArguments } from '../../../../../../api'
import QueryDetails from '../QueryDetails'

const Bracket = ({
  show,
  content,
}: {
  show: boolean
  content: React.ReactNode
}) => {
  return show ? <span>{content}</span> : null
}

const Colon = () => {
  return (
    <>
      <span>{':'}</span>
      {'\n'}
    </>
  )
}

export const createValueWithBracket = (args: QueryArguments[]) => {
  const showBracket = !_.isEmpty(args)
  const showLineBreak = _.size(args) > 1

  return (
    <>
      <Bracket show={showBracket} content={'('} />
      {args.map(({ name, type }) => (
        <QueryDetails key={name} args={args} name={name} type={type} />
      ))}
      {showLineBreak && <br />}
      <Bracket show={showBracket} content={')'} />
      <Colon />
    </>
  )
}
