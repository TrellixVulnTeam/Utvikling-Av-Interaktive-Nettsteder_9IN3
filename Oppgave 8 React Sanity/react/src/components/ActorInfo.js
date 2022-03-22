import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieActor, getMovieActor2 } from '../lib/movieService'

function ActorInfo() {
  const { actorname } = useParams()
  const [actor, setActor] = useState()
  const [actor2, setActor2] = useState()

  console.log(JSON.stringify(actor2))

  useEffect(() => {
    const getMovieActorData2 = async () => {
      const movieActors2 = await getMovieActor2(actorname)
      // console.log(JSON.stringify(movieActors2.relatedMovies))
      setActor2(movieActors2.relatedMovies)
    }
    getMovieActorData2().catch((error) => console.log(error))

    // Gammel Metode for å løse oppgavens
    // // Funksjon for å hente filmer fra en gitt skuespiller
    // const getMovieActorData = async () => {
    //   const movieActors = await getMovieActor(actorname)
    //   // console.log(JSON.stringify(movieActors))
    //   let realactorname = movieActors.filter((a) => a.slug === actorname)
    //   // console.log(realactorname[0].fullname)
    //   realactorname = realactorname[0].fullname
    //   const actormovies = movieActors.filter(
    //     (movie) => movie.actor === realactorname
    //   )
    //   // console.log(actormovies)
    //   // Sorterer listen med filmer etter tittel på filemene
    //   setActor(actormovies.sort((a, b) => (a.title > b.title ? 1 : -1)))
    // }
    // // Kaller på getActorsData funksjonen og tar med en .catch
    // // for å fange opp eventuelle feil
    // getMovieActorData().catch((error) => console.log(error))
  }, [])

  return (
    <div>
      {actor2?.map((movies, index) => (
        <div key={index} className="actor-info">
          {(() => {
            if (index === 0) {
              return (
                <>
                  <h2>{movies.actor}</h2>
                  <p>Movies played in:</p>
                </>
              )
            }
          })()}
          <li>{movies.title}</li>
        </div>
      ))}
    </div>
    // <div>
    //   {actor?.map((movies, index) => (
    //     <div key={index} className="actor-info">
    //       {(() => {
    //         if (index === 0) {
    //           return (
    //             <>
    //               <h2>{movies.actor}</h2>
    //               <p>Movies played in:</p>
    //             </>
    //           )
    //         }
    //       })()}
    //       <li>{movies.title}</li>
    //     </div>
    //   ))}
    // </div>
  )
}

export default ActorInfo
