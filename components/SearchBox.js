import { connectSearchBox } from 'react-instantsearch-dom'

function SearchBox({ refine  }) {
  return (
    <>
      <input
        className="p-2  rounded-lg transition-all bg-slate-100  "
        id="algolia_search"

        type="search"
        
        placeholder="Buscar post..."
        onChange={(e) => refine(e.currentTarget.value)}
      />
    </>
  )
}

export default connectSearchBox(SearchBox)
