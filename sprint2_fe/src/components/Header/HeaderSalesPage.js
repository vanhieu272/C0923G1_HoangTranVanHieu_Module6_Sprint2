import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./HeaderSalesPage.css";


export default function HeaderSalesPage() {
    return(
        <>
            <Navbar expand="lg" className="bg-black fixed-top">
                <Container >
                    <Navbar.Brand href="#home"><img width="100%" height="50px" src="https://heliosjewels.vn/cdn/shop/files/logo_500x.png?v=1652960279" alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle id="toggle-menu" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav>
                            <Nav.Link className="mx-1" href="#home">Tất cả</Nav.Link>
                            <Nav.Link href="#link">Nhẫn</Nav.Link>
                            <Nav.Link href="#link">Vòng tay</Nav.Link>
                            <Nav.Link href="#link">Khuyên tai</Nav.Link>
                            <Nav.Link href="#link">Dây chuyền</Nav.Link>
                            <Nav.Link href="#link">Thông số kích cỡ</Nav.Link>
                            <Nav.Link href="#link">Liên hệ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Nav.Link className="me-3"><i style={{fontSize: "25px"}} className="bi bi-cart-plus text-light"></i></Nav.Link>
                    </Nav>
                    <NavDropdown title={<i style={{fontSize: "25px"}} className="bi bi-person-circle"></i>} id="login-out">
                        <NavDropdown.Item className="nav-dropdown-item"><i className="bi bi-box-arrow-in-right"></i> Log In</NavDropdown.Item>
                        <NavDropdown.Item className="nav-dropdown-item"><i className="bi bi-x-circle"></i> Log Out</NavDropdown.Item>
                    </NavDropdown>

                </Container>
            </Navbar>
        </>
    )
}