import pokeApi from 'services/pokeApi'
import {setupApiStore} from 'test/setupApiStore'
import pokemonByName from 'test/mocks/responses/pokemonByName.json'
import pokemonReducer, {addAllPokemon} from './slices'

describe('PokemonSlice', () => {
  test('addAllPokemon', () => {
    const {store} = setupApiStore(pokeApi, {pokemon: pokemonReducer})
    const stateBeforeAction = store.getState()
    store.dispatch(addAllPokemon([pokemonByName]))
    const stateAfterAction = store.getState()

    expect(stateBeforeAction.pokemon.allPokemon).toStrictEqual([])

    expect(stateAfterAction.pokemon.allPokemon).toStrictEqual([pokemonByName])
  })
})
