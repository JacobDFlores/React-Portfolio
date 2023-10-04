import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Contact() {
  return (
    <>
    <Row>
        <Col></Col>
        <Col>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control
          placeholder="Name"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
        <Form.Control
          placeholder="Your email"
          aria-label="userEmail"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Message</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <div style={{marginTop: '10px'}}><Button variant="primary">Submit</Button>{' '}</div>

     

      

      
      </Col>
      <Col></Col>
      </Row>
    </>
  );
}

export default Contact;