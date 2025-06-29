import { createStore, Store } from 'redux'
import { rootReducer, RootState } from './reducers'
import { ContactsActionTypes } from './actions/contactsActions'
import { FavoriteContactsActionTypes } from './actions/favoriteContactsActions'
import { GroupContactsActionTypes } from './actions/groupContactsActions'

export type AppActions =
  | ContactsActionTypes
  | FavoriteContactsActionTypes
  | GroupContactsActionTypes

export const store: Store<RootState, AppActions> = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export type AppDispatch = typeof store.dispatch

export * from './actions'
export * from './types'
export * from './hooks'
