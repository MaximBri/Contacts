import { ThunkAction } from 'redux-thunk'

import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__'
import {
  AppActions,
  RootState,
  setContacts,
  setFavoriteContacts,
  setGroupContacts,
} from '..'

type AppThunk<Return = void> = ThunkAction<
  Return,
  RootState,
  unknown,
  AppActions
>

export const loadInitialData = (): AppThunk => async (dispatch) => {
  await new Promise((res) => setTimeout(res, 1000))

  dispatch(setContacts(DATA_CONTACT))
  dispatch(setFavoriteContacts(DATA_CONTACT.slice(0, 4).map((c) => c.id)))
  dispatch(setGroupContacts(DATA_GROUP_CONTACT))
}
