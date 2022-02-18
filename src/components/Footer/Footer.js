import './Footer.css'
import { AiOutlineInstagram,AiOutlineTwitter,AiFillFacebook,AiFillCaretLeft } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Col, Container, Row } from 'react-bootstrap';
import { FaLinkedin,FaLine } from "react-icons/fa";
const Footer = (props) => { 
    return(
       <div>
           <div className="footer">
           <div className="container">
                <div className="row ccc">
                    <div className="col-sm-6 col-lg-2">
                        <div className="widget3">
                            <h5>
                                تماس با ما
                            </h5>
                            <ul>
                                <li>
                                   <h6>شهر زنجان</h6><p><GoLocation/>خیابان شهرداری ساختمان 7</p>
                                </li>
                                <li>
                                <h6>شهر تهران</h6><p><GoLocation/>خیابان شهرداری ساختمان 7</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="widget4">
                            <h5>
                                منابع مهم ما
                            </h5>
                            <ul>
                                <li>
                                    <a href="#">
                                        میدان فروش کالا
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        مستندات
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        مشتریان
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        فرصت های شغلی
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="widget4">
                            <h5>
                                لینک های میانبر
                            </h5>
                            <ul>
                                <li>
                                    <a href="#">
                                        درباره ما
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        خدمات ما
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        دریافت نقل قول
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        محصولات
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form className="col-md-6 col-lg-4 mr-5">
                        <div className="widget1">
                        <h5>
                                خبرنامه
                            </h5>
                            <p>
                                ثبت نام برای دریافت پیشنهادات ویژه ،آموزش ، اخبار و بروزرسانی ها
                            </p>
                            <form action="/" id='form1'>
                            <input type="email" className='subscribe__input' placeholder="ایمیل شما" required/>
                            <button type="submit" form="form1" value="Submit" className='send-btn'><AiFillCaretLeft/></button></form>
                            <div className="socialLinks">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <AiOutlineInstagram/>
                                        </a>
                                        
                                    </li>
                                    <li>
                                        <a href="#">
                                            <AiOutlineTwitter/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <AiFillFacebook/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                             <FaLine/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                             <FaLinkedin/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className="copyRightArea">
                <Container>
                    <Row>
                        <Col md={11}>کلیه حقوق متعلق به ایلتس ایز است.طراحی توسط آرنیکاوب |1398</Col>
                        <Col md={1}>IELTSEASE</Col>
                    </Row>
                </Container>
            </div>
            </div>
       </div>
        
    )
}
export default Footer;
