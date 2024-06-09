import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './stateSchema'

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState: initialState
      })
      
}