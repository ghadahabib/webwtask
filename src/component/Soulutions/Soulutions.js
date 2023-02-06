import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRight } from 'react-bootstrap-icons';
import elipse1 from '../../imges/elipse1.png';
import elipse2 from '../../imges/elipse2.png';
import elipse3 from '../../imges/elipse3.png';
import './solutions.scss';
class Soulutions extends Component {
state ={
    services :[
        {
        imageSrc : elipse1 ,
        imgalt : "elipse1",
        bgColor : "#F1291E",
        title : 'Scale Your Activity',
        info :'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            imageSrc : elipse2 ,
            imgalt : "Bootcamps",
            bgColor : "#36C5AD",
            title : ' Bootcamps',
            info :'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            imageSrc : elipse3 ,
            imgalt : "elipse3",
            bgColor : "#CB4BF8",
            title : 'Hight Quality',
            info :'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            imageSrc : elipse1 ,
            imgalt : "elipse1",
            bgColor : "#56E65B",
            title : 'Get Certifcation',
            info :'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        }

    ]
}
    render() {
        return (
            <div className='soulutions-content'>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={6}>
                        <div className='left-section'>
                            <h2 className='section-title'>
                            The best business solution for you
                            </h2>
                            <p className='sm-text'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                             At vero eos et accusam et justo duo dolores et ea rebum. <br></br>Stet clita kasd gubergren, no sea  est Lorem ipsum dolor sit amet
                            </p>
                            <a className='more-link' href='#'>Learn About Our Success <ArrowRight/></a>
                        </div>
                        </Col>
                        <Col lg={6}>
                        <div className='right-section'>
                            <Row>
                            {this.state.services.map((item,index) => {
                            return<Col xs={6} key={index}>
                                <div  className='solution-item'>
                                <   div className="solution-img" style={{ background: `${item.bgColor}`}}>
                                        <img src={item.imageSrc} alt={item.imgalt}></img>
                                    </div>
                                    <h4 className='sm-title'>{item.title}</h4>
                                    <p className='sm-text'>{item.info}</p>
                                </div>
                            </Col>
                            })}
                            </Row>
                        </div>
                        </Col>
                    </Row>
                </Container>
                <div className='services-center'>
                
                </div>

            </div>
        )
    }
}
export default Soulutions;