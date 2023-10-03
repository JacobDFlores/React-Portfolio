import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import projectImg from '../../assets/FOOD FINDER 2.0.png'

function Project2() {
    return (
            <Card>
                <a href='https://jacobdflores.github.io/Food-Finder/' target="_blank">
                 <Card.Img variant="top" src={projectImg}  />
                </a>              <Card.Body>
                <Card.Title>Weather Forecast</Card.Title>
                <Card.Text>
                An app that takes user input such as a food item, and then gives the 
                user various options for online recipes as well as recommendations for nearby grocery stores.
                We were able to create our application using dynamically updated HTML, CSS and Javascript and Jquery!
                Our "Food Finder" application allows users to browse their favorite
                 food recipies and find nearby restaurants in their local area with their favorite food selections! <br></br>
                 <a href='https://github.com/JacobDFlores/Food-Finder' target='_blank'>Github link</a>
                </Card.Text>
              </Card.Body>
            </Card> 
    );
  }

  export default Project2;