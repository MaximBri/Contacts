import { makeAutoObservable } from 'mobx'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { api } from './api'

export interface ContactStore {
  groups: GroupContactsDto[] | undefined
  setGroups: () => void
}

export const groupsStore = makeAutoObservable<ContactStore>({
  groups: undefined,
  *setGroups() {
    this.groups = yield api.getGroups()
  },
})
