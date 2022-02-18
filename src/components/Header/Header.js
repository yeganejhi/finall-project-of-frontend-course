import {Navbar,Container,Nav} from 'react-bootstrap';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {Home,Source,SignUp} from '../../pages';
import { AiFillPhone,AiOutlineInstagram,AiOutlineTwitter,AiFillFacebook } from "react-icons/ai";
import './Header.css'
const Header = (props) => {
    return (
        <BrowserRouter>
        <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><AiFillPhone/> تلفن : 09921724403  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='me-auto'>
      <Nav.Link href="/">میز راهنما</Nav.Link>
      <Nav.Link href="/Source">منابع ما</Nav.Link>
      <Nav.Link href="/SignUP">ثبت نام</Nav.Link>
    </Nav>
    
    <Nav>
      <Nav.Link href="#deets" className='icons'><AiOutlineInstagram/></Nav.Link>
      <Nav.Link href="#deets" className='icons'><AiOutlineTwitter/></Nav.Link>
      <Nav.Link href="#deets" className='icons'><AiFillFacebook/></Nav.Link>
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Source' element={<Source/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        </Routes>
        </BrowserRouter>
    )
 }
 export default Header;