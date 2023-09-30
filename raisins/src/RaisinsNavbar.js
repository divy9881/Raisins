import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function RaisinsNavbar() {
  return (
    <Navbar className="bg-body-tertiary" style={{height: "10vh"}}>
      <Container>
        <Navbar.Brand href="/">Raisins</Navbar.Brand>
        <Navbar.Toggle />
          <Nav className="ml-auto justify-content-end">
            <Nav.Link href="#link">Fund a Campaign</Nav.Link>
            <Nav.Link href="/run-campaign">Run a Campaign</Nav.Link>
            <NavDropdown title="Divy Patel" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default RaisinsNavbar;