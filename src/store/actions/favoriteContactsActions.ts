import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'
import {
  SET_FAVORITE_CONTACTS,
  ADD_FAVORITE_CONTACT,
  REMOVE_FAVORITE_CONTACT,
} from './actionTypes'

export interface SetFavoriteContactsAction {
  type: typeof SET_FAVORITE_CONTACTS
  payload: FavoriteContactsDto
}

export interface AddFavoriteContactAction {
  type: typeof ADD_FAVORITE_CONTACT
  payload: string
}

export interface RemoveFavoriteContactAction {
  type: typeof REMOVE_FAVORITE_CONTACT
  payload: string
}

export type FavoriteContactsActionTypes =
  | SetFavoriteContactsAction
  | AddFavoriteContactAction
  | RemoveFavoriteContactAction

export const setFavoriteContacts = (
  favoriteContacts: FavoriteContactsDto
): SetFavoriteContactsAction => ({
  type: SET_FAVORITE_CONTACTS,
  payload: favoriteContacts,
})

export const addFavoriteContact = (
  contactId: string
): AddFavoriteContactAction => ({
  type: ADD_FAVORITE_CONTACT,
  payload: contactId,
})

export const removeFavoriteContact = (
  contactId: string
): RemoveFavoriteContactAction => ({
  type: REMOVE_FAVORITE_CONTACT,
  payload: contactId,
})
