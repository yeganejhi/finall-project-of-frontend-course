import { Container,Button } from "react-bootstrap";
import './HeaderTitle.css'
const HeaderTitle = (props) => {
    return(
        <div>
             <Container className='title'><strong><h1 className='mb-0'>ما مردم را <br/>با یکدیگر <sapn className='apartSpan'>متحد می کنیم</sapn></h1></strong>
        <p>مفهوم یک شرکت مشاوره مدیریت در نیویورک است که مشخض <br/>ساخت مدل سازی اطلاعات است</p>
        <Button variant="light" className='btn'>شروع کنید</Button> </Container>
        </div>
    )
 }
 export default HeaderTitle
