import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface PokemonState {
  value: number
}

const initialState: PokemonState = {
  value: 0,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
})

export const {} = pokemonSlice.actions

export default pokemonSlice.reducer
