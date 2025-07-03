import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { routes } from 'src/apps/MainApp/routes/routes'

export const MainMenu = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href={routes.home}>
          <h1>Книга контактов</h1>
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/groups'>
            Группы
          </Nav.Link>
          <Nav.Link as={Link} to='/favorit'>
            Избранное
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
