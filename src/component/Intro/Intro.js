import {React} from 'react';
import './intro.scss';
import NoPath from '../../imges/NoPath.png';
import Brand from '../Brands/brands';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Slider = () => {
    return (
    <div className='intro'>
        <Container>
            <div className='intro-content'>
            <Row>
                <Col lg={6}>
                    <div className='slider-text'>
                        <div className='text-group'>
                        <h4 className='sm-heading'>
                        Advanced Platform
                        </h4>
                        <h1 className='main-heading'>
                        Take your team to the next level
                        </h1>
                        <p className='text'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        </p>
                        </div>
                        <Button className='inverted-btn'>About us</Button>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='slider-img'>
                        <img src={NoPath} alt="staistics" className='with-fiter'/>
                    </div>
                    
                </Col>
            </Row>
            </div>
        </Container>

        <Brand></Brand>
    </div>
    );
}
export default Slider;