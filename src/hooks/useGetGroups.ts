import { useEffect } from 'react'
import { groupsStore } from 'src/store'

export const useGetGroups = () => {
  const data = groupsStore.groups

  useEffect(() => {
    if (!data) {
      groupsStore.setGroups()
    }
  }, [data])

  return data
}
