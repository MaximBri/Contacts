import { Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { useAppSelector } from 'src/store'

export const ContactPage = () => {
  const navigate = useNavigate()
  const { contactId } = useParams<{ contactId: string }>()
  const contactsList = useAppSelector((state) => state.contacts)

  const contact: ContactDto | undefined = contactsList.find(
    ({ id }) => id === contactId
  )

  if (!contact) {
    navigate('/')
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
