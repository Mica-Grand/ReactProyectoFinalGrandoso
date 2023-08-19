import React from 'react'
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/img/logo.png';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
                <Container fluid>
                    <Navbar.Brand>
                        <NavLink to={"/"}>
                            <img
                                alt="Logo de Pop Glam"
                                src={logo}
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                            />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to={"/"} className="nav-link">Home</NavLink>
                            <NavDropdown title="Shop" id="navbarScrollingDropdown">
                                <NavLink to={`/category/${"makeup"}`} className="dropdown-item">
                                    Make up
                                </NavLink>
                                <NavDropdown.Divider />
                                <NavLink to={`/category/${"skincare"}`} className="dropdown-item">
                                    Skin care
                                </NavLink>
                                <NavDropdown.Divider />
                                <NavLink to={`/category/${"accesories"}`} className="dropdown-item">
                                    Accesories
                                </NavLink>
                                <NavDropdown.Divider />
                                <NavLink to={`/category/all`} className="dropdown-item">
                                    All
                                </NavLink>

                            </NavDropdown>
                            <NavLink to={"/contact"} className="nav-link">
                                Contact
                            </NavLink>
                            <NavLink to={"/about"} className="nav-link">About</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <NavLink to={"/cart"}>
                        <CartWidget />
                    </NavLink>

                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar