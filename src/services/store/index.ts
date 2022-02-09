import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import pokeApi from 'services/pokeApi'
import pokemon from './slices/pokemon'

export const store = configureStore({
  reducer: combineReducers({
    pokemon,
    [pokeApi.reducerPath]: pokeApi.reducer,
  }),
  middleware: gdm =>
    gdm({serializableCheck: false, immutableCheck: false}).concat(
      pokeApi.middleware,
    ),
})
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
