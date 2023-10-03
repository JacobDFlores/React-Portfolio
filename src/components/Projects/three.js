import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import projectImg from '../../assets/coding quiz.png'

function Project3() {
    return (
            <Card>
<a href='https://jacobdflores.github.io/Coding_Quiz/' target="_blank">
                 <Card.Img variant="top" src={projectImg}  />
                </a>              <Card.Body>
                <Card.Title>Coding Quiz</Card.Title>
                <Card.Text>
                A website that launches a quiz for the user to take. It scores the user based off
                 how much time they have left by the end of the quiz and then allows the user to
                  store their score in local storage.<br></br>
                  <a href='https://github.com/JacobDFlores/Coding_Quiz' target='_blank'>Github link</a>
                </Card.Text>
              </Card.Body>
            </Card> 
    );
  }

  export default Project3;