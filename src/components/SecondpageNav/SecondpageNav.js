import { NavDropdown,Container,Navbar,Nav,Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import './SecondpageNav.css';
const act = () => {
  {
    document.getElementById('demo').style.display='none';
    document.getElementById('demo2').style='display:inline !important';

  }
}

const SecondpageNav = (props) => {
    return(
        <div>
            <Container>
                <Row>
                <Navbar expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto p-0">
        <NavDropdown title="صفحه اصلی " id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="صفحات " id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="نمونه کار ما " id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#home">فروشگاه</Nav.Link>
        <Nav.Link href="#link">وبلاگ</Nav.Link>
        <Nav.Link href="#home">پوشاک</Nav.Link>
        <Nav.Link href="#link">وبلاگ</Nav.Link>
        <Nav.Link href="#link"
        onClick={act}
        id='demo'
        ><AiOutlineSearch/></Nav.Link>
        <Nav.Link href="#link" className="searchbox" id='demo2'>
        <form action="/">
         <input type="text" placeholder="Search.." name="search" className="search-input"/>
         <button type="submit" className="search-btn">search</button>
         </form>
        </Nav.Link>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
                </Row>
            </Container>
          
        </div>
    )
}
export default SecondpageNav;