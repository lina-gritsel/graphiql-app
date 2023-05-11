import { FC } from 'react'

interface Fields {
  name: string
  description: string
  fields: any[]
}

interface ListQueries {
  data: Fields
}

const ListQueries: FC<ListQueries> = ({ data }) => {
  return (
    <div>
      {data.fields.map(({ name, args }, index) => (
        <div key={index}>
          <div>{name}</div>
        </div>
      ))}
    </div>
  )
}

export default ListQueries
