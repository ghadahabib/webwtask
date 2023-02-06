import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import './statistics.scss';
import user from '../../imges/user.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { StarFill } from 'react-bootstrap-icons'

const Statistics = () => {
  return (
    <div className='Statistics-content section-margin'>
      <Container>
        <h2 className='section-title'>Don't Just Take <br></br>our Word for it!</h2>
        <div className='statistics'>
            <div className='stat-item'>
                <h5 className='count'>570</h5>
                <span className='type'>Download</span>
            </div>
            <div className='stat-item'>
                <h5 className='count'>570</h5>
                <span className='type'>Active User</span>
            </div>
            <div className='stat-item'>
                <h5 className='count'>570</h5>
                <span className='type'>positive Feadback</span>
            </div>
            <div className='stat-item'>
                <h5 className='count'>570</h5>
                <span className='type'>+ rating</span>
            </div>
            
        </div>
        <div className='site-slider'>
            <Row>
                <Col lg={6}>
                    <Carousel>    
                        <Carousel.Item>
                            <Row>
                                <Col xs={4}>
                                    <div className='user-img'>
                                        <img src={user} alt="user-image"></img>
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className='user-info'>
                                        <h6 className='title'>Florrie Jacobs</h6>
                                        <span className='user-job'>
                                        CEO of Company
                                        </span>
                                        <p className='feedback'>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                        </p>
                                        <div className='rate'>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                           
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col xs={4}>
                                    <div className='user-img'>
                                        <img src={user} alt="user-image"></img>
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className='user-info'>
                                    <h6 className='title'>Florrie Jacobs</h6>
                                        <span className='user-job'>
                                        CEO of Company
                                        </span>
                                        <p className='feedback'>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                        </p>
                                        <div className='rate'>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                           
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col xs={4}>
                                    <div className='user-img'>
                                        <img src={user} alt="user-image"></img>
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className='user-info'>
                                    <h6 className='title'>Florrie Jacobs</h6>
                                        <span className='user-job'>
                                        CEO of Company
                                        </span>
                                        <p className='feedback'>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                        </p>
                                        <div className='rate'>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                            <span>
                                                <StarFill></StarFill>
                                            </span>
                                           
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col lg={6}>
                    <div className='left-side'>
                        <h2 className='section-title'>
                        Grow Your Business and Join Our Happy Users
                        </h2>
                        <p className='sm-text'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                         At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                        </p>
                        <Button className='custm-btn'>About us</Button>
                    </div>
                </Col>
            </Row>
        </div>
       
      </Container>
    </div>
  );
}

export default Statistics;