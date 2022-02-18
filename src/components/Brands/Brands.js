import './Brands.css';
import {Row, Col,Card,Container} from 'react-bootstrap';
const Brands = (props) => {
    return(
        <div>
            <Container className='mt-5 mb-5'>
              <Row>
                  <Col className='mb-2 title-brand'>
                  <h1>همکاران ما</h1>
              <p>بهترین کادر اموزشی برای فرزندان شما</p>
              <hr className='yellowline'/>
                  
                  </Col>
              
              </Row>
              <Row>
                        <Col>
                        <Card className='CardBrrand'>
  <Card.Img variant="top" src={'assets/image/brand-1.png'} className='cardBrand-img' />
                        </Card>
                        </Col>
                        <Col>
                        <Card className='CardBrrand'>
  <Card.Img variant="top" src={'assets/image/brand-6.ico'} className='cardBrand-img' />
                        </Card>
                        </Col>
                        <Col>
                        <Card className='CardBrrand'>
  <Card.Img variant="top" src={'assets/image/brand-3.png'} className='cardBrand-img' />
                        </Card>
                        </Col>
                        <Col>
                        <Card className='CardBrrand'>
  <Card.Img variant="top" src={'assets/image/brand-1.png'} className='cardBrand-img' />
                        </Card>
                        </Col>
                        <Col>
                        <Card className='CardBrrand'>
  <Card.Img variant="top" src={'assets/image/brand-5.png'} className='cardBrand-img'/>
                        </Card>
                        </Col>
                        <Col>
                        <Card className='CardBrrand'>
  <Card.Img variant="top" src={'assets/image/brand-6.ico'} className='cardBrand-img' />
                        </Card>
                        </Col>
                        <Col>
                        <Card className='CardBrrand'>
  <Card.Img variant="top" src={'assets/image/brand-3.png'} className='cardBrand-img' />
                        </Card>
                        </Col>

                </Row>
            </Container>
            
        </div>
    )
}
export default Brands;
