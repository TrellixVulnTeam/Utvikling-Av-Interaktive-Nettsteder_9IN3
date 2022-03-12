import { useEffect, useState } from 'react'
import Movie from './Movie'
import { getMovie, getMovies, getActor, getActors } from '../lib/movieService'

function Movies() {
  const [movies, setMovies] = useState()
  const [actors, setActors] = useState()

  // const url = 'https://jsonplaceholder.typicode.com/posts'
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data.splice(0, 10)))
  //     .catch((error) => console.log(error))
  // }, [])

  useEffect(() => {
    // Funksjon for å hente movie data
    const getMoviesData = async () => {
      const movies = await getMovies()
      setMovies(movies)
      console.log(JSON.stringify(movies))
    }
    // Kaller på getMoviesData funksjonen og tar med en .catch
    // for å fange opp eventuelle feil.
    getMoviesData().catch((error) => console.log(error))

    // Funksjon for å hente actors data
    const getActorsData = async () => {
      const actors = await getActors()
      setActors(actors)
      console.log(JSON.stringify(actors))
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
      {/* <button type="button" onClick={getActorsData}>
        Hent Skuespillere
      </button> */}
      {/* <button type="button" onClick={getMoviesData}>
        Hent Filmer
      </button> */}
      {movies?.map((movie) => (
        <Movie key={movie.slug} title={movie.title} />
      ))}
      {actors?.map((actor) => (
        <Movie key={actor.slug} actor={actor.title} />
      ))}
    </ul>
  )
}

export default Movies
