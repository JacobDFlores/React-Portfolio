import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigate from '../Navigate'


const Header = (props) => {

  const { active, setActive } = props;

  return (
      <Container id='head' fluid>
        <Row>
          <Col xs={10} md={7}>
          
              <h1 className="m-0" style={{ fontSize: '3rem', color: 'white' }}>
                Jacob D Flores
              </h1>
              </Col>
           <Navigate 
           active={active}
           setActive= {setActive}
           />
            
          
          
        </Row>
        <Row>
          <Col>
          <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'white' }}>
              "Throughout heaven and Earth, I alone am the honored one"
            </p>
          </Col>
        </Row>

      </Container>
  );
};

export default Header;
