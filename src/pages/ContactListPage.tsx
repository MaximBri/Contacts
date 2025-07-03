import { memo, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppSelector } from 'src/store'

export const ContactListPage = memo(() => {
  const contactsList = useAppSelector((state) => state.contacts)
  const groupContactsList = useAppSelector((state) => state.groupContacts)

  const [contacts, setContacts] = useState<ContactDto[]>(contactsList)

  const onSubmit = (contact: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactsList

    if (contact.name) {
      const contactName = contact.name.toLowerCase()
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(contactName) > -1
      )
    }

    if (contact.groupId) {
      const groupContacts = groupContactsList.find(
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

  return (
    <Row xxl={1}>
      <Col className='mb-3'>
        <FilterForm
          groupContactsList={groupContactsList}
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
