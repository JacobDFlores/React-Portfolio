import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Resume() {
  return (
    <Row>
        <Row style={{marginBottom: '25px'}}>
            <span style={{backgroundColor: 'white'}}><h1 style={{ paddingLeft: '20px'}}>Resume</h1></span>
            <div><h3 style={{ paddingLeft: '20px'}}>
                Link to download my resume
            </h3></div>
        </Row>
        <Row style={{marginBottom: '25px'}}>
            <span style={{backgroundColor: 'white'}}><h1 style={{ paddingLeft: '20px'}}>Skills</h1></span>
            <div><h3 style={{ paddingLeft: '20px'}}>
                Skills I am proficient in
            </h3></div>
        </Row>
        
    </Row>
  );
}

export default Resume;