import React from 'react'
import {act, renderHook} from '@testing-library/react-hooks'
import {customRenderHook} from 'test/test.utils'
import pokeApi from 'services/pokeApi'
import useGetAllPokemon from '.'

const updateTimeout = 5000

describe('useGetAllPokemon', () => {
  it('Success', async () => {
    const {result, waitForNextUpdate} = customRenderHook(
      () => useGetAllPokemon(),
      pokeApi,
    )

    const initialResponse = result.current
    expect(initialResponse.data).toBeFalsy()

    await waitForNextUpdate({timeout: updateTimeout})
  })
})
