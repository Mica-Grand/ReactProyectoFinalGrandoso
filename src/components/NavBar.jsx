import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import logo from '../img/logo.png';



const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container fluid>
                <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        Pop Glam</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#home" as="div">Home</Nav.Link>
                            <Nav.Link href="#blog" as="div">Blog</Nav.Link>
                            <NavDropdown title="Productos" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#maquillaje">Maquillaje</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#skin">
                                    Skin care
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#accesorios">
                                    Accesorios
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#ofertas" as="div">
                                Ofertas
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar