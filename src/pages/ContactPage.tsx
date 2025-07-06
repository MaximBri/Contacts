import { Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetContactsQuery } from 'src/store/contacts'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { routes } from 'src/apps/MainApp/routes/routes'
import { Empty } from 'src/components/Empty'

export const ContactPage = () => {
  const navigate = useNavigate()
  const { contactId } = useParams<{ contactId: string }>()

  const { data: contactsList } = useGetContactsQuery()

  const contact: ContactDto | undefined = contactsList?.find(
    ({ id }) => id === contactId
  )

  if (!contact) {
    navigate(routes.home)
    return null
  }

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  )
}
