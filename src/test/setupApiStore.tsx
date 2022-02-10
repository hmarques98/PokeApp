/* eslint-disable react/function-component-definition */
import React, {Reducer} from 'react'
import {
  AnyAction,
  combineReducers,
  configureStore,
  EnhancedStore,
  Middleware,
  Store,
} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import {cleanup} from '@testing-library/react-native'
// import {setupListeners} from '@reduxjs/toolkit/query'

export function withProvider(store: Store<any>) {
  return function Wrapper({children}: any) {
    return <Provider store={store}>{children}</Provider>
  }
}

export function setupApiStore<
  A extends {
    reducer: Reducer<any, any>
    reducerPath: string
    middleware: Middleware
    util: {resetApiState(): any}
  },
  R extends Record<string, Reducer<any, any>> = Record<never, never>,
>(api: A, extraReducers?: R): {api: any; store: EnhancedStore} {
  const getStore = () =>
    configureStore({
      reducer: combineReducers({
        [api.reducerPath]: api.reducer,
        ...extraReducers,
      }),
      middleware: gdm =>
        gdm({serializableCheck: false, immutableCheck: false}).concat(
          api.middleware,
        ),
    })

  type StoreType = EnhancedStore<
    {
      api: ReturnType<A['reducer']>
    } & {
      [K in keyof R]: ReturnType<R[K]>
    },
    AnyAction,
    ReturnType<typeof getStore> extends EnhancedStore<any, any, infer M>
      ? M
      : never
  >

  const initialStore = getStore() as StoreType
  const refObj = {
    api,
    store: initialStore,
    wrapper: withProvider(initialStore),
  }
  // let cleanupListeners: () => void

  beforeEach(() => {
    const store = getStore() as StoreType
    refObj.store = store
    refObj.wrapper = withProvider(store)

    // cleanupListeners = setupListeners(store.dispatch)
    // setupListeners(store.dispatch)
  })
  afterEach(() => {
    cleanup()

    // cleanupListeners()

    refObj.store.dispatch(api.util.resetApiState())
  })

  return refObj
}
