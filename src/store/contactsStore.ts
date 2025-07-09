import { makeAutoObservable } from 'mobx'
import { ContactDto } from 'src/types/dto/ContactDto'
import { api } from './api'
import { favoritesStore } from './favoritesStore'

export interface ContactStore {
  contacts: ContactDto[] | undefined
  setContacts: () => void
}

export const contactsStore = makeAutoObservable<ContactStore>({
  contacts: undefined,
  *setContacts() {
    const data: ContactDto[] = yield api.getContacts()
    this.contacts = data
    favoritesStore.favoriteContacts = data
      .slice(0, 4)
      .map((contact) => contact.id)
  },
})
