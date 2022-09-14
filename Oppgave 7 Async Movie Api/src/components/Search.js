function Search({ handleSearch, handleInput }) {
  return (
    <form onSubmit={handleSearch}>
      <input onChange={handleInput} type="text" placeholder="Søk på en film" />
      <button type="submit">Søk</button>
    </form>
  )
}

export default Search
