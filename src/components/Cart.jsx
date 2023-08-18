import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Container, ListGroup, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const cartTotal = cart.reduce((total, p) => total + p.price * p.quantity, 0);
    const handleEmpty = () => {
        setCart([]);
    }

    return (
        <div>

            <Container>
                <h1 className="margin">Cart</h1>
                <Container>
                    <ListGroup className="mt-5">
                        {cart.map((p) => (
                            <ListGroup.Item key={p.id}>
                                <Row>
                                    <Col xs={3} className="align-self-start">
                                        <img src={p.picture}
                                            alt={p.name}
                                            className="align-self-start mr-3"
                                            style={{ maxWidth: '100px' }}
                                        />
                                    </Col>
                                    <Col xs={9}>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h2>{p.name}</h2>
                                                <p>Unit price: ${p.price}</p>
                                            </div>
                                            <div className="text-end">
                                                <p>Qty: {p.quantity}</p>
                                                <p>Total price: ${p.price * p.quantity}</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                        {cart.length > 0 ?

                            <ListGroup.Item>
                                <Row>
                                    <div className="text-end">
                                        <h2>Total: ${cartTotal}</h2>
                                        <Button onClick={handleEmpty}>Empty Cart</Button>
                                    </div>
                                </Row>
                            </ListGroup.Item> :
                            <div>
                                <h2>Your cart is empty</h2>
                                <Link to={`/category/${"makeup"}`}>
                                    <Button>Start shopping!</Button>
                                </Link>
                            </div>
                        }
                    </ListGroup>
                </Container>
            </Container>

        </div>
    )
}

export default Cart