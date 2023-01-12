import Link from 'next/link'
import { connectStateResults } from 'react-instantsearch-dom'

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 1 // 3 is the minimum query length

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <h3 className="absolute font-mono text-xl">No hay resultados :(</h3>
      )}

      {searchResults?.hits.length > 0 && validQuery && (
        <div className="absolute p-4 w-60 bg-gray-50/100 mt-2  border-black border-2 z-10 rounded-lg font-mono ">
          {searchResults.hits.map((hit, index) => {
            console.log(hit.relativePath)
            return (
              <div
                tabIndex={index}
                key={hit.objectID}
                className="bg-white mt-2 hover:text-blue-500 transition-all block"
              >
                <Link href={hit.relativePath}>
                  <h4>{hit.title}</h4>
                  <p>{hit.description}</p>
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default connectStateResults(Hits)
