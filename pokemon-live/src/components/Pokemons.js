import Pokemon from './Pokemon'

export default function Pokemons() {
  const pokemons = [
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Ivysaur' },
    { id: 3, name: 'Venosaur' },
  ]

  return (
    <section>
      <h1>Liste med pokemons</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Pokemon id={pokemon.id} name={pokemon.name} />
          </li>
        ))}
      </ul>
    </section>
  )
}
