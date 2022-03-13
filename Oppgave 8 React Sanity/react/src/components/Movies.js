import { useEffect, useState } from 'react'
import Movie from './Movie'
import { getMovie, getMovies, getActor, getActors } from '../lib/movieService'

function Movies() {
  const [movies, setMovies] = useState()
  const [actors, setActors] = useState()

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

    // Funksjon for å hente actors data
    const getActorsData = async () => {
      const actors = await getActors()
      setActors(actors)
      // console.log(JSON.stringify(actors))
    }
    // Kaller på getActorsData funksjonen og tar med en .catch
    // for å fange opp eventuelle feil
    getActorsData().catch((error) => console.log(error))
  }, [])

  // const getActorsData = async () => {
  //   const actors = await getActors()
  //   setActors(actors)
  //   console.log(JSON.stringify(actors))
  // }

  return (
    <ul>
      {movies?.map((movie) => (
        <Movie key={movie.slug} title={movie.title} actor={movie.actor} />
      ))}
      {/* {actors?.map((actor) => (
        <Movie key={actor.slug} actor={actor.fullname} />
      ))} */}
    </ul>
  )
}

export default Movies
