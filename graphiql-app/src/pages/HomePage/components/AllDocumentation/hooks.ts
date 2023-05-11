import { useState } from 'react'

export const parsingSchema = ({ data }: { data: any }) => {
  const startPage = data.name

  const history = ['docs', startPage]

  const [selectedPage, setSelectedPage] = useState('Docs')

  const prevDocs = history[history.indexOf(selectedPage) - 1]

  const currentDocs = history[history.length - 1]
  console.log('prevDocs:', prevDocs)

  return {
    history,
    prevDocs,
    currentDocs,
    selectedPage: selectedPage.toLowerCase(),
    setSelectedPage,
  }
}
