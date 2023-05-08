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

export const fetchSchema = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          __schema {
            queryType {
              fields {
                name
              }
            }
          }
        }`,
        variables: {},
      }),
    })
    const result = await response.json()
    const queryOptions = result.data.__schema.queryType.fields

    return queryOptions
  } catch (error) {
    console.log(error)
  }
}
