import React from 'react'

const SearchForm = ({filterPokemon}) => {

  const search = (e) => {
    const val = e.target.value
    filterPokemon(val)
  }

  return (
    <div>
        <form>
            <input name='pokemon' onChange={search}  />
            <button>Search</button>
            <button>Reset</button>
        </form>
    </div>
  )
}

export default SearchForm