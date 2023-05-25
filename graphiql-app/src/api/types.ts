export interface Schema {
  types: Types[]
}

export interface Types {
  fields: Fields[]
  inputFields: Fields[] | undefined
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
