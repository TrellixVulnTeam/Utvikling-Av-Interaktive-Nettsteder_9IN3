import { useEffect, useState } from 'react'

function Pokemon({ pokemon }) {
  const [experience, setExperience] = useState()

  const getPokemonInfo = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setExperience(data?.base_experience)
  }

  useEffect(() => {
    // getPokemonInfo(pokemon?.url)
  }, [pokemon?.url])

  return (
    <article className="pokemons">
      <h2 className="pokemon">{pokemon.name}</h2>
      <p>Experience: {experience}</p>
      <button type="button" onClick={() => getPokemonInfo(pokemon.url)}>
        Se pokemon info
      </button>
    </article>
  )
}

export default Pokemon
