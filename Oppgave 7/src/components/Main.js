// import Main from './components/Main'
import { useEffect, useState } from 'react'
import Movies from './Movies'

function Main() {
  // Liste med informasjon om Star Wars filmene hente fra OmdbApi
  // Bruker fetch med .then()
  // http://www.omdbapi.com/?s=Star Wars&apikey=5cc65390
  const [movies, setMovies] = useState()
  // Bruker useEffect for å få vise 5 filmer med søkeorder Star Wars
  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=Star%20Wars&apikey=5cc65390')
      .then((response) => response.json())
      .then((data) => setMovies(data.Search.splice(0, 5)))
      .catch((err) => console.log(err))
  }, [movies])

  return (
    <main>
      <Movies movies={movies} />
    </main>
  )
}

export default Main
