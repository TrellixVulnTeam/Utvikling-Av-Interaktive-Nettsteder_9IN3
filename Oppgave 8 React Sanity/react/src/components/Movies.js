import { useEffect, useState } from 'react'
import Movie from './Movie'
import { getMovies, getActors, getMovieActor } from '../lib/movieService'

function Movies() {
  const [movies, setMovies] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Funksjon for å hente movie data
    const getMoviesData = async () => {
      setLoading(true)
      const movies = await getMovies()
      // console.log(JSON.stringify(movies))
      // Sorterer listen med filmer etter tittel på filemene
      setMovies(movies.sort((a, b) => (a.title > b.title ? 1 : -1)))
      setLoading(false)
    }
    // Kaller på getMoviesData funksjonen og tar med en .catch
    // for å fange opp eventuelle feil.
    getMoviesData().catch((error) => console.log(error))
  }, [])

  if (loading) {
    return <p>Henter data...</p>
  }

  return (
    <ul>
      {movies?.map((movie, index) => (
        <Movie key={index} title={movie.title} actor={movie.actor} />
      ))}
    </ul>
  )
}

export default Movies
