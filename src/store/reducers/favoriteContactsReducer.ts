import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'
import { FavoriteContactsActionTypes } from '../actions/favoriteContactsActions'
import {
  SET_FAVORITE_CONTACTS,
  ADD_FAVORITE_CONTACT,
  REMOVE_FAVORITE_CONTACT,
} from '../actions/actionTypes'

const initialState: FavoriteContactsDto = []

export const favoriteContactsReducer = (
  state: FavoriteContactsDto = initialState,
  action: FavoriteContactsActionTypes
): FavoriteContactsDto => {
  switch (action.type) {
    case SET_FAVORITE_CONTACTS:
      return action.payload
    case ADD_FAVORITE_CONTACT:
      return state.includes(action.payload) ? state : [...state, action.payload]
    case REMOVE_FAVORITE_CONTACT:
      return state.filter((contactId) => contactId !== action.payload)
    default:
      return state
  }
}
