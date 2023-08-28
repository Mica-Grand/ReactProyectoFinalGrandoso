import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container className="margin margin-bottom">
                <h1>About us</h1>
                <Row>
                    <Col md={6}>
                        <div className="m-5">
                            <p className="lead">
                                Welcome to <strong>Pop Glam</strong> – where beauty meets attitude! 🌟
                                At <strong>Pop Glam</strong>, we're all about celebrating your unique style and embracing your true self. Our passion for makeup and skincare is matched only by our dedication to helping you shine, no matter who you are or where you come from.
                            </p>
                            <p>
                                Our mission is simple: to bring you the latest trends and the most effective skincare, all while promoting self-love and authenticity. We believe that beauty knows no boundaries, and every shade, every skin type, every individual is a part of our glamorous family.
                            </p>
                            <p className="font-weight-bold">
                                Join us on this exciting journey where we blend elegance with fun, sophistication with sass, and glam with a touch of rebelliousness. So, get ready to let your inner star shine and embrace the <strong>Pop Glam</strong> lifestyle. Discover your beauty, your way. ✨
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src="https://images.pexels.com/photos/7312328/pexels-photo-7312328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="girl wearing makeup" className="about-image img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
