import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'

import { useGetContactsQuery } from 'src/store/contacts'
import { useAppSelector } from 'src/store'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'

export const FavoritListPage = memo(() => {
  const { data: contactsList } = useGetContactsQuery()
  const favoriteContactsList = useAppSelector(
    (state) => state.favoriteSlice.data
  )

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
