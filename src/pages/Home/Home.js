
import { Container, Row , Col, Image, Card, Button,ListGroup, Badge,Carousel} from 'react-bootstrap';
import {MainCards,SectionCards,Brands} from '../../components';
import './Home.css'

  
const Home = (props) => { 
    return(
        <div>
          <div className='my-carousel'>
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={'assets/image/headerp3.jpg'}
      alt="First slide"
    />
    <Carousel.Caption className='cap'>
      <Container>
      <h3>چرا باید به مطالعه زبان بپردازیم؟</h3>
      <p>دسته بندی : مطالب ایلتس / 28 آذر 1398</p>
      </Container>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={'assets/image/headerp.jpg'}
      alt="Second slide"
    />
    <Carousel.Caption className='cap'>
      <h3>منابع مهم برای آزمون ایلتس</h3>
      <p>دسته بندی : مطالب ایلتس / 28 آذر 1398</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'assets/image/headerp2 .png'}
      alt="Third slide"
    />
    <Carousel.Caption className='cap'>
      <h3>افزایش نمره ایتلس</h3>
      <p>دسته بندی : مطالب ایلتس / 28 آذر 1398</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    
    <Container className='mt-4'>
   <Row>
    <Col md="8" className='mb-5'>
    <Col className='main-text'>
    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
    <Image src={'assets/image/IELTS-4.png'} alt="" fluid className='mx-auto'/>
    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
    </Col>

    
     <Badge bg="success" className='badge mt-3'>مطالب مرتبط </Badge>
  
     <Col>
      <MainCards/>
     </Col>
    </Col>


    <Col md="4" className='FirstSideCard'>
      <Col className='mb-3'><Image src={'assets/image/sideimg.png'} alt="" fluid className='mx-auto'/></Col>
      <Col>
      <Card className='SecondSideCard'>
      <Card.Body>
       <Card.Title className='pb-3'>این همان عنوان مطلب است</Card.Title>
      <Card.Text>
      این یک متن ازمایشی برای جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن ازمایشی
      برای جانمایی متون است و هیچ کاربرد دیگری ندارد . این یک متن ازمایشی برای جانمایی متون است و هیچ 
      کاربرد دیگری ندارد
      </Card.Text>
      <Button variant="light" className='more-btn'>بیشتر بدانید</Button>
      </Card.Body>
     </Card>
      </Col>
      <Col className='mt-3'>
      <ListGroup>
        <h3 className='pb-2 pt-3 pr-5'>یک فهرست</h3>
          <ListGroup.Item>این یک متن ازمایشی برای تست جا نمایی متون است</ListGroup.Item>
          <hr className='hrItem'/>
          <ListGroup.Item>این یک متن ازمایشی برای تست جا نمایی متون است</ListGroup.Item>
          <hr className='hrItem'/>
          <ListGroup.Item>این یک متن ازمایشی برای تست جا نمایی متون است</ListGroup.Item>
          <hr className='hrItem'/>
          <ListGroup.Item>این یک متن ازمایشی برای تست جا نمایی متون است</ListGroup.Item>
          <hr className='hrItem'/>
          <ListGroup.Item>این یک متن ازمایشی برای تست جا نمایی متون است</ListGroup.Item>
          <hr className='hrItem'/>
          <ListGroup.Item>این یک متن ازمایشی برای تست جا نمایی متون است</ListGroup.Item>
          <hr className='hrItem'/>
          <ListGroup.Item>این یک متن ازمایشی برای تست جا نمایی متون است</ListGroup.Item>
          <hr className='hrItem'/>
          <ListGroup.Item className='pb-4'>این یک متن ازمایشی برای تست جا نمایی متون است</ListGroup.Item>
      </ListGroup>
      </Col>
    </Col>
  </Row>
</Container> 
      <div className='li pb-5 pt-5'><Container className='li'>
      <h4>اخرین دوره های ایلتس ایز</h4>
                <h6>چرا باید ایتلس ایز را انتخاب کنیم؟</h6>
                <hr className='yellowline'/>
      </Container></div>
      
    <SectionCards/>
    <Brands/>

    
        </div>
    )
}
export default Home;