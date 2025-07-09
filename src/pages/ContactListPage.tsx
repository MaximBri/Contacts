import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { useGetContacts } from 'src/hooks/useGetContacts'
import { useGetGroups } from 'src/hooks/useGetGroups'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'

export const ContactListPage = observer(() => {
  const contactsList = useGetContacts()
  const groupContactsList = useGetGroups()

  const [contacts, setContacts] = useState<ContactDto[]>(contactsList ?? [])

  const onSubmit = (contact: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactsList ?? []

    if (contact.name) {
      const contactName = contact.name.toLowerCase()
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(contactName) > -1
      )
    }

    if (contact.groupId) {
      const groupContacts = groupContactsList?.find(
        ({ id }) => id === contact.groupId
      )

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        )
      }
    }

    setContacts(findContacts)
  }

  useEffect(() => {
    if (contactsList) {
      setContacts(contactsList)
    }
  }, [contactsList])

  return (
    <Row xxl={1}>
      <Col className='mb-3'>
        <FilterForm
          groupContactsList={groupContactsList ?? []}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
        <Row xxl={4} className='g-4'>
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
})
