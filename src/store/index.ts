import { combineReducers } from 'redux'
import { groupsReducer, groupsReducerPath } from './groups'
import { contactsReducer, contactsReducerPath } from './contacts'
import { favoriteReducer, favoriteReducerPath } from './favorites'
import { configureStore } from '@reduxjs/toolkit'
import { contactsApi } from './contacts/slice'
import { groupsApi } from './groups/slice'

const rootReducer = combineReducers({
  [groupsReducerPath]: groupsReducer,
  [contactsReducerPath]: contactsReducer,
  [favoriteReducerPath]: favoriteReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(contactsApi.middleware)
      .concat(groupsApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export * from '../hooks/hooks'
