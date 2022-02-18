import {Card,CardGroup,Image,Button, Container} from 'react-bootstrap';
import './SectionCards.css';
import { Rate } from 'antd';
import './ddd';
import { AiFillClockCircle } from "react-icons/ai";



const SectionCards = (props) => { 
    return(
        <div classname='ab'>
            
          <div className='cardgp'>
          <CardGroup className='container pb-5 card-group1'>   
            <Card className='card-Section'>
            <Card.Img variant="top" src={'assets/image/eng3.jpg'} />
            <Card.Body>
              <Card.Title>مکالمه انگلیسی سطح مقدماتی</Card.Title>
              <Card.Text className='Cardtextt'>
              <Image src={'assets/image/eng3.jpg'} className='profile mt-5'/><p className='name-profile'><strong>علی کیانپور</strong></p><p className='price'><strong>۱۸.۰۰۰</strong></p><span className='element'>|</span>
              </Card.Text>
            </Card.Body>
            <hr className='mb-0 hr-footer'/>
            <Card.Footer className='card-footer'>
              <small className="text-mutedd"><span id="countdown1"></span><AiFillClockCircle className='clock'/><Rate disabled defaultValue={2} className='stars' /></small><Button className='costbtn'>۱۰.۸۰۰</Button>
            </Card.Footer>
          </Card>
          <Card className='card-Section'>
            <Card.Img variant="top" src={'assets/image/eng2.png'} />
            <Card.Body>
              <Card.Title>اموزش زبان</Card.Title>
              <Card.Text className='Cardtextt'>
                <Image src={'assets/image/eng3.jpg'} className='profile mt-5'/><p className='name-profile'><strong>امید</strong></p><p className='price'><strong>۳۹.۰۰۰</strong></p><span className='element'>|</span>
                
              </Card.Text>
            </Card.Body>
            <hr className='mb-0 hr-footer'/>
            <Card.Footer className='card-footer'>
            <small className="text-mutedd"><span id="countdown2"></span><AiFillClockCircle className='clock'/><Rate disabled defaultValue={3} className='stars' /></small><Button className='costbtn mb-2'>۲۰.۲۰۰</Button>
            </Card.Footer>
          </Card>
          <Card className='card-Section'>
            <Card.Img variant="top" src={'assets/image/eng3.jpg'} />
            <Card.Body>
              <Card.Title>ایلتس اکادمیک</Card.Title>
              <Card.Text className='Cardtextt'>
              <Image src={'assets/image/eng3.jpg'} className='profile mt-5'/><br/><p className='name-profile'><strong>سید محمد امین ساجدی</strong></p><p className='price'><strong>۳۵.۰۰۰</strong></p><span className='element'>|</span>
              </Card.Text>
            </Card.Body>
            <hr className='mb-0 hr-footer'/>
            <Card.Footer className='card-footer'>
            <small className="text-mutedd"><span id="countdown3"></span><AiFillClockCircle className='clock'/><Rate disabled defaultValue={4.5} className='stars' /></small><Button className='costbtn mb-2'>۲۱.۰۰۰</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
          </div>
            
            
        </div>
    )
}
export default SectionCards;
