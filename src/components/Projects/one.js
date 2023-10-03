import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import projectImg from '../../assets/smsImg.png'

function Project1() {
    return (
            <Card>
                  <a href='https://surveymanagementservice-78eff0501a9f.herokuapp.com/' target="_blank">
                 <Card.Img variant="top" src={projectImg}  />
                </a>
              <Card.Body>
                <Card.Title>Survey Management Service</Card.Title>
                <Card.Text>
                  (App no longer deployed)<br></br>
                  Survey Management Services (SMS) was created to allow our users to create 
                  custom surveys with a user-friendly interface. Upon sign up or login, the 
                  user will be allowed to create and view past created surveys. But it 
                  doesn't stop there! We implemented an option to view data analytics to
                  provide insight on all gathered data.<br></br>
                    <a href='https://github.com/JacobDFlores/Survey-Management-Service' target='_blank'>Github link</a>
                </Card.Text>
              </Card.Body>
            </Card> 
    );
  }

  export default Project1;