import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Project6 from '../components/Projects/six';
import Project1 from '../components/Projects/one';
import Project2 from '../components/Projects/two';
import Project3 from '../components/Projects/three';
import Project4 from '../components/Projects/four';
import Project5 from '../components/Projects/five';


function GridExample() {
  return (
    <Row>
        <Row style={{marginBottom: '25px'}}>
            <span style={{backgroundColor: 'white'}}><h1 style={{ paddingLeft: '20px'}}>Portfolio</h1></span>
            <div><h3 style={{ paddingLeft: '20px'}}>
                These are some of my favorite projects that I have been working on for the past six months!
            </h3></div>
        </Row>
        <Row xs={1} md={2} className="g-4 m-2">
        {Array.from({ length: 6 }).map((_, idx) => (
            <Col key={idx}>
            {idx == 0 ? (<Project5 />) : (<></>)}
            {idx == 1 ? (<Project1 />) : (<></>)}
            {idx == 2 ? (<Project3 />) : (<></>)}
            {idx == 3 ? (<Project4 />) : (<></>)}
            {idx == 4 ? (<Project2 />) : (<></>)}
            {idx == 5 ? (<Project6 />) : (<></>)}

            </Col>
        ))}
        </Row>
    </Row>
  );
}

export default GridExample;