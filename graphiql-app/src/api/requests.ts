import { Fields, Schema } from './types'

const BASE_URL = 'https://rickandmortyapi.com/graphql'

export const fetchCharacters = async (request: string) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: request,
        variables: {},
      }),
    })
    const result = await response.json()

    return result
  } catch (error) {
    console.log(error)
  }
}

type FetchSchema = () => Promise<Schema>
type FetchTypes = (value: string) => Promise<Fields[]>

export const fetchSchema: FetchSchema = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        fragment FullType on __Type {
          kind
          name
          fields(includeDeprecated: true) {
            name
            description
            args {
              ...InputValue
            }
            type {
              ...TypeRef
            }
          }
          inputFields {
            ...InputValue
          }
        }
        fragment InputValue on __InputValue {
          name
          type {
            ...TypeRef
          }
        }
        fragment TypeRef on __Type {
          kind
          name
          fields {
            name
            description
            type {
            name
            description
              ofType{
                name
              }
          }
            
          }
          ofType {
            kind
            name
            description
            ofType {
              kind
              name
              
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        query IntrospectionQuery {
          __schema {
            types {
              ...FullType
            }
        
          }
        }
        `,
        variables: {},
      }),
    })
    const result = await response.json()

    return result.data.__schema
  } catch (error) {
    console.log(error)
  }
}

export const fetchTypes: FetchTypes = async (value) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        fragment FullType on __Type {
          kind
          name
          description
          fields(includeDeprecated: true) {
            name
            description
            args {
              ...InputValue
            }
            type {
              ...TypeRef
            }
          }
          inputFields {
            ...InputValue
          }
        }
        fragment InputValue on __InputValue {
          name
          type {
            ...TypeRef
          }
        }
        fragment TypeRef on __Type {
          kind
          name
          fields {
            name
            description
            type {
              name
              description
              ofType{
                name
              }
          }
            
          }
          ofType {
            kind
            name
            description
            ofType {
              kind
              name
              
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        query IntrospectionQuery {
          __type(name: "${value}") {
              ...FullType
          }
        }
        `,
        variables: {},
      }),
    })
    const result = await response.json()

    return result.data.__type.fields || [result.data.__type]
  } catch (error) {
    console.log(error)
  }
}

// {
//   __type(name: "${value}") {
//     name
//     description
//     fields {
//       name
//       args {
//         name
//         type {
//           name
//         }
//       }
//       description
//       type {
//         name
//         description
//       }
//     }
//   }
// }
