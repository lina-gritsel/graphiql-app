import { FC } from 'react'

export const parsingSchema = ({ data }: { data: any }) => {
  const startPage = data.name
  const allQueryFields = data.fields

  const CURRENT_DOCUMENTATION = [
    {
      prevPage: '',
      title: 'Docs',
      values: ['Query'],
    },
    {
      prevPage: 'Docs',
      title: 'Query',
      values: ['options'],
    },
  ]

  return { CURRENT_DOCUMENTATION }
}
