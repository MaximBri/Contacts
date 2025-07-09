import { useEffect } from 'react'
import { contactsStore } from 'src/store'

export const useGetContacts = () => {
  const data = contactsStore.contacts

  useEffect(() => {
    if (!data) {
      contactsStore.setContacts()
    }
  }, [data])

  return data
}
