import {React} from 'react';
import Study from '../../imges/Study.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col xs={6} lg={3}>
            <div className='footer-datd'>
              <div className='footer-logo'>
              <img src={Study} alt="Study logo"/>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudi</p>
            </div>
          </Col>
          <Col xs={6} lg={3}>
          <div className='noservice'>
            <h6 className='xs-title'>Nos services</h6>
            <p>Avis clients Mentions légales Plan du site Blog d’Idéematic Le dictionnaire du digital ‹ Notre boutique /›</p>
          </div>
          </Col>
          <Col xs={12} lg={6}>
          <div className='sign-up'>
            <Form className='subscribe'>
            <h6 className='xs-title'>Sign up for Special Offers!</h6>

            <Form.Group controlId="formBasicEmail" className='subscribe-group'>
              <Form.Control type="email" placeholder="email" />
              <Button className='rounded-btn'>Subscribe</Button>
            </Form.Group>

            </Form> 
          </div>
          </Col>
        </Row>
       
      </Container>
    </div>
  );
}

export default Footer;