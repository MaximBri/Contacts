import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppSelector } from 'src/store'

export const FavoritListPage = memo(() => {
  const contactsList = useAppSelector((state) => state.contacts)
  const favoriteContactsList = useAppSelector((state) => state.favoriteContacts)

  const contacts: ContactDto[] = contactsList.filter(({ id }) =>
    favoriteContactsList.includes(id)
  )

  return (
    <Row xxl={4} className='g-4'>
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
})
