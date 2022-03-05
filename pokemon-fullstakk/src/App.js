import { useEffect, useState } from 'react'
import Pokemon from './components/Pokemons'
import Layout from './components/Layout'

export default function App() {
  const [pokemons, setPokemons] = useState()

  const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    const data = await response.json()
    setPokemons(data?.results)
  }

  useEffect(() => {
    // Her kan vi gjøre hva vi vil
  }, [])

  return (
    <Layout>
      <Pokemon pokemons={pokemons} />
      <button type="button" onClick={getPokemons}>
        Hent Data
      </button>
    </Layout>
  )
}
