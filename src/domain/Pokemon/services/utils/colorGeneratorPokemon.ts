const POKEMON_TYPES = {
  grass: 'red',
  bug: 'red',
  fire: 'blue',
}

enum PokemonTypes {
  grass = 'grass',
  bug = 'bug',
  fire = 'fire',
}

export const colorGeneratorPokemon = (val: PokemonTypes) => POKEMON_TYPES[val]
