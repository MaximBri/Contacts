import { ThunkDispatch, thunk } from 'redux-thunk'
import { applyMiddleware, createStore, Store, compose } from 'redux'
import { rootReducer } from './reducers'
import { ContactsActionTypes } from './actions/contactsActions'
import { FavoriteContactsActionTypes } from './actions/favoriteContactsActions'
import { GroupContactsActionTypes } from './actions/groupContactsActions'

export type AppActions =
  | ContactsActionTypes
  | FavoriteContactsActionTypes
  | GroupContactsActionTypes

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store: Store<RootState, AppActions> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export type AppDispatch = ThunkDispatch<RootState, unknown, AppActions>
export type RootState = ReturnType<typeof rootReducer>

export * from './actions'
export * from './types'
export * from '../hooks/hooks'
