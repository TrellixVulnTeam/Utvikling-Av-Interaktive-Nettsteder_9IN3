import client from './client'

const movieFields = `
  title,
  // "slug": slug.current,
  "actor": actor->fullname,
  // "skuespillere": skuespillere[]{...}
`

const actorFields = `
  fullname,
  "slug": slug.current,
`

const actorMovieFields = `
  fullname,
  "slug": slug.current,
  "relatedMovies": *[_type=='movie' && references(^._id)]{ 
  	title,
	}
`

// Funksjon for å hente alle filmer
export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  return data
}

// Funksjon for å hente alle skuespillere
export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`)
  return data
}

// Funksjon for å hente filmer med en gitt skuespiller
export const getMovieActorOld = async (actorName) => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  const actorslug = await client.fetch(
    `*[_type == "actor" && slug.current == $actorName]{${actorFields}}`,
    {
      actorName,
    }
  )
  // console.log(data)
  // console.log(actorslug)
  const newData = [...data, ...actorslug]
  return newData
}

// Funksjon for å hente filmer med en gitt skuespiller versjon 2
export const getMovieActor = async (actorName) => {
  const data = await client.fetch(
    `*[_type=="actor" && slug.current == $actorName]{${actorMovieFields}}`,
    { actorName }
  )
  return data?.[0]
}
