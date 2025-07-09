import { useNavigate, useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import { useGetContacts } from 'src/hooks/useGetContacts'
import { ContactCard } from 'src/components/ContactCard'
import { routes } from 'src/apps/MainApp/routes/routes'
import { Empty } from 'src/components/Empty'

export const ContactPage = observer(() => {
  const navigate = useNavigate()
  const { contactId } = useParams<{ contactId: string }>()

  const contactsList = useGetContacts()
  const contact = contactsList?.find(({ id }) => id === contactId)

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
})
