import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ id, name, description, price, picture }) => {
    return (
        <Container className="margin">
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={picture} alt={name} className="custom-img"/>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>Price: ${price}</Card.Text>
                            <div className="d-flex justify-content-between">
                                <Link to={`/item/${id}`}>
                                    <Button className="custom-btn custom-btn-details">
                                        Details
                                    </Button>
                                </Link>
                                <Button className="custom-btn custom-btn-cart">
                                    Add to Cart
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Item;
