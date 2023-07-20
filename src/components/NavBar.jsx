import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import logo from '../assets/img/logo.png';



const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
                <Container fluid>
                <Navbar.Brand href="#home">
                        <img
                            alt="Logo de Pop Glam"
                            src={logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                        />{' '}
                        </Navbar.Brand>
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