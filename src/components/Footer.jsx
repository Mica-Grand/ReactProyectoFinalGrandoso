import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Facebook, Tiktok, Instagram } from 'react-bootstrap-icons';
import logo from '../assets/img/logo.png';

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-white py-4" bg="dark" data-bs-theme="dark">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12}  md={4}>
                        <div className="d-flex justify-content-center">
                            <img
                                alt="Logo de Pop Glam"
                                src={logo}
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                            />
                            <Nav className="flex-column">
                                <NavLink to={"/"} className="nav-link text-white">Home</NavLink>
                                <NavLink to={"/contact"} className="nav-link text-white">
                                    Contact
                                </NavLink>
                                <NavLink to={"/about"} className="nav-link text-white">About</NavLink>
                            </Nav>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="text-center">
                        <p className="text-center mt-4">
                        &copy; {new Date().getFullYear()} Pop Glam. All rights reserved.
                        </p> 
                    </Col>
                    <Col xs={12}  md={4} className="text-center">
                            <div className="d-flex justify-content-center">
                                <ul className="list-unstyled d-flex mb-0">
                                    <li className="me-3">
                                        <a href="https://www.facebook.com">
                                            <Facebook className="social-icons" />
                                        </a>
                                    </li>
                                    <li className="me-3">
                                        <a href="https://www.tiktok.com">
                                            <Tiktok className="social-icons" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com">
                                            <Instagram className="social-icons" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
