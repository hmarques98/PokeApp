import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import URLS from 'config/urls'
import {IAllPokemon, IPokemon} from './interfaces/Pokemon'

const pokeApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: URLS.POKE_API}),
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

export default pokeApi
