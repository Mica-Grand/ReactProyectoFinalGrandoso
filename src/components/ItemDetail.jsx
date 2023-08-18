import React, {  useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = ({ products }) => {

    const { id } = useParams();

    const filteredProducts = products.filter((product) => product.id == id)
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
        <div>
            {filteredProducts.map((p) => {
                return (
                    <div key={p.id}>
                        <Container className="margin">
                            <Card style={{ width: '25rem' }}>
                                <Card.Img variant="top" src={p.picture} alt={p.name} />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Text>{p.description}</Card.Text>
                                    <Card.Text>Price: ${p.price}</Card.Text>
                                    {!showCompletePurchase ? (
                                        <ItemCount  setShowCompletePurchase={setShowCompletePurchase} p= {p} quantity={quantity} handleIncrement={handleIncrement} handleDecrement={handleDecrement}  />
                                    ) : (
                                        <Link to="/cart">
                                            <Button variant="primary">Complete Purchase</Button>
                                        </Link>
                                    )}
                                </Card.Body>
                            </Card>
                        </Container>
                    </div>
                )
            })}
        </div>
    );
}

export default ItemDetail;
