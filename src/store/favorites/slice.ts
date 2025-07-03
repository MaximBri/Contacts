import { createSlice } from '@reduxjs/toolkit'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'
import { contactsApi } from '../contacts/slice'

const initialState: { data: FavoriteContactsDto | null } = {
  data: null,
}

export const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      contactsApi.endpoints.getContacts.matchFulfilled,
      (state, action) => {
        state.data = action.payload.slice(0, 4).map((contact) => contact.id)
      }
    )
  },
})
