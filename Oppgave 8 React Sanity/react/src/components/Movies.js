import { useEffect, useState } from 'react'
import Movie from './Movie'
import { getMovies, getActors, getMovieActor } from '../lib/movieService'

function Movies() {
  const [movies, setMovies] = useState()

  useEffect(() => {
    // Funksjon for å hente movie data
    const getMoviesData = async () => {
      const movies = await getMovies()
      // console.log(JSON.stringify(movies))
      // Sorterer listen med filmer etter tittel på filemene
      setMovies(movies.sort((a, b) => (a.title > b.title ? 1 : -1)))
    }
    // Kaller på getMoviesData funksjonen og tar med en .catch
    // for å fange opp eventuelle feil.
    getMoviesData().catch((error) => console.log(error))

    // Funksjon for å hente filmer fra en gitt skuespiller
    const getMovieActorData = async () => {
      const movieActors = await getMovieActor()
      // console.log(JSON.stringify(movieActors))
    }
    // Kaller på getActorsData funksjonen og tar med en .catch
    // for å fange opp eventuelle feil
    getMovieActorData().catch((error) => console.log(error))
  }, [])

  return (
    <ul>
      {movies?.map((movie, index) => (
        <Movie key={index} title={movie.title} actor={movie.actor} />
      ))}
    </ul>
  )
}

export default Movies
