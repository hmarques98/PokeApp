import {handlers} from 'test/mocks/handlers'
import {server} from 'test/mocks/server'
import {customRenderHook} from 'test/test.utils'
import pokeApi from '.'
import {useGetPokemonByNameQuery, useGetAllPokemonQuery} from './hooks'

const updateTimeout = 5000

describe('pokeApi', () => {
  describe('useGetPokemonByNameQuery', () => {
    test('Success', async () => {
      const {result, waitForNextUpdate} = customRenderHook(
        () => useGetPokemonByNameQuery('bulbasaur'),
        pokeApi,
      )
      const initialResponse = result.current
      expect(initialResponse.data).toBeFalsy()
      expect(initialResponse.isLoading).toBeTruthy()
      await waitForNextUpdate({timeout: updateTimeout})
      const nextResponse = result.current
      expect(nextResponse.data).toBeTruthy()
      expect(nextResponse.isLoading).toBeFalsy()
      expect(nextResponse.isError).toBeFalsy()
    })
  })

  describe('useGetAllPokemonQuery', () => {
    test('Success', async () => {
      const {result, waitForNextUpdate} = customRenderHook(
        () => useGetAllPokemonQuery(),
        pokeApi,
      )
      const initialResponse = result.current
      expect(initialResponse.isLoading).toBeTruthy()

      await waitForNextUpdate({timeout: updateTimeout})
      const nextResponse = result.current

      expect(nextResponse.data).toBeTruthy()
      expect(nextResponse.isLoading).toBeFalsy()
      expect(nextResponse.isError).toBeFalsy()
    })
  })
})
