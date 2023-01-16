import { useEffect, useState } from 'react'
import Link from 'next/link'
import { connectStateResults } from 'react-instantsearch-dom'

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 1 // 1 is the minimum query length
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (validQuery && searchResults?.hits.length > 0) {
      setOpen(true)
    }
  }, [validQuery])
  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <h3 className="absolute font-mono text-xl">No hay resultados :(</h3>
      )}

      {open && (
        <div className="absolute  w-96 bg-white    border-2 z-10 rounded-lg font-mono p-2">
          {searchResults.hits.map((hit, index) => {
            return (
              <Link tabIndex={index} key={hit.objectID} href={hit.relativePath}>
                <div
                  className="mt-2 hover:text-blue-500 transition-all w-full p-5 hover:bg-gradient-to-r from-green-50 to-violet-50 rounded-lg  cursor-pointer border-2 border-b-4 border-transparent hover:border-blue-500"
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  <h4 className="font-bold">{hit.title}</h4>
                  <p>{hit.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default connectStateResults(Hits)
