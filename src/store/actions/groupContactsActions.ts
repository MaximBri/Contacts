import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import {
  SET_GROUP_CONTACTS,
  ADD_GROUP_CONTACT,
  UPDATE_GROUP_CONTACT,
  DELETE_GROUP_CONTACT,
} from './actionTypes'

export interface SetGroupContactsAction {
  type: typeof SET_GROUP_CONTACTS
  payload: GroupContactsDto[]
}

export interface AddGroupContactAction {
  type: typeof ADD_GROUP_CONTACT
  payload: GroupContactsDto
}

export interface UpdateGroupContactAction {
  type: typeof UPDATE_GROUP_CONTACT
  payload: GroupContactsDto
}

export interface DeleteGroupContactAction {
  type: typeof DELETE_GROUP_CONTACT
  payload: string
}

export type GroupContactsActionTypes =
  | SetGroupContactsAction
  | AddGroupContactAction
  | UpdateGroupContactAction
  | DeleteGroupContactAction

export const setGroupContacts = (
  groupContacts: GroupContactsDto[]
): SetGroupContactsAction => ({
  type: SET_GROUP_CONTACTS,
  payload: groupContacts,
})

export const addGroupContact = (
  groupContact: GroupContactsDto
): AddGroupContactAction => ({
  type: ADD_GROUP_CONTACT,
  payload: groupContact,
})

export const updateGroupContact = (
  groupContact: GroupContactsDto
): UpdateGroupContactAction => ({
  type: UPDATE_GROUP_CONTACT,
  payload: groupContact,
})

export const deleteGroupContact = (
  groupContactId: string
): DeleteGroupContactAction => ({
  type: DELETE_GROUP_CONTACT,
  payload: groupContactId,
})
