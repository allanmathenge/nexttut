import React from 'react'
import getWikiResults from '../lib/getWikiResults'
import Item from './components/Item'

type Props = {
  params: {
    searchTerm: string
  }
}

export async function generateMetadata({ params: { searchTerm } }:Props) {
  const wikiData: Promise<searchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll('%20', ' ')

  if (!data?.query?.pages) {

    return {
      title: `${displayTerm} not found!`
    }
  }

  return {
    title: `Wiki-searchParams for ${displayTerm}`,
    description: `Search results for ${displayTerm}`
  }
}

export default async function searchResult({ params: { searchTerm }}: Props) {

  const wikiData: Promise<searchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const results: Result[] | undefined = data?.query?.pages

  return (
    <div className="mt-24 max-w-lg mx-auto text-red-500 min-h-[100vh]">
      {results ? 
        Object.values(results).map(result => {
        return (
          <Item key={result.pageid} result={result} />
        )
      }) : <p>Loading ...</p>
      }
    </div>
  )
}