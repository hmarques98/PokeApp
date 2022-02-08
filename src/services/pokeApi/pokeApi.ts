import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IAllPokemon, IPokemon} from './interfaces/Pokemon'

const pokeApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    getPokemonByName: builder.query<IPokemon, string>({
      query: name => `pokemon/${name}`,
    }),
    getPokemonByNumber: builder.query<number, number>({
      query: number => `pokemon/${number}`,
    }),
    getAllPokemon: builder.query<IAllPokemon[], void>({
      query: () => 'pokemon',
      transformResponse: (rawResult: {results: IAllPokemon[]}) =>
        rawResult.results,
    }),
  }),
})

export const {
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
  useGetAllPokemonQuery,
  useGetPokemonByNumberQuery,
  useLazyGetAllPokemonQuery,
} = pokeApi
export default pokeApi
