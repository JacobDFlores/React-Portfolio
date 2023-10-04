import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigate = (props) => {

    const { active, setActive} = props;

    return (

<Col xs={8} md={5}>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  onClick={() => setActive('portfolio')} id='navPort'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setActive('me')}>About Me</Nav.Link>
            <Nav.Link onClick={() => setActive('resume')}>Resume</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setActive('contact')}>Contact Me</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                *Coming soon*
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">*Coming soon*</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</Col>

    )
};

export default Navigate;