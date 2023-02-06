
import {React} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoPath from '../../imges/NoPath.png';
import './platform.scss';
const Platform = () => {
  return (
    <div  className='platform-content section-margin'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className='section-img'>
                   {/* <img src={NoPath} alt="bg" className='with-fiter'></img> */}
                </div>
            </Col>
            <Col lg={6}>
                <div className='right-side'>
                    <h2 className='section-title'>
                    Best Platform for the Technological Era
                    </h2>
                    <p className='sm-text'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. <br></br>Stet clita kasd gubergren, no sea  est Lorem ipsum dolor sit amet
                    </p>
                    <a className='more-link' href='#'>Learn About Our Success <ArrowRight/></a>
                </div>            
            </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default Platform;