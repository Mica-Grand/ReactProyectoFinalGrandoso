import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Facebook, Tiktok, Instagram } from 'react-bootstrap-icons';
import logoline from '../assets/img/logoline.png';

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-white py-4" bg="dark" data-bs-theme="dark" >
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} md={4}>
                        <div className="d-flex justify-content-center">
                            <Link to={"/"}>
                                <img
                                    alt="Logo de Pop Glam"
                                    src={logoline}
                                    width="100"
                                    height="100"
                                    className="d-inline-block align-top"
                                />
                            </Link>
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
                        © 2023. Pop Glam. All rights reserved.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="text-center">
                        <div className="d-flex justify-content-center">
                            <ul className="list-unstyled d-flex mb-0">
                                <li className="me-3">
                                    <a href="https://www.facebook.com" target="_blank">
                                        <Facebook className="social-icons" />
                                    </a>
                                </li>
                                <li className="me-3">
                                    <a href="https://www.tiktok.com" target="_blank">
                                        <Tiktok className="social-icons" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" target="_blank">
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
