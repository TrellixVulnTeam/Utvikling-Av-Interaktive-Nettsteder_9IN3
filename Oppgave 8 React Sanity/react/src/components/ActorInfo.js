import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieActor } from '../lib/movieService'

function ActorInfo() {
  const { actorname } = useParams()
  const [actor, setActor] = useState()
  const [relatedMovies, setRelatedMovies] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    // Funksjon for å hente skuespiller og alle filmene h*n har vært med i
    setLoading(true)
    const getMovieActorData = async () => {
      const movieActors = await getMovieActor(actorname)
      setActor(movieActors.fullname)
      setRelatedMovies(movieActors.relatedMovies)
      setLoading(false)
    }
    // Kaller på getMovieActorsData funksjonen og tar med en .catch
    // for å fange opp eventuelle feil
    getMovieActorData().catch((error) => console.log(error))
  }, [])

  if (loading) {
    return <p>Henter data...</p>
  }

  return (
    <div>
      {relatedMovies?.map((movies, index) => (
        <div key={index}>
          {(() => {
            if (index === 0) {
              return (
                <>
                  <h2>{actor}</h2>
                  <p>Movies played in:</p>
                </>
              )
            }
          })()}
          <li>{movies?.title}</li>
        </div>
      ))}
    </div>
  )
}

export default ActorInfo
