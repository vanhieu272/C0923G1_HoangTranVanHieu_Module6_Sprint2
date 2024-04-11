import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./HeaderSalesPage.css";


export default function HeaderSalesPage() {
    return(
        <>
            <Navbar expand="lg" className="bg-black sticky-top">
                <Container>
                    <Navbar.Brand href="/homepage"><img width="100%" height="50px" src="https://heliosjewels.vn/cdn/shop/files/logo_500x.png?v=1652960279" alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle id="toggle-menu" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav>
                            <Nav.Link href="/all-products" className="mx-1">all</Nav.Link>
                            <Nav.Link href="#link">rings</Nav.Link>
                            <Nav.Link href="#link">bracelets</Nav.Link>
                            <Nav.Link href="#link">earrings</Nav.Link>
                            <Nav.Link href="#link">necklaces</Nav.Link>
                            <Nav.Link href="/guide">size guide</Nav.Link>
                            <Nav.Link href="#link">about us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="me-3">
                        <Nav.Link className="icon-hover"><i style={{fontSize: "24px"}} className="bi bi-search"></i></Nav.Link>
                    </Nav>
                    <Nav className="me-3">
                        <Nav.Link className="icon-hover"><i style={{fontSize: "24px"}} className="bi bi-cart-plus"></i></Nav.Link>
                    </Nav>
                    <NavDropdown title={<i style={{fontSize: "24px"}} className="bi bi-person-circle"></i>} id="login-out">
                        <NavDropdown.Item className="nav-dropdown-item"><i className="bi bi-person"></i> My information</NavDropdown.Item>
                        <NavDropdown.Item className="nav-dropdown-item"><i className="bi bi-bag-heart"></i> Order History</NavDropdown.Item>
                        <NavDropdown.Item className="nav-dropdown-item"><i className="bi bi-box-arrow-in-right"></i> Log In</NavDropdown.Item>
                        <NavDropdown.Item className="nav-dropdown-item"><i className="bi bi-x-circle"></i> Log Out</NavDropdown.Item>
                    </NavDropdown>

                </Container>
            </Navbar>
        </>
    )
}