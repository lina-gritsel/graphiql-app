export const fetchCharacters = async (request: string) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/graphql', {
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
