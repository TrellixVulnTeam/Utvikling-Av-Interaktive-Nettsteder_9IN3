import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieActor } from '../lib/movieService'

function ActorInfo() {
  const { actorname } = useParams()
  const [actor, setActor] = useState()

  useEffect(() => {
    // Funksjon for å hente filmer fra en gitt skuespiller
    const getMovieActorData = async () => {
      const movieActors = await getMovieActor(actorname)
      // console.log(JSON.stringify(movieActors))
      let realactorname = movieActors.filter((a) => a.slug === actorname)
      // console.log(realactorname[0].fullname)
      realactorname = realactorname[0].fullname
      const actormovies = movieActors.filter(
        (movie) => movie.actor === realactorname
      )
      console.log(actormovies)
      // Sorterer listen med filmer etter tittel på filemene
      setActor(actormovies.sort((a, b) => (a.title > b.title ? 1 : -1)))
    }
    // Kaller på getActorsData funksjonen og tar med en .catch
    // for å fange opp eventuelle feil
    getMovieActorData().catch((error) => console.log(error))
  }, [])

  return (
    <div>
      {actor?.map((movies, index) => (
        <div key={index}>
          {(() => {
            if (index === 0) {
              return (
                <>
                  <h2>{movies.actor}</h2>
                  <h3>Movies:</h3>
                </>
              )
            }
          })()}
          <p>{movies.title}</p>
        </div>
      ))}
    </div>
  )
}

export default ActorInfo
