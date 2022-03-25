import { useEffect, useState } from 'react'
import { getActors, getMovieActor } from '../lib/movieService'
import { Link } from 'react-router-dom'

function Actors() {
  const [actors, setActors] = useState()

  useEffect(() => {
    // Funksjon for å hente actors data
    const getActorsData = async () => {
      const actors = await getActors()
      // console.log(JSON.stringify(actors))
      // Sorterer listen med skuespiller etter fornavn
      setActors(actors.sort((a, b) => (a.fullname > b.fullname ? 1 : -1)))
    }
    // Kaller på getActorsData funksjonen og tar med en .catch
    // for å fange opp eventuelle feil
    getActorsData().catch((error) => console.log(error))
  }, [])

  return (
    <>
      {actors?.map((actor, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold">{actor.fullname}</h2>
          <p className="text-base text-blue-500 hover:text-red-500">
            <Link to={`/actors/${actor.slug}`}>Read More</Link>
          </p>
        </div>
      ))}
    </>
  )
}

export default Actors
