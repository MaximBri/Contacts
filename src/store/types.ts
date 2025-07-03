import { ContactDto } from 'src/types/dto/ContactDto'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export interface RootState {
  contacts: ContactDto[]
  favoriteContacts: FavoriteContactsDto
  groupContacts: GroupContactsDto[]
}
