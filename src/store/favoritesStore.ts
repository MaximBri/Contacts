import { makeAutoObservable } from 'mobx'

export interface FavoritesStore {
  favoriteContacts: string[] | undefined
}

export const favoritesStore = makeAutoObservable<FavoritesStore>({
  favoriteContacts: undefined,
})
