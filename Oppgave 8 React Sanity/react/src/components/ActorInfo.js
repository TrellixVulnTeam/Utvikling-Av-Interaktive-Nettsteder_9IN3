import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieActor } from '../lib/movieService'

function ActorInfo() {
  const { actorname } = useParams()
  const [actor, setActor] = useState()
  const [relatedMovies, setRelatedMovies] = useState()

  useEffect(() => {
    const getMovieActorData = async () => {
      const movieActors = await getMovieActor(actorname)
      setActor(movieActors.fullname)
      setRelatedMovies(movieActors.relatedMovies)
    }
    getMovieActorData().catch((error) => console.log(error))
  }, [])

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
