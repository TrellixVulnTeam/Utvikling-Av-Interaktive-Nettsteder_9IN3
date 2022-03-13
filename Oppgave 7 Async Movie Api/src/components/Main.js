// import Main from './components/Main'
import { useEffect, useState } from 'react'
import Movies from './Movies'
import Search from './Search'

function Main() {
  // Liste med informasjon om Star Wars filmene hente fra OmdbApi
  // Bruker fetch med .then()
  // http://www.omdbapi.com/?s=Star Wars&apikey=5cc65390
  const [movies, setMovies] = useState()
  const [search, setSearch] = useState()
  const [notext, setNotext] = useState()
  // Bruker useEffect for å få vise 5 filmer med søkeorder Star Wars
  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=Star%20Wars&apikey=5cc65390')
      .then((response) => response.json())
      .then((data) => setMovies(data.Search.splice(0, 5)))
      .catch((error) => console.log(error))
  }, [])

  // Bruker async for å hente data fra OmdbApi asynkront
  // `http://www.omdbapi.com/?s=${search}&apikey=5cc65390`
  const handleSearch = async (event) => {
    event.preventDefault()
    if (search) {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${search}&apikey=5cc65390`
      )
      // Bruker try/catch for å håndtere eventuelle feil som kan oppstå når vi konverterer
      // til . json()
      try {
        const data = await response.json()
        setMovies(data.Search)
        setNotext('')
      } catch (error) {
        // logger feilmeldingen
        console.log(error)
      }
    } else {
      setNotext('Søk på en film tittel')
    }
  }

  // Funksjon som håndterer det som blir skrevet inn i søkefeltet
  const handleInput = (event) => {
    setSearch(event.currentTarget.value)
  }

  return (
    <main>
      <p style={{ color: 'red' }} className="notext">
        {notext}
      </p>
      <Search
        search={search}
        setSearch={setSearch}
        handleInput={handleInput}
        handleSearch={handleSearch}
      />
      <Movies movies={movies} />
    </main>
  )
}

export default Main
