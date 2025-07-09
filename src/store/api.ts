import axios from 'axios'
import { API_URL } from 'src/constants/env'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const api = {
  getContacts: async (): Promise<ContactDto[]> => {
    const response = await axios.get(`${API_URL}/contacts`)
    return response.data
  },
  getGroups: async (): Promise<GroupContactsDto[]> => {
    const response = await axios.get(`${API_URL}/groups`)
    return response.data
  },
}
