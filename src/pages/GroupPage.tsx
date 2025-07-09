import { useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useGetContacts } from 'src/hooks/useGetContacts'
import { useGetGroups } from 'src/hooks/useGetGroups'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'

export const GroupPage = observer(() => {
  const { groupId } = useParams<{ groupId: string }>()

  const contactsList = useGetContacts()
  const groupContactsList = useGetGroups()

  const findGroup = groupContactsList?.find(({ id }) => id === groupId)
  const groupContacts = groupContactsList?.find(({ id }) => id === groupId)
  const contacts = findGroup
    ? contactsList?.filter(({ id }) => findGroup.contactIds.includes(id)) || []
    : []

  return (
    <Row className='g-4'>
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className='mx-auto'>
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
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
        </>
      ) : (
        <Empty />
      )}
    </Row>
  )
})
