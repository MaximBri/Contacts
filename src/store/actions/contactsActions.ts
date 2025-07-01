import { ContactDto } from 'src/types/dto/ContactDto'
import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACTS, UPDATE_CONTACT } from '../actions-types'

export interface SetContactsAction {
  type: typeof SET_CONTACTS
  payload: ContactDto[]
}

export interface AddContactAction {
  type: typeof ADD_CONTACT
  payload: ContactDto
}

export interface UpdateContactAction {
  type: typeof UPDATE_CONTACT
  payload: ContactDto
}

export interface DeleteContactAction {
  type: typeof DELETE_CONTACT
  payload: string
}

export type ContactsActionTypes =
  | SetContactsAction
  | AddContactAction
  | UpdateContactAction
  | DeleteContactAction

export const setContacts = (contacts: ContactDto[]): SetContactsAction => ({
  type: SET_CONTACTS,
  payload: contacts,
})

export const addContact = (contact: ContactDto): AddContactAction => ({
  type: ADD_CONTACT,
  payload: contact,
})

export const updateContact = (contact: ContactDto): UpdateContactAction => ({
  type: UPDATE_CONTACT,
  payload: contact,
})

export const deleteContact = (contactId: string): DeleteContactAction => ({
  type: DELETE_CONTACT,
  payload: contactId,
})
