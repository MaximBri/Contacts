import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { GroupContactsActionTypes } from '../actions/groupContactsActions'
import {
  ADD_GROUP_CONTACT,
  DELETE_GROUP_CONTACT,
  SET_GROUP_CONTACTS,
  UPDATE_GROUP_CONTACT,
} from '../actions-types'

const initialState: GroupContactsDto[] = []

export const groupContactsReducer = (
  state: GroupContactsDto[] = initialState,
  action: GroupContactsActionTypes
): GroupContactsDto[] => {
  switch (action.type) {
    case SET_GROUP_CONTACTS:
      return action.payload
    case ADD_GROUP_CONTACT:
      return [...state, action.payload]
    case UPDATE_GROUP_CONTACT:
      return state.map((groupContact) =>
        groupContact.id === action.payload.id ? action.payload : groupContact
      )
    case DELETE_GROUP_CONTACT:
      return state.filter((groupContact) => groupContact.id !== action.payload)
    default:
      return state
  }
}
