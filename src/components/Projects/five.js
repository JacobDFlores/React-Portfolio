import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import projectImg from '../../assets/Music-verse-app.png'

function Project5() {
    return (
            <Card>
                <a href='https://music-verse2-57f59708a605.herokuapp.com/' target="_blank">
                 <Card.Img variant="top" src={projectImg}  />
                </a>
              <Card.Body>
                <Card.Title>Music Verse</Card.Title>
                <Card.Text>
                Music Verse is an avant-garde platform dedicated to music aficionados,
                 offering a space to explore, critique, and share musical interests. 
                 Dive into the latest tracks, pen down insightful reviews, appraise
                 tunes, and initiate posts that ignite engaging discussions within
                 the music community.<br></br>
                  <a href='https://github.com/pzhong1/Music-Verse' target='_blank'>Github link</a>

                </Card.Text>
              </Card.Body>
            </Card> 
    );
  }

  export default Project5;