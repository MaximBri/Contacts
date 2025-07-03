import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { API_URL } from 'src/constants/env'

export const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getGroups: builder.query<GroupContactsDto[], void>({
      query: () => '/groups',
    }),
  }),
})

export const { useGetGroupsQuery } = groupsApi
