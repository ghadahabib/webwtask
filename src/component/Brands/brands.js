import React, { Component } from 'react';
import './brands.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import client1 from '../../imges/client1.png';
import client2 from '../../imges/client2.png';
import client3 from '../../imges/client3.png';
import client4 from '../../imges/client4.png';
import client5 from '../../imges/client5.png';


class Brand extends Component {
state ={
    brands :[
        {
        imageSrc : client1 ,
        imgalt : "client1"

        },
        {
            imageSrc : client2,
            imgalt : "client2"
           
        },
        {
            imageSrc : client3,
            imgalt : "client3"
            
        },
        {
            imageSrc : client4,
            imgalt : "client4"

        },
        {
            imageSrc : client5,
            imgalt : "client5"
        }

    ]
}
    render() {
        return (
            <div className='brands'>
                <Container>
                    <div className='brands-content'>
                        <Row>
                            {this.state.brands.map((item,index) => {
                                return<Col key={index}>
                                    <div className='client-item'>
                                        <img src={item.imageSrc} alt={item.imgalt}></img>
                                    </div>
                            </Col>
                            })}
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}
export default Brand;