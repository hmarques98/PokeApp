import React from 'react'
import {act, renderHook} from '@testing-library/react-hooks'
import {Provider} from 'react-redux'
import {server} from 'test/mocks/server'

import {setupApiStore} from 'test/setupApiStore'
import {customRenderHook} from 'test/test.utils'
import {useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery} from './index'
import pokeApi from '../pokeApi'

const updateTimeout = 5000

describe('useListVariantsQuery', () => {
  it('Success', async () => {
    const {result} = customRenderHook(
      () => useGetPokemonByNameQuery('bulbasaur'),
      pokeApi,
    )
    const initialResponse = result.current
    expect(initialResponse.data).toBeUndefined()
    expect(initialResponse.isLoading).toBe(true)
    // await waitForNextUpdate({timeout: updateTimeout})

    // const nextResponse = result.current
    // expect(nextResponse.data).not.toBeUndefined()
    // expect(nextResponse.isLoading).toBe(false)
    // expect(nextResponse.isSuccess).toBe(true)
  })

  // it('Internal Server Error', async () => {
  //   fetchMock.mockReject(new Error('Internal Server Error'))
  //   const {result, waitForNextUpdate} = renderHook(
  //     () => useListVariantsQuery(undefined),
  //     {wrapper},
  //   )
  //   const initialResponse = result.current
  //   expect(initialResponse.data).toBeUndefined()
  //   expect(initialResponse.isLoading).toBe(true)

  //   await waitForNextUpdate({timeout: updateTimeout})

  //   const nextResponse = result.current
  //   expect(nextResponse.data).toBeUndefined()
  //   expect(nextResponse.isLoading).toBe(false)
  //   expect(nextResponse.isError).toBe(true)
  // })
})

// describe('useCreateGameMutation', () => {
//   it('Success', async () => {
//     fetchMock.mockResponse(JSON.stringify(game))
//     const {result, waitForNextUpdate} = renderHook(
//       () => useCreateGameMutation(undefined),
//       {
//         wrapper,
//       },
//     )
//     const [createGame, initialResponse] = result.current
//     expect(initialResponse.data).toBeUndefined()
//     expect(initialResponse.isLoading).toBe(false)

//     act(() => {
//       void createGame(newGame)
//     })

//     const loadingResponse = result.current[1]
//     expect(loadingResponse.data).toBeUndefined()
//     expect(loadingResponse.isLoading).toBe(true)

//     await waitForNextUpdate({timeout: updateTimeout})

//     const loadedResponse = result.current[1]
//     expect(loadedResponse.data).not.toBeUndefined()
//     expect(loadedResponse.isLoading).toBe(false)
//     expect(loadedResponse.isSuccess).toBe(true)
//   })

//   it('Internal Server Error', async () => {
//     fetchMock.mockReject(new Error('Internal Server Error'))
//     const {result, waitForNextUpdate} = renderHook(
//       () => useCreateGameMutation(undefined),
//       {
//         wrapper,
//       },
//     )
//     const [createGame, initialResponse] = result.current
//     expect(initialResponse.data).toBeUndefined()
//     expect(initialResponse.isLoading).toBe(false)

//     act(() => {
//       void createGame(newGame)
//     })

//     const loadingResponse = result.current[1]
//     expect(loadingResponse.data).toBeUndefined()
//     expect(loadingResponse.isLoading).toBe(true)

//     await waitForNextUpdate({timeout: updateTimeout})

//     const loadedResponse = result.current[1]
//     expect(loadedResponse.data).toBeUndefined()
//     expect(loadedResponse.isLoading).toBe(false)
//     expect(loadedResponse.isError).toBe(true)
//   })
// })
