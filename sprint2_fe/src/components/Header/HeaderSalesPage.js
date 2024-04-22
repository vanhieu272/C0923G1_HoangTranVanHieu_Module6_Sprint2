import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./HeaderSalesPage.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

export default function HeaderSalesPage() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

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
                        <Nav.Link className="icon-hover">
                            {values.map((v, idx) => (
                                <Button style={{backgroundColor: 'none'}} key={idx} className="icon-hover bg-black p-0 m-0 border-0" onClick={() => handleShow(v)}>
                                    <i style={{fontSize: "24px"}} className="bi bi-search"></i>
                                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                                </Button>
                            ))}
                        </Nav.Link>
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

            <Modal  show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body style={{marginTop: "8%"}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <h2 className="ms-2">Search</h2>
                        </div>
                    </div>
                    <div className="mt-2 row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 input-wrapper">
                            <Form>
                                <input type="text" className="rounded-0" placeholder="Type to search..." style={{width: '100%', height: '50px', border: 'none', borderBottom: 'solid 1px white', backgroundColor: 'transparent', color: 'white', fontSize:'24px', paddingLeft: '16px' }} />
                                <button type="submit" style={{marginRight: '8px', height: '100%', color: 'white', fontSize: '32px'}}><i className="bi bi-arrow-right"></i></button>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}