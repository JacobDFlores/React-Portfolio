import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import projectImg from '../../assets/workDaySchedular.png'

function Project6() {
    return (
            <Card>
<a href='https://jacobdflores.github.io/Daily_Scheduler/' target="_blank">
                 <Card.Img variant="top" src={projectImg}  />
                </a>                <Card.Body>
                <Card.Title>Work Day Schedular</Card.Title>
                <Card.Text>
                A simple calendar app for scheduling your work day <br></br>
                <a href='https://github.com/JacobDFlores/Daily_Scheduler' target='_blank'>Github link</a>

                </Card.Text>
              </Card.Body>
            </Card> 
    );
  }

  export default Project6;