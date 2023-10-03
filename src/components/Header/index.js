import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

  return (
      <Container fluid>
        <Row>
          <Col xs={10} md={7}>
          
              <h1 className="m-0" style={{ fontSize: '3rem', color: '#041736' }}>
                Jacob D Flores
              </h1>
              
           
            
          </Col>
          <Col xs={8} md={5}>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  href="portfolio" id='navPort'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#contact-me">Contact Me</NavDropdown.Item>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>

          </Col>
        </Row>
        <Row>
          <Col>
          <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'smoke' }}>
              "Throughout heaven and Earth, I alone am the honored one"
            </p>
          </Col>
        </Row>

      </Container>
  );
};

export default Header;
