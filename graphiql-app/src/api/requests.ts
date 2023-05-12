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

export const fetchSchema = async (value: string) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          {
              __type(name: "${value}") {
                name
                description
                fields {
                  name
                  args {
                    name
                    type {
                      name
                    }
                  }
                  description
                  type {
                    name
                    description
                  }
                }
              }
        }`,
        variables: {},
      }),
    })
    const result = await response.json()

    return result.data.__type
  } catch (error) {
    console.log(error)
  }
}
