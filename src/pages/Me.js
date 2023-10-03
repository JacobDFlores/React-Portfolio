import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import bioPicture from '../assets/IMG-2181.JPG';
import bioPicture2 from '../assets/selfShot_natural.JPG';

export default function Me() {
  return (
    <div>
        <div class="container bootstrap snippets bootdey">
    <div class="profile card">
        <div class="profile-body">
            <div class="profile-bio">
                <div class="row">
                    <div class="col-md-5 text-center">
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                            <Image src={bioPicture} thumbnail />
                            </Col>
                            <Col xs={6} md={4}>
                            <Image src={bioPicture2} thumbnail />
                            </Col>
                        </Row>
                     </Container>
                    </div>
                    <div class="col-md-7">
                        <h2>Jacob D Flores</h2>
                        <span style={{ paddingRight: '10px' }}><strong>Job:</strong> Junior Developer </span>
                        <span><strong>Position:</strong> Searching for Work </span>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget massa nec turpis congue bibendum. Integer nulla felis, porta suscipit nulla et, dignissim commodo nunc. Morbi a semper nulla.</p>
                        <p>Proin mauris odio, pharetra quis ligula non, vulputate vehicula quam. Nunc in libero vitae nunc ultricies tincidunt ut sed leo. Sed luctus dui ut congue consequat. Cras consequat nisl ante, nec malesuada velit pellentesque ac. Pellentesque nec arcu in ipsum iaculis convallis.</p>
                    </div>
                </div>    
            </div>
    	</div>
    </div>
</div> 
    </div>
  );
}