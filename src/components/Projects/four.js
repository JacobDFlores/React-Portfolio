import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import projectImg from '../../assets/weatherForecast.png'

function Project4() {
    return (
            <Card>
  <a href='https://jacobdflores.github.io/Weather_Forecast/' target="_blank">
                 <Card.Img variant="top" src={projectImg}  />
                </a>              <Card.Body>
                <Card.Title>Weather Forecast</Card.Title>
                <Card.Text>
                A website that takes user input to search a server API for a cities coordinates 
                and then returns the current and future weather forecast for 5 days. Previous 
                search results are also stored in local storage.<br></br>
                <a href='https://github.com/JacobDFlores/Weather_Forecast' target='_blank'>Github link</a>


                </Card.Text>
              </Card.Body>
            </Card> 
    );
  }

  export default Project4;