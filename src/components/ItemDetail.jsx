import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product, id }) => {

    const [quantity, setQuantity] = useState(1);
    const [showCompletePurchase, setShowCompletePurchase] = useState(false);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    return (
        <Container className="margin margin-bottom">
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={product.picture} alt={product.name} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    {!showCompletePurchase ? (
                        <ItemCount setShowCompletePurchase={setShowCompletePurchase} product={product} quantity={quantity} handleIncrement={handleIncrement} handleDecrement={handleDecrement} id={product.id} />
                    ) : (
                        <div>
                            <div className="added-message">
                                <p><strong>{quantity} x {product.name}</strong> succesfully added to your cart!</p>
                            </div>
                            <div>
                            <Link to="/category/all">
                                <Button className="m-2" variant="secondary">Keep shopping</Button>
                            </Link>
                            <Link to="/cart">
                                <Button className="m-2" variant="primary">Go to cart</Button>
                            </Link>
                            </div>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ItemDetail;
