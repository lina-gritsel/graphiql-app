export interface Schema {
  types: Types[]
}

interface Types {
  fields: Fields[]
  inputFields: any[] | undefined
  name: string
  kind: string
}

export interface Fields {
  args: QueryArguments[]
  description: string
  name: string
  type: Type
}

export interface QueryArguments {
  name: string
  type: Type
}

export interface Type {
  kind: string
  name: string | undefined
  ofType: Type | undefined
}
