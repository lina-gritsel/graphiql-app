export const fetchCharacters = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          characters {
            results {
              name
            }
          }
        }`,
      }),
    })
    const result = await response.json()

    return result.data.characters.results
  } catch (error) {
    console.log(error)
  }
}
