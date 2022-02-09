import {act, renderHook} from '@testing-library/react-hooks'

import {customRenderHook} from 'test/test.utils'
import {server} from 'test/mocks/server'
import {useGetPokemonByNameQuery} from './index'
import pokeApi from '../pokeApi'

const updateTimeout = 5000

describe('useGetPokemonByNameQuery', () => {
  it('Success', async () => {
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

  it('Internal Server Error', async () => {
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
