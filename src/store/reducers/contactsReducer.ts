import { ContactDto } from 'src/types/dto/ContactDto'
import { ContactsActionTypes } from '../actions/contactsActions'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACTS,
  UPDATE_CONTACT,
} from '../actions-types'

const initialState: ContactDto[] = []

export const contactsReducer = (
  state: ContactDto[] = initialState,
  action: ContactsActionTypes
): ContactDto[] => {
  switch (action.type) {
    case SET_CONTACTS:
      return action.payload
    case ADD_CONTACT:
      return [...state, action.payload]
    case UPDATE_CONTACT:
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      )
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload)
    default:
      return state
  }
}
