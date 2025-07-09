import { observer } from 'mobx-react-lite'
import { Col, Row } from 'react-bootstrap'

import { ContactCard } from 'src/components/ContactCard'
import { useGetContacts } from 'src/hooks/useGetContacts'
import { favoritesStore } from 'src/store'
import { ContactDto } from 'src/types/dto/ContactDto'

export const FavoritListPage = observer(() => {
  const contactsList = useGetContacts()

  const favoriteContactsList = favoritesStore.favoriteContacts

  const contacts: ContactDto[] =
    contactsList?.filter(({ id }: { id: any }) =>
      favoriteContactsList?.includes(id)
    ) ?? []

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
