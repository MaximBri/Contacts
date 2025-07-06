import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'

import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useGetGroupsQuery } from 'src/store/groups'

export const GroupListPage = memo(() => {
  const { data: groupContactsList } = useGetGroupsQuery()

  return (
    <Row xxl={4}>
      {groupContactsList?.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  )
})
