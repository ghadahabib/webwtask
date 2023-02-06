import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import './overviews.scss';
import NoPath from '../../imges/NoPath.png';




const Overviews = () => {
  return (
    <div className='overviews-content section-margin'>
      <Container>
        <div className='description'>
            <p className='Large-text'>
            Advanced Customer Service Platform
            </p>
            <h3 className='xl-heading'>Platform Overview</h3>
            <p className='sm-text'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <p className='sm-text'>
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
            </p>
        </div>
        <div className='site-slider'>
        <Carousel>
            
            <Carousel.Item>
                <img className="d-block w-100 " src={NoPath} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 " src={NoPath} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 " src={NoPath} alt="Third slide"/>
            </Carousel.Item>
            </Carousel>
        </div>
       
      </Container>
    </div>
  );
}

export default Overviews;