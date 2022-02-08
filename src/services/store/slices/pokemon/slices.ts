import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IPokemon} from 'services/pokeApi/interfaces/Pokemon'

interface PokemonState {
  allPokemon: IPokemon[]
}

const initialState: PokemonState = {
  allPokemon: [],
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addAllPokemon: (state, {payload}: PayloadAction<IPokemon[]>) => {
      state.allPokemon = payload
      return state
    },
  },
})

export const {addAllPokemon} = pokemonSlice.actions

export default pokemonSlice.reducer
