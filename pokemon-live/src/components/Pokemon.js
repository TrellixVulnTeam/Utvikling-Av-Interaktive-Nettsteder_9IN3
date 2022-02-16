import { useState } from 'react'

export default function Pokemon({ url, name }) {
  const [show, setShow] = useState(false)
  const showExperience = () => {
    setShow(!show)
    // console.log(show)
  }

  const [pokemonExperience, setPokemonExperience] = useState([])

  const getPokemonExperience = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    setPokemonExperience(data)
  }

  return (
    <article>
      <h2>{name}</h2>
      {/* <p>{url}</p> */}
      {show ? <p>{pokemonExperience?.base_experience}</p> : null}
      <button
        type="button"
        onClick={() => {
          showExperience()
          getPokemonExperience()
        }}
      >
        See experience
      </button>
    </article>
  )
}
