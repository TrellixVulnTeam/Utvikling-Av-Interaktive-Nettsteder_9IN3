import Movie from './Movie'

function Movies({ movies }) {
  return (
    <ul>
      {movies?.map((movie) => (
        <Movie
          key={movie.imdbID}
          alt={movie.Title}
          title={movie.Title}
          year={movie.Year}
          src={movie.Poster}
        />
      ))}
    </ul>
  )
}

export default Movies
