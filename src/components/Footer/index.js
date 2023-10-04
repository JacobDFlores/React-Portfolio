import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {

  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <Row>
        <Col  style={{color: '#FFFFFF', }}>
                <h5>My github - <a href='https://github.com/JacobDFlores'>https://github.com/JacobDFlores</a></h5>
                <h5>My LinkedIn - <a href='https://www.linkedin.com/in/jacob-flores-720780220/'>https://www.linkedin.com/in/jacob-flores-720780220/</a></h5>
        </Col>
        <Col  style={{color: '#FFFFFF', }}>
          <div className="container text-center mb-5">
            <h4> {new Date().getFullYear()} - React Portfolio</h4>
          </div>
        </Col>
        <Col>
            <button
              className="btn btn-light mb-3">
              <Nav.Link href="/">Home</Nav.Link>
            </button>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
