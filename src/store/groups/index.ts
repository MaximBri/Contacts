import { groupsApi } from './slice'

export const groupsReducer = groupsApi.reducer
export const groupsReducerPath = groupsApi.reducerPath

export const { useGetGroupsQuery } = groupsApi
