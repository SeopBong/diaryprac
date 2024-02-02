import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../componant/NavPart.css';

const NavPart = () =>{
    return (
      <div className='nav-container'>
 <Navbar expand="lg" style={{ backgroundColor: 'rgb(234,234,234)' }}>
      <Container >
        <Navbar.Brand href="#home">Pet Doc</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">팻미팅</Nav.Link>
            <Nav.Link href="#link">산책로</Nav.Link>
            <Nav.Link href="#link">동물병원찾기</Nav.Link>
            <NavDropdown title="중고장터" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">반려동물 용품 및 간식</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">공구합니다</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">추천상품</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                신고게시글
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    
    )
}
export default NavPart;