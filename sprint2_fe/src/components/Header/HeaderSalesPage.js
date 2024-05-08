import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./HeaderSalesPage.css";
import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import Search from "../../components/Products/Search/Search";
import * as service from "../../service/AccessoryService";
import {Link, redirect, useNavigate, NavLink} from "react-router-dom";
import {useSearchTermContext} from "../Products/Search/SearchTermContext";
import {toast} from "react-toastify";


export default function HeaderSalesPage() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    // const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState();
    const token = localStorage.getItem("token");


    const [username, setUsername] = useState(localStorage.getItem("username"));

    const { searchTerm, setSearchTerm } = useSearchTermContext();

    useEffect(() => {
        if (token) {
            setIsLogin(true);
        } else {

        }
    }, [token]);

    const handlerLogout = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        setIsLogin(false);
        toast.success("Logout success !!");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShow(false);
        navigate("/search");
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };


    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return(
        <>

                <Navbar expand="xxl" className="bg-black sticky-lg-top sticky-lg-top sticky-sm-top">
                    <Container>
                        <Navbar.Brand href="/"><img width="100%" height="50px" src="https://heliosjewels.vn/cdn/shop/files/logo_500x.png?v=1652960279" alt="logo"/></Navbar.Brand>
                        <Navbar.Toggle id="toggle-menu" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                            <Nav>
                                <NavLink to="/all-products" className="mx-2">all</NavLink>
                                <NavLink to="#link" className="mx-2">rings</NavLink>
                                <NavLink to="#link" className="mx-2">bracelets</NavLink>
                                <NavLink to="#link" className="mx-2">earrings</NavLink>
                                <NavLink to="#link" className="mx-2">necklaces</NavLink>
                                <NavLink to="/guide" className="mx-2">size guide</NavLink>
                                <NavLink to="#link" className="mx-2">about us</NavLink>
                                <Nav.Link className="icon-hover p-0 mx-2">
                                    {values.map((v, idx) => (
                                        <Button style={{backgroundColor: 'none'}} key={idx} className="icon-hover bg-black p-0 m-0 border-0" onClick={() => handleShow(v)}>
                                            <i style={{fontSize: "24px"}} className="bi bi-search"></i>
                                            {typeof v === 'string' && `below ${v.split('-')[0]}`}
                                        </Button>
                                    ))}
                                </Nav.Link>
                                 <NavLink to="/cart" className="icon-hover mx-2 d-flex justify-content-center align-items-center p-0"><i style={{fontSize: "24px"}} className="bi bi-cart-plus"></i></NavLink>
                                {isLogin ? (<>
                                    <NavDropdown className="p-0 mx-2" title={<i style={{fontSize: "24px"}} className="bi bi-person-circle"><span className="fs-6"> Hi, {username}</span></i>} id="login-out">
                                        <NavDropdown.Item style={{textAlign: 'start'}} className="nav-dropdown-item text-black fs-6"><i className="bi bi-person "></i> My information</NavDropdown.Item>
                                        <NavDropdown.Item style={{textAlign: 'start'}} className="nav-dropdown-item text-black fs-6"><i className="bi bi-bag-heart"></i> Payment History</NavDropdown.Item>
                                        {/*<NavDropdown.Item className="nav-dropdown-item"><i className="bi bi-box-arrow-in-right"></i> Log In</NavDropdown.Item>*/}
                                        <Link className="text-decoration-none text-black"  onClick={() => handlerLogout()} to="/login"> <NavDropdown.Item style={{textAlign: 'start'}} className="nav-dropdown-item text-black fs-6"><i className="bi bi-x-circle"></i> Log Out </NavDropdown.Item></Link>
                                    </NavDropdown>
                                </>):(
                                    <>
                                        <NavLink to="/login" className="d-flex justify-content-center align-items-center text-white ms-3" ><i style={{fontSize: "24px"}} className="bi bi-person-circle pe-1"></i>Login</NavLink>
                                    </>
                                )}

                            </Nav>
                        </Navbar.Collapse>



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
                            <Form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className="rounded-0"
                                    placeholder="Type to search..."
                                    style={{ width: '100%', height: '50px', border: 'none', borderBottom: 'solid 1px white', backgroundColor: 'transparent', color: 'white', fontSize: '24px', paddingLeft: '16px' }}
                                    value={searchTerm}
                                    onChange={handleChange}
                                />
                                <button onClick={handleSubmit} type="button" style={{ marginRight: '8px', height: '100%', color: 'white', fontSize: '32px' }}><i className="bi bi-arrow-right"></i></button>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}