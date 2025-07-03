import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useGetContactsQuery } from 'src/store/contacts'
import { useGetGroupsQuery } from 'src/store/groups'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { Empty } from 'src/components/Empty'

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>()

  const { data: contactsList } = useGetContactsQuery()
  const { data: groupContactsList } = useGetGroupsQuery()

  const findGroup = groupContactsList?.find(({ id }) => id === groupId)
  const groupContacts: GroupContactsDto | undefined = groupContactsList?.find(
    ({ id }) => id === groupId
  )
  const contacts: ContactDto[] = findGroup
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
