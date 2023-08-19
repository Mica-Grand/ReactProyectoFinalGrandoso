import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, picture }) => {
    return (
        <Col xs={12} sm={6} md={4} className="margin">
            <Card className="h-100">
                <Card.Img variant="top" src={picture} alt={name} className="custom-img" />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Price: ${price}</Card.Text>
                    </div>
                    <Link to={`/item/${id}`}>
                        <Button className="custom-btn custom-btn-details">
                            Details
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;
