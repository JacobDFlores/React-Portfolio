import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import List from '../components/Skills'
const resume_pdf_url = 'http://localhost:3000/Jacob_Flores_Resume-Final-Oct-2023.pdf'



function Resume() {


    const downloadResume = (url) =>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');  //build the tag that will activate download tag
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();                              //get rid of tag when we are done with it
        aTag.remove();
    };



  return (
    <Row>
        <Row style={{marginBottom: '25px'}}>
            <span style={{backgroundColor: 'white'}}><h1 style={{ paddingLeft: '20px'}}>Resume</h1></span>
            <div><h3 style={{ paddingLeft: '20px'}}>
                Link to download my resume
            </h3></div>
        </Row>
        <div className="d-grid gap-2" >
            <Button variant="primary" size="lg" style={{margin: '20px'}} onClick={() =>{
                {downloadResume(resume_pdf_url)};
            }}>  Resume.pdf  </Button>
        </div>
        <Row style={{marginBottom: '25px'}}>
            <span style={{backgroundColor: 'white'}}><h1 style={{ paddingLeft: '20px'}}>Skills</h1></span>
            <div><h3 style={{ paddingLeft: '20px'}}>
                Some of the skills I'm proficient in  
            </h3>
                <List />
            </div>
        </Row>
        
    </Row>
  );
}

export default Resume;