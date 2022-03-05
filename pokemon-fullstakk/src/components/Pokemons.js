import Pokemon from './Pokemon'

function Pokemons({ pokemons }) {
  return (
    <section>
      {pokemons?.length > 0
        ? pokemons.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))
        : null}
    </section>
  )
}

export default Pokemons
