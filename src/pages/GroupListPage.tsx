import { observer } from 'mobx-react-lite'
import { Col, Row } from 'react-bootstrap'

import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useGetGroups } from 'src/hooks/useGetGroups'

export const GroupListPage = observer(() => {
  const groupContactsList = useGetGroups()

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
