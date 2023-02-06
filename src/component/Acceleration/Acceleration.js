

import React, { Component } from 'react';
import './acceleration.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Acceleration extends Component {
state ={
    accelerations :[
        {
        
        title : 'Market Research',
        desc : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."

        },
        {
            
            title : "Market Research",
            desc : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
           
        },
        {
            title : "Market Research",
            desc : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            
        }

    ]
}
    render() {
        return (
            <div className='accelerations section-margin'>
                <Container>
                    <div className='accelerations-content'>
                        <Row>
                            <Col lg={6}>
                            <div className='left-side'>
                                <h2 className='section-title'>
                                Acceleration Process to Grow Your Business
                                </h2>
                                <p className='sm-text'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    At vero eos et accusam et justo duo dolores et ea rebum. <br></br>Stet clita kasd gubergren, no sea  est Lorem ipsum dolor sit amet
                                </p>
                                <Button className='custm-btn'>About us</Button>
                            </div> 
                            </Col>
                            <Col lg={6}>    
                            {this.state.accelerations.map((item,index) => {
                                return<ul key={index} className= "market">
                                    <li className='market-item'>
                                        <h5 className='title'>{item.title}</h5>
                                        <p className='sm-text'>{item.desc}</p>
                                    </li>
                            </ul>
                            })}
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}
export default Acceleration;
