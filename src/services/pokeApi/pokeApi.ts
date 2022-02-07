import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const pokeApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    getPokemonByName: builder.query<undefined, string>({
      query: name => `pokemon/${name}`,
    }),
    getPokemonByNumber: builder.query<number, number>({
      query: number => `pokemon/${number}`,
    }),
    getAllPokemon: builder.query<undefined, void>({query: () => 'pokemon'}),
  }),
})

export const {
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
  useGetAllPokemonQuery,
  useGetPokemonByNumberQuery,
} = pokeApi
export default pokeApi
