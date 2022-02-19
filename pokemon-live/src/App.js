import Pokemons from './components/Pokemons'
import { useState } from 'react'
import Posts from './components/Post'

// const pokemons = [
//   { id: 1, name: 'Bulbasaur' },
//   { id: 2, name: 'Ivysaur' },
//   { id: 3, name: 'Venosaur' },
// ]

// https://pokeapi.co/api/v2/pokemon?limit=25

export default function App() {
  // Write JavaScript, use Hooks, add state and more
  const [pokemons, setPokemons] = useState([])

  const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    const data = await response.json()
    // console.log(data.results)
    setPokemons(data.results)
  }

  return (
    <main className="mx-auto max-w-sm mt-6 border-2 p-6">
      {/* <Posts  /> */}
      <Pokemons pokemons={pokemons} />
      <button type="button" onClick={getPokemons}>
        Hent Pokemons
      </button>
    </main>
  )
}
