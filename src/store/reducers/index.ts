import { combineReducers } from 'redux'
import { contactsReducer } from './contactsReducer'
import { favoriteContactsReducer } from './favoriteContactsReducer'
import { groupContactsReducer } from './groupContactsReducer'

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  favoriteContacts: favoriteContactsReducer,
  groupContacts: groupContactsReducer,
})
