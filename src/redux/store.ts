import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './slices/auth'

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken']
}

export const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(
      persistAuthConfig,
      authReducer
    )
  },
  middleware: (defautlMiddleware) =>
    defautlMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<string>
>

export const persistor = persistStore(store)
