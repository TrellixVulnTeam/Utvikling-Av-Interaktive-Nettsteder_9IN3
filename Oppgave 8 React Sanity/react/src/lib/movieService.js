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

// Funksjon for å hente filmer med en gitt skuespillet
export const getMovieActor = async (actorName) => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  const actorslug = await client.fetch(
    `*[_type == "actor" && slug.current == $actorName]{${actorFields}}`,
    {
      actorName,
    }
  )
  console.log(data)
  console.log(actorslug)
  const newData = [...data, ...actorslug]
  return newData
}

// export const getMovie = async (slug) => {
//   const data = await client.fetch(
//     `*[_type == "movie" && slug.current == $slug]{${movieFields}}`,
//     { slug }
//   )
//   return data
// }

// export const getActor = async (slug) => {
//   const data = await client.fetch(
//     `*[_type == "actor" && slug.current == $slug]{${actorFields}}`,
//     { slug }
//   )
//   return data
// }
