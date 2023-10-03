import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function List() {
  return (
    <Row>
        <Col xs='5' md='3'>
    <ListGroup variant="flush" style={{margin: '20px'}}>
      <ListGroup.Item variant='primary'>HTML</ListGroup.Item>
      <ListGroup.Item variant='primary'>CSS</ListGroup.Item>
      <ListGroup.Item variant='primary'>JavaScript</ListGroup.Item>
      <ListGroup.Item variant='primary'>Node.js</ListGroup.Item>
      <ListGroup.Item variant='primary'>React</ListGroup.Item>
      <ListGroup.Item variant='primary'>mySQL</ListGroup.Item>
      <ListGroup.Item variant='primary'>noSQL</ListGroup.Item>
      <ListGroup.Item variant='primary'>MERN</ListGroup.Item>

    </ListGroup>
    </Col>
    <Col></Col>
    </Row>
  );
}

export default List;