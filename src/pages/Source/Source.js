import {Navbar,Container,Button, Row, Col,Card,} from 'react-bootstrap';
import { FcAlarmClock } from "react-icons/fc";
import './Source.css';
import {SectionCards,SecondpageNav,Brands} from '../../components';
import {HeaderTitle} from '../../components';
import {AiFillCaretLeft } from "react-icons/ai";
const Source = (props) => {
    return(
        <div>
          <div className='secondbg'>
            <SecondpageNav/>
            <HeaderTitle/>
        </div>

         
          <div className="card-group">
  <div className="card rightcard">
    
    <div className="card-body">
      <h5 className="card-title cardtext pt-3 pb-3"> این همان عنوان مطلب است</h5>
      <p className="card-text cardtext"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
      <Button className='btn-cards mt-3'>شروع کنید</Button> 
     </p>
     
    </div>
  </div>


  <div className="card">
    <img  src={'assets/image/picofcard.png'} className="card-img-top card-img-o" alt="..."/>
    
  </div>
</div>
         
          
        <div className='thirdbox'>
            <Container>
              <Row className='pt-5'>
                <Col>
                <h1>چرا ایلتس ایز؟</h1>
            <p>چراباید ایلتس ایز را انتخاب کنیم؟</p>
            <hr className='yellowline'/>
                </Col>
              </Row>
                <Row className='row-1'>
                    <Col><div className="card basicCards mb-3">
   <div className="row g-0">
    <div className="col-md-4">
      <img src={'assets/image/brand-1.png'} className="img-fluid rounded-start db" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body card-bodySec1 ">
        <h6 className="card-title card-titlesec1">این همان عنوان مطلب است</h6>
        <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <p className="card-text"><small className="text-muted"><a href="#">بیشنر بدانید<AiFillCaretLeft/></a></small></p>
      </div>
    </div>
  </div>
</div></Col>
                    <Col><div className="card basicCards mb-3">
   <div className="row g-0">
    <div className="col-md-4">
      <img src={'assets/image/brand-5.png'} className="img-fluid rounded-start db" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body card-bodySec1">
      <h6 className="card-title card-titlesec1">این همان عنوان مطلب است</h6>
      <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <p className="card-text"><small className="text-muted"><a href="#">بیشتر بدانید <AiFillCaretLeft/></a></small></p>
      </div>
    </div>
  </div>
</div></Col>
                    <Col><div className="card basicCards mb-3">
   <div className="row g-0">
    <div className="col-md-4">
      <img src={'assets/image/brand-6.ico'} className="img-fluid rounded-start db" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body card-bodySec1">
      <h6 className="card-title card-titlesec1">این همان عنوان مطلب است</h6>
      <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <p className="card-text"><small className="text-muted"><a href="#">بیشتر بدانید <AiFillCaretLeft/></a></small></p>
      </div>
    </div>
  </div>
</div></Col>
                </Row>
                <Row className='row-1'>
                    <Col><div className="card basicCards mb-3">
   <div className="row g-0">
    <div className="col-md-4">
      <img src={'assets/image/brand-6.ico'} className="img-fluid rounded-start db" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body card-bodySec1">
      <h6 className="card-title card-titlesec1">این همان عنوان مطلب است</h6>
      <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <p className="card-text"><small className="text-muted"><a href="#">بیشتر بدانید <AiFillCaretLeft/></a></small></p>
      </div>
    </div>
  </div>
</div></Col>
            <Col><div className="card basicCards mb-3">
   <div className="row g-0">
    <div className="col-md-4">
      <img src={'assets/image/brand-5.png'} className="img-fluid rounded-start db" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body card-bodySec1">
      <h6 className="card-title card-titlesec1">این همان عنوان مطلب است</h6>
      <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <p className="card-text"><small className="text-muted"><a href="#">بیشتر بدانید <AiFillCaretLeft/></a></small></p>
      </div>
    </div>
  </div>
</div></Col>
                    <Col><div className="card basicCards mb-3">
   <div className="row g-0">
    <div className="col-md-4">
      <img src={'assets/image/brand-1.png'} className="img-fluid rounded-start db" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body card-bodySec1">
      <h6 className="card-title card-titlesec1">این همان عنوان مطلب است</h6>
      <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <p className="card-text"><small className="text-muted"><a href="#">بیشتر بدانید <AiFillCaretLeft/></a></small></p>
      </div>
    </div>
  </div>
</div></Col>
                </Row>
            </Container>
        </div>
        <div className='li pb-5 pt-5'><Container className='li'>
          <Row>
            <Col><h4>اخرین دوره های ایلتس ایز</h4>
                <h6>چرا باید ایتلس ایز را انتخاب کنیم؟</h6>
                <hr className='yellowline'/></Col>
          </Row>
                
      </Container></div>
      
        <SectionCards/>


        <div className='mainpart pt-5'>
            <Container>
              <Row className='title-cards'>
              <Col>
              <h1>چرا ایلتس ایز؟</h1>
              <p>چراباید ایلتس ایز را انتخاب کنیم؟</p>
              <hr className='yellowline'/>
              </Col>
             
              </Row>
                <Row>
                    <Col><Card style={{ width: '16rem' }} className='Graybgc auto pb-4' >
  <Card.Img variant="top" src={'assets/image/education.ico'}/>
  <Card.Body>
  <Card.Title className='progressnumber'>1</Card.Title>
    <Card.Title className='CardSecTitle'>حرفه ای شو</Card.Title>
    <Card.Text>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
    </Card.Text>
  </Card.Body>
</Card></Col>
                    <Col><Card style={{ width: '16rem' }} className='Graybgc auto' >
  <Card.Img variant="top" src={'assets/image/bulb.ico'}/>
  <Card.Body>
  <Card.Title className='progressnumber'>2</Card.Title>
    <Card.Title className='CardSecTitle'>مهارت خود را بالا ببر</Card.Title>
    <Card.Text>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
    </Card.Text>
  </Card.Body>
</Card></Col>
                    <Col><Card style={{ width: '16rem' }} className='Graybgc auto' >
  <Card.Img variant="top" src={'assets/image/headphone.png'}/>
  <Card.Body>
  <Card.Title className='progressnumber'>3</Card.Title>
    <Card.Title className='CardSecTitle'>صرفه جویی در زمان</Card.Title>
    <Card.Text>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
    </Card.Text>
  </Card.Body>
</Card></Col>
                    <Col><Card style={{ width: '16rem' }} className='Graybgc auto'  >
  <Card.Img variant="top" src={'assets/image/man-with-tablet.png'}/>
  <Card.Body>
  <Card.Title className='progressnumber'>4</Card.Title>
    <Card.Title className='CardSecTitle mt-0'>خود را بیازما</Card.Title>
    <Card.Text>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
    </Card.Text>
  </Card.Body>
</Card></Col>
                </Row>
            </Container>
            </div>


            <Brands/>

            <div className='mt-5 pb-4 cardsgroup'>
              <Container>
                <Row>
                  <Col md={10} className='mt-5 title-cards mb-5'><h2>
                    چرا ایلتس ایز؟
                  </h2>
                  <p>؟چرا باید ایلتس ایز را انتخاب کنیم </p>
                  <hr className='yellowline'/>
                 </Col>
                 <Col md={2} className='auto btnDetails-Responsive mt-5'>
                 <Button variant='light' className='mt-5 btnDetails'>
                 نمایش موارد بیشتر
                 </Button>
                 </Col>
                  
                </Row>
                <Row>
                <Col><Card style={{ width: '16rem' }} className='auto'>
  <Card.Img variant="top" src={'assets/image/long.jpg'} />
  <Card.Body>
  <Card.Text>
    اکادمی ها
    </Card.Text>
    <Card.Title> 
       زن و شوهر از دانشجویان دانشگاه هپی فارغ التحصیل شدند
       <br/><br/><small className="text-muted"><FcAlarmClock/> 23 مرداد 1391</small>
    
        </Card.Title>
  </Card.Body>
  
      
</Card></Col>
                    <Col><Card style={{ width: '16rem' }} className='auto'>
  <Card.Img variant="top" src={'assets/image/long.jpg'} />
  <Card.Body>
  <Card.Text>
     نکات
    </Card.Text>
    <Card.Title> نکات مفید برای ایجاد یک بحث با کیفیت
      <br/><br/>  <small className="text-muted"><FcAlarmClock/> 23 مرداد 1391</small>
    </Card.Title>
  </Card.Body>
 
     
   
</Card></Col>
                    <Col><Card style={{ width: '16rem' }} className='auto'>
  <Card.Img variant="top" src={'assets/image/long.jpg'} />
  <Card.Body>
  <Card.Text>
     طراحی
    </Card.Text>
    <Card.Title>بازتاب فصل فجر
      <br/><br/> <small className="text-muted"><FcAlarmClock/> 3 خرداد 1395</small>
    </Card.Title>
  </Card.Body>

     
  
</Card></Col>
                    <Col><Card style={{ width: '16rem' }} className='auto'>
  <Card.Img variant="top" src={'assets/image/long.jpg'} />
  <Card.Body>
  <Card.Text>
      طراحی
    </Card.Text>
    <Card.Title>شگفت انگیز است که دوستی هایی را که توسعه می یابند میبینید
      <br/><br/> <small className="text-muted"><FcAlarmClock/> 30 بهمن 1397</small>
    </Card.Title>
  </Card.Body>
  
     
    
</Card></Col>
                </Row>
              </Container>
            </div>
        
            
        </div>
    )
 }
 export default Source;