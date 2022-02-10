import URLS from 'config/urls'
import {rest} from 'msw'
import resolvers, {internalServerError} from './resolvers'

export const pokeApiUrl = (query: string) => `${URLS.POKE_API}${query}`

export const handlers = {
  allPokemon: {
    success: rest.get(pokeApiUrl('pokemon'), resolvers.allPokemon.success),
    internalServerError: rest.get(pokeApiUrl('pokemon'), internalServerError),
  },
  pokemonByName: {
    success: rest.get(
      pokeApiUrl('pokemon/bulbasaur'),
      resolvers.pokemonByName.success,
    ),
    internalServerError: rest.get(
      pokeApiUrl('pokemon/bulbasaur'),
      internalServerError,
    ),
  },
}

export const handlersList = [
  handlers.allPokemon.success,
  handlers.pokemonByName.success,

  handlers.allPokemon.internalServerError,
  handlers.pokemonByName.internalServerError,
]
